/// <reference types="./Observable.never.d.ts" />

import SharedObservable_create from "../../SharedObservable/__internal__/SharedObservable.create.js";
import { ignore } from "../../functions.js";
const neverInstance = /*@__PURE__*/ SharedObservable_create(ignore);
const Observable_never = () => neverInstance;
export default Observable_never;
