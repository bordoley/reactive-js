/// <reference types="./Observable.allArePure.d.ts" />

import ReadonlyArray_everySatisfy from "../../ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { compose, isTrue } from "../../functions.js";
import Observable_isPure from "./Observable.isPure.js";
const Observable_allArePure = /*@__PURE__*/ (() => compose(ReadonlyArray_map(Observable_isPure), ReadonlyArray_everySatisfy(isTrue)))();
export default Observable_allArePure;
