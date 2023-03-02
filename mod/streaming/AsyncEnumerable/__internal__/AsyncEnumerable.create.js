/// <reference types="./AsyncEnumerable.create.d.ts" />

import { createInstanceFactory, mix, props, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { StreamableLike_stream, } from "../../../streaming.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
const AsyncEnumerable_create = /*@__PURE__*/ (() => {
    const AsyncEnumerable_op = Symbol("AsyncEnumerable_ops");
    return createInstanceFactory(mix(function AsyncEnumerable(instance, op) {
        instance[AsyncEnumerable_op] = op;
        return instance;
    }, props({
        [AsyncEnumerable_op]: none,
    }), {
        [StreamableLike_stream](scheduler, options) {
            return Stream_create(this[AsyncEnumerable_op], scheduler, options);
        },
    }));
})();
export default AsyncEnumerable_create;
