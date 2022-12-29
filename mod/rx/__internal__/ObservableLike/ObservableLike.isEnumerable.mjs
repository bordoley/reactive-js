/// <reference types="./ObservableLike.isEnumerable.d.ts" />
import { ObservableLike_isEnumerable } from '../../../rx.mjs';

const isEnumerable = (obs) => obs[ObservableLike_isEnumerable];

export { isEnumerable as default };
