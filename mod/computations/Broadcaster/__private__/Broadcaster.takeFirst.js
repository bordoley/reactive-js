/// <reference types="./Broadcaster.takeFirst.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeFirstOperator from "../../__internal__/operators/TakeFirstOperator.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_takeFirst = ((options) => pipe((TakeFirstOperator.create), partial(options?.count), Broadcaster_lift));
export default Broadcaster_takeFirst;
