//array to store items and add them to our list
const items = [];

//event listener for entering and adding items to our list
function enterItem() {
  //listening for the submit action 
    $('#js-shopping-list-form').submit(function(e) {
      //preventing default form submission behavior
        e.preventDefault();
        //item takes the value of the user's input in the form
        let item = $('#shopping-list-entry').val();
        //this line clears the form
        $('#js-shopping-list-form')[0].reset();
        //we now push the item as an object to our array 
        //with a completed property to use for our checkedItem function
        items.push({title:item, completed: false});
        //calling the render function (for what purpose?)
        render();
    });
}

//function's (purpose)
function render(){
  //this line logs the our array
  console.log({items})
  //??
  $('.shopping-list').html('');
  //for loop to display the items in the order they were added
  for(let i=0; i<items.length; i++){
    //appends the html code once the item is added 
    //we set the id of the listed item to the current iteration value of the loop
    //we also check whether the "completed" property === true to implement the checking behavior 
    $('.shopping-list').append(`
    <li id="${i}">
      <span class="shopping-item ${items[i].completed && "shopping-item__checked"}">${items[i].title}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
    </div>
  </li>`);
  }
}

//event listener to check and uncheck items in our list
function checkItem() {
  //listening for a click on the toggle
    $('.shopping-list').on('click','.shopping-item-toggle',function(e) {
      //index is the id of the listed item, but it's a string and not a number
        let index = $(e.currentTarget).parents('li').attr('id');
        //for loop to iterate through the array
        for(let i=0; i<items.length; i++){
          //line to check whether the checked item matches the one in the array
          //explicit conversion of index from string to number
          if(Number(index)===i){
            //if true, then we change the "completed" property to its opposite value
            items[i].completed = !items[i].completed;
          }
        }
        //calling the render function 
        render();
    })
}

//event listener to remove items from our list
function deleteItem() {
  //listening for click on delete
  $('.shopping-list').on('click','.shopping-item-delete',function(e) {
    //index takes the same value as in the checkItem function
      let index = $(e.currentTarget).parents('li').attr('id');
      //using .splice() to delete items from the array by index
      items.splice(index, 1);
      //calling the render function 
      render();
    })
}

function main() {
  //main function calls all the event listeners
    checkItem();
    deleteItem();
    enterItem();
    console.log('main')
}

$(main);
//loading up the main function
//main(); what's the difference?