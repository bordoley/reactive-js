/// <reference types="./Enumerable.takeLast.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import ReadonlyArray$toEnumerable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toEnumerable.mjs';
import StatefulContainer$takeLast from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeLast.mjs';
import { pipe, getLength } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable$add from '../../../util/__internal__/Disposable/Disposable.add.mjs';
import Disposable$bindTo from '../../../util/__internal__/Disposable/Disposable.bindTo.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import DelegatingEnumerator$mixin from '../DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator$move from '../DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerator$getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerable$enumerate from './Enumerable.enumerate.mjs';
import Enumerable$liftT from './Enumerable.liftT.mjs';

const Enumerable$takeLast = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator$mixin();
    return pipe(createInstanceFactory(mix(include(Disposable$mixin, typedDelegatingEnumeratorMixin), function TakeLastEnumerator(instance, delegate, maxCount) {
        init(Disposable$mixin, instance);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.maxCount = maxCount;
        instance.isStarted = false;
        pipe(instance, Disposable$add(delegate));
        return instance;
    }, props({
        maxCount: 0,
        isStarted: false,
    }), {
        [SourceLike_move]() {
            if (!Disposable$isDisposed(this) && !this.isStarted) {
                this.isStarted = true;
                const last = [];
                while (DelegatingEnumerator$move(this)) {
                    last.push(Enumerator$getCurrent(this));
                    if (getLength(last) > this.maxCount) {
                        last.shift();
                    }
                }
                const enumerator = pipe(last, ReadonlyArray$toEnumerable(), Enumerable$enumerate(), Disposable$bindTo(this));
                init(typedDelegatingEnumeratorMixin, this, enumerator);
            }
            DelegatingEnumerator$move(this);
        },
    })), StatefulContainer$takeLast(Enumerable$liftT));
})();

export { Enumerable$takeLast as default };
