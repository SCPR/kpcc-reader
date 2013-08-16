Kpcc.ArticleController = Ember.ObjectController.extend({
    imgWrapperStyle: function() {
        var assets, url;

        assets = this.get('assets');
        if(!assets.get('length')) return '';

        url = assets.get('firstObject.small.url');
        return "background:url("+url+") no-repeat;background-size:cover;";
    }.property('assets.@each')
});
