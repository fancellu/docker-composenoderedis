const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const redisclient = redis.createClient({
    host: 'redis-server'
});

app.get('/crash', (req, res) => {
    process.exit(1) // non zero means failure
});

app.get('/visit', (req, res) => {
    redisclient.get('visits', (err, visits) => {
        if (err || visits==null){
            res.send('First visit');
            redisclient.set('visits',  1);
        } else {
            res.send('Number of visits is ' + visits);
            redisclient.set('visits', parseInt(visits) + 1);
        }
    });
});

app.get('/showvisit', (req, res) => {
    redisclient.get('visits', (err, visits) => {
        if (err || visits==null){
            res.send('First visit');
        } else {
            res.send('Number of visits is ' + visits);
        }
    });
});

app.get('/', (req, res) => {
    res.send('please /visit or /showvisit or /crash')
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});
