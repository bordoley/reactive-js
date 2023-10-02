/// <reference types="./Observable.throws.d.ts" />

import { error, raise } from "../../../functions.js";
import Observable_createRunnableWithSideEffects from "./Observable.createRunnableWithSideEffects.js";
const Observable_throws = (options) => Observable_createRunnableWithSideEffects((_) => {
    const { raise: factory = raise } = options ?? {};
    raise(error(factory()));
});
export default Observable_throws;
