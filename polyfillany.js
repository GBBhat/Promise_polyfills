const p1 = new Promise((resolve, reject) => {
    reject("P1 resolved")
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("P2 resolve after 2 sec")
    }, 2000)
})

const p3 = 10

// Promise.any([p1,p2,p3]).then(data => console.log(data))
// .catch(err => console.log(err))

//polyfill
const polyfillAny = (arrayOfPromises) => {
    let errOutput = []
    let counter = 0
    return new Promise((resolve, reject) => {
        arrayOfPromises.forEach((element,index) => {
            Promise.resolve(element).then(data => resolve(data))
            .catch(err => {
                counter++
                errOutput[index] = err
                console.log(errOutput)
                if(counter === arrayOfPromises.length) reject(new AggregateError(errOutput, "All promises rejected"))
            })
        })
    })
}

polyfillAny([p1,p2]).then(data => console.log(data))
.catch(err => console.error(err))