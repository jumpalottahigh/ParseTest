//THIS PART DEALS WITH DEFAULT VALUES
var SuperheroModels = (function () {

  var SuperheroParseModel = Parse.Object.extend('Superhero');

  function Superhero() {
    SuperheroParseModel.call(this);
    this.set('name', 'Unknown');
  }

  Superhero.prototype = Object.create(SuperheroParseModel.prototype);

  return {
    Superhero
  };

}());

var unknown = new SuperheroModels.Superhero();

unknown.set('img', 'http://gosho.e.pich');

unknown.save(null, {
  success: () => {
      console.log('Saved!');
  }
});

//THIS PART IS HOW YOU DO QUERY WORK
var query = new Parse.Query(Superhero);

query.find({
  success: (superheroes) => {
    superheroes.forEach((superhero) => {
      var div = '<div>';
      div += superhero.get('name');
      div += '</div>';
      document.body.innerHTML += div;

      superhero.get('power').forEach((p) => console.log(p));
    });
  }
});

//THIS PART IS OBJECT CREATION
var supergirl = new Superhero();
supergirl.set('name', 'Supergirl');
supergirl.set('img', 'http://wwwimage.cbsstatic.com/thumbnails/videos/w1280/CBS_Production_Entertainment_VMS/2015/07/07/479514179519/Supergirl_1920x1080_586896_640x360.jpg');
supergirl.set('power', ['super strength', 'laser eyes', 'flying']);

supergirl.save(null, () => {
  console.log('Supergirl saved!');
});
