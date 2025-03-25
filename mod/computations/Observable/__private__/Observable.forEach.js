/// <reference types="./Observable.forEach.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as ForEachOperator from "../../__internal__/operators/ForEachOperator.js";
import Observable_lift from "./Observable.lift.js";
const Observable_forEach = ((predicate) => pipe((ForEachOperator.create), partial(predicate), Observable_lift()));
export default Observable_forEach;
