/// <reference types="./Observable.isEnumerable.d.ts" />

import { ObservableLike_isEnumerable, } from "../../types.js";
const Observable_isEnumerable = (obs) => obs[ObservableLike_isEnumerable];
export default Observable_isEnumerable;
