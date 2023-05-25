/// <reference types="./Observable.throws.d.ts" />

import { error, pipe, raise } from "../../functions.js";
import Observable_fromFactory from "./Observable.fromFactory.js";
const Observable_throws = (options) => {
    const { raise: factory = raise } = options ?? {};
    return pipe(() => raise(error(factory())), Observable_fromFactory());
};
export default Observable_throws;
