// // Async
// console.log('I');
// console.log('eat');

// setTimeout(()=>{
//     console.log('ice cream');
// }, 4000);

// console.log('with a');
// console.log('spoon');

// //  Callbacks
// function one(call_two) {
//     console.log("step 1 complete. please call step 2");
//     call_two()
// }

// function two() {
//     console.log("step 2");
// }

// one(two);


// call back example (callback hell)

// let order = (fruit_name, call_production) => {
//     setTimeout(()=>{
//         console.log(`${stocks.fruits[fruit_name]} was selected`)
//         call_production()

//     }, 2000)
// }

// let production = () => {
//     setTimeout(()=>{
//         console.log("production has started")
//     }, 0000)
// }

// order(0, production)


// object stocks
let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

// Promises

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject)=>{
        
        if (is_shop_open){

            setTimeout (()=>{
                resolve(work())
            }, time)
           
        }

        else{
            reject(console.log("our shop is closed"))
        }
    })
}

order(2000, ()=>console.log(`${stocks.fruits[0]} was selected`))

// then runs if promise resolved
.then(()=>{
    return order(0000, ()=>console.log("production has started"))
})

// catch runs if promise rejected
.catch(()=>{
    console.log("customer left")
})

.finally(()=>{
    console.log("day ended, shop is closed")
})