/// <reference types="./Sequence.toIterable.d.ts" />

import { compose, returns } from "../../../functions.js";
import Enumerable_toIterable from "../../../ix/Enumerable/__internal__/Enumerable.toIterable.js";
import Sequence_toRunnable from "./Sequence.toRunnable.js";
const Sequence_toIterable = returns(compose(Sequence_toRunnable(), Enumerable_toIterable()));
export default Sequence_toIterable;
