import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Footer from './Footer';
import Statistics from './Statistics';
import name from './name';

const Left = ({ Data, qData }) => {
    const [data, setData] = useState([]);
    const [answer, setAnswer] = useState([]);

    const selectedAns = (ans) => {
        setAnswer(ans);
    };
    // ,gameplayed,score,consistancy
    const sendData = async () => {
        const data = await axios.get('/details/user');
        // name.answer = answer;
        console.log(data.data);
        console.log(name);
        data.data.forEach((d) => {
            if (d.username === name.username && d.password === name.password) {
                name._id = d._id;
                // console.log(name._id);
            }
        });

        const raw = await axios.get(`/details/user/${name._id}`);
        console.log('era', raw.data);

        name.score = raw.data.score;
        name.gameplayed = raw.data.gameplayed;
        name.consistency = raw.data.consistency;
        name.siteConsistency = raw.data.siteConsistency;
        name.deviance = raw.data.deviance;
        name.siteDeviance = raw.data.siteDeviance;
        name.rank = raw.data.rank;
        name.prevAns = raw.data.answer;
        name.answer = answer;
        // console.log('rae', name);

        await axios
            .patch(`details/user/${name._id}`, { name })
            .then(console.log('Data Updated'))
            .catch((err) => {
                console.log(err.message);
            });
        // const getUser = await axios.get(`/details/${name.username}`)
        // console.log('left data', data.data);
        // const ansData = {
        //     username: name.username,
        //     password: name.password,
        //     _id: name._id,
        //     answer,
        //     gameplayed: name.gameplayed,
        //     score: name.score,
        //     consistency: name.consistency,
        //     siteConsistency: name.siteConsistency,
        //     deviance: name.deviance,
        //     siteDeviance: name.siteDeviance,
        //     rank: name.rank,
        // };
        // await axios
        //     .patch('/details/user', { name })
        //     .then(console.log(ansData))
        //     .catch((err) => {
        //         console.log(err.message);
        //     });
    };

    // useEffect(() => {
    //     // console.log(data[data.length - 1].answer);
    //     axios.patch(`/details/${answer}`);
    // }, [answer]);

    useEffect(() => {
        // console.log(Data, '3232', qData[qData.length - 1]);

        const getData = async () => {
            const data = await axios.get('/details/questions');
            // console.log(data);

            const len = data.data.length - 1;
            const finalQuestion = data.data[len];
            setData(finalQuestion);
            name.question = finalQuestion.question;
        };
        // console.log(name);
        getData();
    }, []);
    return (
        <div className="m-2">
            <div className="question text-left ">
                <div className="question-header"></div>
                <div className="d-flex justify-content-between padding">
                    <h3>Today's Question</h3>
                    <p className="date">Jan/21/2020</p>
                </div>
                <p className="text-left pb-4 padding">{data.question}</p>
                <div className="padding">
                    <button
                        className="buttonB"
                        onClick={() => selectedAns('A')}
                    >
                        A. {data.option1}
                    </button>
                    <br></br>
                    <button
                        className="buttonB"
                        onClick={() => selectedAns('B')}
                    >
                        B.{data.option2}
                    </button>
                    <br></br>
                    <button
                        className="buttonB"
                        onClick={() => selectedAns('C')}
                    >
                        C. {data.option3}
                    </button>
                    <br></br>
                    <button
                        className="buttonB"
                        onClick={() => selectedAns('D')}
                    >
                        D. {data.option4}
                    </button>
                    <br></br>
                </div>
                <div className="padding">
                    <button
                        className="buttonA float-right"
                        onClick={() => sendData()}
                    >
                        Submit
                    </button>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
            <Statistics />
        </div>
    );
};

export default Left;
