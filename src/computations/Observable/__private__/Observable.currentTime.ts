import { EventSourceLike_subscribe } from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import { ClockLike_now, ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import { Observable_genPure } from "./Observable.gen.js";

const Observable_currentTime: Observable.Signature["currentTime"] =
  /*@__PURE__*/ DeferredEventSource.create<number, ObserverLike<number>>(
    (observer: ObserverLike<number>) =>
      pipe(
        Observable_genPure<number>(function* CurrentTime() {
          while (true) {
            yield observer[ClockLike_now];
          }
        }),
        invoke(EventSourceLike_subscribe, observer),
      ),
  );

export default Observable_currentTime;
