import { ObservableLike, SourceLike_subscribe } from "../../../computations.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import { SchedulerLike } from "../../../utils.js";
import * as Observable from "../../Observable.js";

const Observable_subscribe: Observable.Signature["subscribe"] =
  <T>(options?: { scheduler?: SchedulerLike }) =>
  (observable: ObservableLike<T>) => {
    const observer = Observer.createDropOldestWithoutBackpressure(0, options);
    observable[SourceLike_subscribe](observer);
    return observer;
  };

export default Observable_subscribe;
