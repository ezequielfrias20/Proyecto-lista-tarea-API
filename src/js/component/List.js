import React from "react";
import PropTypes from "prop-types";

export function List({ todo, setTodo, borrarTarea }) {
	return (
		<div className="container">
			<ul className="list-group list-group-flush mt-2">
				{todo.map((tarea, index) => {
					return (
						<>
							<h4>Tarea {index + 1} :</h4>
							<li className="list-group-item mt-2" key={index}>
								{tarea.label}
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
	todo: PropTypes.object,
	setTodo: PropTypes.func,
	borrarTarea: PropTypes.func
};
