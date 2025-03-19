import { BroadcasterLike } from "../../../computations.js";
import { none, pipe, returns } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import type * as Broadcaster from "../../Broadcaster.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";

const Broadcaster_lastAsync: Broadcaster.Signature["lastAsync"] =
  /*@__PURE__*/ returns(async (Broadcaster: BroadcasterLike) => {
    let result: unknown = none;
    const subscription = pipe(
      Broadcaster,
      Broadcaster_addEventHandler(v => {
        result = v;
      }),
    );

    await DisposableContainer.toPromise(subscription);

    return result;
  }) as Broadcaster.Signature["lastAsync"];
export default Broadcaster_lastAsync;
