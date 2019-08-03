const immutableData = {};
const listItem = [];

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
    }).then((response)=>{
        // immutableData.pokemon = response
        console.log(response)
        produceElements(response)
        // console.log(response)
    })
}
// Here's an example of how we make an HTTP request without $.ajax or axios
get('../pokemonData/pokemonData.json');
// console.log(workableData)

const produceElements = (pokemon) => {

    const ulList = document.getElementById('wholeList')

    console.log(pokemon.length)
    for(let i = 0; i < pokemon.length; i ++){
        console.log(i)
        listItem[i] = document.createElement('li')
        listItem[i].className = "hidden"
        listItem[i].textContent = pokemon[i].name
        ulList.appendChild(listItem[i])
    }
}

document.getElementById("itemChecker").addEventListener("click", function (event) {
    event.preventDefault()
    document.getElementById("inputText").value = ''
    console.log("hello!")
});



