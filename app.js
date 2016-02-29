$(document).ready(function(){
  $('#generator').on('click',appendDom);
  $('.container').on('click','button',removeFromDom);
});

function appendDom(){
  $('.container').append('<ul class="propertyRow"></ul>');
  var $el = $('.container').children().last();

  var propertyId = randomNumber(100,10000);
  var squareFoot = randomNumber(1000,10000);
  var valueSquareFoot = randomNumber(1,50);

  $el.append('<li>Property ID: ' + propertyId + '</li>');
  $el.append('<li>Square Foot: ' + squareFoot + '</li>');
  $el.append('<li>$' + valueSquareFoot + ' sq/ft</li>');
  $el.append('<button class="btn">Delete</button>');
  $el.hide().fadeToggle();

};

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

function removeFromDom(){
  $(this).parent().slideUp();

}
