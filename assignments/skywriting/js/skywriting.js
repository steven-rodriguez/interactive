$(function() {
  var $input = $('#text-input');
  var $destination = $('#text-destination');
  var space = getHTMLForCharacter(' ');

  function getHTMLForCharacter(character) {
    var characterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
    var characterHTML = '<div class="letter" data-character="' + character + '">' + characterDefinition + '</div>';

    if ( characterDefinition != undefined ) {
      return characterHTML;
    }
  }

  function writeText() {
    var wordArray = [];
    var words = $input.val().split(' ');

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var letters = word.split('');
      var letterElements = letters.map(getHTMLForCharacter);
      wordArray.push(
        '<div class="word">' +
        letterElements.join('') +
        '</div>'
      );
    }

    $destination.html( wordArray.join(space) );
  }

  $input.on('keyup', function() {
    writeText();
  });
});
