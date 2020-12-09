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
			<ul className="list-group list-group-flush mt-2">
				{todo.map((maduro, index) => {
					return (
						<>
							<h4>Tarea {index + 1} :</h4>
							<li className="list-group-item mt-2" key={index}>
								{maduro}
							</li>
							<button
								type="button"
								className="btn btn-danger"
								onClick={() => borrarTarea(index)}>
								eliminar
							</button>
						</>
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
