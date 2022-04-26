import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const email = user.email
        axios.get(`http://localhost:5000/orders?email=${email}`)
            .then(function (response) {

                setOrders(response.data);
            })

    }, [])

    return (
        <div>
            <h1>this is order page</h1>
            <h3>Your Orders : {orders.length}</h3>
        </div>
    );
};

export default Orders;