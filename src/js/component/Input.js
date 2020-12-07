import React, { useState } from "react";
import { List } from "./List";

function Input(props) {
	const [word, setWord] = useState("");
	const [list, setList] = useState([]);

	return (
		<React.Fragment>
			<form>
				<input
					value={word}
					onChange={e => {
						setWord(e.target.value);
					}}
					type="text"
					className="todo-input"
				/>
				<button
					className="todo-button"
					type="button"
					onClick={e => {
						setList([word, ...list]);
					}}>
					<i className="fas fa-plus-square" />
				</button>
			</form>
			<List todo={list} />
		</React.Fragment>
	);
}

export default Input;
