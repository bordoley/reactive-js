import type * as DeferredObservable from "../../DeferredObservable.js";
import Iterable_toRunnable from "../../Iterable/__internal__/Iterable.toRunnable.js";
import { Function1, compose } from "../../functions.js";
import DeferredObservable_concatMap from "./DeferredObservable.concatMap.js";

const DeferredObservable_flatMapIterable: DeferredObservable.Signature["flatMapIterable"] =
  <TA, TB>(selector: Function1<TA, Iterable<TB>>) =>
    DeferredObservable_concatMap(compose(selector, Iterable_toRunnable<TB>()));

export default DeferredObservable_flatMapIterable;
