//scrolling the page on link change to prevent the navbar from hidding content
window.addEventListener("hashchange", ()=>{
    scrollBy(0, -50);
});

//selecting elements
let display = document.querySelector("#display");    //display
let checkout = document.querySelector("#checkout");     //cehcout button

//buttons
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");


//costs
let costs = document.querySelectorAll("span");
// console.log(costs);
// costs.forEach((item)=>{
//     console.log(item.innerHTML);
// });

//array to store order
let order = new Object();


btn1.addEventListener("click", ()=>{
    let food = "beef burger";
    let cost = costs[0].innerHTML;
    order[0] = {"food" : food, "cost" : cost};
    // display.innerHTML = `<li>${food1} - Ksh${cost1}</li>` ;
    alert(order[0].food + " : Ksh" + order[0].cost);
});

btn2.addEventListener("click", ()=>{
    let food = "double beef burger";
    let cost = costs[1].innerHTML;
    order[1] = {"food" : food, "cost" : cost};
    // display.innerHTML = `<li>${food2} - Ksh${cost2}</li>` ;
    alert(order[1].food + " : Ksh" + order[1].cost);
});

btn3.addEventListener("click", ()=>{
    let food = "double beef burger";
    let cost = costs[2].innerHTML;
    order[2] = {"food" : food, "cost" : cost};
    // display.innerHTML = `<li>${food2} - Ksh${cost2}</li>` ;
    alert(order[2].food + " : Ksh" + order[2].cost);
});

btn4.addEventListener("click", ()=>{
    let food = "double beef burger";
    let cost = costs[3].innerHTML;
    order[3] = {"food" : food, "cost" : cost};
    // display.innerHTML = `<li>${food2} - Ksh${cost2}</li>` ;
    alert(order[3].food + " : Ksh" + order[3].cost);
});

btn5.addEventListener("click", ()=>{
    let food = "double beef burger";
    let cost = costs[4].innerHTML;
    order[4] = {"food" : food, "cost" : cost};
    // display.innerHTML = `<li>${food2} - Ksh${cost2}</li>` ;
    alert(order[4].food + " : Ksh" + order[4].cost);
});

btn6.addEventListener("click", ()=>{
    let food = "double beef burger";
    let cost = costs[5].innerHTML;
    order[5] = {"food" : food, "cost" : cost};
    // display.innerHTML = `<li>${food2} - Ksh${cost2}</li>` ;
    alert(order[5].food + " : Ksh" + order[5].cost);
});

btn7.addEventListener("click", ()=>{
    let food = "double beef burger";
    let cost = costs[6].innerHTML;
    order[6] = {"food" : food, "cost" : cost};
    // display.innerHTML = `<li>${food2} - Ksh${cost2}</li>` ;
    alert(order[6].food + " : Ksh" + order[6].cost);
});

btn8.addEventListener("click", ()=>{
    let food = "double beef burger";
    let cost = costs[7].innerHTML;
    order[7] = {"food" : food, "cost" : cost};
    // display.innerHTML = `<li>${food2} - Ksh${cost2}</li>` ;
    alert(order[7].food + " : Ksh" + order[7].cost);
});

btn9.addEventListener("click", ()=>{
    let food = "double beef burger";
    let cost = costs[8].innerHTML;
    order[8] = {"food" : food, "cost" : cost};
    // display.innerHTML = `<li>${food2} - Ksh${cost2}</li>` ;
    alert(order[8].food + " : Ksh" + order[8].cost);
});

btn10.addEventListener("click", ()=>{
    let food = "double beef burger";
    let cost = costs[9].innerHTML;
    order[9] = {"food" : food, "cost" : cost};
    // display.innerHTML = `<li>${food2} - Ksh${cost2}</li>` ;
    alert(order[9].food + " : Ksh" + order[9].cost);
});

btn11.addEventListener("click", ()=>{
    let food = "double beef burger";
    let cost = costs[10].innerHTML;
    order[10] = {"food" : food, "cost" : cost};
    // display.innerHTML = `<li>${food2} - Ksh${cost2}</li>` ;
    alert(order[10].food + " : Ksh" + order[10].cost);
});

btn12.addEventListener("click", ()=>{
    let food = "double beef burger";
    let cost = costs[11].innerHTML;
    order[11] = {"food" : food, "cost" : cost};
    // display.innerHTML = `<li>${food2} - Ksh${cost2}</li>` ;
    alert(order[11].food + " : Ksh" + order[11].cost);
});

btn13.addEventListener("click", ()=>{
    let food = "double beef burger";
    let cost = costs[12].innerHTML;
    order[12] = {"food" : food, "cost" : cost};
    // display.innerHTML = `<li>${food2} - Ksh${cost2}</li>` ;
    alert(order[12].food + " : Ksh" + order[12].cost);
});

btn14.addEventListener("click", ()=>{
    let food = "double beef burger";
    let cost = costs[13].innerHTML;
    order[13] = {"food" : food, "cost" : cost};
    // display.innerHTML = `<li>${food2} - Ksh${cost2}</li>` ;
    alert(order[13].food + " : Ksh" + order[13].cost);
});

btn15.addEventListener("click", ()=>{
    let food = "double beef burger";
    let cost = costs[14].innerHTML;
    order[14] = {"food" : food, "cost" : cost};
    // display.innerHTML = `<li>${food2} - Ksh${cost2}</li>` ;
    alert(order[14].food + " : Ksh" + order[14].cost);
});

btn16.addEventListener("click", ()=>{
    let food = "double beef burger";
    let cost = costs[15].innerHTML;
    order[15] = {"food" : food, "cost" : cost};
    // display.innerHTML = `<li>${food2} - Ksh${cost2}</li>` ;
    alert(order[15].food + " : Ksh" + order[15].cost);
});

checkout.addEventListener("click", ()=>{
    // console.log(order);
    //storing bill
    let bill = 0;


    //displaying current order
    for (const key of Object.keys(order)){
        // let orderitems = JSON.stringify();  //converts an object to JSON
        let show = document.createTextNode(order[key]["food"]+" - "+order[key]["cost"]);
        let li = document.createElement("li");
        li.appendChild(show);
        display.appendChild(li);
        bill += parseInt(order[key]["cost"]);
        
    }

    //displaying total bill
    alert(`Pay : Ksh ${bill}`);
    let li =document.createElement("li");
    let cash = document.createTextNode(`Tota bill: ${bill}`);
    li.appendChild(cash);
    display.appendChild(li);
    
});

//converting the order object into a JSON to send to server
// let myJson = JSON.stringify(order);