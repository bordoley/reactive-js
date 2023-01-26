/// <reference types="./Sink.create.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';

const Sink_create = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable_mixin), function CreateSink(instance) {
    init(Disposable_mixin, instance);
    return instance;
}, {}, {
    [SinkLike_notify](_) { },
})))();

export { Sink_create as default };
