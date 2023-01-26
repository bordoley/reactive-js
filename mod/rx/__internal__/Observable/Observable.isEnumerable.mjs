/// <reference types="./Observable.isEnumerable.d.ts" />
import { ObservableLike_isEnumerable } from '../../../rx.mjs';

const Observable$isEnumerable = (obs) => obs[ObservableLike_isEnumerable];

export { Observable$isEnumerable as default };
