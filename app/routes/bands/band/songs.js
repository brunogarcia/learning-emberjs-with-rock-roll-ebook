import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createSong: function() {
      var controller = this.get('controller');
      var band = this.modelFor('bands.band');
      var song = this.store.createRecord('song', {
        title: controller.get('title'),
        band: band
      });

      song.save().then(function() {
        controller.set('title', '');
      });
    },
    updateRating: function(params) {
      var song = params.item,
          rating = params.rating;

      if(song.get('rating') === rating) {
        rating = 0;
      }

      song.set('rating', rating);
      song.save();
    },
    didTransition: function() {
      var band = this.modelFor('bands.band');

      document.title = `${band.get('name')} songs - Rock & Roll`;
    },
  }
});
