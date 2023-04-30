import { AsyncIterableContainerLike, Identity } from "../containers.js";
import { Flow, ToObservable } from "../rx.js";
export declare const flow: Flow<AsyncIterableContainerLike>["flow"];
export declare const identity: Identity<AsyncIterableContainerLike>["identity"];
export declare const toObservable: ToObservable<AsyncIterableContainerLike>["toObservable"];
