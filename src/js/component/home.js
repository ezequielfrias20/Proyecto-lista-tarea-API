import React from "react";
import Input from "./Input.js";
//create your first component

export class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<h1>Todos</h1>
				<Input />
			</div>
		);
	}
}
