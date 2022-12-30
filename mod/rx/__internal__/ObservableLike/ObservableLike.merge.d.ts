import { Concat } from "../../../containers.mjs";
import { ObservableLike } from "../../../rx.mjs";
declare const merge: Concat<ObservableLike>["concat"];
export { merge as default };
