/// <reference types="./Publisher.d.ts" />

import { createInstanceFactory } from "../__internal__/mixins.js";
import PublisherMixin from "./__mixins__/PublisherMixin.js";
export const create = /*@__PURE__*/ (() => {
    return createInstanceFactory(PublisherMixin());
})();
