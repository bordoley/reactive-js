/// <reference types="./Broadcaster.toReadonlyArrayAsync.d.ts" />

import { compose, returns } from "../../../functions.js";
import Producer_toReadonlyArrayAsync from "../../Producer/__private__/Producer.toReadonlyArrayAsync.js";
import Broadcaster_toProducer from "./Broadcaster.toProducer.js";
const Broadcaster_toReadonlyArrayAsync = 
/*@__PURE__*/ (() => returns(compose(Broadcaster_toProducer(), Producer_toReadonlyArrayAsync())))();
export default Broadcaster_toReadonlyArrayAsync;
