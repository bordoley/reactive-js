/// <reference types="./ObservableLike.combineLatest.d.ts" />
import ObservableLike__latest from './ObservableLike.latest.mjs';

const ObservableLike__combineLatest = (...observables) => ObservableLike__latest(observables, 1);

export { ObservableLike__combineLatest as default };
