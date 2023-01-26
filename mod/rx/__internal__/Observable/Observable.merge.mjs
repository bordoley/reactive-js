/// <reference types="./Observable.merge.d.ts" />
import Observable_mergeObservables from './Observable.mergeObservables.mjs';

const Observable_merge = (...observables) => Observable_mergeObservables(observables);

export { Observable_merge as default };
