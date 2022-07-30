import { Lift, TReactive } from "../__internal__/containers/StatefulContainerLikeInternal.mjs";
import { Map } from "../containers.mjs";
import { ObservableLike } from "../rx.mjs";
declare const getObservableType: (obs: ObservableLike) => 0 | 1 | 2;
declare const TContainerOf: ObservableLike<unknown>;
declare const liftT: Lift<ObservableLike, TReactive>;
declare const map: Map<ObservableLike>["map"];
export { TContainerOf, getObservableType, liftT, map };
