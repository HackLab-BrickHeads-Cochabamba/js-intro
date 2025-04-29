const TIME = 1000


function wait (time = 0, makeItFail = false) {
  return new Promise((resolve, reject) => {
    
    if (makeItFail) return reject(new Error('demo'))

    setTimeout(() => {
      console.log(`executed after ${time} miliseconds`)
      console.log('now, correctly finished!!!')
      resolve()
    }, time)
  })
}


try {
  // Promise handlers
  Promise.all([wait(1000, true), wait(10000), wait(2000)]).finally(() => {
    console.log('finished?')
  }).catch((error) => {
    console.log('get and error')  
    console.log(error)  
  })
} catch (error) {
  console.log('get and error')  
  console.log(error)  
}


// promesa.then(() => {
//   console.log('all good')
// }).catch(() => {
//   console.log('failed')
// }).finally(() => {
//   console.log('finished?')
// })
