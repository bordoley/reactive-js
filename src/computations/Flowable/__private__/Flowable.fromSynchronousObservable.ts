import {
  FlowableLike,
  FlowableLike_flow,
  SynchronousObservableLike,
} from "../../../computations.js";
import type * as Flowable from "../../Flowable.js";
import * as Observable from "../../Observable.js";

const Flowable_fromSynchronousObservable: Flowable.Signature["fromSynchronousObservable"] =

    <T>() =>
    (obs: SynchronousObservableLike<T>): FlowableLike<T> => ({
      [FlowableLike_flow]: (scheduler, options) =>
        Observable.toPauseableObservable<T>(scheduler, options)(obs),
    });

export default Flowable_fromSynchronousObservable;
