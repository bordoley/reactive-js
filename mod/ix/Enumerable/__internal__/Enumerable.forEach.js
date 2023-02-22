/// <reference types="./Enumerable.forEach.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_forEach from "../../../containers/StatefulContainer/__internal__/StatefulContainer.forEach.js";
import { error, none, pipe } from "../../../functions.js";
import { SourceLike_move, } from "../../../ix.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import DelegatingEnumerator_mixin from "../../__internal__/DelegatingEnumerator/DelegatingEnumerator.mixin.js";
import DelegatingEnumerator_move from "../../__internal__/DelegatingEnumerator/DelegatingEnumerator.move.js";
import Enumerable_liftT from "./Enumerable.liftT.js";
const Enumerable_forEach = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    const ForEachEnumerator_effect = Symbol("ForEachEnumerator_effect");
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin(), typedDelegatingEnumeratorMixin), function ForEachEnumerator(instance, delegate, effect) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance[ForEachEnumerator_effect] = effect;
        return instance;
    }, props({ [ForEachEnumerator_effect]: none }), {
        [SourceLike_move]() {
            if (DelegatingEnumerator_move(this)) {
                try {
                    this[ForEachEnumerator_effect](Enumerator_getCurrent(this));
                }
                catch (e) {
                    pipe(this, Disposable_dispose(error(e)));
                }
            }
        },
    })), StatefulContainer_forEach(Enumerable_liftT));
})();
export default Enumerable_forEach;
