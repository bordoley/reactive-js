/// <reference types="./Observable.allAreRunnable.d.ts" />

import ReadonlyArray_every from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.every.js";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { compose, isTrue } from "../../../functions.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
const Observable_allAreRunnable = compose(ReadonlyArray_map(Observable_isRunnable), ReadonlyArray_every(isTrue));
export default Observable_allAreRunnable;
