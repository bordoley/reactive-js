/// <reference types="./Producer.forEach.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as ForEachOperator from "../../__internal__/operators/ForEachOperator.js";
import Producer_lift from "./Producer.lift.js";
const Producer_forEach = ((predicate) => pipe((ForEachOperator.create), partial(predicate), Producer_lift()));
export default Producer_forEach;
