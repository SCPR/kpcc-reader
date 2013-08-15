window.Kpcc = Ember.Application.create();

Kpcc.Store = DS.Store.extend({
    adapter: DS.RESTAdapter.extend({
        url         : "http://www.scpr.org",
        namespace   : "api/v3"
    })
});

DS.RESTAdapter.map('Kpcc.Article', {
        assets       : { embedded: 'always' },
        category     : { embedded: 'always' }
    }
);

DS.RESTAdapter.map('Kpcc.Asset', {
        thumbnail : { embedded: 'always' },
        small     : { embedded: 'always' }
    }
);
