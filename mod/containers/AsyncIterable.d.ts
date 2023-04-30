import { AsyncIterableContainer, Identity } from "../containers.js";
import { Flow, ToObservable } from "../rx.js";
export declare const flow: Flow<AsyncIterableContainer>["flow"];
export declare const identity: Identity<AsyncIterableContainer>["identity"];
export declare const toObservable: ToObservable<AsyncIterableContainer>["toObservable"];
