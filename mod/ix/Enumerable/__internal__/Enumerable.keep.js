/// <reference types="./Enumerable.keep.d.ts" />

import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { error, none, partial, pipe } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../ix.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import Disposable_mixin from "../../../utils//Disposable/__internal__/Disposable.mixin.js";
import * as Disposable from "../../../utils/Disposable.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_keep = /*@__PURE__*/ (() => {
    const KeepEnumerator_delegate = Symbol("KeepEnumerator_delegate");
    const KeepEnumerator_predicate = Symbol("KeepEnumerator_predicate");
    const createKeepEnumerator = createInstanceFactory(mix(include(Disposable_mixin), function KeepEnumerator(instance, delegate, predicate) {
        init(Disposable_mixin, instance);
        pipe(instance, Disposable.add(delegate));
        instance[KeepEnumerator_delegate] = delegate;
        instance[KeepEnumerator_predicate] = predicate;
        return instance;
    }, props({
        [KeepEnumerator_delegate]: none,
        [KeepEnumerator_predicate]: none,
        [EnumeratorLike_isCompleted]: false,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return this[KeepEnumerator_delegate][EnumeratorLike_current];
        },
        get [EnumeratorLike_hasCurrent]() {
            unsafeCast(this);
            return this[KeepEnumerator_delegate][EnumeratorLike_hasCurrent];
        },
        [EnumeratorLike_move]() {
            if (this[EnumeratorLike_isCompleted]) {
                return false;
            }
            const delegate = this[KeepEnumerator_delegate];
            const predicate = this[KeepEnumerator_predicate];
            try {
                while (delegate[EnumeratorLike_move]() &&
                    !predicate(this[EnumeratorLike_current])) { }
            }
            catch (e) {
                // Catch errors thrown by the predicate
                this[DisposableLike_dispose](error(e));
            }
            if (delegate[DisposableLike_isDisposed]) {
                this[DisposableLike_dispose]();
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (predicate) => pipe(createKeepEnumerator, partial(predicate), Enumerable_lift);
})();
export default Enumerable_keep;
