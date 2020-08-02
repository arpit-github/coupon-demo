import React, { useState } from 'react';
import { Row, Col, Icon, Input } from 'antd';
import classNames from 'classnames';
// import PropTypes from 'prop-types';

import Modal from '../common/modal';
import MenuIcon from '../../../icons/menu-icon';
import CallIcon from '../../../img/call.png';
import LogoIcon from '../../../img/logo.png';

import style from './app-header.scss';

function AppHeader({ }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className={classNames('container', style['header'])}>
				<Row>
					<Col sm={24} className='right'>
						<span className={style['login-link']} onClick={openLoginModal}>
							Login/Register
						</span>
					</Col>
					<Col sm={24} className={style['menu-section']}>

						<div className='horizontal-flow'>
							<div style={{ margin: 'auto 10px auto 0' }}>
								<Icon className={style['menu']} component={MenuIcon} />
							</div>
							<div className='horizontal-flow'>
								<img src={CallIcon} />
								<div className={style['call-number']}>1800-103-3314</div>
							</div>
						</div>

						<div className={style['search-box']}>
							<Input.Search
								placeholder='Search by Branch/Product'
							/>
						</div>

						<div>
							<img src={LogoIcon} />
						</div>
					</Col>
				</Row>
			</div>
			<Modal
				isOpen={isOpen}
				onRequestClose={closeLoginModal}
				title={'Login/Signup'}
				className={style['modal-class-1']}
			>
				<>
				</>
			</Modal>
		</>
	);

	function openLoginModal() {
		setIsOpen(true);
	}

	function closeLoginModal() {
		setIsOpen(false);
	}
}

AppHeader.propTypes = {

};

export default AppHeader;

