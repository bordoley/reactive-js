/// <reference types="./Iterable.fromEnumeratorFactory.d.ts" />

import Enumerator_toIterator from "../../Enumerator/__internal__/Enumerator.toIterator.js";
import { pipe } from "../../functions.js";
const Iterable_fromEnumeratorFactory = () => (factory) => ({
    [Symbol.iterator]() {
        return pipe(factory(), Enumerator_toIterator());
    },
});
export default Iterable_fromEnumeratorFactory;
