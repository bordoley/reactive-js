import {
  Function2,
  Function3,
  Function4,
  Function5,
  Function6,
  Function7,
  Function8,
  Function9,
} from "../../functions.ts";
import { ObservableLike, ObservableFunction } from "./interfaces.ts";
import { latest, LatestMode } from "./latest.ts";

export function zipLatest<TA, TB, T>(
  observables: [ObservableLike<TA>, ObservableLike<TB>],
  selector: Function2<TA, TB, T>,
): ObservableLike<T>;
export function zipLatest<TA, TB, TC, T>(
  observables: [ObservableLike<TA>, ObservableLike<TB>, ObservableLike<TC>],
  selector: Function3<TA, TB, TC, T>,
): ObservableLike<T>;
export function zipLatest<TA, TB, TC, TD, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
  ],
  selector: Function4<TA, TB, TC, TD, T>,
): ObservableLike<T>;
export function zipLatest<TA, TB, TC, TD, TE, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
    ObservableLike<TE>,
  ],
  selector: Function5<TA, TB, TC, TD, TE, T>,
): ObservableLike<T>;
export function zipLatest<TA, TB, TC, TD, TE, TF, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
    ObservableLike<TE>,
    ObservableLike<TF>,
  ],
  selector: Function6<TA, TB, TC, TD, TE, TF, T>,
): ObservableLike<T>;
export function zipLatest<TA, TB, TC, TD, TE, TF, TG, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
    ObservableLike<TE>,
    ObservableLike<TF>,
    ObservableLike<TG>,
  ],
  selector: Function7<TA, TB, TC, TD, TE, TF, TG, T>,
): ObservableLike<T>;
export function zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
    ObservableLike<TE>,
    ObservableLike<TF>,
    ObservableLike<TG>,
    ObservableLike<TH>,
  ],
  selector: Function8<TA, TB, TC, TD, TE, TF, TG, TH, T>,
): ObservableLike<T>;
export function zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI, T>(
  observables: [
    ObservableLike<TA>,
    ObservableLike<TB>,
    ObservableLike<TC>,
    ObservableLike<TD>,
    ObservableLike<TE>,
    ObservableLike<TF>,
    ObservableLike<TG>,
    ObservableLike<TH>,
    ObservableLike<TI>,
  ],
  selector: Function9<TA, TB, TC, TD, TE, TF, TG, TH, TI, T>,
): ObservableLike<T>;

/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources using the specified `selector` function.
 */
export function zipLatest<T>(
  observables: ObservableLike<any>[],
  selector: (...values: unknown[]) => T,
): ObservableLike<T> {
  return latest(observables, LatestMode.Zip, selector);
}

export const zipLatestWith = <TA, TB, T>(
  snd: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
): ObservableFunction<TA, T> => fst => zipLatest([fst, snd], selector);
