window.Kpcc = Ember.Application.create();

Kpcc.Store = DS.Store.extend({
    adapter: DS.RESTAdapter.extend({
        url         : "http://localhost:3000",
        namespace   : "api/v3"
    })
});

DS.RESTAdapter.map('Kpcc.Article', {
        assets: { embedded: 'always' }
    }
);

DS.RESTAdapter.map('Kpcc.Asset', {
        thumbnail : { embedded: 'always' },
        small     : { embedded: 'always' }
    }
);
