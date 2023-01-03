/// <reference types="./AsyncEnumerator.create.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import { dispatch } from '../../../scheduling/DispatcherLike.mjs';
import StreamLike__mixin from '../../../streaming/__internal__/StreamLike/StreamLike.mixin.mjs';

const AsyncEnumerator__create = /*@__PURE__*/ (() => {
    const createAsyncEnumeratorInternal = (() => {
        const typedStreamMixin = StreamLike__mixin();
        return createInstanceFactory(mix(include(typedStreamMixin), function AsyncEnumerator(instance, op, scheduler, replay) {
            init(typedStreamMixin, instance, op, scheduler, replay);
            return instance;
        }, {}, {
            [SourceLike_move]() {
                pipe(this, dispatch(none));
            },
        }));
    })();
    return (op, scheduler, options) => {
        const { replay = 0 } = options !== null && options !== void 0 ? options : {};
        return createAsyncEnumeratorInternal(op, scheduler, replay);
    };
})();

export { AsyncEnumerator__create as default };
