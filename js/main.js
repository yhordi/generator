import { generateName } from './generator'

let $firstName = $('#first-name')
$firstName.on("click", function(){
  $('#first-name-target').text(generateName('name'))
})
let $epic = $('#epic-name')
$epic.on("click", function(){
  $('#epic-name-target').text(generateName('epicName'))
})
