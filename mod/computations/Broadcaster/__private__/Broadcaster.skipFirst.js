/// <reference types="./Broadcaster.skipFirst.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as SkipFirstOperator from "../../__internal__/operators/SkipFirstOperator.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_skipFirst = ((options) => pipe(SkipFirstOperator.create, partial(options?.count), (Broadcaster_lift)));
export default Broadcaster_skipFirst;
