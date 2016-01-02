$(function(){

  Parse.initialize("BugIlMRAamMSfJgoyHSDqAMjPC3xEM8q4j1FbT3r", "RcABDkdIvWiMESVxD3CmIoVTF3KlyRFkY26CjkEp");

  function generateSuperheroesList (superheroes) {
    var $list = $('<div/>');
    var templateString = $('#superhero-template').html();
    var template = Handlebars.compile(templateString);

    superheroes.forEach((superhero) => {
      var data = {};
      ['name', 'img', 'power'].forEach((key) => {
          data[key] = superhero.get(key);
      });

      $list.append(template(data));
    });

    return $list.html();
  }

  var Superhero = Parse.Object.extend('Superhero');

  var query = new Parse.Query(Superhero);

  query.find({
    success: (superheroes) => {
      var list = generateSuperheroesList(superheroes);
      $('#superheroes-container').html(list);
    }
  });
});
