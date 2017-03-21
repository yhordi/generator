import { generateFirstName, generateEpicName } from './generator'
import { syllables, epicName } from  './libraries'

let $firstName = $('#first-name')
$firstName.on("click", function(){
  $('#first-name-target').text(generateFirstName(syllables))
})
let $epic = $('#epic-name')
$epic.on("click", function(){
  $('#epic-name-target').text(generateEpicName(epicName))
})
