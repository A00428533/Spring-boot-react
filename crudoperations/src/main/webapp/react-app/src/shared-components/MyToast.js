import React, {Component} from 'react';
import {Toast} from 'react-bootstrap';

export default class MyToast extends Component {

	render() {

		const toastCSS = {
			position: 'fixed',
			bottom: '40px',
			right:'600px',
			zIndex: 1,
			boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
		}
		console.log(this.props.type)
		return (
			<div style={this.props.show ? toastCSS: null}>
				<Toast 
					className={`border text-white  border-success`} 
					show={this.props.show}
					className= {`border text-white ${this.props.type === "success" ? 'border-success bg-success' : 'border-danger bg-danger' }`}
				>
					<Toast.Header className= {`text-white ${this.props.type === "success" ? 'bg-success' : 'bg-danger' }`} closeButton={false}>
						<strong className="mr-auto">Success</strong>
						<small>11 mins ago</small>
					</Toast.Header>
					<Toast.Body className= {"bg-dark text-black"} >
						{this.props.message}
					</Toast.Body>
				</Toast>
			</div>
		);
	};
};