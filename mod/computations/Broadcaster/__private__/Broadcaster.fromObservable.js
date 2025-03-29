/// <reference types="./Broadcaster.fromObservable.d.ts" />

import { compose } from "../../../functions.js";
import Observable_toProducer from "../../Observable/__private__/Observable.toProducer.js";
import Producer_broadcast from "../../Producer/__private__/Producer.broadcast.js";
export const Broadcaster_fromObservable = ((options) => compose(Observable_toProducer(options), Producer_broadcast()));
