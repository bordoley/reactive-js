/// <reference types="./Producer.keep.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as KeepOperator from "../../__internal__/operators/KeepOperator.js";
import Producer_lift from "./Producer.lift.js";
const Producer_keep = ((predicate) => pipe((KeepOperator.create), partial(predicate), Producer_lift()));
export default Producer_keep;
