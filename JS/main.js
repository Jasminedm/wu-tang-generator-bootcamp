/**
Goal: Create a Wu-Tang Clan *name generator*. Present the 
user with *5 survey questions* and *based on those 
answers* **randomly** generate their name. The name doesn't 
have to be exact names, but Wu-Tang sounding-ish 
names. Ex: Childish Gambino (who actually got his name 
from a Wu-Tang name generator).**/

//Relaxed Pony Code <----------Explain or find different way to do*************
function mode(array){
    if(array.length == 0)
        return null;
    let modeMap = {};
    let maxEl = array[0], maxCount = 1;
    for(let i = 0; i < array.length; i++){
        let el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}


document.querySelector('button').addEventListener('click', generateName)
//preventDefault() <-------Use to prevent buttom from reloading page?**********

let nameArr1 = ['Tuff Dreamer', 'Zexy Menace', 'Violent Observer', 'Wicked Ninja', 'Phantom Watcher']
let nameArr2 = ['Thunderous Genius', 'Amateur Knight', 'Dynamic Mercenary', 'Thick Assassin', 'Tha Hunter']
let nameArr3 = ['Misunderstood Bandit', 'Pesty Killah', 'Master Demon', 'Mad Magician', 'Midnight Prophet']
let namesA1 = nameArr1[Math.floor(Math.random() * nameArr1.length)]
let namesA2 = nameArr2[Math.floor(Math.random() * nameArr2.length)]
let namesA3 = nameArr3[Math.floor(Math.random() * nameArr3.length)]
function generateName (){

    let one = document.querySelector('input[name="qOne"]:checked').value
    let two = document.querySelector('input[name="qOne"]:checked').value
    let three = document.querySelector('input[name="qOne"]:checked').value
    let four = document.querySelector('input[name="qOne"]:checked').value
    let five = document.querySelector('input[name="qOne"]:checked').value
    let inputs = document.querySelectorAll('.inputs')
    inputs.forEach(input => input.checked= false)
    let answered = [one, two, three, four, five]
    let maxChoice = mode(answered) //<-------- goes with mode code to see which (a,b,c) was answered most
    //Evaluate answers and return randomized name
    if(maxChoice === 'a'){
        document.querySelector('h2').innerText = namesA1
        
    }else if(maxChoice === 'b'){
        document.querySelector('h2').innerText = namesA2
        
    } if(maxChoice === 'c'){
        document.querySelector('h2').innerText = namesA3
        
    }
    
}

/** */