const cron = require('node-cron');
const play = require('play');
const JSONdb = require('simple-json-db');
const db = new JSONdb('./db/database.json');

const cron_1 = String(db.get('cron_1'));
const cron_2 = String(db.get('cron_2'));

const cronEnabled = db.get('cronEnabled');
console.log(cronEnabled);
console.log(cron_1);
console.log(cron_2);

cron.schedule(cron_1, () => {
  console.log(cronEnabled);
  if (cronEnabled == 'true') {
    playAudio();
    console.log('running a task every minute');
  }
}, {
  scheduled: true,
  timezone: 'Europe/Warsaw'
});

cron.schedule(cron_2, () => {
  console.log(cronEnabled);
  if (cronEnabled == 'true') {
    playAudio();
    console.log('running a task every minute');
  }
}, {
  scheduled: true,
  timezone: 'Europe/Warsaw'
});

function playAudio(file = '0_min.mp3') {
  // play with a callback
  play.sound('./audio/' + file, function () {
    console.log('play');
  });
}
