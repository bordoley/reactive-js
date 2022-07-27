/// <reference types="./Sink.d.ts" />
import { pipe } from '../../functions.mjs';
import { SinkLike_notify } from '../../util.mjs';
import { notify } from '../../util/SinkLike.mjs';
import { Object_properties, anyProperty, Object_init } from './Object.mjs';

const Sink_delegate = Symbol("Sink_delegate");
const mapPrototype = {
    [Object_properties]: {
        mapper: anyProperty,
    },
    [Object_init](delegate, mapper) {
        this[Sink_delegate] = delegate;
        this.mapper = mapper;
    },
    [SinkLike_notify](next) {
        const mapped = this.mapper(next);
        pipe(this[Sink_delegate], notify(mapped));
    },
};

export { Sink_delegate, mapPrototype };
