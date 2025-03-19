import { compose } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import Producer_broadcast from "../../Producer/__private__/Producer.broadcast.js";
import Producer_fromReadonlyArray from "../../Producer/__private__/Producer.fromReadonlyArray.js";

const Broadcaster_fromReadonlyArray: Broadcaster.Signature["fromReadonlyArray"] =
  (<T>(options?: { count?: number; start?: number; autoDispose?: boolean }) =>
    compose(
      Producer_fromReadonlyArray<T>(options),
      Producer_broadcast<T>(options),
    )) as Broadcaster.Signature["fromReadonlyArray"];

export default Broadcaster_fromReadonlyArray;
