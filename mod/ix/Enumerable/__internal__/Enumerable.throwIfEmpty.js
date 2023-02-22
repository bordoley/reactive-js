/// <reference types="./Enumerable.throwIfEmpty.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_throwIfEmpty from "../../../containers/StatefulContainer/__internal__/StatefulContainer.throwIfEmpty.js";
import { error, none, pipe } from "../../../functions.js";
import { SourceLike_move, } from "../../../ix.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import DelegatingEnumerator_mixin from "../../Enumerator/__internal__/DelegatingEnumerator.mixin.js";
import DelegatingEnumerator_move from "../../Enumerator/__internal__/DelegatingEnumerator.move.js";
import Enumerable_liftT from "./Enumerable.liftT.js";
const Enumerable_throwIfEmpty = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    const ThrowIfEmptyEnumerator_isEmpty = Symbol("");
    return pipe(createInstanceFactory(mix(include(Disposable_mixin, typedDelegatingEnumeratorMixin), function ThrowIfEmptyEnumerator(instance, delegate, factory) {
        init(Disposable_mixin, instance);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance[ThrowIfEmptyEnumerator_isEmpty] = true;
        pipe(instance, Disposable_addIgnoringChildErrors(delegate));
        pipe(delegate, Disposable_onComplete(() => {
            let err = none;
            if (instance[ThrowIfEmptyEnumerator_isEmpty]) {
                try {
                    err = error(factory());
                }
                catch (e) {
                    err = error(e);
                }
            }
            pipe(instance, Disposable_dispose(err));
        }));
        return instance;
    }, props({
        [ThrowIfEmptyEnumerator_isEmpty]: true,
    }), {
        [SourceLike_move]() {
            if (DelegatingEnumerator_move(this)) {
                this[ThrowIfEmptyEnumerator_isEmpty] = false;
            }
        },
    })), StatefulContainer_throwIfEmpty(Enumerable_liftT));
})();
export default Enumerable_throwIfEmpty;
