import Iterable_toRunnable from "../../Iterable/__internal__/Iterable.toRunnable.js";
import type * as Runnable from "../../Runnable.js";
import { Function1, compose } from "../../functions.js";
import Runnable_concatMap from "./Runnable.concatMap.js";

const Runnable_flatMapIterable: Runnable.Signature["flatMapIterable"] = <
  TA,
  TB,
>(
  selector: Function1<TA, Iterable<TB>>,
) => Runnable_concatMap(compose(selector, Iterable_toRunnable<TB>()));

export default Runnable_flatMapIterable;
