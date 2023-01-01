/// <reference types="./SinkLike.create.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';

const SinkLike__create = /*@__PURE__*/ (() => createInstanceFactory(mix(include(DisposableLike__disposableMixin), function CreateSink(instance) {
    init(DisposableLike__disposableMixin, instance);
    return instance;
}, {}, {
    [SinkLike_notify](_) { },
})))();

export { SinkLike__create as default };
