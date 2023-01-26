/// <reference types="./Stream.create.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import Stream$mixin from './Stream.mixin.mjs';

const Stream$create = /*@__PURE__*/ (() => {
    const createStreamInternal = createInstanceFactory(Stream$mixin());
    return (op, scheduler, options) => {
        const { replay = 0 } = options !== null && options !== void 0 ? options : {};
        return createStreamInternal(op, scheduler, replay);
    };
})();

export { Stream$create as default };
