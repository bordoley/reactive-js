/// <reference types="./Producer.skipFirst.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as SkipFirstOperator from "../../__internal__/operators/SkipFirstOperator.js";
import Producer_lift from "./Producer.lift.js";
const Producer_skipFirst = ((options) => pipe(SkipFirstOperator.create, partial(options?.count), Producer_lift()));
export default Producer_skipFirst;
