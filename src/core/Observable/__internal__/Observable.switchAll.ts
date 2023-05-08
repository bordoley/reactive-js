import {
  ObservableContainer,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ReactiveContainers,
} from "../../../core.js";
import { Function1 } from "../../../functions.js";
import HigherOrderObservable_switchAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import Observable_lift from "./Observable.lift.js";

const Observable_switchAll: ReactiveContainers.TypeClass<ObservableContainer>["switchAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<ObservableContainer>(
    // FIXME: should just be DeferredObservable_lift

    Observable_lift({
      [ObservableLike_isEnumerable]: false,
      [ObservableLike_isRunnable]: false,
    }) as <TA, TB>(
      operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    ) => Function1<ObservableLike<TA>, ObservableLike<TB>>,
  );

export default Observable_switchAll;
