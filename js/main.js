import { generateName } from './generator'

let $firstName = $('#first-name');
let $epic = $('#epic-name');
let $nick = $('#nickname');
let $tab = $('#tab');
let keys = [];

$('.menu-item').on('click', function(e){
  e.preventDefault();
  let $listItem = $(this).parent()
  $listItem.toggleClass('pressed');
  toggleKey($(this))
  checkContent()
  toggleTrash($listItem)
});

let toggleTrash = (listItem) => {
  listItem.children('span').toggleClass('hidden')
};

let checkContent = () => {
  let $targets = $('.content span')
  $.each($targets, (index, target) =>{
    let link = $("a[data-key='" + target.dataset.key + "']")
    if(target.textContent.length > 0) {
      link.siblings().toggleClass('hidden')
    }
  });
}

let bindGenerate = () => {
  $('#generate').on('click', (e) => {
    e.preventDefault();
    getKeys().forEach((key)=> {
      $('#'+ key +'-name-target').html(generateName(key))
    });
  });
}

$tab.on("click", function(){
  toggleSidebar();
});

$('body').on('click', function(e){
  if(!$(e.target).closest('.sidebar')) {
    hideSidebar();
  }
});

let toggleKey = ($this) => {
  if($this.attr('data-toggle') == 'true') {
    $this.removeAttr('data-toggle');
  } else {
    $this.attr('data-toggle', 'true');
  }
}

let getKeys = () => {
  let keys = []
  let $links = $('.menu li a')
  $.each($links, (index, link) => {
    if($(link).attr('data-toggle') == 'true'){
      keys.push(link.dataset["key"]);
    }
  });
  return keys;
}

let sidebarClick = () => {
  if($('.offscreen').length == 0) {
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
  toggleIcon()
};

let toggleIcon = () => {
  $('#tab').toggleClass('fa-close')
  $('#tab').toggleClass('fa-bars')
}

bindGenerate()
$('#first').click()
