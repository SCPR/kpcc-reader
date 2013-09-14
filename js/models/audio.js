Kpcc.Audio = DS.Model.extend({
    description     : DS.attr('string'),
    url             : DS.attr('string'),
    byline          : DS.attr('string'),
    position        : DS.attr('number'),
    duration        : DS.attr('number'),
    filesize        : DS.attr('number')
});
