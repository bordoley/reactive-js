import PauseableObservable_dispatchTo from "./PauseableObservable/__internal__/PauseableObservable.dispatchTo.js";
import PauseableObservable_enqueue from "./PauseableObservable/__internal__/PauseableObservable.enqueue.js";
import PauseableObservable_forEach from "./PauseableObservable/__internal__/PauseableObservable.forEach.js";
import PauseableObservable_keep from "./PauseableObservable/__internal__/PauseableObservable.keep.js";
import PauseableObservable_map from "./PauseableObservable/__internal__/PauseableObservable.map.js";
import PauseableObservable_pick from "./PauseableObservable/__internal__/PauseableObservable.pick.js";
import PauseableObservable_sinkInto from "./PauseableObservable/__internal__/PauseableObservable.sinkInto.js";
import { Function1 } from "./functions.js";
import { ContainerTypeClass } from "./type-classes.js";
import {
  Container,
  ContainerOperator,
  Container_T,
  Container_type,
  DeferredObservableLike,
  DispatcherLike,
  PauseableObservableLike,
  QueueableLike,
} from "./types.js";

export interface Type extends Container {
  readonly [Container_type]?: PauseableObservableLike<this[typeof Container_T]>;
}

export interface Signature extends ContainerTypeClass<Type> {
  enqueue<T>(queue: QueueableLike<T>): ContainerOperator<Type, T, T>;

  dispatchTo<T>(dispatcher: DispatcherLike<T>): ContainerOperator<Type, T, T>;

  sinkInto<T>(
    sink: DispatcherLike<T>,
  ): Function1<PauseableObservableLike<T>, DeferredObservableLike<void>>;
}

export const dispatchTo: Signature["dispatchTo"] =
  PauseableObservable_dispatchTo;
export const enqueue: Signature["enqueue"] = PauseableObservable_enqueue;
export const forEach: Signature["forEach"] = PauseableObservable_forEach;
export const keep: Signature["keep"] = PauseableObservable_keep;
export const map: Signature["map"] = PauseableObservable_map;
export const pick: Signature["pick"] = PauseableObservable_pick;
export const sinkInto: Signature["sinkInto"] = PauseableObservable_sinkInto;
