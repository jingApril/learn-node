const  fs = require('fs')
//  fs.readdir('./node01', (err, dirs) => {
//    for (let index = 0; index < dirs.length; index++) {
//      console.log(dirs[index])
//    }
//  })

fs.stat('./node01', (err,stats) => {
  if(stats.isFile()) {
    console.log('if file')
  } else {
    console.log('is dir')
  }
})