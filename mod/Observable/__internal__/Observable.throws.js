/// <reference types="./Observable.throws.d.ts" />

import { error, raise } from "../../functions.js";
import Observable_fromFactory from "./Observable.fromFactory.js";
const Observable_throws = ((options) => {
    const { raise: factory = raise } = options ?? {};
    return Observable_fromFactory(() => raise(error(factory())), options);
});
export default Observable_throws;
