/// <reference types="./Observable.takeFirst.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeFirstOperator from "../../__internal__/operators/TakeFirstOperator.js";
import Observable_lift from "./Observable.lift.js";
const Observable_takeFirst = ((options) => pipe((TakeFirstOperator.create), partial(options?.count), Observable_lift()));
export default Observable_takeFirst;
