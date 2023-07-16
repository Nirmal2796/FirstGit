var form = document.getElementById('addForm');
var ul = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);

//delete event
ul.addEventListener('click', removeItem);

//Filter event
filter.addEventListener('keyup', filterItems);


//Add item
function addItem(e) {
    //prevent initial behavior in order to prevent normal submission.
    e.preventDefault();

    // Get Input value

    var newItem = document.getElementById('item').value;
    var itemDesc = document.getElementById('description').value;

    //create new li element
    var li = document.createElement('li');
    //add a class name
    li.className = 'list-group-item';

    //add text node with input value to li node ;
    li.appendChild(document.createTextNode(newItem));
    
    li.appendChild(document.createTextNode(' '+itemDesc));


    // create delete button element
    var delButton = document.createElement('button');
    //add classes to del button
    delButton.className = 'btn btn-danger btn-sm float-right delete ';

    //append text node to button.
    delButton.appendChild(document.createTextNode('X'));

    //append btn to li
    li.appendChild(delButton);

    // create edit button 
    var editButton = document.createElement('button');
    editButton.className = 'btn btn-secondary btn-sm float-right mr-1 edit';
    editButton.appendChild(document.createTextNode('EDIT'));

    li.appendChild(editButton);

    // add li to ul  or append li to list
    ul.appendChild(li);

    
    

}

//Remove Item
function removeItem(e) {

    if (e.target.classList.contains('delete')) {
        if (confirm('Are you Sure?')) {
            var li = e.target.parentElement;
            ul.removeChild(li);

        }
    }


}




// Filter items
function filterItems(e) {
    //convert to lowercase
    var text = e.target.value.toLowerCase();

    // get all li
    var items = ul.getElementsByTagName('li');
    
    //convert to an array
    Array.from(items).forEach(function (item) {
        //we used first child coz li has 3 child ,1 txt and 2 buttons
        var itemName = item.firstChild.textContent;

        //var len = itemName.length();
        
        

        var desc = item.childNodes[1].textContent;

        if (itemName.toLowerCase().indexOf(text) != -1 || desc.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });

}