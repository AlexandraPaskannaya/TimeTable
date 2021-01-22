let show_button = document.querySelector('button[data-action="show"]');
let hide_button = document.querySelector('button[data-action="hide"]');
let list_container = document.querySelector('.list-container');
let check_li = document.querySelectorAll("ul li");

document.addEventListener('click', function(event) {
  let action = event.target.dataset.action;
  if (!action) return;

  this.show = function() {
    console.log('show function');

    check_li.forEach((e) =>{
      if (e.firstElementChild.checked == true){
        e.classList.remove('checked');
        show_button.classList.remove('active');
        hide_button.classList.add('active');
      }
  });
}

  this.hide = function() {
    console.log('hide function');

    check_li.forEach((e) =>{
      if (e.firstElementChild.checked == true){
        e.classList.add('checked')
        hide_button.classList.remove('active');
        show_button.classList.add('active');
      }
    })
  };

  if(event.target.classList.contains('active')) {
    this[action]();
  }
 });
 
