import { FlatMapIterable } from "../../../containers.js";

import Container_flatMapIterable from "../../../containers/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toRunnable from "../../../containers/Iterable/__internal__/Iterable.toRunnable.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_concatAll from "./Runnable.concatAll.js";
import Runnable_map from "./Runnable.map.js";

const Runnable_flatMapIterable: FlatMapIterable<RunnableLike>["flatMapIterable"] =
  /*@__PURE__*/ Container_flatMapIterable(
    Runnable_concatAll,
    Iterable_toRunnable,
    Runnable_map,
  );

export default Runnable_flatMapIterable;
