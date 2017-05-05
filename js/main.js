import { generateName } from './generator'

const $firstName = $('#first-name');
const $epic = $('#epic-name');
const $nick = $('#nickname');
const $tab = $('#tab');
const keys = [];

$('.menu-item').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('pressed');
  toggleKey($(this));
});

const bindGenerate = () => {
  $('#generate').on('click', (e) => {
    e.preventDefault();
    getKeys('.menu .item-container a').forEach((key) => {
      $('#'+ key +'-name-target').html(generateName(key));
      $('#'+ key +'-name-target').attr('data-toggle', 'true');
      checkName(key);
    });
  });
}

const bindTrashClick = () => {
  $('.fa-trash').on('click', (e) => {
    e.preventDefault();
    const key = $(e.target).siblings('a')[0].dataset.key
    removeName(key);
    checkName(key);
  });
}

const removeName = (key) => {
  $('#'+ key +'-name-target').html('');
}

const addTrash = (listItem) => {
  listItem.siblings('span').removeClass('hidden');
};

const removeTrash = (listItem) => {
  listItem.siblings('span').addClass('hidden')
};

const checkName = (key) => {
  const $target = $('.sidebar #' + key);
  if($('#'+ key +'-name-target')[0].textContent.length > 0) {
    addTrash($target);
  } else {
    removeTrash($target);
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

const toggleKey = ($this) => {
  if($this.attr('data-toggle') == 'true') {
    $this.removeAttr('data-toggle');
  } else {
    $this.attr('data-toggle', 'true');
  }
}

const getKeys = (parent) => {
  const keys = [];
  const $links = $(parent);
  $.each($links, (index, link) => {
    if($(link).attr('data-toggle') == 'true'){
      keys.push(link.dataset["key"]);
    }
  });
  return keys;
}

const sidebarClick = () => {
  if($('.offscreen').length == 0) {
    $('.content').unbind();
  } else {
    // $('#generate').unbind()
  }
};

const hideSidebar = () => {
  $('.sidebar').addClass('offscreen')
}

const toggleSidebar = () => {
  sidebarClick();
  $('.sidebar').toggleClass('offscreen');
  toggleIcon();
};

const toggleIcon = () => {
  $('#tab').toggleClass('fa-close');
  $('#tab').toggleClass('fa-bars');
}

bindGenerate();
bindTrashClick();
$('#first').click();
