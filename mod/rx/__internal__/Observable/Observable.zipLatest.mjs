/// <reference types="./Observable.zipLatest.d.ts" />
import Observable_latest from './Observable.latest.mjs';

const Observable_zipLatest = (...observables) => Observable_latest(observables, 2);

export { Observable_zipLatest as default };
