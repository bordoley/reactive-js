/// <reference types="./Sequence.toAsyncEnumerable.d.ts" />

import { compose } from "../../../functions.js";
import Enumerable_toAsyncEnumerable from "../../../rx/Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import Sequence_toObservable from "./Sequence.toObservable.js";
const Sequence_toAsyncEnumerable = (options) => compose(Sequence_toObservable(), Enumerable_toAsyncEnumerable(options));
export default Sequence_toAsyncEnumerable;
