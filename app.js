const loudness = require('loudness')

loudness.setVolume(45, (err) => {
  console.log('Volume set: 45');
})

loudness.getVolume((err, vol) => {
  // vol = 45
  console.log(vol);
})
