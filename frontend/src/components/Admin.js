import React, { useState } from 'react';
import axios from 'axios';
import Question from './UploadQuestion';

const Admin = () => {
    const [questiona, setQuestiona] = useState([]);
    const [option1a, setOption1a] = useState([]);
    const [option2a, setOption2a] = useState([]);
    const [option3a, setOption3a] = useState([]);
    const [option4a, setOption4a] = useState([]);
    const [answera, setAnswera] = useState([]);
    const [hinta, setHinta] = useState([]);

    const dataa = {
        question: questiona,
        option1: option1a,
        option2: option2a,
        option3: option3a,
        option4: option4a,
        answer: answera,
        hint: hinta,
    };

    const submitData = async () => {
        await axios
            .post('details/admin', dataa)
            .then(console.log('Data Send to mongo', dataa))
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <>
            <h4>Enter Question 1</h4>
            <input
                type="text"
                value={questiona}
                onChange={(e) => setQuestiona(e.target.value)}
            />
            <h4>Enter Options</h4>
            <input
                type="text"
                value={option1a}
                onChange={(e) => setOption1a(e.target.value)}
            />
            <input
                type="text"
                value={option2a}
                onChange={(e) => setOption2a(e.target.value)}
            />
            <input
                type="text"
                value={option3a}
                onChange={(e) => setOption3a(e.target.value)}
            />
            <input
                type="text"
                value={option4a}
                onChange={(e) => setOption4a(e.target.value)}
            />
            <h4>Answer</h4>
            <input
                type="text"
                value={answera}
                onChange={(e) => setAnswera(e.target.value)}
            />
            <h4>HINT</h4>
            <input
                type="text"
                value={hinta}
                onChange={(e) => setHinta(e.target.value)}
            />

            <button onClick={() => submitData()}>Submit</button>

            <br />
            <br />

            <div className="admin-pannel">
                {/* <h4>Upoad Question for tommorrow</h4>
                <button disabled>Upload</button> */}
                <Question />
                <h4>question and answers until now</h4>
                <button>
                    <a
                        className="btn btn-primary btn-file"
                        href="http://localhost:5000/details/questions"
                        target="_blank"
                        download
                    >
                        Open
                    </a>
                </button>
            </div>
        </>
    );
};

export default Admin;
