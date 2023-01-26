/// <reference types="./DisposableRef.create.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import Disposable$mixin from '../Disposable/Disposable.mixin.mjs';
import DisposableRef$mixin from './DisposableRef.mixin.mjs';

const DisposableRef$create = /*@__PURE__*/ (() => {
    const typedDisposableRefMixin = DisposableRef$mixin();
    return createInstanceFactory(mix(include(Disposable$mixin, typedDisposableRefMixin), function DisposableRef(instance, initialValue) {
        init(Disposable$mixin, instance);
        init(typedDisposableRefMixin, instance, initialValue);
        return instance;
    }));
})();

export { DisposableRef$create as default };
