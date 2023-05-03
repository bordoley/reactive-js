import { AsyncIterableContainer, Container } from "../containers.js";
import { Reactive } from "../rx.js";
export declare const flow: Reactive.Flow<AsyncIterableContainer>["flow"];
export declare const identity: Container.Identity<AsyncIterableContainer>["identity"];
export declare const toObservable: Reactive.ToObservable<AsyncIterableContainer>["toObservable"];
