window.Kpcc = Ember.Application.create();

Kpcc.ApplicationAdapter = DS.RESTAdapter

DS.RESTAdapter.reopen({
    host        : "http://localhost:3000",
    namespace   : "api/v3"
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
