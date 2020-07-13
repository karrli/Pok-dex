(function(){
    "use strict"
    // console.log(pokemons)
    // console.log(pokemons[0].type)

//This function creates the cards according to the amount of data available.          
    function createPokemonCard ()  {
        for (var i = 0; i < pokemons.length; i++) {
    
        let picture = "https://pokeres.bastionbot.org/images/pokemon/" + (i+1) +".png"
        // console.log(picture)
        let container = document.querySelector('.row');
        

        let column3 = document.createElement('div'); 
        column3.className = 'col-md-3';
        let card = document.createElement('div');
        card.className = 'card mb-4 border-danger rounded';
        let img = document.createElement('img')
        img.className = 'card-img-top';
        img.setAttribute('src', picture)
        let nameText = document.createElement('text')
        nameText.innerHTML= pokemons[i].name.english
        //The  index [i] helps to select elements of the array
        nameText.className = 'd-flex justify-content-center bg-dark rounded font-weight-bold text-white'
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body bg-white';
        let pTypeName = document.createElement('p');
        let listID = document.createElement('li')
        listID.innerHTML = "ID: " + pokemons[i].id
        listID.className = 'font-weight-bold';
        let listType = document.createElement('li')
        listType.innerHTML = "Type: " + pokemons[i].type
        listType.className = 'font-weight-bold';
        let listHP = document.createElement('li')
        listHP.innerHTML = "HP: " + pokemons[i].base.HP
        listHP.className = 'font-weight-bold';
   
        // console.log(listType)
        pTypeName.append(listID);
        pTypeName.append(listType);
        pTypeName.append(listHP);
        cardBody.append(pTypeName);
        card.append(img);
        card.append(nameText);
        card.append(cardBody);
        column3.append(card);
        container.append(column3);
               
    }
        }
    
    
        
    createPokemonCard()
        
    
    })()