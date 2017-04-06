import { generateName } from './generator'

let $firstName = $('#first-name')
let $epic = $('#epic-name')
let $nick = $('#nickname')
let $sidebar = $('.sidebar')

$firstName.on("click", function(){
  $('#first-name-target').text(generateName('name'))
})
$epic.on("click", function(){
  $('#epic-name-target').text(generateName('epicName'))
})
$nick.on("click", function(){
  $('#nickname-target').text('The ' +generateName('nickname'))
})
$sidebar.on("click", function(){
  // $sidebar.removeClass('offscreen')
  // if(!clicked) {
  //   let clicked;
  // }
  $sidebar.toggleClass('offscreen')
  sidebarSwitch()
})

let sidebarSwitch = () => {
  // if(clicked == true) {
  //   $sidebar.removeClass('offscreen')
  //   let clicked = false
  // } else {
  //   let clicked = true
  //   $sidebar.addClass('offscreen')
  // }

}
