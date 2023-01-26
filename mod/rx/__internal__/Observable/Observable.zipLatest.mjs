/// <reference types="./Observable.zipLatest.d.ts" />
import Observable$latest from './Observable.latest.mjs';

const Observable$zipLatest = (...observables) => Observable$latest(observables, 2);

export { Observable$zipLatest as default };
