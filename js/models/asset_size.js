// Object which holds each asset size.
Kpcc.AssetSizes = Ember.Namespace.create();

// Base object for the asset sizes, from which to extend.
Kpcc.AssetSize = DS.Model.extend({
    url : DS.attr('string')
});

