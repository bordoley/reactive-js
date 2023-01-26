/// <reference types="./Observable.isEnumerable.d.ts" />
import { ObservableLike_isEnumerable } from '../../../rx.mjs';

const Observable_isEnumerable = (obs) => obs[ObservableLike_isEnumerable];

export { Observable_isEnumerable as default };
