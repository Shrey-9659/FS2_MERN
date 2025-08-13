// A callback function is a function passed as an argument to another function, which is to be executed later.

// const fetchData = (callback) => {
//     setTimeout(() => {
//         callback("Data received")
//     }, 2000)
// }
// const callback = (data) => {
//     console.log(data)
// }

// fetchData(callback)

// setTimeout(() => {}, timeInMS)
// arr.map(() => {

// })

// Problem in Callback -> Callback hell || Pyramid of DOOM

setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    console.log("first")
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)