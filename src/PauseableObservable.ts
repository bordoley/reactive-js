import PauseableObservable_dispatchTo from "./PauseableObservable/__internal__/PauseableObservable.dispatchTo.js";
import PauseableObservable_enqueue from "./PauseableObservable/__internal__/PauseableObservable.enqueue.js";
import PauseableObservable_forEach from "./PauseableObservable/__internal__/PauseableObservable.forEach.js";
import PauseableObservable_keep from "./PauseableObservable/__internal__/PauseableObservable.keep.js";
import PauseableObservable_map from "./PauseableObservable/__internal__/PauseableObservable.map.js";
import PauseableObservable_pick from "./PauseableObservable/__internal__/PauseableObservable.pick.js";
import PauseableObservable_sinkInto from "./PauseableObservable/__internal__/PauseableObservable.sinkInto.js";
import {
  Containers,
  ObservableContainers,
  PauseableObservableContainer,
} from "./containers.js";
import { Function1 } from "./functions.js";
import {
  DispatcherLike,
  ObservableLike,
  PauseableObservableLike,
} from "./types.js";

export const dispatchTo: ObservableContainers.TypeClass<PauseableObservableContainer>["dispatchTo"] =
  PauseableObservable_dispatchTo;
export const enqueue: ObservableContainers.TypeClass<PauseableObservableContainer>["enqueue"] =
  PauseableObservable_enqueue;
export const forEach: Containers.TypeClass<PauseableObservableContainer>["forEach"] =
  PauseableObservable_forEach;
export const keep: Containers.TypeClass<PauseableObservableContainer>["keep"] =
  PauseableObservable_keep;
export const map: Containers.TypeClass<PauseableObservableContainer>["map"] =
  PauseableObservable_map;
export const pick: Containers.TypeClass<PauseableObservableContainer>["pick"] =
  PauseableObservable_pick;
export const sinkInto: <T>(
  sink: DispatcherLike<T>,
) => Function1<PauseableObservableLike<T>, ObservableLike<void>> =
  PauseableObservable_sinkInto;
