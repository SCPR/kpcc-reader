window.Kpcc = Ember.Application.create();

Kpcc.ApplicationAdapter = DS.RESTAdapter;

DS.RESTAdapter.reopen({
    host        : "https://www.scpr.org",
    namespace   : "api/v3"
});

Kpcc.ApplicationSerializer = DS.ActiveModelSerializer.extend({
    normalizePayload: function(payload) {
        delete payload.meta;
        return payload;
    }
});
