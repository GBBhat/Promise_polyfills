const dummyApi = (time) => {
    const isReject = true;
    return new Promise((resolve, reject) => {
       if(isReject) reject("error API")
        setTimeout(() => {
            resolve("Fulfilled API")
        }, time)

    })
}

// Promise.all([dummyApi(2000),dummyApi(4000),dummyApi(1000)]).then(res =>
//     console.log(res)
// ).catch(err => 
// console.log(err)
// )

const polyfillall = (promiseArray) => {
    return new Promise((resolve, reject) => {
        const output = []
    promiseArray.forEach((promise,index) => {
         promise.then(data => {
            output[index] = data
            if(index === promiseArray.length-1) resolve(output)
         }).catch(err => reject(err))
    });
    })
    

}

const promises = [dummyApi(2000),dummyApi(4000),dummyApi(1000)];

polyfillall(promises).then(res => console.log(res)).catch(err => console.log(err))