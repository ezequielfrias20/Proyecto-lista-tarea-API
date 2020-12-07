import React, { useState } from "react";
import PropTypes from "prop-types";

export function List(props) {
	return (
		<div className="container">
			<ul>
				{props.todo.map((maduro, index) => {
					return <li key={index}>{maduro}</li>;
				})}
			</ul>
		</div>
	);
}

List.propTypes = {
	todo: PropTypes.array
};
