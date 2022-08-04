/// <reference types="./ix.d.ts" />
import { disposableMixin } from './__internal__/util/DisposableLikeMixins.mjs';
import { enumeratorMixin } from './__internal__/util/EnumeratorLikeMixin.mjs';
import { clazz, __extends, init, createObjectFactory } from './__internal__/util/Object.mjs';
import { pipe, newInstance, forEach, none } from './functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from './util.mjs';
import './util/DisposableLike.mjs';
import { dispose, addTo, isDisposed } from './__internal__/util/DisposableLikeInternal.mjs';

/** @ignore */
const InteractiveContainerLike_interact = Symbol("InteractiveContainerLike_interact");
const createEnumerable = /*@__PURE__*/ (() => {
    class CreateEnumerable {
        constructor(_enumerate) {
            this._enumerate = _enumerate;
        }
        [InteractiveContainerLike_interact]() {
            try {
                return this._enumerate();
            }
            catch (cause) {
                const empty = emptyEnumerable();
                return pipe(empty[InteractiveContainerLike_interact](), dispose({ cause }));
            }
        }
    }
    return (enumerate) => newInstance(CreateEnumerable, enumerate);
})();
const createEnumerableUsing = (resourceFactory, enumerableFactory) => createEnumerable(() => {
    const resources = resourceFactory();
    const resourcesArray = Array.isArray(resources) ? resources : [resources];
    const enumerator = enumerableFactory(...resourcesArray)[InteractiveContainerLike_interact]();
    pipe(resourcesArray, forEach(addTo(enumerator)));
    return enumerator;
});
const createEnumerableUsingT = {
    using: createEnumerableUsing,
};
const emptyEnumerable = /*@__PURE__*/ (() => {
    const typedEnumeratorMixin = enumeratorMixin();
    const f = pipe(clazz(__extends(disposableMixin, typedEnumeratorMixin), function EmptyEnumerator() {
        init(disposableMixin, this);
        init(typedEnumeratorMixin, this);
        return this;
    }, {}, {
        [SourceLike_move]() {
            pipe(this, dispose());
        },
    }), createObjectFactory());
    return () => createEnumerable(f);
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
    const createGenerateEnumerator = pipe(clazz(__extends(disposableMixin, typedEnumerator), function GenerateEnumerator(f, acc) {
        init(disposableMixin, this);
        init(typedEnumerator, this);
        this.f = f;
        this[EnumeratorLike_current] = acc;
        return this;
    }, { f: none }, {
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
    }), createObjectFactory());
    return (generator, initialValue) => createEnumerable(() => createGenerateEnumerator(generator, initialValue()));
})();
const generateEnumerableT = {
    generate: generateEnumerable,
};

export { InteractiveContainerLike_interact, createEnumerable, createEnumerableUsing, createEnumerableUsingT, emptyEnumerable, emptyEnumerableT, generateEnumerable, generateEnumerableT };
