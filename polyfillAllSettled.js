const p1 = new Promise((resolve, reject) => {
    reject("P1 resolved")
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("P2 resolve after 2 sec")
    }, 2000)
})

const p3 = 10

Promise.allSettled([p1,p2,p3]).then(data => console.log(data))
.catch(err => console.log(err))

//polyfill

const polyfillAllSettled = (arrayOfPromises) => {
    //let counter = 0
    let output = new Array()
    return new Promise((resolve,reject) => {
        arrayOfPromises.forEach((element,index) => {
            element.then(data =>{
                //counter++
                output.push({"status":'fulfilled',"reason":data  } )             
            })
            .catch(err => output.push({"status":'rejected',"reason":err}))
        })
        resolve(output)
    })
}

polyfillAllSettled([p1,p2]).then(data => console.log(data))