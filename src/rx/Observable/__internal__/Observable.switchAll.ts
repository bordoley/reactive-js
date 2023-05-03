import {
  ObservableContainer,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  Reactive,
} from "../../../rx.js";
import HigherOrderObservable_switchAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import Observable_lift from "./Observable.lift.js";

const Observable_switchAll: Reactive.SwitchAll<ObservableContainer>["switchAll"] =
  /*@__PURE__*/ HigherOrderObservable_switchAll<ObservableContainer>(
    Observable_lift({
      [ObservableLike_isEnumerable]: false,
      [ObservableLike_isRunnable]: false,
    }),
  );

export default Observable_switchAll;
