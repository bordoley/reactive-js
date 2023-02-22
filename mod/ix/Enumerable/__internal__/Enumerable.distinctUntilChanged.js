/// <reference types="./Enumerable.distinctUntilChanged.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_distinctUntilChanged from "../../../containers/StatefulContainer/__internal__/StatefulContainer.distinctUntilChanged.js";
import { error, none, pipe } from "../../../functions.js";
import { SourceLike_move, } from "../../../ix.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import DelegatingEnumerator_mixin from "../../Enumerator/__internal__/DelegatingEnumerator.mixin.js";
import DelegatingEnumerator_move from "../../Enumerator/__internal__/DelegatingEnumerator.move.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_hasCurrent from "../../Enumerator/__internal__/Enumerator.hasCurrent.js";
import Enumerable_liftT from "./Enumerable.liftT.js";
const Enumerable_distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    const DistinctUntilChangedEnumerator_equality = Symbol("DistinctUntilChangedEnumerator_equality");
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin(), typedDelegatingEnumeratorMixin), function DistinctUntilChangedEnumerator(instance, delegate, equality) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance[DistinctUntilChangedEnumerator_equality] = equality;
        return instance;
    }, props({
        [DistinctUntilChangedEnumerator_equality]: none,
    }), {
        [SourceLike_move]() {
            const hadCurrent = Enumerator_hasCurrent(this);
            const prevCurrent = hadCurrent
                ? Enumerator_getCurrent(this)
                : none;
            try {
                while (DelegatingEnumerator_move(this)) {
                    if (!hadCurrent ||
                        !this[DistinctUntilChangedEnumerator_equality](prevCurrent, Enumerator_getCurrent(this))) {
                        break;
                    }
                }
            }
            catch (e) {
                pipe(this, Disposable_dispose(error(e)));
            }
        },
    })), StatefulContainer_distinctUntilChanged(Enumerable_liftT));
})();
export default Enumerable_distinctUntilChanged;
