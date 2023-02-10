/// <reference types="./Enumerable.takeLast.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_toEnumerable from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toEnumerable.mjs';
import StatefulContainer_takeLast from '../../../containers/StatefulContainer/__internal__/StatefulContainer.takeLast.mjs';
import { pipe, getLength } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable_add from '../../../util/Disposable/__internal__/Disposable.add.mjs';
import Disposable_bindTo from '../../../util/Disposable/__internal__/Disposable.bindTo.mjs';
import Disposable_isDisposed from '../../../util/Disposable/__internal__/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/Disposable/__internal__/Disposable.mixin.mjs';
import Enumerator_getCurrent from '../../Enumerator/__internal__/Enumerator.getCurrent.mjs';
import DelegatingEnumerator_mixin from '../../__internal__/DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator_move from '../../__internal__/DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerable_enumerate from './Enumerable.enumerate.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

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
                    if (getLength(last) > this[TakeLastEnumerator_maxCount]) {
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

export { Enumerable_takeLast as default };
