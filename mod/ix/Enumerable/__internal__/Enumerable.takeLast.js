/// <reference types="./Enumerable.takeLast.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import ReadonlyArray_toEnumerable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toEnumerable.js";
import StatefulContainer_takeLast from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeLast.js";
import { pipe } from "../../../functions.js";
import { SourceLike_move, } from "../../../ix.js";
import { QueueLike_count, QueueLike_push } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import IndexedQueue_createFifoQueue from "../../../util/PullableQueue/__internal__/IndexedQueue.createFifoQueue.js";
import IndexedQueue_toReadonlyArray from "../../../util/PullableQueue/__internal__/IndexedQueue.toReadonlyArray.js";
import { PullableQueueLike_pull, } from "../../../util/__internal__/util.internal.js";
import DelegatingEnumerator_mixin from "../../Enumerator/__internal__/DelegatingEnumerator.mixin.js";
import DelegatingEnumerator_move from "../../Enumerator/__internal__/DelegatingEnumerator.move.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";
import Enumerable_lift from "./Enumerable.lift.js";
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
                const last = IndexedQueue_createFifoQueue();
                while (DelegatingEnumerator_move(this)) {
                    last[QueueLike_push](Enumerator_getCurrent(this));
                    if (last[QueueLike_count] > this[TakeLastEnumerator_maxCount]) {
                        last[PullableQueueLike_pull]();
                    }
                }
                const enumerator = pipe(last, IndexedQueue_toReadonlyArray(), ReadonlyArray_toEnumerable(), Enumerable_enumerate(), Disposable_bindTo(this));
                init(typedDelegatingEnumeratorMixin, this, enumerator);
            }
            DelegatingEnumerator_move(this);
        },
    })), StatefulContainer_takeLast(Enumerable_lift));
})();
export default Enumerable_takeLast;
