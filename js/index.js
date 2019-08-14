const immutableData = [];
let immutableTest = [];
const listItem = [];
const itemAvailable = [];
let points = 0;
let totalPoints = 0;
let timer = 0;

const get = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve((JSON.parse(xhr.responseText)))
            }
            else {
                reject('Request failed.  Returned status of ' + xhr.status);
            }
        };
        xhr.send();
    }).then((response) => {
        immutableTest = [...response];
        produceElements(response)

    }).catch((err) => {
        console.log(err)
    })
}

function countdown() {
    setTimeout('incriment()', 1000);
}

function incriment() {
    timer ++;
    document.getElementById("timer").innerHTML = timer;
    if (points < totalPoints){
        setTimeout('incriment()', 1000);
    }
}

const produceElements = (pokemon) => {
    const ulList = document.getElementById('wholeList')
    for (let i = 0; i < pokemon.length; i++) {
        listItem[i] = ""
        listItem[i] = document.createElement('li')
        ulList.appendChild(listItem[i])
        itemAvailable[i] = false
    }
    totalPoints = pokemon.length;
    document.getElementById("totalScore").innerHTML = totalPoints;
    document.getElementById("currentScore").innerHTML = points;
}

const comparison = (userInput) => {
    // console.log(userInput)
    const ulList = document.getElementById('wholeList')
    for (let i = 0; i < immutableTest.length; i++) {
        if (userInput.toLowerCase() === immutableTest[i].name.toLowerCase() && itemAvailable[i] === false) {
            points++
            // document.getElementById("currentScore").write(points)
            document.getElementById("currentScore").innerHTML = points;
            listItem[i].textContent = immutableTest[i].name
            immutableData[i] = immutableTest[i].name
            itemAvailable[i] = true
            console.log(points)
            break
        }
    }
}

// const pointCalc = () => {


// }

get('./pokemonData/pokemonData.json');

countdown()

document.getElementById("itemChecker").addEventListener("click", function (event) {
    event.preventDefault()
    comparison(document.getElementById("inputText").value)
    // pointCalc();
    document.getElementById("inputText").value = ''
});



