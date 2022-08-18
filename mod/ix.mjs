/// <reference types="./ix.d.ts" />
import { disposableMixin } from './__internal__/util/__internal__Disposables.mjs';
import { enumeratorMixin } from './__internal__/util/__internal__Enumerators.mjs';
import { createInstanceFactory, mixin, props, include, init } from './__internal__/util/__internal__Objects.mjs';
import './containers.mjs';
import { none, pipe } from './functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from './util.mjs';
import { f as dispose, i as isDisposed } from './DisposableLike-d42502aa.mjs';

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
/**
 * Generates an EnumerableLike from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 */
const generateEnumerable = 
/*@__PURE__*/ (() => {
    const typedEnumerator = enumeratorMixin();
    const createGenerateEnumerator = createInstanceFactory(mixin(include(disposableMixin, typedEnumerator), function GenerateEnumerator(instance, f, acc) {
        init(disposableMixin, instance);
        init(typedEnumerator, instance);
        instance.f = f;
        instance[EnumeratorLike_current] = acc;
        return instance;
    }, props({ f: none }), {
        [SourceLike_move]() {
            if (!isDisposed(this)) {
                try {
                    this[EnumeratorLike_current] = this.f(this[EnumeratorLike_current]);
                }
                catch (cause) {
                    pipe(this, dispose({ cause }));
                }
            }
        },
    }));
    return (generator, initialValue) => createEnumerable(() => createGenerateEnumerator(generator, initialValue()));
})();
const generateEnumerableT = {
    generate: generateEnumerable,
};

export { InteractiveContainerLike_interact, createEnumerable, emptyEnumerable, emptyEnumerableT, generateEnumerable, generateEnumerableT };
