import { generateName } from './generator'

let $firstName = $('#first-name');
let $epic = $('#epic-name');
let $nick = $('#nickname');
let $tab = $('#tab');
let keys = [];

$('.menu-item').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('pressed');
  toggleKey($(this))
});

let bindGenerate = () => {
  $('#generate').on('click', (e) => {
    e.preventDefault();
    getKeys('.menu .item-container a').forEach((key) => {
      $('#'+ key +'-name-target').html(generateName(key));
      $('#'+ key +'-name-target').attr('data-toggle', 'true');
      checkName(key);
    });
  });
}

let bindTrashClick = () => {
  $('.fa-trash').on('click', (e) => {
    e.preventDefault();
    let key = $(e.target).siblings('a')[0].dataset.key
    removeName(key)
    checkName(key)
  });
}

let removeName = (key) => {
  $('#'+ key +'-name-target').html('');
}

let addTrash = (listItem) => {
  listItem.siblings('span').removeClass('hidden')
};

let removeTrash = (listItem) => {
  listItem.siblings('span').addClass('hidden')
};

let checkName = (key) => {
  if($('#'+ key +'-name-target')[0].textContent.length > 0) {
    let $target = $('.sidebar #' + key)
    addTrash($target)
  } else {
    removeTrash($target)
  }
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

let getKeys = (parent) => {
  let keys = []
  let $links = $(parent)
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

const hideSidebar = () => {
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
bindTrashClick()
$('#first').click()
