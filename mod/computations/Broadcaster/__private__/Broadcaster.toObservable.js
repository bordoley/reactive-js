/// <reference types="./Broadcaster.toObservable.d.ts" />

import { compose } from "../../../functions.js";
import Producer_toObservable from "../../Producer/__private__/Producer.toObservable.js";
import Broadcaster_toProducer from "./Broadcaster.toProducer.js";
const Broadcaster_toObservable = ((options) => compose(Broadcaster_toProducer(), Producer_toObservable(options)));
export default Broadcaster_toObservable;
