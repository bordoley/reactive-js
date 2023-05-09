/// <reference types="./Stream.create.d.ts" />

import { createInstanceFactory } from "../../__internal__/mixins.js";
import Stream_mixin from "./Stream.mixin.js";
const Stream_create = /*@__PURE__*/ (() => createInstanceFactory(Stream_mixin()))();
export default Stream_create;
