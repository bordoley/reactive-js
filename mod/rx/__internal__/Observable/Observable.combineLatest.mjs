/// <reference types="./Observable.combineLatest.d.ts" />
import Observable$latest from './Observable.latest.mjs';

const Observable$combineLatest = (...observables) => Observable$latest(observables, 1);

export { Observable$combineLatest as default };
