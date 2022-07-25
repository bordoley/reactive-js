/// <reference types="./ix.d.ts" />
import { properties, prototype } from './__internal__/util/Disposable.mjs';
import { properties as properties$1, prototype as prototype$1 } from './__internal__/util/Enumerator.mjs';
import { Object_init, init, createObjectFactory } from './__internal__/util/Object.mjs';
import { pipe, none, newInstance } from './functions.mjs';
import { SourceLike_move } from './util.mjs';
import './util/DisposableLike.mjs';
import { dispose } from './__internal__/util/DisposableLikeInternal.mjs';

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
const emptyEnumerable = 
/*@__PURE__*/ (() => {
    const properties$2 = {
        ...properties,
        ...properties$1,
    };
    const prototype$2 = {
        ...prototype,
        ...prototype$1,
        [Object_init]() {
            init(prototype, this);
            init(prototype$1, this);
        },
        [SourceLike_move]() {
            pipe(this, dispose());
        },
    };
    const createInstance = createObjectFactory(prototype$2, properties$2);
    class EmptyEnumerable {
        [InteractiveContainerLike_interact]() {
            return createInstance();
        }
    }
    return () => newInstance(EmptyEnumerable);
})();
const emptyEnumerableT = {
    empty: emptyEnumerable,
};

export { InteractiveContainerLike_interact, createEnumerable, emptyEnumerable, emptyEnumerableT };
