import { Map } from "../containers.mjs";
import { ObservableLike } from "../rx.mjs";
declare const getObservableType: (obs: ObservableLike) => 0 | 1 | 2;
declare const TContainerOf: ObservableLike<unknown>;
declare const map: Map<ObservableLike>["map"];
export { TContainerOf, getObservableType, map };
