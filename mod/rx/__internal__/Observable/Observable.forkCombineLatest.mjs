/// <reference types="./Observable.forkCombineLatest.d.ts" />
import ReadonlyArray$map from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map.mjs';
import { pipe } from '../../../functions.mjs';
import Observable$latest from './Observable.latest.mjs';

const Observable$forkCombineLatest = ((...ops) => (obs) => Observable$latest(pipe(ops, ReadonlyArray$map(op => pipe(obs, op))), 1));

export { Observable$forkCombineLatest as default };
