/// <reference types="./EnumeratorFactory.toIterable.d.ts" />

import Enumerator_toIterator from "../../Enumerator/__internal__/Enumerator.toIterator.js";
import { pipe } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
// FIXME: Not the most efficient implementation
const EnumeratorFactory_toIterable = () => (enumerable) => ({
    [Symbol.iterator]() {
        return pipe(enumerable, EnumeratorFactory_enumerate(), Enumerator_toIterator());
    },
});
export default EnumeratorFactory_toIterable;
