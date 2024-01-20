import { useState } from 'react';
import './UserDetails.css';

function UserDetails() {
    const [adultsCount, setAdultsCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [values, setValues] = useState({
        name: '', address: '', email: '', contact: ''
    });
    const handleChange = (data: any) => {
        if (data.target.id === 'name') {
            setValues({ name: data.target.value, address: values.address, email: values.email, contact: values.email })
        } else if (data.target.id === 'address') {
            setValues({ name: values.name, address: data.target.value, email: values.email, contact: values.email })
        } else if (data.target.id === 'email') {
            setValues({ name: values.name, address: values.address, email: data.target.value, contact: values.email })
        } else if (data.target.id === 'contact') {
            setValues({ name: values.name, address: values.address, email: values.email, contact: data.target.value })
        }
    }
    const submitForm = () => {
        console.log('Form data', values)
    }
    return (
        <div className='parent'>
            <div className='container pt-3'>

                <div className='row justify-content-center'>
                    <legend className='col-sm-4 custom-padding'> User Details</legend>
                </div>

                <div className='row justify-content-center  pt-3 mb-4'>
                    <div className='col-2'><label className="form-label">Name</label></div>
                    <div className='col-10'>
                        <input type="text" className="dark-bg" id="name"
                            value={values.name}
                            onChange={() => {
                                handleChange(event)
                            }} />
                    </div>
                </div>
                <div className='row justify-content-center mb-4'>
                    <div className='col-2'><label className="form-label">Address</label></div>
                    <div className='col-10'>
                        <input type="text" className="dark-bg" id="address" value={values.address}
                            onChange={() => {
                                handleChange(event)
                            }} />
                    </div>
                </div>
                <div className='row justify-content-center mb-4'>
                    <div className='col-2'><label className="form-label">Email</label></div>
                    <div className='col-10'>
                        <input type="email" className="dark-bg" id="email" value={values.email}
                            onChange={() => {
                                handleChange(event)
                            }} />
                    </div>
                </div>
                <div className='row justify-content-center mb-4'>
                    <div className='col-2'><label className="form-label">Contact</label></div>
                    <div className='col-10'>
                        <input type="text" className="dark-bg" id="contact" value={values.contact}
                            onChange={() => {
                                handleChange(event)
                            }} />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-3'>
                        <div className="input-group">
                            <label className="form-label number-label">Adults</label>
                            <span className="input-group-btn">
                                <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field="" onClick={() => setAdultsCount(adultsCount - 1)}>
                                    <span>-</span>
                                </button>
                            </span>
                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value={adultsCount} min="1" max="100" />
                            <span className="input-group-btn">
                                <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="" onClick={() => setAdultsCount(adultsCount + 1)}>
                                    <span>+</span>
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="input-group">
                            <label className="form-label number-label">Children</label>
                            <span className="input-group-btn">
                                <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field="" onClick={() => setChildCount(childCount - 1)}>
                                    <span>-</span>
                                </button>
                            </span>
                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value={childCount} min="1" max="100" />
                            <span className="input-group-btn">
                                <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="" onClick={() => setChildCount(childCount + 1)}>
                                    <span>+</span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-end'>
                    <div className='col-2'>
                        <button type="button" className="btn btn-dark btn-custom" onClick={() => submitForm()}>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserDetails;