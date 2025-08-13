// Promises : It represents a value that will be available now, later or never
// Stages of Promises : 
// 1. Pending -> Operation is in progress
// 2. Fulfilled -> Operation is completed successfully. (.then)
// 3. Rejected -> Operation is failed. (.catch)

// let promise = new Promise((resolve, reject) => {
//     let success = false;
//     setTimeout(() => {
//         success ? resolve("Promise success") : reject("Promise Reject")
//     }, 2000)
// })

// promise
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log(error)
// })