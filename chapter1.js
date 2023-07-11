//INLINE STYLING//
//const title=document.querySelector('#main-heading');
//title.style.color = 'red';
//console.log(title);
 /*const listItems=document.querySelectorAll('.list-items');

 for(i=0;i<listItems.length;i++){
    listItems[i].style.fontSize = '5rem';
 }
 console.log(listItems);
 */
//create an element
const ul=document.querySelector('ul');
const li=document.createElement('li');
//adding elemnets
ul.append(li)
//modifyin the text
/*const firstListItem=document.querySelector('.list-items');
console.log(firstListItem.innerText); 
console.log(firstListItem.textContent ); 
console.log(firstListItem.innerHTML); */
 li.innerText='xmen';
//modifying attributes & classes

//li.setAttribute('id','main-heading');
li.removeAttribute('id')
