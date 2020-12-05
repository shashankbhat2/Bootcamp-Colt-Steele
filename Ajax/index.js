// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random()*4500) + 500;
//     setTimeout(()=>{
//         if(delay > 4000){
//             failure('Connection Timeout :(');
//         }else{
//             success(`Here is your data from ${url}`)
//         }
//     })
// }



// fakeRequestCallback('book.com', function(){
//     console.log("it worked!!")
// }, function(){
//   console.log('Error')
// })


//Promises 

// const fakeRequest = (url) => {
//     return new Promise((res, rej) => {
//         const rand = Math.random();
//         setTimeout(()=> {
//             if(rand < 0.7){
//                 res('Your  Fake Data Here'); //response part of the code i.e actual data
//             }
//             rej('Request Error'); //reject part of the code i.e errors/status etc 
//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
//     .then((data) =>{
//         console.log('Done with request')
//         console.log('data is ', data);
//     })
//     .catch((err) => {
//         console.log("Oh no!", err)
//     })


    const delayedColorChange = (color, delay) => {
        return new Promise((res, rej) => {
            setTimeout(() =>{
                document.body.style.backgroundColor = color;
                res();  
            }, delay)
        })
    }


    // delayedColorChange('red', 1000)
    // .then(delayedColorChange('blue', 2000))
    // .then(delayedColorChange('orangered', 5000)) //Chained promises 


    //Async & Await

    // const sing = async () => {
    //     return 'Lalalal'
    //     throw new Error('Oh oh');
    // }


    // sing().then((data) => {
    //     console.log(data)
    // })  
    // const heading = document.createElement('h1');

    // async function rainbow(){
    //    await delayedColorChange('red', 1000);
    //    await delayedColorChange('orange', 200); //Resolves the promise from the first function's execution and then executes the next.
    // }

    // //After Async function execution 
    // rainbow().then(() => {
    //     heading.innerHTML="Rainbow Finished"
    //     document.body.appendChild(heading);
    // });

    // //--or---

    // async function afterRainbow(){
    //     await rainbow();
    //     heading.innerText="Rainbow Finished"
    //     document.body.appendChild(heading);
    // }

    // afterRainbow();

    //Rejecting Promise 

    // const fakeRequest = (url) => {
    //     return new Promise((res, rej) => {
    //         const delay = Math.floor(Math.random() * (4500)) + 500;
    //         setTimeout(() =>{
    //             if(delay > 2000){
    //                 rej('Connection Timed Out') //Throws an error
    //             } else{ 
    //                 res(`Here is your fake data from ${url}`) //Actual result
    //             }
    //         }, delay)
    //     })
    // }

    // async function makeTwoRequests(){
    //     try {
    //         let data1 = await fakeRequest('/page1');
    //         let data2 = await fakeRequest('/page2');
    //         console.log(data1);
    //         console.log(data2);
    //     } catch (error) {
    //         console.log("Caught An error",error);
    //     }
    // }

    // makeTwoRequests()


    //XHR -> [XML](HTTP){REQUEST}

    