/// <reference types="./AsyncEnumerable.create.d.ts" />

import { createInstanceFactory, mix, props, } from "../../../__internal__/mixins.js";
import { composeUnsafe, getLength, none, pipe } from "../../../functions.js";
import { AsyncEnumerableLike_isEnumerable, AsyncEnumerableLike_isRunnable, InteractiveContainerLike_interact, } from "../../../ix.js";
import { StreamableLike_stream } from "../../../streaming.js";
import Streamable_stream from "../../../streaming/Streamable/__internal__/Streamable.stream.js";
import AsyncEnumerator_create from "../../AsyncEnumerator/__internal__/AsyncEnumerator.create.js";
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
export default AsyncEnumerable_create;
