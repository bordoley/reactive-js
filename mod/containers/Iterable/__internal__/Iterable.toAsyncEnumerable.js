/// <reference types="./Iterable.toAsyncEnumerable.d.ts" />

import { compose, returns } from "../../../functions.js";
import Enumerable_toAsyncEnumerable from "../../../ix/Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import Iterable_toEnumerable from "./Iterable.toEnumerable.js";
const Iterable_toAsyncEnumerable = 
/*@__PURE__*/ returns(compose(Iterable_toEnumerable(), Enumerable_toAsyncEnumerable()));
export default Iterable_toAsyncEnumerable;
