import { generateName } from './generator'

let $firstName = $('#first-name');
let $epic = $('#epic-name');
let $nick = $('#nickname');
let $tab = $('#tab');
$('.menu-item').on('click', function(e){
  e.preventDefault();
  this.dataset.key
  debugger
});
// $firstName.on("click", function(){
//   $('#first-name-target').text(generateName('name'))
// });
// $epic.on("click", function(){
//   $('#epic-name-target').text(generateName('epicName'))
// });
// $nick.on("click", function(){
//   $('#nickname-target').text('The ' + generateName('nickname'))
// });

$('#generate').on('click', function(e){
  e.preventDefault()
  console.log(e)
})

$tab.on("click", function(){
  toggleSidebar()
});

$('body').on('click', function(e){
  if(!$(e.target).closest('.sidebar')) {
    hideSidebar()
  }
});

let nameOptions = {}


let sidebarClick = () => {
  if($('.offscreen').length != 0) {

  } else {
    $('.content').unbind()
  }
};

let hideSidebar = () => {
  $('.sidebar').addClass('offscreen')
}

let toggleSidebar = () => {
  sidebarClick()
  $('.sidebar').toggleClass('offscreen')
};
