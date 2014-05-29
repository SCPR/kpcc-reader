window.Kpcc = Ember.Application.create();

Kpcc.ApplicationAdapter = DS.RESTAdapter;

DS.RESTAdapter.reopen({
    host        : "http://localhost:3000",
    namespace   : "api/v3"
});

Kpcc.ApplicationSerializer = DS.ActiveModelSerializer.extend({
    normalizePayload: function(payload) {
        delete payload.version;
        delete payload.status;

        return payload;
    }
});
