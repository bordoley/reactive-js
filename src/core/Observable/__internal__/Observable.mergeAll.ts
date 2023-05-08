import {
  ObservableContainer,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ReactiveContainer,
} from "../../../core.js";
import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Observable_lift from "./Observable.lift.js";

const Observable_mergeAll: ReactiveContainer.MergeAll<ObservableContainer>["mergeAll"] =
  /*@__PURE__*/ (() =>
    HigherOrderObservable_mergeAll<ObservableContainer>(
      Observable_lift({
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
      }),
    ) as ReactiveContainer.MergeAll<ObservableContainer>["mergeAll"])();

export default Observable_mergeAll;
