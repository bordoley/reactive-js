/// <reference types="./AsyncEnumerable.create.d.ts" />
import { createInstanceFactory, mix, props } from '../../../__internal__/mixins.mjs';
import { none, pipe } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';
import { StreamableLike_stream } from '../../../streaming.mjs';
import { stream } from '../../../streaming/StreamableLike.mjs';

const AsyncEnumerable__create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function AsyncEnumerable(instance, stream) {
        instance[StreamableLike_stream] = stream;
        return instance;
    }, props({
        [StreamableLike_stream]: none,
    }), {
        [StreamableLike_stream](scheduler, options) {
            return this[StreamableLike_stream](scheduler, options);
        },
        [InteractiveContainerLike_interact](ctx) {
            return pipe(this, stream(ctx));
        },
    }));
})();

export { AsyncEnumerable__create as default };
