/// <reference types="./Observable.combineLatest.d.ts" />
import Observable_latest from './Observable.latest.mjs';

const Observable_combineLatest = (...observables) => Observable_latest(observables, 1);

export { Observable_combineLatest as default };
