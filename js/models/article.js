Kpcc.Article = DS.Model.extend({
    title       : DS.attr('string'),
    byline      : DS.attr('string'),
    teaser      : DS.attr('string'),
    body        : DS.attr('string'),
    public_url  : DS.attr('string')
})
