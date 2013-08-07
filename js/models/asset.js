Kpcc.Asset = DS.Model.extend({
    title       : DS.attr('string'),
    thumbnail   : DS.belongsTo('Kpcc.AssetThumbnail', { embedded: 'always' }),
    small       : DS.belongsTo('Kpcc.AssetSmall', { embedded: 'always' })
});
