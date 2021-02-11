import React, { useState } from 'react';
import axios from 'axios';

const Admin1 = () => {
    const [questiona, setQuestiona] = useState([]);
    const [option1a, setOption1a] = useState([]);
    const [option2a, setOption2a] = useState([]);
    const [option3a, setOption3a] = useState([]);
    const [option4a, setOption4a] = useState([]);
    const [answera, setAnswera] = useState([]);
    const [hinta, setHinta] = useState([]);

    const [questionb, setQuestionb] = useState([]);
    const [option1b, setOption1b] = useState([]);
    const [option2b, setOption2b] = useState([]);
    const [option3b, setOption3b] = useState([]);
    const [option4b, setOption4b] = useState([]);
    const [answerb, setAnswerb] = useState([]);
    const [hintb, setHintb] = useState([]);

    const [questionc, setQuestionc] = useState([]);
    const [option1c, setOption1c] = useState([]);
    const [option2c, setOption2c] = useState([]);
    const [option3c, setOption3c] = useState([]);
    const [option4c, setOption4c] = useState([]);
    const [answerc, setAnswerc] = useState([]);
    const [hintc, setHintc] = useState([]);

    const [questiond, setQuestiond] = useState([]);
    const [option1d, setOption1d] = useState([]);
    const [option2d, setOption2d] = useState([]);
    const [option3d, setOption3d] = useState([]);
    const [option4d, setOption4d] = useState([]);
    const [answerd, setAnswerd] = useState([]);
    const [hintd, setHintd] = useState([]);

    const dataa = {
        question: questiona,
        option1: option1a,
        option2: option2a,
        option3: option3a,
        option4: option4a,
        answer: answera,
        hint: hinta,
    };

    const datab = {
        question: questionb,
        option1: option1b,
        option2: option2b,
        option3: option3b,
        option4: option4b,
        answer: answerb,
        hint: hintb,
    };
    const datac = {
        question: questionc,
        option1: option1c,
        option2: option2c,
        option3: option3c,
        option4: option4c,
        answer: answerc,
        hint: hintc,
    };
    const datad = {
        question: questiond,
        option1: option1d,
        option2: option2d,
        option3: option3d,
        option4: option4d,
        answer: answerd,
        hint: hintd,
    };

    const submitData = async () => {
        await axios
            .post('details/admin', dataa)
            .then(console.log('Data Send to mongo', dataa))
            .catch((err) => {
                console.log(err.message);
            });
        await axios
            .post('details/admin', datab)
            .then(console.log('Data Send to mongo', datab))
            .catch((err) => {
                console.log(err.message);
            });
        await axios
            .post('details/admin', datac)
            .then(console.log('Data Send to mongo', datac))
            .catch((err) => {
                console.log(err.message);
            });
        await axios
            .post('details/admin', datad)
            .then(console.log('Data Send to mongo', datad))
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

            <h4>Enter Question 2</h4>
            <input
                type="text"
                value={questionb}
                onChange={(e) => setQuestionb(e.target.value)}
            />
            <h4>Enter Options</h4>
            <input
                type="text"
                value={option1b}
                onChange={(e) => setOption1b(e.target.value)}
            />
            <input
                type="text"
                value={option2b}
                onChange={(e) => setOption2b(e.target.value)}
            />
            <input
                type="text"
                value={option3b}
                onChange={(e) => setOption3b(e.target.value)}
            />
            <input
                type="text"
                value={option4b}
                onChange={(e) => setOption4b(e.target.value)}
            />
            <h4>Answer</h4>
            <input
                type="text"
                value={answerb}
                onChange={(e) => setAnswerb(e.target.value)}
            />
            <h4>HINT</h4>
            <input
                type="text"
                value={hintb}
                onChange={(e) => setHintb(e.target.value)}
            />

            <h4>Enter Question 3</h4>
            <input
                type="text"
                value={questionc}
                onChange={(e) => setQuestionc(e.target.value)}
            />
            <h4>Enter Options</h4>
            <input
                type="text"
                value={option1c}
                onChange={(e) => setOption1c(e.target.value)}
            />
            <input
                type="text"
                value={option2c}
                onChange={(e) => setOption2c(e.target.value)}
            />
            <input
                type="text"
                value={option3c}
                onChange={(e) => setOption3c(e.target.value)}
            />
            <input
                type="text"
                value={option4c}
                onChange={(e) => setOption4c(e.target.value)}
            />
            <h4>Answer</h4>
            <input
                type="text"
                value={answerc}
                onChange={(e) => setAnswerc(e.target.value)}
            />
            <h4>HINT</h4>
            <input
                type="text"
                value={hintc}
                onChange={(e) => setHintc(e.target.value)}
            />

            <h4>Enter Question 4</h4>
            <input
                type="text"
                value={questiond}
                onChange={(e) => setQuestiond(e.target.value)}
            />
            <h4>Enter Options</h4>
            <input
                type="text"
                value={option1d}
                onChange={(e) => setOption1d(e.target.value)}
            />
            <input
                type="text"
                value={option2d}
                onChange={(e) => setOption2d(e.target.value)}
            />
            <input
                type="text"
                value={option3d}
                onChange={(e) => setOption3d(e.target.value)}
            />
            <input
                type="text"
                value={option4d}
                onChange={(e) => setOption4d(e.target.value)}
            />
            <h4>Answer</h4>
            <input
                type="text"
                value={answerd}
                onChange={(e) => setAnswerd(e.target.value)}
            />
            <h4>HINT</h4>
            <input
                type="text"
                value={hintd}
                onChange={(e) => setHintd(e.target.value)}
            />

            <button onClick={() => submitData()}>Submit</button>
        </>
    );
};

export default Admin1;
