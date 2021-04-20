const addInput = document.getElementById('btn');
const input = document.getElementById('input');
const listItems = document.getElementsByTagName('ol')[0];

addInput.addEventListener('click', function (){
   let listItem = document.createElement('li');
   listItem.textContent = input.value;
   listItems.appendChild(listItem);

   const inputValue = document.getElementById('input').value;
   const characters = /^[a-z]*$/i;
   const error = document.getElementsByTagName("p")[0];
   const parent =  document.getElementsByTagName('section')[0];


   function validation(position, message) {
       const p = document.createElement('p');
       p.textContent = message;
       parent.insertBefore(p, position);
       input.style.border = '1px solid red';
       addInput.setAttribute('disabled', true);
   }

   if (inputValue.length < 3) {
       validation(listItems, 'Trebuie sa ai minim 3 caractere!');
   } else if (inputValue.length > 10) {
       validation(listItems, 'Trebuie sa ai maxim 10 caractere!');
   } else if (!inputValue.match(characters)) {
       validation(listItems, 'Nu trebuie sa contina cifre!!');
   } else if (error) {
    error.remove();  
   }
       
    input.value= "";

    listItem.addEventListener('mouseover', function() {
        const hoverItem = document.createElement('button'); 
        hoverItem.textContent = 'Delete';
        hoverItem.classList.add('hoverButton');
        listItems.insertBefore(hoverItem, listItem);
        
        hoverItem.addEventListener('click', function() {
                listItem.remove();
                hoverItem.remove();
                addInput.removeAttribute('disabled', true);
                input.style.border = '1px solid black';
        });

        hoverItem.addEventListener('mouseout', function() {
            hoverItem.remove();
        });
    });

    let listOfLi = [];
    for (let i = 0; i < listItems.children.length; i++) {
        listOfLi.push(listItems.children[i]);
        if (listOfLi.length >= 10) {
            addInput.setAttribute('disabled', true);
            input.setAttribute('disabled', true);
        }
    }  
});









