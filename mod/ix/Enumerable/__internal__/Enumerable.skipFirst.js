/// <reference types="./Enumerable.skipFirst.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_skipFirst from "../../../containers/StatefulContainer/__internal__/StatefulContainer.skipFirst.js";
import { pipe } from "../../../functions.js";
import { SourceLike_move, } from "../../../ix.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import DelegatingEnumerator_mixin from "../../Enumerator/__internal__/DelegatingEnumerator.mixin.js";
import DelegatingEnumerator_move from "../../Enumerator/__internal__/DelegatingEnumerator.move.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_skipFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    const SkipFirstEnumerator_skipCount = Symbol("SkipFirstEnumerator_skipCount");
    const SkipFirstEnumerator_count = Symbol("SkipFirstEnumerator_count");
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin(), typedDelegatingEnumeratorMixin), function SkipFirstEnumerator(instance, delegate, skipCount) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance[SkipFirstEnumerator_skipCount] = skipCount;
        instance[SkipFirstEnumerator_count] = 0;
        return instance;
    }, props({
        [SkipFirstEnumerator_skipCount]: 0,
        [SkipFirstEnumerator_count]: 0,
    }), {
        [SourceLike_move]() {
            const { [SkipFirstEnumerator_skipCount]: skipCount } = this;
            for (let { [SkipFirstEnumerator_count]: count } = this; count < skipCount; count++) {
                if (!DelegatingEnumerator_move(this)) {
                    break;
                }
            }
            this[SkipFirstEnumerator_count] = skipCount;
            DelegatingEnumerator_move(this);
        },
    })), StatefulContainer_skipFirst(Enumerable_lift));
})();
export default Enumerable_skipFirst;
