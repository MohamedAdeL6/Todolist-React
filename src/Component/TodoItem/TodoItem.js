import React, { Component } from 'react';
import './TodoItem'
const TodoItem = (props) => {
	const { items, DeleteItem } = props;
	let length = items.length;
	const ListItem = length ? (
		items.map(item => {
			return (
				<div key={item.id}>
					<span className='name'>{item.name}</span>
					<span className='age'>{item.age}</span>
					<span className='email'>{item.email}</span>
					<span className='action icon' onClick={() => DeleteItem(item.id)}>&times;</span>
				</div>
			)
		})) : (<p>Sorry There Is No Item</p>)

	return (
		<div className='ListItem'>
			<div>
				<span className='name title'> Name </span>
				<span className='age title'> Age </span>
				<span className='email title'> Email </span>
				<span className='action title'>Action </span>
			</div>

			<div className='list'>
				{ListItem}
			</div>
		</div>

	)
}
export default TodoItem;


