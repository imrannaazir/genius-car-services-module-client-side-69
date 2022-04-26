import React, { useEffect, useState } from 'react';

const ManageService = () => {

    const [services, setServices] = useState([]);


    //load data that we've done thousands of time before
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])



    //                                                // step 2: delete a data from database
    const handleDelete = id => {                      // step 2.1: get the id that to delete
        console.log(id);
        const url = `http://localhost:5000/service/${id}`// step 2.2  : make a dynamic route with id
        fetch(url, {                                      //step 2.3 : fetch , put the url
            method: 'DELETE'                              // step 2.4: say method "DELETE"
        })
            .then(res => res.json())                     //step 2.5 : than, than we've done before
            .then(data => console.log(data))

        const newServices = services.filter(service => service._id !== id)
        setServices(newServices)
    }
    return (
        <div>
            <h1>Please Manage your services!!</h1>
            {
                services.map(service => <div key={service._id}><h3>Service Name :{service.name}<button onClick={() => handleDelete(service._id)}>
                    X</button></h3></div>)
            }
        </div>
    );
};

export default ManageService;