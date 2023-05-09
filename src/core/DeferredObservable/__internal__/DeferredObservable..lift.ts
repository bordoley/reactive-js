import { Lift } from "../../../__internal__/core.js";
import {
  DeferredObservableContainer,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../../core.js";
import Observable_lift from "../../Observable/__internal__/Observable.lift.js";

const DeferredObservable_lift: Lift<DeferredObservableContainer>["lift"] =
  /*@__PURE__*/ Observable_lift({
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
  }) as Lift<DeferredObservableContainer>["lift"];

export default DeferredObservable_lift;
