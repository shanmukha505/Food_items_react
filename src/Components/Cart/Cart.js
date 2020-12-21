import React from 'react';

import { Container } from 'react-bootstrap';

import style from './Cart.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, items } from '../Items';

const Cart = props => {

	let itms = useSelector(items);
	let dispatch = useDispatch();
	let totalCost = 0;
	let cartList = itms
		.filter((item) => item.count !== 0)
		.map((item) => {
			totalCost = totalCost + (item.cost * item.count)
			return (
				<div key={item.name}>
					<div key={item.name} className={style.Item}>
						<div className={style.Name}> {item.name} </div>
						<div className={style.Cost}> Rs. {item.cost} </div>
						<div className={style.Qnt}>
							<div>
								<button onClick={() => dispatch(decrement(item))}>-</button>
							</div>
							<div>{item.count}</div>
							<div>
								<button onClick={() => dispatch(increment(item))}>+</button>
							</div>
						</div>
						<div className={style.Total}>
							Rs. {item.cost * item.count}
						</div>
					</div>
					<hr />
				</div>
			);
		});

	return (
		<Container className={style.Cart}>
			{ totalCost === 0 ?
				<div className={style.Nocart} >please order something</div> :
				<>
					<h3> ORDER SUMMARY </h3>
					<hr />
					<h4>Name: {props.user}</h4>
					<p> Items: </p>
					<div className={style.Item}>
						<div className={style.Name}> <b>Item</b> </div>
						<div className={style.Cost}> <b>Cost</b> </div>
						<div className={style.Qnt}>	<b>Quantity</b> </div>
						<div className={style.Total}> <b>Price</b> </div>
					</div>
					<hr />
					{cartList}
					<b>Totalcost = Rs. {totalCost} </b>
					<hr />
				</>
			}
		</Container>
	);
}

export default Cart;


