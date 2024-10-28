const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello Express')
});

const user = {
    id: 1,
    name: 'John',
    surname: 'Doe',
};

const userList = [
    {
        id: 2,
        name: 'John',
        surname: 'Dan',
    },{
        id: 3,
        name: 'John',
        surname: 'Done',
    },
];

app.get('/user', (req, res) => {
    res.json(user);
    console.log('get user', user);
});

app.get('/user/:id', (req, res) => {
    const param = {
        id: Number(req.params.id),
    };
    console.log('get param', param);
    const findUser = userList.find((u) => u.id === param.id);
    res.json(findUser ?? null);
});

app.get('/user-search/', (req, res) => {
    const query = req.query;
    console.log('get query', query);
    const findUser = userList.find((u) => u.surname.match(query.surname));
    res.json(findUser ?? null);
});

app.post('/user-new', (req, res) => {
    const body = req.body;
    console.log('post body', body);
    const newUserList = [...userList];
    newUserList.push({
        id: userList.length,
        name: body.name,
        surname: body.surname,
    })
    console.log('post body result', newUserList);
    res.json({
        status: body ? 200 : 400,
        message: body ? 'Success': 'Faield'
    });
});

app.listen(process.env.PORT || 3000)