/// <reference types="./DisposableRef.create.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../../__internal__/mixins.mjs';
import Disposable_mixin from '../../../Disposable/__internal__/Disposable.mixin.mjs';
import DisposableRef_mixin from './DisposableRef.mixin.mjs';

const DisposableRef_create = /*@__PURE__*/ (() => {
    const typedDisposableRefMixin = DisposableRef_mixin();
    return createInstanceFactory(mix(include(Disposable_mixin, typedDisposableRefMixin), function DisposableRef(instance, initialValue) {
        init(Disposable_mixin, instance);
        init(typedDisposableRefMixin, instance, initialValue);
        return instance;
    }));
})();

export { DisposableRef_create as default };
