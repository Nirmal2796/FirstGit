var form = document.getElementById('addForm');
var ul = document.getElementById('items');

//Form submit event
form.addEventListener('submit', addItem);

//delete event
ul.addEventListener('click', removeItem);

//Add item
function addItem(e) {
    //prevent initial behavior in order to prevent normal submission.
    e.preventDefault();

    // Get Input value

    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    //add a class name
    li.className = 'list-group-item';

    //add text node with input value to li node ;
    li.appendChild(document.createTextNode(newItem));

    // create delete button element
    var delButton = document.createElement('button');
    //add classes to del button
    delButton.className = 'btn btn-danger btn-sm float-right delete ';

    //append text node to button.
    delButton.appendChild(document.createTextNode('X'));

    //append btn to li
    li.appendChild(delButton);

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



