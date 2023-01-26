/// <reference types="./AsyncEnumerable.create.d.ts" />
import { createInstanceFactory, mix, props } from '../../../__internal__/mixins.mjs';
import { none, pipe, getLength, compose } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';
import { StreamableLike_stream } from '../../../streaming.mjs';
import Streamable$stream from '../../../streaming/__internal__/Streamable/Streamable.stream.mjs';
import AsyncEnumerator$create from '../AsyncEnumerator/AsyncEnumerator.create.mjs';

const AsyncEnumerable$create = /*@__PURE__*/ (() => {
    const AsyncEnumerable_op = Symbol("AsyncEnumerable_ops");
    const factory = createInstanceFactory(mix(function AsyncEnumerable(instance, op) {
        instance[AsyncEnumerable_op] = op;
        return instance;
    }, props({
        [AsyncEnumerable_op]: none,
    }), {
        [StreamableLike_stream](scheduler, options) {
            return AsyncEnumerator$create(this[AsyncEnumerable_op], scheduler, options);
        },
        [InteractiveContainerLike_interact](ctx) {
            return pipe(this, Streamable$stream(ctx));
        },
    }));
    return (...ops) => {
        const op = getLength(ops) > 1 ? compose(...ops) : ops[0];
        return factory(op);
    };
})();

export { AsyncEnumerable$create as default };
