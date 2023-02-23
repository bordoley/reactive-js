/// <reference types="./Enumerable.takeLast.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_toEnumerable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toEnumerable.js";
import StatefulContainer_takeLast from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeLast.js";
import { pipe } from "../../../functions.js";
import { SourceLike_move, } from "../../../ix.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import DelegatingEnumerator_mixin from "../../Enumerator/__internal__/DelegatingEnumerator.mixin.js";
import DelegatingEnumerator_move from "../../Enumerator/__internal__/DelegatingEnumerator.move.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";
import Enumerable_liftT from "./Enumerable.liftT.js";
const Enumerable_takeLast = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    const TakeLastEnumerator_maxCount = Symbol("TakeLastEnumerator_maxCount");
    const TakeLastEnumerator_isStarted = Symbol("TakeLastEnumerator_isStarted");
    return pipe(createInstanceFactory(mix(include(Disposable_mixin, typedDelegatingEnumeratorMixin), function TakeLastEnumerator(instance, delegate, maxCount) {
        init(Disposable_mixin, instance);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance[TakeLastEnumerator_maxCount] = maxCount;
        instance[TakeLastEnumerator_isStarted] = false;
        pipe(instance, Disposable_add(delegate));
        return instance;
    }, props({
        [TakeLastEnumerator_maxCount]: 0,
        [TakeLastEnumerator_isStarted]: false,
    }), {
        [SourceLike_move]() {
            if (!Disposable_isDisposed(this) &&
                !this[TakeLastEnumerator_isStarted]) {
                this[TakeLastEnumerator_isStarted] = true;
                const last = [];
                while (DelegatingEnumerator_move(this)) {
                    last.push(Enumerator_getCurrent(this));
                    if (ReadonlyArray_getLength(last) >
                        this[TakeLastEnumerator_maxCount]) {
                        last.shift();
                    }
                }
                const enumerator = pipe(last, ReadonlyArray_toEnumerable(), Enumerable_enumerate(), Disposable_bindTo(this));
                init(typedDelegatingEnumeratorMixin, this, enumerator);
            }
            DelegatingEnumerator_move(this);
        },
    })), StatefulContainer_takeLast(Enumerable_liftT));
})();
export default Enumerable_takeLast;
