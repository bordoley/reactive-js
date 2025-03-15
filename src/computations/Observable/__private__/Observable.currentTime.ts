import { ObservableLike_observe } from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import { ObserverLike, SchedulerLike_now } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";
import Observable_gen from "./Observable.gen.js";

const Observable_currentTime: Observable.Signature["currentTime"] =
  /*@__PURE__*/ Observable_createPureSynchronousObservable(
    (observer: ObserverLike<number>) =>
      pipe(
        Observable_gen(function* CurrentTime() {
          while (true) {
            yield observer[SchedulerLike_now];
          }
        }),
        invoke(ObservableLike_observe, observer),
      ),
  );

export default Observable_currentTime;
