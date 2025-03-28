/// <reference types="./Producer.takeUntil.d.ts" />

import { compose, identity, partial, pipe, returns, } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as TakeUntilSink from "../../__internal__/sinks/TakeUntilSink.js";
import Producer_forEach from "./Producer.forEach.js";
import Producer_lift from "./Producer.lift.js";
const m = Computation.makeModule()({
    toProducer: returns(identity),
});
const addEventListener = (_, effect) => compose(Producer_forEach(effect), Computation.subscribe(m)());
const Producer_takeUntil = ((notifier) => pipe((TakeUntilSink.create), partial(notifier, addEventListener), Producer_lift()));
export default Producer_takeUntil;
