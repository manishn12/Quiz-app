const express = require('express');
const Admin = require('../models/db');
const router = express.Router();
const csv = require('csv-parser');
const fs = require('fs');

// console.log(Date.now());

const rawData = [];

// fs.createReadStream('data.csv')
//     .pipe(csv())
//     .on('data', (row) => {
//         // console.log(row);
//         rawData.push(row);
//     })
//     .on('end', async () => {
//         // console.log('raw daat', rawData[0].username);
//         for (const i in rawData) {
//             // console.log(rawData[i]);

//             const sendData = new Admin({
//                 question: rawData[i].question,
//                 option1: rawData[i].option1,
//                 option2: rawData[i].option2,
//                 option3: rawData[i].option3,
//                 option4: rawData[i].option4,
//                 answer: rawData[i].answer,
//                 hint: rawData[i].hint,
//             });
//             try {
//                 const savedData = await sendData.save();
//                 // res.json(savedData); // RESPONSE FOR CONSOLE
//                 console.log(savedData);
//             } catch (err) {
//                 // res.json({ message: err }); // RESPONSE FOR CONSOLE
//                 console.log(err);
//             }
//         }
//         console.log('CSV file successfully processed');
//     });

//get all data
router.get('/', async (req, res) => {
    const data = await Admin.find();
    res.json(data);
});
router.get('/user/:key', async (req, res) => {
    try {
        const data = await Admin.findById(req.params.key);
        res.json(data);
    } catch (err) {
        res.json({ message: err });
    }
});
//get User DATA
router.get('/user', async (req, res) => {
    const data = await Admin.find({ username: { $type: 'string' } });
    res.json(data);
});

//get Questions
router.get('/questions', async (req, res) => {
    const specificData = await Admin.find({ option1: { $type: 'string' } });
    res.json(specificData);
});

//Post
router.post('/login', async (req, res) => {
    console.log(req.body);
    const data = new Admin({
        username: req.body.username,
        password: req.body.password,
        score: 0,
        answer: '',
        prevAns: '',
        gameplayed: 0,
        consistency: 0,
        siteConsistency: 0,
        deviance: 0,
        siteDeviance: 0,
        rank: 2,
    });
    console.log(data.password);
    //if(user found)

    const findUser = await Admin.find({
        username: req.body.username,
    });
    // console.log(findUser.length);

    if (!findUser.length == 0) {
        console.log('user Already Exist');
    } else {
        console.log('New user created');
        try {
            const savedData = await data.save();
            res.json(savedData); // RESPONSE FOR CONSOLE
            console.log(savedData);
        } catch (err) {
            res.json({ message: err }); // RESPONSE FOR CONSOLE
            console.log(err);
        }
    }

    //else create user

    // const data = new Admin({
    //     username: req.body.username,
    //     password: req.body.pass,
    // });
    // if (data.username === 'admin' && data.password === 'admin') {
    //     console.log('admin pannel');
    // } else {
    //     const checkUser = await Admin.find({
    //         username: data.username,
    //         password: data.password,
    //     });
    //     if (checkUser) {
    //         console.log('user found', data);
    //         res.json(data);
    //     } else {
    //         try {
    //             const savedData = await data.save();
    //             res.json(savedData); // RESPONSE FOR CONSOLE
    //             console.log(savedData);
    //         } catch (err) {
    //             res.json({ message: err }); // RESPONSE FOR CONSOLE
    //             console.log(err);
    //         }
    //     }
    // }
});

// router.post('/user', async (req, res) => {
//     const data = new Admin({
//         username: req.body.username,
//         password: req.body.pass,
//         answer: req.body.answer,
//     });
//     console.log('check data', data);
//     const checkUser = await Admin.find({
//         username: { $in: [data.username] },
//     });
//     console.log('checkuser', checkUser);
//     if (checkUser) {
//         console.log('user found', data);
//         try {
//             const savedData = await data.save();
//             res.json(savedData); // RESPONSE FOR CONSOLE
//             console.log(savedData);
//         } catch (err) {
//             res.json({ message: err }); // RESPONSE FOR CONSOLE
//             console.log(err);
//         }
//         console.log('saved to database');
//     } else {
//         console.log('access Denied');
//     }
// });

//Update Data

router.patch('/user/:key', async (req, res) => {
    // console.log('req.body', req.body);
    try {
        const updatedData = await Admin.updateOne({ _id: req.params.key }, [
            { $set: { prevAns: req.body.name.prevAns } },
            { $set: { answer: req.body.name.answer } },
            { $set: { question: req.body.name.question } },
            { $set: { score: req.body.name.score } },
            { $set: { gameplayed: req.body.name.gameplayed + 1 } },
            { $set: { consistency: req.body.name.consistency } },
            { $set: { siteConsistency: req.body.name.siteConsistency } },
            { $set: { deviance: req.body.name.deviance } },
            { $set: { siteDeviance: req.body.name.siteDeviance } },
        ]);
        // console.log(updatedData);
        res.json(updatedData);
    } catch (err) {
        res.json({ message: err });
    }
    //     try {
    //         // console.log('name:', req.body.name.username);
    //         const updatedData = await Admin.updateOne(
    //             { _id: req.params.key },
    //             {
    //                 $set: {
    //                     answer: req.body.name.answer,
    //                     gameplayed: req.body.name.gameplayed + 1,
    //                     score: req.body.name.score + 1,
    //                     consistency: req.body.name.consistency + 1,
    //                     siteConsistency: req.body.name.siteConsistency + 1,
    //                     deviance: req.body.name.deviance + 1,
    //                     siteConsistency: req.body.name.siteDeviance + 1,
    //                     rank: req.body.name.rank + 1,
    //                 },
    //             }
    //         );
    //         res.json(updatedData);
    //     } catch (err) {
    //         res.json({ message: err });
    //     }
});

let rawDate = new Date().getHours();
function waitTime() {
    // let hour = rawDate.getTime();jsonDate
    // console.log(29 - rawDate);

    //Post data {ONly for admin}{auth later}
    router.post('/admin', async (req, res) => {
        const data = new Admin({
            question: req.body.question,
            option1: req.body.option1,
            option2: req.body.option2,
            option3: req.body.option3,
            option4: req.body.option4,
            answer: req.body.answer,
            hint: req.body.hint,
            // date: Date.now(),
        });

        try {
            const savedData = await data.save();
            res.json(savedData); // RESPONSE FOR CONSOLE
            console.log(savedData);
        } catch (err) {
            res.json({ message: err }); // RESPONSE FOR CONSOLE
            console.log(err);
        }
    });
}

setTimeout(waitTime, 3600000 * (29 - rawDate));

module.exports = router;
