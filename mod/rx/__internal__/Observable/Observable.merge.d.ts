import { Concat } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable$merge: Concat<ObservableLike>["concat"];
export { Observable$merge as default };
