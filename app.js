let Nba = require('./models').Nba

//to create a player and add a wife
// Nba.create({
//   playerFN: 'Dwight',
//   playerLN: 'Howard',
//   position: 'Center'
// }).then(function(player){
//   console.log(player.get())
//
//   return player.createWife({
//     wifeName: 'Venessa Diamonds',
//     nbaLN: player.playerLN
//     })
//   })
// .then(function(newWife){
//   console.log("New Wife: ", newWife.get())
// }).catch(function(error){
//   console.log(error)
// })

//to add wives by playerLN, without creating a new entry in the Nba (player) table
Nba.get({
  where: {
    playerLN: 'Howard'
  }
}).then(function(player){
  console.log(player)

  // return player.createWife({
  //   wifeName: 'Ally',
  //   nbaLN: player.playerLN
  //   })
  })
// .then(function(newWife){
//   console.log("New Wife: ", newWife.get())
// }).catch(function(error){
//   console.log(error)
// })
