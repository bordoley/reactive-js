import AsyncIterable_toDeferredObservable from "./AsyncIterable/__internal__/AsyncIterable.toDeferredObservable.js";
import { Function1 } from "./functions.js";
import {
  Container,
  Container_T,
  Container_type,
  DeferredObservableLike,
} from "./types.js";

export interface Type extends Container {
  readonly [Container_type]?: AsyncIterable<this[typeof Container_T]>;
}

export interface Signature {
  toDeferredObservable<T>(): Function1<
    AsyncIterable<T>,
    DeferredObservableLike<T>
  >;
}

export const toDeferredObservable: Signature["toDeferredObservable"] =
  AsyncIterable_toDeferredObservable;
