/// <reference types="./Observable.never.d.ts" />

import { ignore } from "../../../functions.js";
import Observable_createMulticast from "./Observable.createMulticast.js";
const neverInstance = /*@__PURE__*/ Observable_createMulticast(ignore);
const Observable_never = () => neverInstance;
export default Observable_never;
