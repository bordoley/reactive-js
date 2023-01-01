/// <reference types="./SequenceLike.concat.d.ts" />
import { pipe } from '../../../functions.mjs';
import { toSequence } from '../../ReadonlyArrayLike.mjs';
import SequenceLike__concatAll from './SequenceLike.concatAll.mjs';

const SequenceLike__concat = (...sequences) => pipe(sequences, toSequence(), SequenceLike__concatAll());

export { SequenceLike__concat as default };
