window.Kpcc = Ember.Application.create();

Kpcc.Store = DS.Store.extend({
    adapter: DS.RESTAdapter.extend({
        url         : "http://www.scpr.org",
        namespace   : "api/v3"
    })
});

DS.RESTAdapter.map('Kpcc.Article', {
        assets       : { embedded: 'always' },
        audio        : { embedded: 'always' },
        category     : { embedded: 'always' }
    }
);

DS.RESTAdapter.map('Kpcc.Asset', {
        thumbnail : { embedded: 'always' },
        small     : { embedded: 'always' },
        large     : { embedded: 'always' },
        full      : { embedded: 'always' }
    }
);


Kpcc.ApplicationSerializer = DS.RESTSerializer.extend({
  normalizePayload: function(type, payload) {
    delete payload.version;
    delete payload.status;
    return payload;
  }
});
