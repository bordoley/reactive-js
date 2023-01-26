/// <reference types="./Observable.forkZipLatest.d.ts" />
import ReadonlyArray$map from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map.mjs';
import { pipe } from '../../../functions.mjs';
import Observable$latest from './Observable.latest.mjs';

const Observable$forkZipLatest = ((...ops) => (obs) => Observable$latest(pipe(ops, ReadonlyArray$map(op => pipe(obs, op))), 2));

export { Observable$forkZipLatest as default };
