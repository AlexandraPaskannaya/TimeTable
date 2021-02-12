let show_button = document.querySelector('button[data-action="show"]');
let hide_button = document.querySelector('button[data-action="hide"]');
let addBtn_button = document.querySelector('button[data-action="addBtn"]');
let list_container = document.querySelector('.list-container');
let check = document.querySelectorAll("#li");
let add_hide = document.querySelector('.add_container');

let input = document.querySelector('#input');
let add_plus = document.querySelector('#add');
let result = document.getElementById('result');


document.addEventListener('click', function(event) {
  let action = event.target.dataset.action;
  if (!action) return;

  this.show = function() {
    console.log('show function');

    check.forEach((e) =>{
      if (e.firstElementChild.checked == true){
        e.classList.remove('checked');
        show_button.classList.remove('active');
        hide_button.classList.add('active');
      }
  });
}

  this.hide = function() {
    console.log('hide function');

    check.forEach((e) =>{
      if (e.firstElementChild.checked == true){
        e.classList.add('checked')
        hide_button.classList.remove('active');
        show_button.classList.add('active');
      }
    })
  };
/*
  this.addBtn = function() {
    console.log(event.target);

    addBtn_button.classList.toggle('active');
    addBtn_button.classList.remove('hide_input');
    addBtn_button.classList.add('show_input');
  }*/

  if(event.target.classList.contains('active')) {
    this[action]();
  }
 });

 // localStorage
 let todos;
 
 function tolacal() {
  todos = result.innerHTML;
  localStorage.setItem('todos', todos);
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

// добавляем введенную задачу в конец списка ul

 function createDeleteElements(value) {
   console.log(value)

  let liLast = document.createElement('li');
  let input = document.createElement('input');
  let label = document.createElement('label');

  liLast.className = 'li';

   input.type = 'checkbox';
   liLast.prepend(input);

   liLast.append(label);
   label.textContent = ' ' + value;
   
   result.appendChild(liLast);
   tolacal()
 }

if(localStorage.getItem('todos')){
  result.innerHTML = localStorage.getItem('todos')
}