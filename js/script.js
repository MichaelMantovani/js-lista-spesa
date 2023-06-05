console.log('JS OK')


// Recupero gli elementi dal DOM
const groceryList = document.getElementById('grocery-list');


//Creo un array con la lista della spesa
const listElement = ['Pane' , 'Carne' , 'Uova' , 'Latte' , 'Formaggio' , 'Cereali'];


// FINCHÈ ci sono oggetti nella lista della spesa

let listMessage = ''
for(let i = 0; i < listElement.length; i++) {
  listMessage += `<li>${listElement[i]}</li>`
}

// Stampo nel DOM gli oggetti 
groceryList.innerHTML = listMessage
