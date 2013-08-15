Kpcc.Asset = DS.Model.extend({
    title       : DS.attr('string'),
    caption     : DS.attr('string'),
    owner       : DS.attr('string'),

    thumbnail   : DS.belongsTo('Kpcc.AssetSizes.Thumbnail',
                    { embedded: 'always' }),

    small       : DS.belongsTo('Kpcc.AssetSizes.Small',
                    { embedded: 'always' }),

    large       : DS.belongsTo('Kpcc.AssetSizes.Large',
                    { embedded: 'always' }),

    full        : DS.belongsTo('Kpcc.AssetSizes.Full',
                    { embedded: 'always' })
});
