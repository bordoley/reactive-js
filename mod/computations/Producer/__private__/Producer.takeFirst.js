/// <reference types="./Producer.takeFirst.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeFirstOperator from "../../__internal__/operators/TakeFirstOperator.js";
import Producer_lift from "./Producer.lift.js";
const Producer_takeFirst = ((options) => pipe((TakeFirstOperator.create), partial(options?.count), Producer_lift()));
export default Producer_takeFirst;
