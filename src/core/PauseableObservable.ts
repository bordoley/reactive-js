import {
  Container,
  DispatcherLike,
  ObservableLike,
  PauseableObservableContainer,
  PauseableObservableLike,
  ReactiveContainer,
} from "../core.js";
import { Function1 } from "../functions.js";
import PauseableObservable_dispatchTo from "./PauseableObservable/__internal__/PauseableObservable.dispatchTo.js";
import PauseableObservable_enqueue from "./PauseableObservable/__internal__/PauseableObservable.enqueue.js";
import PauseableObservable_forEach from "./PauseableObservable/__internal__/PauseableObservable.forEach.js";
import PauseableObservable_keep from "./PauseableObservable/__internal__/PauseableObservable.keep.js";
import PauseableObservable_map from "./PauseableObservable/__internal__/PauseableObservable.map.js";
import PauseableObservable_pick from "./PauseableObservable/__internal__/PauseableObservable.pick.js";
import PauseableObservable_sinkInto from "./PauseableObservable/__internal__/PauseableObservable.sinkInto.js";

export const dispatchTo: ReactiveContainer.TypeClass<PauseableObservableContainer>["dispatchTo"] =
  PauseableObservable_dispatchTo;
export const enqueue: ReactiveContainer.TypeClass<PauseableObservableContainer>["enqueue"] =
  PauseableObservable_enqueue;
export const forEach: Container.TypeClass<PauseableObservableContainer>["forEach"] =
  PauseableObservable_forEach;
export const keep: Container.TypeClass<PauseableObservableContainer>["keep"] =
  PauseableObservable_keep;
export const map: Container.TypeClass<PauseableObservableContainer>["map"] =
  PauseableObservable_map;
export const pick: Container.TypeClass<PauseableObservableContainer>["pick"] =
  PauseableObservable_pick;
export const sinkInto: <T>(
  sink: DispatcherLike<T>,
) => Function1<PauseableObservableLike<T>, ObservableLike<void>> =
  PauseableObservable_sinkInto;
