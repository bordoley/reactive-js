import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { MergeMap, ObservableLike } from "../../../rx.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Observable_map from "./Observable.map.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_mergeMap: MergeMap<
  ObservableLike,
  {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
  }
>["mergeMap"] = /*@__PURE__*/ Container_concatMap(
  Observable_map,
  Observable_mergeAll,
);

export default Observable_mergeMap;
