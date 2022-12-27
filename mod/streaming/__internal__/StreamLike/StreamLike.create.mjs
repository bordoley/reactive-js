/// <reference types="./StreamLike.create.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import mixin from './StreamLike.mixin.mjs';

const create = /*@__PURE__*/ (() => {
    const createStreamInternal = createInstanceFactory(mixin());
    return (op, scheduler, options) => {
        const { replay = 0 } = options !== null && options !== void 0 ? options : {};
        return createStreamInternal(op, scheduler, replay);
    };
})();

export { create as default };
