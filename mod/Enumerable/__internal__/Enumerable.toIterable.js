/// <reference types="./Enumerable.toIterable.d.ts" />

import Enumerator_toIterator from "../../Enumerator/__internal__/Enumerator.toIterator.js";
import { pipe } from "../../functions.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";
// FIXME: Not the most efficient implementation
const Enumerable_toIterable = () => (enumerable) => ({
    [Symbol.iterator]() {
        return pipe(enumerable, Enumerable_enumerate(), Enumerator_toIterator());
    },
});
export default Enumerable_toIterable;
