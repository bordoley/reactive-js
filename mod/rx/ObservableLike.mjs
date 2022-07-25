/// <reference types="./ObservableLike.d.ts" />
import { ObservableLike_observableType } from '../rx.mjs';

const getObservableType = (obs) => obs[ObservableLike_observableType];

export { getObservableType };
