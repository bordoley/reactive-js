/// <reference types="./ix.d.ts" />
import { prototype } from './__internal__/util/Disposable.mjs';
import { prototype as prototype$1 } from './__internal__/util/Enumerator.mjs';
import { Object_properties, Object_init, init, mixWith, createObjectFactory, anyProperty } from './__internal__/util/Object.mjs';
import { pipe, none, newInstance, forEach, pipeLazy } from './functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from './util.mjs';
import { addTo } from './util/DisposableLike.mjs';
import { dispose, isDisposed } from './__internal__/util/DisposableLikeInternal.mjs';

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
                return pipe(empty[InteractiveContainerLike_interact](none), dispose({ cause }));
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
const emptyEnumerable = 
/*@__PURE__*/ pipe({
    [Object_properties]: {},
    [Object_init]() {
        init(prototype, this);
        init(prototype$1(), this);
    },
    [SourceLike_move]() {
        pipe(this, dispose());
    },
}, mixWith(prototype, prototype$1()), createObjectFactory(), f => pipeLazy(f, createEnumerable));
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
    const typedEnumerator = prototype$1();
    const createInstance = pipe({
        [Object_properties]: { f: anyProperty },
        [Object_init](f, acc) {
            init(prototype, this);
            init(prototype$1(), this);
            this.f = f;
            this[EnumeratorLike_current] = acc;
        },
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
    }, mixWith(prototype, typedEnumerator), createObjectFactory());
    return (generator, initialValue) => createEnumerable(() => createInstance(generator, initialValue()));
})();
const generateEnumerableT = {
    generate: generateEnumerable,
};

export { InteractiveContainerLike_interact, createEnumerable, createEnumerableUsing, createEnumerableUsingT, emptyEnumerable, emptyEnumerableT, generateEnumerable, generateEnumerableT };
