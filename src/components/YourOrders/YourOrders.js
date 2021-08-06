import './YourOrders.scss';
import { useState, useEffect } from 'react';
import OrderCard from './OrderCard/OrderCard';
import { database } from '../../firebase';
import { connect } from 'react-redux';

const YourOrders = (props) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const ref = database.ref('orders');
        ref.once('value', snapshot => {
            snapshot.forEach(i => {
                setOrders(oldArray => [...oldArray, i.val()]);
            });
        });
    }, []);

    let orderCards = orders.map(order => {
        if (props.userInfo.email === order.email) {
            return <OrderCard
                key={order.id}
                email={order.email}
                date={order.date}
                price={order.totalPrice} />;
        }
        else
            return null;
    });

    return (
        <div className="your-orders">
            <h1>Your Orders</h1>
            <h2>{props.userInfo.email}</h2>
            {orderCards}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo
    }
}

export default connect(mapStateToProps, null)(YourOrders);