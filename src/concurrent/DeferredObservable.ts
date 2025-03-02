import {
  DeferredComputationModule,
  DeferredReactiveComputationModule,
} from "../computations.js";
import { DeferredObservableLike } from "../concurrent.js";
import { ObservableComputationFor } from "./Observable.js";
import * as Observable from "./Observable.js";

export interface DeferredObservableModule
  extends DeferredComputationModule<
      ObservableComputationFor<DeferredObservableLike>
    >,
    DeferredReactiveComputationModule<
      ObservableComputationFor<DeferredObservableLike>
    >,
    DeferredComputationModule<
      ObservableComputationFor<DeferredObservableLike>
    > {}

export type Signature = DeferredObservableModule;

export const buffer: Signature["buffer"] =
  Observable.buffer as Signature["buffer"];
export const catchError: Signature["catchError"] =
  Observable.catchError as Signature["catchError"];
export const concatAll: Signature["concatAll"] =
  Observable.concatAll as Signature["concatAll"];
export const concatMany: Signature["concatMany"] =
  Observable.concatMany as Signature["concatMany"];
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Observable.decodeWithCharset as Signature["decodeWithCharset"];
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable.distinctUntilChanged as Signature["distinctUntilChanged"];
export const empty: Signature["empty"] = Observable.empty;
export const forEach: Signature["forEach"] = Observable.forEach;
export const fromIterable: Signature["fromIterable"] =
  Observable.fromIterable as Signature["fromIterable"];
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Observable.fromReadonlyArray;
export const fromValue: Signature["fromValue"] = Observable.fromValue;
export const generate: Signature["generate"] = Observable.generate;
export const keep: Signature["keep"] = Observable.keep as Signature["keep"];
export const map: Signature["map"] = Observable.map as Signature["map"];
export const pairwise: Signature["pairwise"] =
  Observable.pairwise as Signature["pairwise"];
export const raise: Signature["raise"] = Observable.raise;
export const repeat: Signature["repeat"] =
  Observable.repeat as Signature["repeat"];
export const retry: Signature["retry"] = Observable.retry as Signature["retry"];
export const scan: Signature["scan"] = Observable.scan as Signature["scan"];
export const skipFirst: Signature["skipFirst"] =
  Observable.skipFirst as Signature["skipFirst"];
export const takeFirst: Signature["takeFirst"] =
  Observable.takeFirst as Signature["takeFirst"];
export const takeLast: Signature["takeLast"] =
  Observable.takeLast as Signature["takeLast"];
export const takeWhile: Signature["takeWhile"] =
  Observable.takeWhile as Signature["takeWhile"];
export const throwIfEmpty: Signature["throwIfEmpty"] =
  Observable.throwIfEmpty as Signature["throwIfEmpty"];
