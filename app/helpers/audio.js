import Ember from 'ember';
// import Handlebars from 'handlebars';

export function audio(url) {
  if(!this.get('audio.length')){
    return "";
  }
  url = this.get('audio.firstObject.url');

  return new Ember.Handlebars.SafeString(
    '<audio controls src="'+url+'"></audio>'
  );
}

export default Ember.Helper.helper(audio);
