/// <reference types="./Observable.takeWhile.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeWhileOperator from "../../__internal__/operators/TakeWhileOperator.js";
import Observable_lift from "./Observable.lift.js";
const Observable_takeWhile = ((predicate, options = {}) => pipe((TakeWhileOperator.create), partial(predicate, options), Observable_lift()));
export default Observable_takeWhile;
