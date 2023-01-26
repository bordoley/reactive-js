/// <reference types="./Observable.isRunnable.d.ts" />
import { ObservableLike_isRunnable } from '../../../rx.mjs';

const Observable_isRunnable = (obs) => obs[ObservableLike_isRunnable];

export { Observable_isRunnable as default };
