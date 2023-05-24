/// <reference types="./EnumerableWithSideEffects.concatMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { compose } from "../../functions.js";
import EnumerableWithSideEffects_concatAll from "./EnumerableWithSideEffects.concatAll.js";
const EnumerableWithSideEffects_concatMap = (selector) => compose(Observable_map(selector), EnumerableWithSideEffects_concatAll());
export default EnumerableWithSideEffects_concatMap;
