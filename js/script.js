console.log('JS OK')


// Recupero gli elementi dal DOM
const groceryListFor = document.getElementById('grocery-list-for');
const groceryListWhile = document.getElementById('grocery-list-while');


//Creo un array con la lista della spesa
const listElement = ['Pane' , 'Carne' , 'Uova' , 'Latte' , 'Formaggio' , 'Cereali'];


let listMessageFor = ''

// FINCHÈ ci sono oggetti nella lista della spesa
for(let i = 0; i < listElement.length; i++) {
  listMessageFor += `<li>${listElement[i]}</li>`
}

// Stampo nel DOM gli oggetti 
groceryListFor.innerHTML = listMessageFor


let currentIndex = 0
let listMessageWhile = ''

// FIN TANTO CHE ci sono elementi nella lista della spesa
while(currentIndex < listElement.length){
  listMessageWhile += `<li>${listElement[currentIndex]}</li>`
  currentIndex++
}

// Stampo nel DOM gli elementi 
groceryListWhile.innerHTML = listMessageWhile