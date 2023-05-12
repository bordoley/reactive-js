import type * as Enumerable from "../../Enumerable.js";
import Iterable_toRunnable from "../../Iterable/__internal__/Iterable.toRunnable.js";
import { Function1, compose } from "../../functions.js";
import Enumerable_concatMap from "./Enumerable.concatMap.js";

const Enumerable_flatMapIterable: Enumerable.Signature["flatMapIterable"] = <
  TA,
  TB,
>(
  selector: Function1<TA, Iterable<TB>>,
) => Enumerable_concatMap(compose(selector, Iterable_toRunnable<TB>()));

export default Enumerable_flatMapIterable;
