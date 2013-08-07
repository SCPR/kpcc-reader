window.Kpcc = Ember.Application.create();

Kpcc.Store = DS.Store.extend({
    adapter: DS.RESTAdapter.extend({
        url         : "http://localhost:3000",
        namespace   : "api/v3"
    })
});




