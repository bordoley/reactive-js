/// <reference types="./SequenceLike.concat.d.ts" />
import { pipe } from '../../../functions.mjs';
import { toSequence } from '../../ReadonlyArrayLike.mjs';
import concatAll from './SequenceLike.concatAll.mjs';

const concat = (...sequences) => pipe(sequences, toSequence(), concatAll());

export { concat as default };
