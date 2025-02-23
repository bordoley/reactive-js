/// <reference types="./Disposable.disposed.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { DisposableLike_dispose } from "../../../utils.js";
import DisposableMixin from "../../__mixins__/DisposableMixin.js";
const Disposable_disposed = 
/*@__PURE__*/ (() => {
    const disposed = mixInstanceFactory(include(DisposableMixin), function DisposedDisposable(instance) {
        init(DisposableMixin, instance);
        return instance;
    })();
    disposed[DisposableLike_dispose]();
    return disposed;
})();
export default Disposable_disposed;
