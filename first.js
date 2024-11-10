//Task 1: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(value);
    }
}

//Task 2: Awaiting a Call
async function awaitCall() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}

//Task 3: Handling Errors with Async/Await
async function awaitCall() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}