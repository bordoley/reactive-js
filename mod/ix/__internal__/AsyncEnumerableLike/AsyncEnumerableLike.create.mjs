/// <reference types="./AsyncEnumerableLike.create.d.ts" />
import { createInstanceFactory, mix, props } from '../../../__internal__/mixins.mjs';
import { none, pipe, getLength, compose } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';
import { StreamableLike_stream } from '../../../streaming.mjs';
import { stream } from '../../../streaming/StreamableLike.mjs';
import AsyncEnumerator__create from '../AsyncEnumeratorLike/AsyncEnumerator.create.mjs';

const AsyncEnumerableLike__create = /*@__PURE__*/ (() => {
    const AsyncEnumerable_op = Symbol("AsyncEnumerable_ops");
    const factory = createInstanceFactory(mix(function AsyncEnumerable(instance, op) {
        instance[AsyncEnumerable_op] = op;
        return instance;
    }, props({
        [AsyncEnumerable_op]: none,
    }), {
        [StreamableLike_stream](scheduler, options) {
            return AsyncEnumerator__create(this[AsyncEnumerable_op], scheduler, options);
        },
        [InteractiveContainerLike_interact](ctx) {
            return pipe(this, stream(ctx));
        },
    }));
    return (...ops) => {
        const op = getLength(ops) > 1 ? compose(...ops) : ops[0];
        return factory(op);
    };
})();

export { AsyncEnumerableLike__create as default };
