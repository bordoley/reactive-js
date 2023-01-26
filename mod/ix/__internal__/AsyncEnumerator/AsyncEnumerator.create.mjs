/// <reference types="./AsyncEnumerator.create.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Dispatcher$dispatch from '../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch.mjs';
import Stream$mixin from '../../../streaming/__internal__/Stream/Stream.mixin.mjs';

const AsyncEnumerator$create = /*@__PURE__*/ (() => {
    const createAsyncEnumeratorInternal = (() => {
        const typedStreamMixin = Stream$mixin();
        return createInstanceFactory(mix(include(typedStreamMixin), function AsyncEnumerator(instance, op, scheduler, replay) {
            init(typedStreamMixin, instance, op, scheduler, replay);
            return instance;
        }, {}, {
            [SourceLike_move]() {
                pipe(this, Dispatcher$dispatch(none));
            },
        }));
    })();
    return (op, scheduler, options) => {
        const { replay = 0 } = options !== null && options !== void 0 ? options : {};
        return createAsyncEnumeratorInternal(op, scheduler, replay);
    };
})();

export { AsyncEnumerator$create as default };
