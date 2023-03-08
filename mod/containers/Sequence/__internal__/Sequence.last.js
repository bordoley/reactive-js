/// <reference types="./Sequence.last.d.ts" />

import { pipe } from "../../../functions.js";
import Sequence_first from "./Sequence.first.js";
import Sequence_takeLast from "./Sequence.takeLast.js";
const Sequence_last = () => (src) => pipe(src, Sequence_takeLast(), Sequence_first());
export default Sequence_last;
