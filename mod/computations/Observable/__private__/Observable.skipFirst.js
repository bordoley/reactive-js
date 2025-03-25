/// <reference types="./Observable.skipFirst.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as SkipFirstOperator from "../../__internal__/operators/SkipFirstOperator.js";
import Observable_lift from "./Observable.lift.js";
const Observable_skipFirst = ((options) => pipe(SkipFirstOperator.create, partial(options?.count), Observable_lift()));
export default Observable_skipFirst;
