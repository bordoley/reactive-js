import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { ObservableLike } from "../../../computations.js";
import { bindMethod, none, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ObserverLike, SinkLike_complete } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_takeUntil: Observable.Signature["takeUntil"] = /*@__PURE__*/ (<
  T,
>() => {
  const createTakeUntilObserver = mixInstanceFactory(
    include(LiftedObserverMixin()),
    function TakeUntilObserver(
      this: unknown,
      delegate: ObserverLike<T>,
      notifier: ObservableLike<unknown>,
    ): ObserverLike<T> {
      init(LiftedObserverMixin<T, T>(), this, delegate, none);

      pipe(
        notifier,
        Observable_forEach(bindMethod(this, SinkLike_complete)),
        Observable_subscribe({ scheduler: this }),
        Disposable.addTo(this),
      );

      return this;
    },
  );

  return (notifier: ObservableLike) =>
    pipe(createTakeUntilObserver, partial(notifier), Observable_lift());
})() as Observable.Signature["takeUntil"];

export default Observable_takeUntil;
