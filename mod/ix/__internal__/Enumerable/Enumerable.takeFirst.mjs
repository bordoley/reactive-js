/// <reference types="./Enumerable.takeFirst.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer$takeFirst from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeFirst.mjs';
import { pipe } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import DelegatingEnumerator$mixin from '../DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator$move from '../DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerable$liftT from './Enumerable.liftT.mjs';

const Enumerable$takeFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator$mixin();
    return pipe(createInstanceFactory(mix(include(Disposable$delegatingMixin, typedDelegatingEnumeratorMixin), function TakeFirstEnumerator(instance, delegate, maxCount) {
        init(Disposable$delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.maxCount = maxCount;
        return instance;
    }, props({
        maxCount: 0,
        count: 0,
    }), {
        [SourceLike_move]() {
            if (this.count < this.maxCount) {
                this.count++;
                DelegatingEnumerator$move(this);
            }
            else {
                pipe(this, Disposable$dispose());
            }
        },
    })), StatefulContainer$takeFirst(Enumerable$liftT));
})();

export { Enumerable$takeFirst as default };
