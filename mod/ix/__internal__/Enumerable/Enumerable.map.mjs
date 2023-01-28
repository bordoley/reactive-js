/// <reference types="./Enumerable.map.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_map from '../../../containers/__internal__/StatefulContainer/StatefulContainer.map.mjs';
import { pipe, none, error } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_hasCurrent, EnumeratorLike_current } from '../../../ix.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import MutableEnumerator_mixin from '../MutableEnumerator/MutableEnumerator.mixin.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

const Enumerable_map = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin, typedMutableEnumeratorMixin), function MapEnumerator(instance, delegate, mapper) {
        init(Disposable_delegatingMixin, instance, delegate);
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
            delegate[SourceLike_move]();
            if (!delegate[EnumeratorLike_hasCurrent]) {
                return;
            }
            try {
                this[EnumeratorLike_current] = this.mapper(delegate[EnumeratorLike_current]);
            }
            catch (e) {
                pipe(this, Disposable_dispose(error(e)));
            }
        },
    })), StatefulContainer_map(Enumerable_liftT));
})();

export { Enumerable_map as default };
