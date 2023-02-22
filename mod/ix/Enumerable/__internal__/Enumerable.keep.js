/// <reference types="./Enumerable.keep.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_keep from "../../../containers/StatefulContainer/__internal__/StatefulContainer.keep.js";
import { error, none, pipe } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, SourceLike_move, } from "../../../ix.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import DelegatingEnumerator_mixin from "../../__internal__/DelegatingEnumerator/DelegatingEnumerator.mixin.js";
import Enumerable_liftT from "./Enumerable.liftT.js";
const Enumerable_keep = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    const KeepEnumerator_predicate = Symbol("KeepEnumerator_predicate");
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin(), typedDelegatingEnumeratorMixin), function KeepEnumerator(instance, delegate, predicate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance[KeepEnumerator_predicate] = predicate;
        return instance;
    }, props({ [KeepEnumerator_predicate]: none }), {
        [SourceLike_move]() {
            const { [KeepEnumerator_predicate]: predicate } = this;
            try {
                while ((this[DelegatingLike_delegate][SourceLike_move](),
                    this[DelegatingLike_delegate][EnumeratorLike_hasCurrent]) &&
                    !predicate(this[EnumeratorLike_current])) { }
            }
            catch (e) {
                pipe(this, Disposable_dispose(error(e)));
            }
        },
    })), StatefulContainer_keep(Enumerable_liftT));
})();
export default Enumerable_keep;
