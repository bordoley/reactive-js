import { SourceLike_subscribe } from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import { ObserverLike, SchedulerLike_now } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as Source from "../../__internal__/Source.js";
import { Observable_genPure } from "./Observable.gen.js";

const Observable_currentTime: Observable.Signature["currentTime"] =
  /*@__PURE__*/ Source.create<number, ObserverLike<number>>(
    (observer: ObserverLike<number>) =>
      pipe(
        Observable_genPure<number>(function* CurrentTime() {
          while (true) {
            yield observer[SchedulerLike_now];
          }
        }),
        invoke(SourceLike_subscribe, observer),
      ),
  );

export default Observable_currentTime;
