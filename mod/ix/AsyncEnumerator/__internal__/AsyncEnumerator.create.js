/// <reference types="./AsyncEnumerator.create.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import { none, pipe } from "../../../functions.js";
import { SourceLike_move, } from "../../../ix.js";
import Stream_mixin from "../../../streaming/Stream/__internal__/Stream.mixin.js";
import Queueable_push from "../../../util/Queueable/__internal__/Queueable.push.js";
const AsyncEnumerator_create = /*@__PURE__*/ (() => {
    const createAsyncEnumeratorInternal = (() => {
        const typedStreamMixin = Stream_mixin();
        return createInstanceFactory(mix(include(typedStreamMixin), function AsyncEnumerator(instance, op, scheduler, replay) {
            init(typedStreamMixin, instance, op, scheduler, replay);
            return instance;
        }, {}, {
            [SourceLike_move]() {
                pipe(this, Queueable_push(none));
            },
        }));
    })();
    return (op, scheduler, options) => {
        const { replay = 0 } = options !== null && options !== void 0 ? options : {};
        return createAsyncEnumeratorInternal(op, scheduler, replay);
    };
})();
export default AsyncEnumerator_create;
