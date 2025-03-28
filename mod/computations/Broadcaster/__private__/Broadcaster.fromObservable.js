/// <reference types="./Broadcaster.fromObservable.d.ts" />

import { compose, identity, returns } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import Observable_toProducer from "../../Observable/__private__/Observable.toProducer.js";
const m = {
    toProducer: /*@__PURE__*/ returns(identity),
};
export const Broadcaster_fromObservable = ((options) => compose(Observable_toProducer(options), Computation.toObservable(m)()));
