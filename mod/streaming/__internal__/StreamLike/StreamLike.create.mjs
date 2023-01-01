/// <reference types="./StreamLike.create.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StreamLike__mixin from './StreamLike.mixin.mjs';

const StreamLike__create = /*@__PURE__*/ (() => {
    const createStreamInternal = createInstanceFactory(StreamLike__mixin());
    return (op, scheduler, options) => {
        const { replay = 0 } = options !== null && options !== void 0 ? options : {};
        return createStreamInternal(op, scheduler, replay);
    };
})();

export { StreamLike__create as default };
