/// <reference types="./Observable.decodeWithCharset.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as DecodeWithCharsetOperator from "../../__internal__/operators/DecodeWithCharsetOperator.js";
import Observable_lift from "./Observable.lift.js";
const Observable_decodeWithCharset = (options => pipe(DecodeWithCharsetOperator.create, partial(options), Observable_lift()));
export default Observable_decodeWithCharset;
