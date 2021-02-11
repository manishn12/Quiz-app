import React, { useState } from 'react';
// import Admin from './Admin';
import axios from 'axios';
import { Link } from 'react-router-dom';
import name from './name';
// import { Switch, Route } from 'react-router';
// import { Link } from 'react-router-dom';

const Regist = () => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const userData = { username: email, password: password };
    name.username = userData.username;
    name.password = userData.password;

    const submitData = async () => {
        if (email === 'admin' && password === 'admin') {
            console.log('route to Admin');
        } else {
            await axios
                .post('/details/login', userData)
                .then(console.log('Data Send to server', userData))
                // .then(getData())
                // .then(console.log('name', name))
                .catch((err) => {
                    console.log(err.message);
                });
        }
        // console.log('name', name);
    };

    // const getData = async () => {
    //     const rawData = await axios.get('/details/user');
    //     // const finalData = data.data[data.data.length - 1];
    //     const data = rawData.data;
    //     console.log('daata', data);
    // };

    return (
        <div>
            <div>
                <div className="m-2">
                    <div className="prev d-flex flex-column ">
                        <h2>Login</h2>
                        <label className="lable mt-2 mb-0 text-left">
                            Username
                        </label>
                        <input
                            type="text"
                            className="input mb-2 mt-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Username"
                            required
                        />
                        <label className="lable text-left mt-2 mb-0">
                            Password
                        </label>
                        <input
                            placeholder="Enter Password"
                            className="input mb-2 mt-0"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <p></p>
                        <div className=" text-left  mb-4">
                            <input type="checkbox" />I agree that the owner of
                            this site is allowed <br></br>to use the result of
                            everyday quiz{' '}
                        </div>

                        {email === 'admin' && password === 'admin' && (
                            <Link to="/admin">
                                <button
                                    className="buttonC  mb-4 text-right"
                                    onClick={() => submitData()}
                                >
                                    Admin
                                </button>
                            </Link>
                        )}
                        <Link to="/user">
                            <button
                                className="buttonC  mb-4 text-right"
                                onClick={() => submitData()}
                            >
                                Login/Register
                            </button>
                        </Link>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Regist;
