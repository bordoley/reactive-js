/// <reference types="./Enumerable.map.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer$map from '../../../containers/__internal__/StatefulContainer/StatefulContainer.map.mjs';
import { pipe, none, error } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Enumerator$getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerator$move from '../Enumerator/Enumerator.move.mjs';
import MutableEnumerator$mixin from '../MutableEnumerator/MutableEnumerator.mixin.mjs';
import Enumerable$liftT from './Enumerable.liftT.mjs';

const Enumerable$map = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin();
    return pipe(createInstanceFactory(mix(include(Disposable$delegatingMixin, typedMutableEnumeratorMixin), function MapEnumerator(instance, delegate, mapper) {
        init(Disposable$delegatingMixin, instance, delegate);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        instance.mapper = mapper;
        return instance;
    }, props({
        mapper: none,
        delegate: none,
    }), {
        [SourceLike_move]() {
            const { delegate } = this;
            if (Enumerator$move(delegate)) {
                try {
                    this[EnumeratorLike_current] = this.mapper(Enumerator$getCurrent(delegate));
                }
                catch (e) {
                    pipe(this, Disposable$dispose(error(e)));
                }
            }
        },
    })), StatefulContainer$map(Enumerable$liftT));
})();

export { Enumerable$map as default };
