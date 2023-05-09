import { Function1 } from "./functions.js";
import { Containers, DispatcherLike, ObservableContainers, ObservableLike, PauseableObservableContainer, PauseableObservableLike } from "./types.js";
export declare const dispatchTo: ObservableContainers.TypeClass<PauseableObservableContainer>["dispatchTo"];
export declare const enqueue: ObservableContainers.TypeClass<PauseableObservableContainer>["enqueue"];
export declare const forEach: Containers.TypeClass<PauseableObservableContainer>["forEach"];
export declare const keep: Containers.TypeClass<PauseableObservableContainer>["keep"];
export declare const map: Containers.TypeClass<PauseableObservableContainer>["map"];
export declare const pick: Containers.TypeClass<PauseableObservableContainer>["pick"];
export declare const sinkInto: <T>(sink: DispatcherLike<T>) => Function1<PauseableObservableLike<T>, ObservableLike<void>>;
