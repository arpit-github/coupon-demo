
import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import CloseIcon from '../../../img/close_gray.png';

import style from './modal.scss';

function Modal({ title, children, onRequestClose, bodyStyle, className, ...rest }) {

	return (
		<ReactModal
			className={className || style.content}
			overlayClassName={style.overlay}
			portalClassName={style.portal}
			onRequestClose={onRequestClose}
			closeTimeoutMS={Modal.closeTimeoutMS}
			shouldCloseOnOverlayClick={false}
			{...rest}
		>
			<h3 className={style['header-title']}>{title}</h3>
			<div className={style['header-close-icon']} onClick={onRequestClose}>
                <img src={CloseIcon} className={style.close}/>
			</div>

			<div className={bodyStyle || style.body}>
				{children}
			</div>
		</ReactModal>
	);
}

Modal.closeTimeoutMS = 200;
Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onRequestClose: PropTypes.func,
	title: PropTypes.node,
	children: PropTypes.node,
	className: PropTypes.string,
	bodyStyle: PropTypes.string
};

export default Modal;
