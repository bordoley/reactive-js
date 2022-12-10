/// <reference types="./EnumerableLike.create.d.ts" />
import { none, pipe } from '../../functions.mjs';
import { InteractiveContainerLike_interact, SourceLike_move } from '../../ix.mjs';
import dispose from '../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import { createInstanceFactory, mixin, props, include, init } from '../mixins.mjs';
import { disposableMixin } from '../util/DisposableLike.mixins.mjs';
import { mutableEnumeratorMixin } from './EnumeratorLike.mutable.mjs';

const create = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mixin(function CreateEnumerable(instance, enumerate) {
        instance.enumerate = enumerate;
        return instance;
    }, props({
        enumerate: none,
    }), {
        [InteractiveContainerLike_interact]() {
            try {
                return this.enumerate();
            }
            catch (cause) {
                const emptyEnumerable = empty();
                return pipe(emptyEnumerable[InteractiveContainerLike_interact](), dispose({ cause }));
            }
        },
    }));
})();
const empty = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin();
    const createEnumerator = createInstanceFactory(mixin(include(disposableMixin, typedMutableEnumeratorMixin), function EmptyEnumerator(instance) {
        init(disposableMixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        return instance;
    }, {}, {
        [SourceLike_move]() {
            pipe(this, dispose());
        },
    }));
    return () => create(createEnumerator);
})();

export { create, empty };
