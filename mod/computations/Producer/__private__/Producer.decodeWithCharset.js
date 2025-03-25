/// <reference types="./Producer.decodeWithCharset.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as DecodeWithCharsetOperator from "../../__internal__/operators/DecodeWithCharsetOperator.js";
import Producer_lift from "./Producer.lift.js";
const Producer_decodeWithCharset = (options => pipe(DecodeWithCharsetOperator.create, partial(options), Producer_lift()));
export default Producer_decodeWithCharset;
