/// <reference types="./ix.d.ts" />
import { disposableMixin } from './__internal__/util/__internal__Disposables.mjs';
import { enumeratorMixin } from './__internal__/util/__internal__Enumerators.mjs';
import { createInstanceFactory, mixin, props, include, init } from './__internal__/util/__internal__Objects.mjs';
import './containers.mjs';
import { none, pipe } from './functions.mjs';
import { SourceLike_move } from './util.mjs';
import { f as dispose } from './DisposableLike-c856ff07.mjs';

/** @ignore */
const InteractiveContainerLike_interact = Symbol("InteractiveContainerLike_interact");
const createEnumerable = /*@__PURE__*/ (() => {
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
                const empty = emptyEnumerable();
                return pipe(empty[InteractiveContainerLike_interact](), dispose({ cause }));
            }
        },
    }));
})();
const emptyEnumerable = /*@__PURE__*/ (() => {
    const typedEnumeratorMixin = enumeratorMixin();
    const createEnumerator = createInstanceFactory(mixin(include(disposableMixin, typedEnumeratorMixin), function EmptyEnumerator(instance) {
        init(disposableMixin, instance);
        init(typedEnumeratorMixin, instance);
        return instance;
    }, {}, {
        [SourceLike_move]() {
            pipe(this, dispose());
        },
    }));
    return () => createEnumerable(createEnumerator);
})();
const emptyEnumerableT = {
    empty: emptyEnumerable,
};

export { InteractiveContainerLike_interact, createEnumerable, emptyEnumerable, emptyEnumerableT };
