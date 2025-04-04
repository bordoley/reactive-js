/// <reference types="./Observable.fromBroadcaster.d.ts" />

import { compose } from "../../../functions.js";
import Broadcaster_toProducer from "../../Broadcaster/__private__/Broadcaster.toProducer.js";
import Producer_toObservable from "../../Producer/__private__/Producer.toObservable.js";
const Observable_fromBroadcaster = (options => compose(Broadcaster_toProducer(), Producer_toObservable(options)));
export default Observable_fromBroadcaster;
