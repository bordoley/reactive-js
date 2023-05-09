import {
  ObservableContainer,
  ObservableContainers,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
} from "../../../core.js";
import { Function1 } from "../../../functions.js";
import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Observable_lift from "./Observable.lift.js";

const Observable_mergeAll: ObservableContainers.TypeClass<ObservableContainer>["mergeAll"] =
  /*@__PURE__*/ (() =>
    HigherOrderObservable_mergeAll<ObservableContainer>(
      // FIXME: should just be DeferredObservable_lift

      Observable_lift({
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
      }) as <TA, TB>(
        operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
      ) => Function1<ObservableLike<TA>, ObservableLike<TB>>,
    ) as ObservableContainers.TypeClass<ObservableContainer>["mergeAll"])();

export default Observable_mergeAll;
