/// <reference types="./Observable.throwIfEmpty.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as ThrowIfEmptyOperator from "../../__internal__/operators/ThrowIfEmptyOperator.js";
import Observable_lift from "./Observable.lift.js";
const Observable_throwIfEmpty = ((factory) => pipe(ThrowIfEmptyOperator.create, partial(factory), Observable_lift()));
export default Observable_throwIfEmpty;
