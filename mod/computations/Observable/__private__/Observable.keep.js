/// <reference types="./Observable.keep.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as KeepOperator from "../../__internal__/operators/KeepOperator.js";
import Observable_lift from "./Observable.lift.js";
const Observable_keep = ((predicate) => pipe((KeepOperator.create), partial(predicate), Observable_lift()));
export default Observable_keep;
