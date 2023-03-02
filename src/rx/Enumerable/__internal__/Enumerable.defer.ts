import { Defer } from "../../../containers.js";
import { EnumerableLike } from "../../../rx.js";
import Observable_defer from "../../../rx/Observable/__internal__/Observable.defer.js";

const Enumerable_defer: Defer<EnumerableLike>["defer"] = (f =>
  Observable_defer(f, true, true)) as Defer<EnumerableLike>["defer"];

export default Enumerable_defer;
