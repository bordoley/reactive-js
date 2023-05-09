import PauseableObservable_dispatchTo from "./PauseableObservable/__internal__/PauseableObservable.dispatchTo.js";
import PauseableObservable_enqueue from "./PauseableObservable/__internal__/PauseableObservable.enqueue.js";
import PauseableObservable_forEach from "./PauseableObservable/__internal__/PauseableObservable.forEach.js";
import PauseableObservable_keep from "./PauseableObservable/__internal__/PauseableObservable.keep.js";
import PauseableObservable_map from "./PauseableObservable/__internal__/PauseableObservable.map.js";
import PauseableObservable_pick from "./PauseableObservable/__internal__/PauseableObservable.pick.js";
import PauseableObservable_sinkInto from "./PauseableObservable/__internal__/PauseableObservable.sinkInto.js";
import { PauseableObservableContainer } from "./containers.js";
import { Function1 } from "./functions.js";
import {
  DispatcherLike,
  ObservableLike,
  PauseableObservableLike,
} from "./types.js";

export const dispatchTo: PauseableObservableContainer.TypeClass["dispatchTo"] =
  PauseableObservable_dispatchTo;
export const enqueue: PauseableObservableContainer.TypeClass["enqueue"] =
  PauseableObservable_enqueue;
export const forEach: PauseableObservableContainer.TypeClass["forEach"] =
  PauseableObservable_forEach;
export const keep: PauseableObservableContainer.TypeClass["keep"] =
  PauseableObservable_keep;
export const map: PauseableObservableContainer.TypeClass["map"] =
  PauseableObservable_map;
export const pick: PauseableObservableContainer.TypeClass["pick"] =
  PauseableObservable_pick;
export const sinkInto: <T>(
  sink: DispatcherLike<T>,
) => Function1<PauseableObservableLike<T>, ObservableLike<void>> =
  PauseableObservable_sinkInto;
