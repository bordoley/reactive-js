/// <reference types="./Observable.merge.d.ts" />
import Observable$mergeObservables from './Observable.mergeObservables.mjs';

const Observable$merge = (...observables) => Observable$mergeObservables(observables);

export { Observable$merge as default };
