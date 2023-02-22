/// <reference types="./Stream.create.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import Stream_mixin from "./Stream.mixin.js";
const Stream_create = /*@__PURE__*/ (() => {
    const createStreamInternal = createInstanceFactory(Stream_mixin());
    return (op, scheduler, options) => {
        const { replay = 0 } = options !== null && options !== void 0 ? options : {};
        return createStreamInternal(op, scheduler, replay);
    };
})();
export default Stream_create;
