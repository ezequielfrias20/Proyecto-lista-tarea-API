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
					className="form-control"
					onKeyDown={e => {
						if (e.key == "Enter") {
							setList([word, ...list]);
							setWord("");
							e.preventDefault();
							e.stopPropagation();
						}
					}}
				/>
				{/* <button
					className="todo-button"
					type="button"
					onClick={e => {
						setList([word, ...list]);
						setWord("");
					}}>
					<i className="fas fa-plus-square" />
				</button> */}
			</form>
			<List todo={list} setTodo={setList} />
		</React.Fragment>
	);
}

export default Input;
