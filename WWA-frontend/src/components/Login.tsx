import React, { PureComponent } from 'react';
import banner from '../assets/water_pool_image1.jpg'
import './Login.css'

export class Login extends PureComponent {
    render() {
        return (
            <>
                <div className="text-center">
                    <img src={banner} className="rounded" alt="image1" />
                </div>
                <form>
                    <div className="container custom-margin">
                        <div className='row justify-content-center'>
                            <div className='col-sm-3 text-center'>
                                <a href="#" className="card-link">SIGN IN</a>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-sm-3'>
                                <div className='card border-0'>
                                    <div className="card-body">
                                        <div className="form-label login-title">LOGIN</div>
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}

                                        <div className="">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div className="form-check custom-padding">
                                            <input className="form-check-input pink-backgroud" type="checkbox" value="" id="flexCheckChecked" checked />
                                            <label className="form-check-label">Remember me?</label>
                                        </div>
                                        <div>
                                            <button type="submit" className="btn btn-primary col pink-backgroud large-button">Login</button>
                                            <div className="">Forgot Password?</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </>

        )
    }
}

export default Login