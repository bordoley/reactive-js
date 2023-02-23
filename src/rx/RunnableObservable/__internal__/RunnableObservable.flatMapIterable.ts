import { FlatMapIterable, Map } from "../../../containers.js";

import Container_flatMapIterable from "../../../containers/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toRunnableObservable from "../../../containers/Iterable/__internal__/Iterable.toRunnableObservable.js";
import { RunnableObservableLike } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import RunnableObservable_concatAll from "./RunnableObservable.concatAll.js";

const RunnableObservable_flatMapIterable: FlatMapIterable<RunnableObservableLike>["flatMapIterable"] =
  /*@__PURE__*/ Container_flatMapIterable(
    RunnableObservable_concatAll,
    Iterable_toRunnableObservable,
    Observable_map as Map<RunnableObservableLike>["map"],
  );

export default RunnableObservable_flatMapIterable;
