/// <reference types="./AsyncEnumerable.create.d.ts" />
import { createInstanceFactory, mix, props } from '../../../__internal__/mixins.mjs';
import { none, pipe, getLength, composeUnsafe } from '../../../functions.mjs';
import { AsyncEnumerableLike_isEnumerable, AsyncEnumerableLike_isRunnable, InteractiveContainerLike_interact } from '../../../ix.mjs';
import { StreamableLike_stream } from '../../../streaming.mjs';
import Streamable_stream from '../../../streaming/Streamable/__internal__/Streamable.stream.mjs';
import AsyncEnumerator_create from '../../AsyncEnumerator/__internal__/AsyncEnumerator.create.mjs';

const AsyncEnumerable_create = /*@__PURE__*/ (() => {
    const AsyncEnumerable_op = Symbol("AsyncEnumerable_ops");
    const factory = createInstanceFactory(mix(function AsyncEnumerable(instance, op) {
        instance[AsyncEnumerable_op] = op;
        return instance;
    }, props({
        [AsyncEnumerable_op]: none,
        [AsyncEnumerableLike_isEnumerable]: false,
        [AsyncEnumerableLike_isRunnable]: false,
    }), {
        [StreamableLike_stream](scheduler, options) {
            return AsyncEnumerator_create(this[AsyncEnumerable_op], scheduler, options);
        },
        [InteractiveContainerLike_interact](ctx) {
            return pipe(this, Streamable_stream(ctx));
        },
    }));
    return (...ops) => {
        const op = getLength(ops) > 1
            ? composeUnsafe(...ops)
            : ops[0];
        return factory(op);
    };
})();

export { AsyncEnumerable_create as default };
