import * as Computation from "../../../computations/Computation.js";
import { BroadcasterLike_connect, ComputationLike_isDeferred, ComputationLike_isSynchronous, MulticastObservableLike, ObservableLike_observe, SubjectLike } from "../../../computations.js";
import { newInstance, pipe } from "../../../functions.js";
import AbstractDelegatingDisposable from "../../../utils/Disposable/__internal__/AbstractDelegatingDisposable.js";
import * as Disposable from "../../../utils/Disposable.js";
import { ObserverLike, SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as Subject from "../../Subject.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const ObservableModule = {
  forEach: Observable_forEach,
};

// FIXME: Temporary while we work to get rid of multicast observable.
class MulticastObservable<T> extends AbstractDelegatingDisposable implements MulticastObservableLike<T> {
  [ComputationLike_isDeferred]: false = false as const;
  [ComputationLike_isSynchronous]: false = false as const;

  constructor(private readonly s: SubjectLike<T>) {
    super(s)
  }

  [ObservableLike_observe](observer: ObserverLike<T>): void {
    this.s[BroadcasterLike_connect](observer);
  }
}

const Observable_multicast: Observable.Signature["multicast"] =
  (
    scheduler: SchedulerLike,
    options: {
      readonly autoDispose?: boolean;
      readonly replay?: number;
    } = {},
  ) =>
  observable => {
    const subject = Subject.create(options);

    pipe(
      observable,
      Computation.notify(ObservableModule)(subject),
      Observable_subscribe(scheduler),
      Disposable.bindTo(subject),
    );

    return newInstance(MulticastObservable, subject);
  };

export default Observable_multicast;
