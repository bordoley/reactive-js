import { Containers, DispatcherLike, ObservableLike, PauseableObservableContainer, PauseableObservableLike, ReactiveContainers } from "../core.js";
import { Function1 } from "../functions.js";
export declare const dispatchTo: ReactiveContainers.TypeClass<PauseableObservableContainer>["dispatchTo"];
export declare const enqueue: ReactiveContainers.TypeClass<PauseableObservableContainer>["enqueue"];
export declare const forEach: Containers.TypeClass<PauseableObservableContainer>["forEach"];
export declare const keep: Containers.TypeClass<PauseableObservableContainer>["keep"];
export declare const map: Containers.TypeClass<PauseableObservableContainer>["map"];
export declare const pick: Containers.TypeClass<PauseableObservableContainer>["pick"];
export declare const sinkInto: <T>(sink: DispatcherLike<T>) => Function1<PauseableObservableLike<T>, ObservableLike<void>>;
