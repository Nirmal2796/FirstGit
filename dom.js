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

var odd = document.querySelectorAll('li:nth-child(odd)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
}

var second = document.querySelectorAll('li');
second[1].style.color = 'green';