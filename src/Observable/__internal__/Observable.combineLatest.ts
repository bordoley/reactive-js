import {
  Containers,
  ObservableContainer,
  ObservableLike,
} from "../../types.js";
import Observable_latest from "./Observable.latest.js";

interface ObservableCombineLatest {
  combineLatest<C extends ObservableContainer, TA, TB>(
    a: Containers.Of<C, TA>,
    b: Containers.Of<C, TB>,
  ): Containers.Of<C, readonly [TA, TB]>;
  combineLatest<C extends ObservableContainer, TA, TB, TC>(
    a: Containers.Of<C, TA>,
    b: Containers.Of<C, TB>,
    c: Containers.Of<C, TC>,
  ): Containers.Of<C, readonly [TA, TB, TC]>;
  combineLatest<C extends ObservableContainer, TA, TB, TC, TD>(
    a: Containers.Of<C, TA>,
    b: Containers.Of<C, TB>,
    c: Containers.Of<C, TC>,
    d: Containers.Of<C, TD>,
  ): Containers.Of<C, readonly [TA, TB, TC, TD]>;
  combineLatest<C extends ObservableContainer, TA, TB, TC, TD, TE>(
    a: Containers.Of<C, TA>,
    b: Containers.Of<C, TB>,
    c: Containers.Of<C, TC>,
    d: Containers.Of<C, TD>,
    e: Containers.Of<C, TE>,
  ): Containers.Of<C, readonly [TA, TB, TC, TD, TE]>;
  combineLatest<C extends ObservableContainer, TA, TB, TC, TD, TE, TF>(
    a: Containers.Of<C, TA>,
    b: Containers.Of<C, TB>,
    c: Containers.Of<C, TC>,
    d: Containers.Of<C, TD>,
    e: Containers.Of<C, TE>,
    f: Containers.Of<C, TF>,
  ): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF]>;
  combineLatest<C extends ObservableContainer, TA, TB, TC, TD, TE, TF, TG>(
    a: Containers.Of<C, TA>,
    b: Containers.Of<C, TB>,
    c: Containers.Of<C, TC>,
    d: Containers.Of<C, TD>,
    e: Containers.Of<C, TE>,
    f: Containers.Of<C, TF>,
    g: Containers.Of<C, TG>,
  ): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  combineLatest<C extends ObservableContainer, TA, TB, TC, TD, TE, TF, TG, TH>(
    a: Containers.Of<C, TA>,
    b: Containers.Of<C, TB>,
    c: Containers.Of<C, TC>,
    d: Containers.Of<C, TD>,
    e: Containers.Of<C, TE>,
    f: Containers.Of<C, TF>,
    g: Containers.Of<C, TG>,
    h: Containers.Of<C, TH>,
  ): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  combineLatest<
    C extends ObservableContainer,
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG,
    TH,
    TI,
  >(
    a: Containers.Of<C, TA>,
    b: Containers.Of<C, TB>,
    c: Containers.Of<C, TC>,
    d: Containers.Of<C, TD>,
    e: Containers.Of<C, TE>,
    f: Containers.Of<C, TF>,
    g: Containers.Of<C, TG>,
    h: Containers.Of<C, TH>,
    i: Containers.Of<C, TI>,
  ): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}
const Observable_combineLatest: ObservableCombineLatest["combineLatest"] = (
  ...observables: readonly ObservableLike<any>[]
): ObservableLike<readonly unknown[]> => Observable_latest(observables, 1);

export default Observable_combineLatest;
