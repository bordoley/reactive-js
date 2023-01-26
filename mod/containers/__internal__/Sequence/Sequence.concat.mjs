/// <reference types="./Sequence.concat.d.ts" />
import { pipe } from '../../../functions.mjs';
import ReadonlyArray_toSequence from '../ReadonlyArray/ReadonlyArray.toSequence.mjs';
import Sequence_concatAll from './Sequence.concatAll.mjs';

const Sequence_concat = (...sequences) => pipe(sequences, ReadonlyArray_toSequence(), Sequence_concatAll());

export { Sequence_concat as default };
