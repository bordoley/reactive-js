import { EventSourceLike_subscribe } from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import { ObserverLike, SchedulerLike_now } from "../../../utils.js";
import { Observable_genPure } from "../../Observable/__private__/Observable.gen.js";
import type * as SynchronousObservable from "../../SynchronousObservable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const SynchronousObservable_currentTime: SynchronousObservable.Signature["currentTime"] =
  /*@__PURE__*/ DeferredEventSource.create<number, ObserverLike<number>>(
    (observer: ObserverLike<number>) =>
      pipe(
        Observable_genPure<number>(function* CurrentTime() {
          while (true) {
            yield observer[SchedulerLike_now];
          }
        }),
        invoke(EventSourceLike_subscribe, observer),
      ),
  );

export default SynchronousObservable_currentTime;
