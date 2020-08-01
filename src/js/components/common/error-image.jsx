
import React from 'react';
import { Button } from 'antd';

function ErrorImage({ image }) {

	let goToHome = () => {
		window.location.reload();
	};
	return (
		<div style={{ height: 'calc(100% - 80px)', textAlign: 'center' }}>
			<img style={{
				margin: 'auto',
				display: 'block',
				marginTop: '70px',
				maxHeight:'400px'
			}} src={image}></img>
			<Button type='primary' style={{ marginTop: '15px' }} onClick={() => goToHome()}>GO TO HOME</Button>
		</div>
	);
}

export default ErrorImage;
