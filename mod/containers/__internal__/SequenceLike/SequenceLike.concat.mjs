/// <reference types="./SequenceLike.concat.d.ts" />
import { pipe } from '../../../functions.mjs';
import ReadonlyArrayLike__toSequence from '../ReadonlyArrayLike/ReadonlyArrayLike.toSequence.mjs';
import SequenceLike__concatAll from './SequenceLike.concatAll.mjs';

const SequenceLike__concat = (...sequences) => pipe(sequences, ReadonlyArrayLike__toSequence(), SequenceLike__concatAll());

export { SequenceLike__concat as default };
