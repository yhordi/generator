import generate from './generator'
import { syllables } from  './libraries'

let $button = $('#generate')
$button.on("click", function(){
  $('#name-target').text(generate(syllables))
})
