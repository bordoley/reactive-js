/// <reference types="./Observable.isRunnable.d.ts" />
import { ObservableLike_isRunnable } from '../../../rx.mjs';

const Observable$isRunnable = (obs) => obs[ObservableLike_isRunnable];

export { Observable$isRunnable as default };
