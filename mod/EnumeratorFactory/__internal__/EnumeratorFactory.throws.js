/// <reference types="./EnumeratorFactory.throws.d.ts" />

import { error, pipe, raise } from "../../functions.js";
import EnumeratorFactory_fromFactory from "./EnumeratorFactory.fromFactory.js";
const EnumeratorFactory_throws = ((options) => {
    const { raise: factory = raise } = options ?? {};
    return pipe(() => raise(error(factory())), EnumeratorFactory_fromFactory());
});
export default EnumeratorFactory_throws;
