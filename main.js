(function(){
"use strict"
// console.log(pokemons)
// console.log(pokemons[0].type)
    // var types = []
    // for(var i=0; i < pokemons[i].type.lenght; i++){ // va a generar mis tres paises aleatorios
    //     return types
    //     }
    //     console.log (types)  
    // 
    
function createPokemonCard ()  {
    for (var i = 0; i < pokemons.lenght; i++) {

    let picture = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i+1 +".png"
    // console.log(picture)
    let container = document.querySelector('.container');
    let column3 = document.createElement('div'); 
    col3.className = 'col-md-3';//Le agrega un atributo a la etiqueta
    let card = document.createElement('div');
    card.className = 'card mb-4 border-danger rounded';
    let img = document.createElement('img')
    img.setAttribute('src', picture)
    let nameText = document.createElement('text')
    nameText.innerHTML= pokemons[i].name.english
    nameText.className = 'd-flex justify-content-center bg-dark rounded font-weight-bold text-white'
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body bg-white';
    let pTypeName = document.createElement('p');
    let listType = document.createElement('li')
    // *innerhtml
    listType.innerHTML = "Type: " + pokemons[i].type
    listType.className = 'font-weight-bold';
    console.log(listType)

    pTypeName.append(listType);
    cardBody.append(pTypeName);
    card.append(cardBody);
    card.append(nameText);
    card.append(img);
    column3.append(card);
    container.append(column3);
           
}
    }


    
createPokemonCard()
    

})()
