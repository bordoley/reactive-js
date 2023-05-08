import { Container, DispatcherLike, ObservableLike, PauseableObservableContainer, PauseableObservableLike, ReactiveContainer } from "../core.js";
import { Function1 } from "../functions.js";
export declare const dispatchTo: ReactiveContainer.DispatchTo<PauseableObservableContainer>["dispatchTo"];
export declare const enqueue: ReactiveContainer.Enqueue<PauseableObservableContainer>["enqueue"];
export declare const forEach: Container.ForEach<PauseableObservableContainer>["forEach"];
export declare const keep: Container.Keep<PauseableObservableContainer>["keep"];
export declare const map: Container.Map<PauseableObservableContainer>["map"];
export declare const pick: Container.Pick<PauseableObservableContainer>["pick"];
export declare const sinkInto: <T>(sink: DispatcherLike<T>) => Function1<PauseableObservableLike<T>, ObservableLike<void>>;
