/// <reference types="./Sequence.toAsyncEnumerable.d.ts" />

import { compose, returns } from "../../../functions.js";
import Enumerable_toAsyncEnumerable from "../../../ix/Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import Sequence_toEnumerable from "./Sequence.toEnumerable.js";
const Sequence_toAsyncEnumerable = 
/*@__PURE__*/ returns(compose(Sequence_toEnumerable(), Enumerable_toAsyncEnumerable()));
export default Sequence_toAsyncEnumerable;
