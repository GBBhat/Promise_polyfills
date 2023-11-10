const promise1 = new Promise((resolve,reject) => {
    resolve("P1 resolved")
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("P2 resoved")
    }, 2000)
})

const promise3 = 10

//System defined
// Promise.race([promise1,promise2,promise3])
// .then(res => 
//     console.log(res)
// )
// .catch(err => console.log(err))

//polyfill
const polyfillRace = (arrayOfPromise) => {
    return new Promise((resolve, reject) => {
        for(let i=0;i<arrayOfPromise.length-1;i++){
            arrayOfPromise[i].then(data => resolve(data), err => reject(err)) //fastest way to resolve the promise
           // .catch(err => reject(err))
        }
    })
}

polyfillRace([promise1,promise2,promise3])
.then(data => console.log(data))
.catch(err => console.log(err))