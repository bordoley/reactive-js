/// <reference types="./DisposableRefLike.create.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import DisposableLike__mixin from '../DisposableLike/DisposableLike.mixin.mjs';
import DisposableRefLike__mixin from './DisposableRefLike.mixin.mjs';

const DisposableRefLike__create = /*@__PURE__*/ (() => {
    const typedDisposableRefMixin = DisposableRefLike__mixin();
    return createInstanceFactory(mix(include(DisposableLike__mixin, typedDisposableRefMixin), function DisposableRef(instance, initialValue) {
        init(DisposableLike__mixin, instance);
        init(typedDisposableRefMixin, instance, initialValue);
        return instance;
    }));
})();

export { DisposableRefLike__create as default };
