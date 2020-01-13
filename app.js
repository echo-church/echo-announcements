const loudness = require('loudness')

loudness.setVolume(15, (err) => {
  console.log('Volume set: 15');
})

loudness.getVolume((err, vol) => {
  // vol = 45
  console.log(vol);
})


var play = require('play');

// play with a callback
play.sound('./audio/0_min.mp3', function () {
  console.log('play');
  loudness.setVolume(55, (err) => {
    console.log('Volume set: 55');
  })

});