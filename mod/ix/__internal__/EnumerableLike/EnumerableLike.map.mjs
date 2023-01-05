/// <reference types="./EnumerableLike.map.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__map from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.map.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import EnumeratorLike__getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import EnumeratorLike__move from '../EnumeratorLike/EnumeratorLike.move.mjs';
import MutableEnumeratorLike__mixin from '../MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import EnumerableLike__liftT from './EnumerableLike.liftT.mjs';

const EnumerableLike__map = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__delegatingMixin, typedMutableEnumeratorMixin), function MapEnumerator(instance, delegate, mapper) {
        init(DisposableLike__delegatingMixin, instance, delegate);
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
            if (EnumeratorLike__move(delegate)) {
                try {
                    this[EnumeratorLike_current] = this.mapper(EnumeratorLike__getCurrent(delegate));
                }
                catch (cause) {
                    pipe(this, DisposableLike__dispose({ cause }));
                }
            }
        },
    })), StatefulContainerLike__map(EnumerableLike__liftT));
})();

export { EnumerableLike__map as default };
