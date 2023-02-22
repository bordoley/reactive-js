/// <reference types="./DisposableRef.create.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../../__internal__/mixins.js";
import Disposable_mixin from "../../../Disposable/__internal__/Disposable.mixin.js";
import DisposableRef_mixin from "./DisposableRef.mixin.js";
const DisposableRef_create = /*@__PURE__*/ (() => {
    const typedDisposableRefMixin = DisposableRef_mixin();
    return createInstanceFactory(mix(include(Disposable_mixin, typedDisposableRefMixin), function DisposableRef(instance, initialValue) {
        init(Disposable_mixin, instance);
        init(typedDisposableRefMixin, instance, initialValue);
        return instance;
    }));
})();
export default DisposableRef_create;
