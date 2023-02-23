import { FlatMapIterable } from "../../../containers.js";

import Container_flatMapIterable from "../../../containers/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toEnumerable from "../../../containers/Iterable/__internal__/Iterable.toEnumerable.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerable_concatMap from "./Enumerable.concatMap.js";

const Enumerable_flatMapIterable: FlatMapIterable<EnumerableLike>["flatMapIterable"] =
  /*@__PURE__*/ Container_flatMapIterable(
    Enumerable_concatMap,
    Iterable_toEnumerable,
  );

export default Enumerable_flatMapIterable;
