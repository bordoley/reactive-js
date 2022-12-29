/// <reference types="./ObservableLike.isRunnable.d.ts" />
import { ObservableLike_isRunnable } from '../../../rx.mjs';

const isRunnable = (obs) => obs[ObservableLike_isRunnable];

export { isRunnable as default };
