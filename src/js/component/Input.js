import React, { useState, useEffect } from "react";
import { List } from "./List";

function Input(props) {
	const BASE_URL =
		"https://assets.breatheco.de/apis/fake/todos/user/ezequiel54";
	const [word, setWord] = useState("");
	const [list, setList] = useState([]);

	function borrarTarea(index) {
		if (list.length > 1) {
			fetch(BASE_URL, {
				method: "PUT",
				body: JSON.stringify(
					list.filter((tarea, i) => {
						return i != index;
					})
				),
				headers: {
					"content-type": "application/json"
				}
			}).then(resp => {
				if (resp.ok) {
					setList(
						list.filter((tarea, i) => {
							return i != index;
						})
					);
				} else {
					alert("Algo esta mal");
				}
			});
		} else {
			fetch(BASE_URL, {
				method: "DELETE",
				body: JSON.stringify(
					list.filter((tarea, i) => {
						return i != index;
					})
				),
				headers: {
					"content-type": "application/json"
				}
			}).then(resp => {
				if (resp.ok) {
					setList([]);
				} else {
					alert("Algo esta mal");
				}
			});
		}
	}

	useEffect(() => {
		const getTasks = async path => {
			let response = await fetch(path);
			let APIlist = await response.json();
			setList(APIlist);
		};
		let url = `${BASE_URL}`;
		getTasks(url);

		/*fetch(url)
			.then(response => response.json())
			.then(APIlist => setList(APIlist))
			.catch(error => console.log(`${error}`));*/
	}, []);
	return (
		<React.Fragment>
			<form>
				<input
					value={word}
					placeholder="Que tarea tienes pendiente?"
					onChange={e => {
						setWord(e.target.value);
					}}
					type="text"
					className="form-control"
					/*onKeyDown={async e => {
						if (e.key == "Enter") {
							let response = await fetch(BASE_URL, {
								method: "PUT",
								body: JSON.stringify([
									{
										label: word,
										done: false
									},
									...list
								]),
								headers: {
									"content-type": "application/json"
								}
							});

							if (response.ok) {
								setList([word, ...list]);
								setWord("");
							} else {
								alert("intente de nuevo");
							}
							e.preventDefault();
							e.stopPropagation();
						}
					}}*/
				/>

				<button
					className="btn btn-success"
					type="button"
					onClick={async e => {
						let response = await fetch(BASE_URL, {
							method: "PUT",
							body: JSON.stringify([
								{
									label: word,
									done: false
								},
								...list
							]),
							headers: {
								"content-type": "application/json"
							}
						});

						if (response.ok) {
							let response = await fetch(BASE_URL);
							let APIlist = await response.json();
							setList(APIlist);
							setWord("");
						} else {
							alert("intente de nuevo");
						}
					}}>
					<i className="fas fa-plus-square" />
					Agregar
				</button>
			</form>
			<List todo={list} setTodo={setList} borrarTarea={borrarTarea} />
		</React.Fragment>
	);
}

export default Input;
