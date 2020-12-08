import React from "react";
import PropTypes from "prop-types";

export function List({ todo, setTodo }) {
	function borrarTarea(index) {
		setTodo(
			todo.filter((tarea, i) => {
				return i != index;
			})
		);
	}

	return (
		<div className="container">
			<ul className="list-group list-group-flush">
				{todo.map((maduro, index) => {
					return (
						<li
							className="list-group-item"
							key={index}
							onClick={() => borrarTarea(index)}>
							{maduro}
							<div>{"x"}</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

List.propTypes = {
	todo: PropTypes.array,
	setTodo: PropTypes.func
};
