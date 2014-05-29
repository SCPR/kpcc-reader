Kpcc.Article = DS.Model.extend({
    title           : DS.attr(),
    short_title     : DS.attr(),
    published_at    : DS.attr(),
    byline          : DS.attr(),
    teaser          : DS.attr(),
    body            : DS.attr(),
    public_url      : DS.attr(),
    assets          : DS.hasMany('asset'),
    audio           : DS.hasMany("audio"),
    category        : DS.belongsTo('category'),
});

Kpcc.ArticleSerializer = Kpcc.ApplicationSerializer.extend(
    DS.EmbeddedRecordsMixin, {
        attrs: {
            assets      : { embedded: 'always' },
            category    : { embedded: 'always' },
            audio       : { embedded: 'always' }
        }
    }
)
