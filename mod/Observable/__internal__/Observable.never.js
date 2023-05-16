/// <reference types="./Observable.never.d.ts" />

import MulticastObservable_create from "../../MulticastObservable/__internal__/MulticastObservable.create.js";
import { ignore } from "../../functions.js";
const neverInstance = /*@__PURE__*/ MulticastObservable_create(ignore);
const Observable_never = () => neverInstance;
export default Observable_never;
