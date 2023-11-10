//Promise APIs
//Promise.all, promise.allSettled, promise.race and promise.any

const p1 = new Promise((resolve, reject) => {
    //setTimeout(() => resolve("P1 Success"), 3000)
    setTimeout(() => reject("P1 failed"), 3000)
})

const p2 = new Promise((resolve, reject) => {
    //setTimeout(() => resolve("P2 success"), 1000)
    setTimeout(()=>reject("P2 failed"),4000)
})

const p3 = new Promise((resolve, reject) => {
    //setTimeout(() => resolve("P3 success"), 2000);
    setTimeout(() => reject("P3 failed"), 2000);
})

//all success returns array of values, if one failed promise failed
// Promise.all([p1, p2, p3]).then(res =>
//     console.log(res)
// ).catch(err =>
//     console.error(err)
// )

//success or failure returns all promises result in an array
// Promise.allSettled([p1,p2,p3]).then( res => {
//     console.log(res)
// }).catch(err => {
//     console.error(err)
// })

//1st setteled promised will be return (single) -> success/fail
// Promise.race([p1,p2,p3]).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.error(err)
// })

//1st settled success promise will be returned, if all failed returns the aggregated value of 3
Promise.any([p1,p2,p3]).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
    console.log(err.errors)
})