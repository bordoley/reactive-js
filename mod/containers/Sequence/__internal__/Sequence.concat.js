/// <reference types="./Sequence.concat.d.ts" />

import { pipe } from "../../../functions.js";
import ReadonlyArray_toSequence from "../../ReadonlyArray/__internal__/ReadonlyArray.toSequence.js";
import ReadonlyArray_concatAll from "./Sequence.concatAll.js";
const Sequence_concat = (...sequences) => pipe(sequences, ReadonlyArray_toSequence(), ReadonlyArray_concatAll());
export default Sequence_concat;
