/// <reference types="./Enumerable.concatAll.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { pipe, returns } from "../../../functions.js";
import { EnumeratorLike_current, SourceLike_move, } from "../../../ix.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import DisposableRef_mixin from "../../../util/DisposableRef/__internal__/DisposableRef.mixin.js";
import MutableRef_get from "../../../util/MutableRef/__internal__/MutableRef.get.js";
import MutableRef_set from "../../../util/MutableRef/__internal__/MutableRef.set.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_move from "../../Enumerator/__internal__/Enumerator.move.js";
import MutableEnumerator_mixin from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_concatAll = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const typedDisposableRefMixin = DisposableRef_mixin();
    return pipe(createInstanceFactory(mix(include(Disposable_mixin, typedDisposableRefMixin, typedMutableEnumeratorMixin, delegatingMixin()), function ConcatAllEnumerator(instance, delegate) {
        init(Disposable_mixin, instance);
        init(typedDisposableRefMixin, instance, Disposable_disposed);
        init(typedMutableEnumeratorMixin, instance);
        init(delegatingMixin(), instance, delegate);
        pipe(instance, Disposable_add(delegate));
        return instance;
    }, props({}), {
        [SourceLike_move]() {
            const { [DelegatingLike_delegate]: delegate } = this;
            const innerEnumerator = MutableRef_get(this);
            if (Disposable_isDisposed(innerEnumerator) &&
                Enumerator_move(delegate)) {
                const next = pipe(delegate, Enumerator_getCurrent, Enumerable_enumerate());
                pipe(this, MutableRef_set(next));
            }
            while (!pipe(this, MutableRef_get, Disposable_isDisposed)) {
                const innerEnumerator = MutableRef_get(this);
                if (Enumerator_move(innerEnumerator)) {
                    this[EnumeratorLike_current] =
                        Enumerator_getCurrent(innerEnumerator);
                    break;
                }
                else if (Enumerator_move(delegate)) {
                    const next = pipe(delegate, Enumerator_getCurrent, Enumerable_enumerate());
                    pipe(this, MutableRef_set(next));
                }
                else {
                    pipe(this, Disposable_dispose());
                }
            }
        },
    })), Enumerable_lift, returns);
})();
export default Enumerable_concatAll;
