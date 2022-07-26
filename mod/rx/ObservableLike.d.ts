import { ObservableLike } from "../rx.mjs";
declare const getObservableType: (obs: ObservableLike) => 0 | 1 | 2;
declare const TContainerOf: ObservableLike<unknown>;
export { TContainerOf, getObservableType };
