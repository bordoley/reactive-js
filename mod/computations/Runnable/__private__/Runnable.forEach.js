/// <reference types="./Runnable.forEach.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
import { partial, pipe } from "../../../functions.js";
import * as ForEachSink from "../../__internal__/sinks/ForEachSink.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_forEach = (predicate) => pipe(ForEachSink.create, partial(predicate), Runnable_lift({
    [ComputationLike_isPure]: false,
}));
export default Runnable_forEach;
