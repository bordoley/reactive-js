import type * as Broadcaster from "../../Broadcaster.js";
import Broadcaster_gen from "./Broadcaster.gen.js";

const Broadcaster_fromValue: Broadcaster.Signature["fromValue"] =
  <T>(options?: { autoDispose?: boolean }) =>
  (v: T) =>
    Broadcaster_gen(function* BroadcasterFromReadonlyArray() {
      yield v;
    }, options);

export default Broadcaster_fromValue;
