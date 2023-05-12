import Iterable_toRunnable from "../../Iterable/__internal__/Iterable.toRunnable.js";
import type * as SharedObservable from "../../SharedObservable.js";
import { Function1, compose } from "../../functions.js";
import SharedObservable_concatMap from "./SharedObservable.concatMap.js";

const SharedObservable_flatMapIterable: SharedObservable.Signature["flatMapIterable"] =
  <TA, TB>(selector: Function1<TA, Iterable<TB>>) =>
    SharedObservable_concatMap(compose(selector, Iterable_toRunnable<TB>()));

export default SharedObservable_flatMapIterable;
