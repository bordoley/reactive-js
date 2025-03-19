import { compose, returns } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import Producer_toReadonlyArrayAsync from "../../Producer/__private__/Producer.toReadonlyArrayAsync.js";
import Broadcaster_toProducer from "./Broadcaster.toProducer.js";

const Broadcaster_toReadonlyArrayAsync: Broadcaster.Signature["toReadonlyArrayAsync"] =
  /*@__PURE__*/ (() =>
    returns(
      compose(Broadcaster_toProducer(), Producer_toReadonlyArrayAsync()),
    ))() as Broadcaster.Signature["toReadonlyArrayAsync"];
export default Broadcaster_toReadonlyArrayAsync;
