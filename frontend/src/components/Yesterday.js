import React, { useState, useEffect } from 'react';
import axios from 'axios';
import name from './name';
const Yesterday = () => {
    const [data, setData] = useState([]);
    const [res, setRes] = useState('');
    const [prev, setPrev] = useState('');
    const [noUser, setNoUser] = useState(0);

    let optionA = 0;
    let optionB = 0;
    let optionC = 0;
    let optionD = 0;

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get('/details/questions');
            const len = data.data.length - 2;
            const finalQuestion = data.data[len];
            setData(finalQuestion);
        };

        getData();
    }, []);
    useEffect(() => {
        const getData = async () => {
            const rawData = await axios.get('/details/user');
            // const finalData = data.data[data.data.length - 1];
            const data = rawData.data;
            setNoUser(data.length);
            // console.log(name);
            setPrev(name.prevAns);
            data.forEach((d) => {
                // console.log(d.answer);
                if (d.answer === 'A') optionA++;
                if (d.answer === 'B') optionB++;
                if (d.answer === 'C') optionC++;
                if (d.answer === 'D') optionD++;
            });
            // console.log(optionA, optionB, optionC, optionD);

            if (
                optionA >= optionB &&
                optionA >= optionC &&
                optionA >= optionD
            ) {
                setRes('A');
            }
            if (
                optionB >= optionA &&
                optionB >= optionC &&
                optionB >= optionD
            ) {
                setRes('B');
            }
            if (
                optionC >= optionB &&
                optionC >= optionA &&
                optionC >= optionD
            ) {
                setRes('C');
            }
            if (optionD > optionB && optionD > optionC && optionD > optionA) {
                setRes('D');
            }
            // console.log('res', res);
        };

        getData();
    }, []);

    return (
        <div className="m-2 card">
            <div className="prev ">
                <h2>Yesterday</h2>
                <div className="text-left">
                    <p> Number of players: {noUser}</p>
                    <h5> Question: </h5>
                    <p>{data.question}</p>
                    A. {data.option1}
                    <br />
                    B. {data.option2}
                    <br />
                    C. {data.option3}
                    <br />
                    D. {data.option4}
                    <br />
                    <br />
                    Most common answer: {res} <br />
                    Your answer: B{prev}
                    <h4 className="text-center">Tomorrow</h4>
                    <p className="text-center"> Hint:{data.hint}</p>
                </div>
            </div>
        </div>
    );
};

export default Yesterday;
