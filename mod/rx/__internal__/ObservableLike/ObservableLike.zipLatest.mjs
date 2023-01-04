/// <reference types="./ObservableLike.zipLatest.d.ts" />
import ObservableLike__latest from './ObservableLike.latest.mjs';

const ObservableLike__zipLatest = (...observables) => ObservableLike__latest(observables, 2);

export { ObservableLike__zipLatest as default };
