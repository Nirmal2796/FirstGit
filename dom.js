// // console.dir(document);
// // console.log(document.URL);
// // console.log(document.title);
// // // document.title = 123;
// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.body);
// // // consolconsole.log(document.forms);
// // console.log(document.links);


// // //GETELEMENT BY ID
// // //console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);

// // // headerTitle.textContent = 'Hello';
// // // headerTitle.innerText = 'Goodbye';

// // // headerTitle.innerHTML = '<h3>Hello</h3>';

// header.style.borderBottom = 'solid 3px black';

// // //GET ELEMENTS BY CLASSNAME;

// var title = document.getElementsByClassName('title');
// console.log(title[0]);
// title[0].style.fontWeight = 'bold';

// title[0].style.color = 'Green';

//var items = document.getElementsByClassName('list-group-item');
// console.log(items);

// console.log(items[1]);

// // items[1].textContent = 'Hello 2';
// // // items[1].style.fontWeight = 'bold';
// // // items[1].style.backgroundColor = 'yellow';

// for (var i = 0; i < items.length; i++){
//     items[i].style.fontWeight = 'bold';
//     items[i].style.color = 'blue';
    
// }

// //items[2].style.backgroundColor = 'Green';

// // GET ELEMENT BY TAG NAME;
// var item = document.getElementsByTagName('li');
// item[4].style.color = 'blue';
// item[4].style.fontWeight = 'bold';


//QUERY SELECTOR - GRABS ONLY ONE ELEMENT

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';

//QUERY SELECTOR ALL

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'green';
// }

// var second = document.querySelectorAll('li');
// second[1].style.color = 'green';

// TRAVERSING THE DOM

var itemList = document.querySelector('#items');
//parentNode property
console.log(itemList.parentNode);

itemList.parentNode.style.backgroundColor = '#f4f4f4';

console.log(itemList.parentNode.parentNode.parentNode);

//parentElement

console.log(itemList.parentElement);

itemList.parentElement.style.backgroundColor = '#f4f4f4';

console.log(itemList.parentElement.parentElement.parentElement);

//CHILD NODE

console.log(itemList.childNodes); //put line breaks as text node.

//Children
console.log(itemList.children); // returns just items , does not put line break as text node.
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//firstchild
console.log(itemList.firstChild);

//first element child
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

//last child

console.log(itemList.lastChild);

//last element child
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 2';

//next sibling
console.log(itemList.nextSibling);

//next element sibling
console.log(itemList.nextElementSibling);

//previous sibling;
console.log(itemList.previousSibling);

//previous element sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

// create element
// create a div
var newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';

//add id
newDiv.id = 'hello1';

//add attribute;
newDiv.setAttribute('title', 'Hello Div');

// create textNode
var newDivText = document.createTextNode('Hello Word');

// add text to div
newDiv.appendChild(newDivText);

// select where we have to insert
var container = document.querySelector('.container');
var h1 = document.querySelector('h1');


//console.log(newDiv);

newDiv.style.fontSize = '30px';
//insert brefore method;
container.insertBefore(newDiv, h1);

var newLi = document.createElement('li');

newLi.className = 'list-group-item';

var newLiText = document.createTextNode('Hello Word');

newLi.appendChild(newLiText);

newLi.appendChild(newLiText);

var list = document.querySelector('#items');
list.insertBefore(newLi, list.children[0]);


