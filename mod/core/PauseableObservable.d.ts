import { Container, DispatcherLike, ObservableLike, PauseableObservableContainer, PauseableObservableLike, ReactiveContainer } from "../core.js";
import { Function1 } from "../functions.js";
export declare const dispatchTo: ReactiveContainer.TypeClass<PauseableObservableContainer>["dispatchTo"];
export declare const enqueue: ReactiveContainer.TypeClass<PauseableObservableContainer>["enqueue"];
export declare const forEach: Container.TypeClass<PauseableObservableContainer>["forEach"];
export declare const keep: Container.TypeClass<PauseableObservableContainer>["keep"];
export declare const map: Container.TypeClass<PauseableObservableContainer>["map"];
export declare const pick: Container.TypeClass<PauseableObservableContainer>["pick"];
export declare const sinkInto: <T>(sink: DispatcherLike<T>) => Function1<PauseableObservableLike<T>, ObservableLike<void>>;
