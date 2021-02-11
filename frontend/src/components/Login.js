import React, { useEffect, useState } from 'react';

import '../App.css';
import Left from './Left';
import Intstruction from './Intstruction';
import NavL from './NavL';
import Gmail from './Gmail';
import Regist from './Regist';
import Footer from './Footer';
import axios from 'axios';
// import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
    const [Data, setData] = useState([]);
    const [qData, setQData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await axios.get('/details/user');
            // console.log('User data', data.data);
            setData(data.data);
            const qdata = await axios.get('/details/questions');
            // console.log('question data', qdata.data);
            setQData(qdata.data);
        };
        getData();
    }, []);
    return (
        <div>
            <div className="App">
                <NavL />
                <div className="d-flex flex-sm-row flex-column justify-content-center ">
                    <div>
                        <Left Data={Data} qData={qData} />
                    </div>
                    <div className="right">
                        <Intstruction />
                        <Regist />
                        <Gmail />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Login;
