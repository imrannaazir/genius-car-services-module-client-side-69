import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useServiceDetails from '../../../hooks/useServiceDetails';
import axios from 'axios'
import { toast } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams()
    const { service } = useServiceDetails(serviceId)
    const [user] = useAuthState(auth)
    const navigate = useNavigate()


    // const [user, setUser] = useState({
    //     name: 'Baten Miya',
    //     email: 'baten@gmail.com',
    //     phone: '+94579274244',
    //     address: 'Batenput, Miyakhali, Noyakhali'
    // })

    // const handleAddress = e => {
    //     const newAddress = (e.target.value);
    //     const { address, ...rest } = user
    //     const newUser = { address: newAddress, ...rest }
    //     setUser(newUser)

    // }
    const handleOrder = e => {
        e.preventDefault()
        const order = {
            name: user.displayName,
            email: user.email,
            service: service.name,
            address: e.target.address?.value,
            phone: e.target.phone?.value

        }

        axios.post('http://localhost:5000/orders', order)
            .then(function (response) {
                console.log(response);
            })
        e.target.reset()
        toast('Your order has successfully placed!')
        navigate('/orders')

    }

    return (
        <div className=' w-50 mx-auto'>
            <h2>Please Checkout:{service.name}</h2>
            <form onSubmit={handleOrder}>

                <input
                    className=' w-100 mb-3'
                    value={user?.displayName}
                    type="text" name="name"
                    placeholder='Name'
                    autoComplete='off'
                    readOnly />
                <br />

                <input
                    className=' w-100 mb-3'
                    value={user?.email}
                    type="email"
                    name="email"
                    placeholder='Email'
                    autoComplete='off'
                    readOnly />
                <br />

                <input
                    className=' w-100 mb-3'
                    value={service.name}
                    type="text" name="service"
                    placeholder='Service Name'
                    autoComplete='off'
                    readOnly />
                <br />

                <input

                    className=' w-100 mb-3'
                    type="text"
                    name="address"
                    placeholder='Address'
                    autoComplete='off' />
                <br />
                <input
                    className=' w-100 mb-3'
                    type="text"
                    name="phone"
                    placeholder='phone'
                    autoComplete='off' />
                <br />

                <button type='submit' className='btn btn-primary'>Order</button>
            </form>
        </div>
    );
};

export default Checkout;