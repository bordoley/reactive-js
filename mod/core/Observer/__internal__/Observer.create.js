/// <reference types="./Observer.create.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../../core.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_create = /*@__PURE__*/ (() => createInstanceFactory(Observer_mixin()))();
export default Observer_create;
