/// <reference types="./Enumerable.concatAll.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, returns } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Disposable$add from '../../../util/__internal__/Disposable/Disposable.add.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$disposed from '../../../util/__internal__/Disposable/Disposable.disposed.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import DisposableRef$mixin from '../../../util/__internal__/DisposableRef/DisposableRef.mixin.mjs';
import MutableRef$get from '../../../util/__internal__/MutableRef/MutableRef.get.mjs';
import MutableRef$set from '../../../util/__internal__/MutableRef/MutableRef.set.mjs';
import Enumerator$getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerator$move from '../Enumerator/Enumerator.move.mjs';
import MutableEnumerator$mixin from '../MutableEnumerator/MutableEnumerator.mixin.mjs';
import Enumerable$enumerate from './Enumerable.enumerate.mjs';
import Enumerable$lift from './Enumerable.lift.mjs';

const Enumerable$concatAll = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin();
    const typedDisposableRefMixin = DisposableRef$mixin();
    return pipe(createInstanceFactory(mix(include(Disposable$mixin, typedDisposableRefMixin, typedMutableEnumeratorMixin), function ConcatAllEnumerator(instance, delegate) {
        init(Disposable$mixin, instance);
        init(typedDisposableRefMixin, instance, Disposable$disposed);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        pipe(instance, Disposable$add(delegate));
        return instance;
    }, props({
        delegate: none,
    }), {
        [SourceLike_move]() {
            const { delegate } = this;
            const innerEnumerator = MutableRef$get(this);
            if (Disposable$isDisposed(innerEnumerator) &&
                Enumerator$move(delegate)) {
                const next = pipe(delegate, Enumerator$getCurrent, Enumerable$enumerate());
                pipe(this, MutableRef$set(next));
            }
            while (!pipe(this, MutableRef$get, Disposable$isDisposed)) {
                const innerEnumerator = MutableRef$get(this);
                if (Enumerator$move(innerEnumerator)) {
                    this[EnumeratorLike_current] =
                        Enumerator$getCurrent(innerEnumerator);
                    break;
                }
                else if (Enumerator$move(delegate)) {
                    const next = pipe(delegate, Enumerator$getCurrent, Enumerable$enumerate());
                    pipe(this, MutableRef$set(next));
                }
                else {
                    pipe(this, Disposable$dispose());
                }
            }
        },
    })), Enumerable$lift, returns);
})();

export { Enumerable$concatAll as default };
