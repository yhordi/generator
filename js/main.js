import { generateName } from './generator'

let $firstName = $('#first-name');
let $epic = $('#epic-name');
let $nick = $('#nickname');
let $tab = $('#tab');

$firstName.on("click", function(){
  $('#first-name-target').text(generateName('name'))
});
$epic.on("click", function(){
  $('#epic-name-target').text(generateName('epicName'))
});
$nick.on("click", function(){
  $('#nickname-target').text('The ' + generateName('nickname'))
});
$tab.on("click", function(){
  toggleSidebar()
});

let sidebarClick = () => {
  if($('.offscreen').length != 0) {
    $('.content').on('click', function(){
      toggleSidebar()
    });
  } else {
    $('.content').unbind()
  }
};

let toggleSidebar = () => {
  sidebarClick()
  $('.sidebar').toggleClass('offscreen')
};
