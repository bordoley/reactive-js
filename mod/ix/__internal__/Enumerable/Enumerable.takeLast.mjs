/// <reference types="./Enumerable.takeLast.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_toEnumerable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toEnumerable.mjs';
import StatefulContainer_takeLast from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeLast.mjs';
import { pipe, getLength } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable_add from '../../../util/__internal__/Disposable/Disposable.add.mjs';
import Disposable_bindTo from '../../../util/__internal__/Disposable/Disposable.bindTo.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import DelegatingEnumerator_mixin from '../DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator_move from '../DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerator_getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerable_enumerate from './Enumerable.enumerate.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

const Enumerable_takeLast = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    return pipe(createInstanceFactory(mix(include(Disposable_mixin, typedDelegatingEnumeratorMixin), function TakeLastEnumerator(instance, delegate, maxCount) {
        init(Disposable_mixin, instance);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.maxCount = maxCount;
        instance.isStarted = false;
        pipe(instance, Disposable_add(delegate));
        return instance;
    }, props({
        maxCount: 0,
        isStarted: false,
    }), {
        [SourceLike_move]() {
            if (!Disposable_isDisposed(this) && !this.isStarted) {
                this.isStarted = true;
                const last = [];
                while (DelegatingEnumerator_move(this)) {
                    last.push(Enumerator_getCurrent(this));
                    if (getLength(last) > this.maxCount) {
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
