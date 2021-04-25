const {exec} = require('child_process');
const express = require('express');
const bodyParser = require('body-parser');
const play = require('play');
const app = express();
const port = 3007;
const JSONdb = require('simple-json-db');
const db = new JSONdb('db/database.json');

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', function (req, res) {
    res.send({
        title: 'ECHO Foyer announcements',
        message: 'Foyer announcements'
    });
});

app.post('/api', function (req, res) {
    res.send({
        title: 'ECHO Foyer announcements',
        message: 'Foyer announcements'
    });
});

app.post('/api/play/', (req, res) => {
    let file = req.body.file;
    console.log(req.body);
    playAudio(file);
    db.set('file', file);

    return res.send(`playing: ${file}`);
});

app.post('/api/spotify/toggle', (req, res) => {
    exec('spt pb -t', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);

            return res.send(`error: ${error.message}`);
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);

            return res.send(`stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);

        return res.send(`stdout: ${stdout}`);
    });
});

app.post('/api/spotify/volume', (req, res) => {
    let volume = req.body.volume;
    setVolume(volume);

    return res.send(`volume: ${volume}`);
});

function playAudio(file = '0_min.mp3') {
    // play with a callback
    // play.sound('./audio/' + file, function () {
    //   console.log('play');
    // });
    exec(`play ${file}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
    });
}

function setVolume(volume = 80) {
    exec(`spt pb -v ${volume}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

// exec('spt --help', (error, stdout, stderr) => {
//   if (error) {
//     console.log(`error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.log(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });
