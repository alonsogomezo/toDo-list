import React, { useState } from "react";

const Home = () => {
	const [newItem, setNewItem] = useState("");
	const [items, setItems] = useState([]);
	function addItem() {
		if (!newItem) {
			alert("Enter an item");
			return;
		}
		const item = {
			id: Math.floor(Math.random() * 1000),
			value: newItem, //we get this from the input
		};

		setItems((oldList) => [...oldList, item]);
		setNewItem("");
		console.log(items);
	}

	function deleteItem(id) {
		const newArray = items.filter((item) => item.id !== id);
		setItems(newArray);
	}

	return (
		<center>
			<h1>Todo</h1>
			<input
				type="text"
				placeholder="Add an item..."
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button onClick={() => addItem()}>Add</button>
			<ul>
				{items.map((item) => {
					return (
						<li key={item.id}>
							{item.value}{" "}
							<button onClick={() => deleteItem(item.id)}>
								{" "}
								X{" "}
							</button>
						</li>
					);
				})}
			</ul>
		</center>
	);
};

export default Home;
