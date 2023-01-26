/// <reference types="./Sink.create.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';

const Sink$create = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable$mixin), function CreateSink(instance) {
    init(Disposable$mixin, instance);
    return instance;
}, {}, {
    [SinkLike_notify](_) { },
})))();

export { Sink$create as default };
