import DS from 'ember-data';

export default DS.RESTSerializer.extend(
    DS.EmbeddedRecordsMixin, {
        attrs: {
            assets      : { embedded: 'always' },
            category    : { embedded: 'always' }
        },
        isNewSerializerAPI: true
    }
);