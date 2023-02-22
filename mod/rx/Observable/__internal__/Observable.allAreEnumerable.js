/// <reference types="./Observable.allAreEnumerable.d.ts" />

import ReadonlyArray_every from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.every.js";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { compose, isTrue } from "../../../functions.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
const Observable_allAreEnumerable = compose(ReadonlyArray_map(Observable_isEnumerable), ReadonlyArray_every(isTrue));
export default Observable_allAreEnumerable;
