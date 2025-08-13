// Async JS -->
// Allows long-running tasks to run without blocking the main thread.
// Example : network request, file reading, timers
// Uses callbacks, promises, and async/await to handle results when they're ready

// EventLoop and Callback Queue -->
// JS runs code in two places
// 1. Call Stack - where normal synchronous code runs
// 2. Callback Queue - where async tasks wait until the call stack is empty

// Event loop - Constantly checks if the stack is empty, if it is, then it pushes async callbacks from the queue to the stack.