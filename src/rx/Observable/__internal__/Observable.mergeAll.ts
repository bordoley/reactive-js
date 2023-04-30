import {
  MergeAll,
  ObservableContainerLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../../rx.js";
import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Observable_lift from "./Observable.lift.js";

const Observable_mergeAll: MergeAll<ObservableContainerLike>["mergeAll"] =
  /*@__PURE__*/ (() =>
    HigherOrderObservable_mergeAll<ObservableContainerLike>(
      Observable_lift({
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
      }),
    ) as MergeAll<ObservableContainerLike>["mergeAll"])();

export default Observable_mergeAll;
