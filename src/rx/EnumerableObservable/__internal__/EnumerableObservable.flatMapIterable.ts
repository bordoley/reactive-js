import { FlatMapIterable, Map } from "../../../containers.js";

import Container_flatMapIterable from "../../../containers/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toEnumerableObservable from "../../../containers/Iterable/__internal__/Iterable.toEnumerableObservable.js";
import { EnumerableObservableLike } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import EnumerableObservable_concatAll from "./EnumerableObservable.concatAll.js";

const EnumerableObservable_flatMapIterable: FlatMapIterable<EnumerableObservableLike>["flatMapIterable"] =
  /*@__PURE__*/ Container_flatMapIterable(
    EnumerableObservable_concatAll,
    Iterable_toEnumerableObservable,
    Observable_map as Map<EnumerableObservableLike>["map"],
  );

export default EnumerableObservable_flatMapIterable;
