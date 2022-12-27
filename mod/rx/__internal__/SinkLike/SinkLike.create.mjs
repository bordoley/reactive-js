/// <reference types="./SinkLike.create.d.ts" />
import { createInstanceFactory, mixin, include, init } from '../../../__internal__/mixins.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';

const create = /*@__PURE__*/ (() => createInstanceFactory(mixin(include(disposableMixin), function CreateSink(instance) {
    init(disposableMixin, instance);
    return instance;
}, {}, {
    [SinkLike_notify](_) { },
})))();

export { create as default };
