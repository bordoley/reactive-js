import { Map } from "../containers.mjs";
import { ObservableLike } from "../rx.mjs";
declare const getObservableType: (obs: ObservableLike) => 0 | 1 | 2;
declare const map: Map<ObservableLike>["map"];
export { getObservableType, map };
