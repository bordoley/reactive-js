/// <reference types="./Enumerator.forEach.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, ForEachLike_effect, } from "../../__internal__/types.js";
import { error, none, pipe } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../types.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "./MutableEnumerator.mixin.js";
const Enumerator_forEach = /*@__PURE__*/ (() => {
    const createForEachEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin(), Delegating_mixin(), Disposable_mixin), function ForEachEnumerator(instance, delegate, effect) {
        init(MutableEnumerator_mixin(), instance);
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_mixin, instance);
        pipe(instance, Disposable_add(delegate));
        instance[ForEachLike_effect] = effect;
        return instance;
    }, props({
        [ForEachLike_effect]: none,
    }), {
        [EnumeratorLike_move]() {
            if (this[MutableEnumeratorLike_reset]()) {
                return false;
            }
            const delegate = this[DelegatingLike_delegate];
            const delegateHasCurrent = delegate[EnumeratorLike_move]();
            try {
                if (delegateHasCurrent) {
                    const current = delegate[EnumeratorLike_current];
                    this[ForEachLike_effect](current);
                    this[EnumeratorLike_current] = current;
                }
            }
            catch (e) {
                // catch exceptions thrown by the effect function
                this[DisposableLike_dispose](error(e));
                this[MutableEnumeratorLike_reset]();
            }
            if (delegate[DisposableLike_isDisposed]) {
                this[DisposableLike_dispose]();
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (effect) => (delegate) => createForEachEnumerator(delegate, effect);
})();
export default Enumerator_forEach;
