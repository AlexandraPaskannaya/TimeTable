
let show_button = document.querySelector('button[data-action="show"]');
let hide_button = document.querySelector('button[data-action="hide"]');
let addBtn_button = document.querySelector('button[data-action="addBtn"]');
let list_container = document.querySelector('.list-container');
let check = document.getElementsByClassName('todo_li');
let add_hide = document.querySelector('.add_container');

let input = document.querySelector('#input');
let add_plus = document.querySelector('#add');
let todo_list = document.getElementById('todo_list');


 // localStorage
 let todos;
 
 function tolacal() {
  todos = todo_list.innerHTML;
  localStorage.setItem('todos', todos);
  }

 if(localStorage.getItem('todos')){
  todo_list.innerHTML = localStorage.getItem('todos')
  }

 // вешаем обработчик на кнопку "Добавить"

addBtn_button.addEventListener("click", function() {
   console.log('add button');
 
   if (add_hide.classList.contains("hide_input")) {
    add_hide.classList.toggle("show_input");
  } 
   this.classList.toggle("active");
 })

//вешаем обработчик на плюс в input 

 add_plus.addEventListener('click', function() {
  if(input.value === '') return;
  
  createDeleteElements(input.value);
  input.value = '';
  tolacal()
 }) 

// добавляем введенную задачу в конец списка ul, создаем li

 function createDeleteElements(value) {
   console.log(value)

  let liLast = document.createElement('li');
  liLast.classList.add('todo_li');
  todo_list.appendChild(liLast);

// создаем input and label
  let input = document.createElement('input');
  let label = document.createElement('label');
  input.type = 'checkbox';
  liLast.prepend(input);

  liLast.append(label);
  label.textContent = ' ' + value;

// создаем delete Button
  let deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
  deleteBtn.classList.add('deletBtn');
  liLast.appendChild(deleteBtn);
    
//добавляем append to list-container
todo_list.appendChild(liLast);

  tolacal()
 }


// вешаем обработчик на кнопку "Delete"
todo_list.addEventListener('click', function(event){
  console.log(event.target)

  let item = event.target;
    if (item.classList[0] === 'deletBtn'){
  let item_delet = item.parentElement;
   item_delet.remove(); 
  }
})


// вешаем обработчик на кнопку "Show"
  show_button.addEventListener('click', function(event){
       console.log('show button')
  
  Array.prototype.forEach.call(check , function(elem) {
      if (elem.firstElementChild.checked == true){
        elem.classList.remove('checked');

        show_button.classList.add('active');
        hide_button.classList.remove('active');
        }
    });
  })

  // вешаем обработчик на кнопку "Hide"

  hide_button.addEventListener('click', function(){
    console.log('hide button')

    Array.prototype.forEach.call(check , function(elem) {
      if (elem.firstElementChild.checked == true){
        elem.classList.add('checked');

        hide_button.classList.add('active');
        show_button.classList.remove('active');
        }
    });
  })
