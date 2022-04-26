import React from 'react';
import { useForm } from "react-hook-form";


const Add = () => {
    const { register, handleSubmit } = useForm();


    //                                            //step 1: post or create a data form the client side 

    const onSubmit = (data, e) => {
        alert('users added successfully!!!');
        if (alert) {
            const url = `http://localhost:5000/service`
            fetch(url, {                             // step 1.1: fetch, url where to post
                method: 'POST',                      //step 1.2 : say method : 'POST'
                headers: {                           //step 1.3 : say headers and
                    'content-type': 'application/json'// 'content-type':'application/json'
                },
                body: JSON.stringify(data)             //step 1.4 : say body send data JSON.stringify 
            })
                .then(res => res.json())             //  step 1.5: then then then ,, we've done thousand of time
                .then(result => console.log(result))
            e.target.reset()
        }


    };
    return (
        <div className=' w-50 mx-auto'>
            <h1>Please Add a user!!</h1>
            <form className=' d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Photo URL' {...register("img")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default Add;