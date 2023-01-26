/// <reference types="./Enumerable.distinctUntilChanged.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer$distinctUntilChanged from '../../../containers/__internal__/StatefulContainer/StatefulContainer.distinctUntilChanged.mjs';
import { pipe, none, error } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import DelegatingEnumerator$mixin from '../DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator$move from '../DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerator$getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerator$hasCurrent from '../Enumerator/Enumerator.hasCurrent.mjs';
import Enumerable$liftT from './Enumerable.liftT.mjs';

const Enumerable$distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator$mixin();
    return pipe(createInstanceFactory(mix(include(Disposable$delegatingMixin, typedDelegatingEnumeratorMixin), function DistinctUntilChanged(instance, delegate, equality) {
        init(Disposable$delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.equality = equality;
        return instance;
    }, props({ equality: none }), {
        [SourceLike_move]() {
            const hadCurrent = Enumerator$hasCurrent(this);
            const prevCurrent = hadCurrent
                ? Enumerator$getCurrent(this)
                : none;
            try {
                while (DelegatingEnumerator$move(this)) {
                    if (!hadCurrent ||
                        !this.equality(prevCurrent, Enumerator$getCurrent(this))) {
                        break;
                    }
                }
            }
            catch (e) {
                pipe(this, Disposable$dispose(error(e)));
            }
        },
    })), StatefulContainer$distinctUntilChanged(Enumerable$liftT));
})();

export { Enumerable$distinctUntilChanged as default };
