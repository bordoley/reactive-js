/// <reference types="./Sequence.concat.d.ts" />
import { pipe } from '../../../functions.mjs';
import ReadonlyArray$toSequence from '../ReadonlyArray/ReadonlyArray.toSequence.mjs';
import Sequence$concatAll from './Sequence.concatAll.mjs';

const Sequence$concat = (...sequences) => pipe(sequences, ReadonlyArray$toSequence(), Sequence$concatAll());

export { Sequence$concat as default };
