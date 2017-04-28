import { generateName } from './generator'

let $firstName = $('#first-name');
let $epic = $('#epic-name');
let $nick = $('#nickname');
let $tab = $('#tab');
let keys = [];
$('.menu-item').on('click', function(e){
  e.preventDefault();
  $(this).parent().toggleClass('pressed');
  toggleKey($(this))
});

let bindGenerate = () => {
  $('#generate').on('click', (e) => {
    e.preventDefault()
    getKeys().forEach((key)=> {
      $('#'+ key +'-name-target').html(generateName(key))
    })
  })
}

$tab.on("click", function(){
  toggleSidebar()
});

$('body').on('click', function(e){
  if(!$(e.target).closest('.sidebar')) {
    hideSidebar()
  }
});

let toggleKey = ($this) => {
  if($this.attr('data-toggle') == 'true') {
    $this.removeAttr('data-toggle')
  } else {
    $this.attr('data-toggle', 'true')
  }
}

let getKeys = () => {
  let keys = []
  let $links = $('.menu li a')
  $.each($links, (index, link) => {
    if($(link).attr('data-toggle') == 'true'){
      keys.push(link.dataset["key"])
    }
  });
  return keys;
}

let sidebarClick = () => {
  if($('.offscreen').length == 0) {
    console.log('something')
    $('.content').unbind()
  } else {
    // $('#generate').unbind()
  }
};

let hideSidebar = () => {
  $('.sidebar').addClass('offscreen')
}

let toggleSidebar = () => {
  sidebarClick()
  $('.sidebar').toggleClass('offscreen')
};

bindGenerate()
$('#first').click()
