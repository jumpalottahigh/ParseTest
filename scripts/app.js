$(function(){
  Parse.initialize("BugIlMRAamMSfJgoyHSDqAMjPC3xEM8q4j1FbT3r", "RcABDkdIvWiMESVxD3CmIoVTF3KlyRFkY26CjkEp");

  var Superhero = Parse.Object.extend('Superhero');

  var query = new Parse.Query(Superhero);

  $('#tb-img').on('input', function() {
    var img = $(this).val();
    $('#img-new-hero').attr('src', img);
  });

  $('#superheroes-container').on('click', '.btn-delete', function(){
    var id = $(this).attr('data-superhero-id');
    console.log(id);
    var query = new Parse.Query(Superhero);

    query.get(id, {
      success: (superhero) => {
        superhero.destroy({
          success: () => {
            console.log('dest');
          }
        });
      }
    });

  });

  $('#btn-add-superhero').on('click', function() {
    var data = {
      name: $('#tb-name').val(),
      img: $('#tb-img').val(),
      power: $('#tb-powers').val().split(/,/)
    };

    var superhero = new Superhero();
    ['name', 'img', 'power'].forEach((key) => {
        superhero.set(key, data[key]);
    });

    superhero.save(null, {
      success: () => {
        console.log('Saved!');
        var $list = $('<div/>');
        getSuperheroItemFunc($list)(superhero);
        $('#superheroes-container').append($list.html());
      }
    });

  });

  var templateString = $('#superhero-template').html();
  var template = Handlebars.compile(templateString);

  function getSuperheroItemFunc($list) {
    return function(superhero){
      var data = {};
      ['name', 'img', 'power'].forEach((key) => {
        data[key] = superhero.get(key);
      });
      data.id = superhero.id;
      $list.append(template(data));
    }
  }

  function generateSuperheroesList (superheroes) {
    var $list = $('<div/>');
    superheroes.forEach(getSuperheroItemFunc($list));

    return $list.html();
  }



  query.find({
    success: (superheroes) => {
      var list = generateSuperheroesList(superheroes);
      $('#superheroes-container').html(list);
    }
  });
});
