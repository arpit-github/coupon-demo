import React, { useState, useEffect } from 'react';
import { Carousel, Popover, Col, Row } from 'antd';
import classNames from 'classnames';
import Axios from 'axios';
import PropTypes from 'prop-types';

import AppHeader from '../app-header';
import BannerLogo from '../../../../img/banner.jpg';

import style from './home-page.scss';

function HomePage({ history }) {
	const [menuArr, setMenuArr] = useState([]);

	useEffect(() => {
		let didCancel = false;
		Axios.get('https://api.gyftr.net/smartbuyapi/hdfc/api/v1/home/categories')
			.then(r => {
				if (didCancel) {
					return;
				}
				if (r.data && r.data.code === 200) {
					let d = [];
					if (r.data.data) {
						r.data.data.map(el => {
							d.push({
								...el,
								brands_slug: el.brands_slug ? el.brands_slug.split(',') : [],
								brands_name: el.brands_name ? el.brands_name.split(',') : []
							});
						});
					}
					setMenuArr(d);
				}
			})
			.catch(error => {
				console.log(error);
			});
		return () => {
			didCancel = true;
		};
	}, []);

	return (
		<>
			<AppHeader />
			<div className='seperator' />

			{
				menuArr && menuArr.length > 0 &&
				<div className={classNames(style['menus-div'], 'container')}>
					{
						menuArr.map((el, i) => {
							if ((el.brands_name && el.brands_name.length > 0)) {
								return (
									<Popover
										key={i}
										placement='bottom'
										overlayClassName={style['popover-tooltip']}
										content={<GetDropDownMenu element={el} history={history} />}
										trigger='hover'
									>
										<div className={style['menu-item']} onClick={() => onMenuClick(el)}>
											<img src={el['icon_url']} className={style['menu-icon']} />
											<div>{el.name}</div>
										</div>
									</Popover>
								);
							} else {
								return (
									<div className={style['menu-item']} onClick={() => onMenuClick(el)}>
										<img src={el['icon_url']} className={style['menu-icon']} />
										<div>{el.name}</div>
									</div>
								);
							}
						})
					}
				</div>
			}

			<div className={style['carousel']}>
				<Carousel arrows autoplaySpeed={2500} autoplay dots={false}>
					<div>
						<img src={BannerLogo} />
					</div>
					<div>
						<img src={BannerLogo} />
					</div>
				</Carousel>
			</div>

		</>
	);

	function onMenuClick(element) {
		if (history) {
			let path = history.location.pathname;
			history.push(path + '/category/' + element.slug);
		}
	}
}

function GetDropDownMenu({ element, history }) {

	function onBrandClick(index) {
		let path = history.location.pathname;
		let slug = element.brands_slug[index];
		history.push(path + '/' + slug);
	}

	return (
		<Row>
			{
				element.brands_name && element.brands_name.map((brand, index) =>
					<Col sm={6} key={index}>
						<div>
							<span className='pointer' onClick={() => onBrandClick(index)}>
								{brand}
							</span>
						</div>
					</Col>
				)
			}
		</Row>
	);
}

HomePage.propTypes = {
	history: PropTypes.object
};

export default HomePage;

