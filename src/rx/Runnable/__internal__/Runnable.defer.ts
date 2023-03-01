import { Defer } from "../../../containers.js";
import { RunnableLike } from "../../../rx.js";
import Observable_defer from "../../Observable/__internal__/Observable.defer.js";

const Runnable_defer: Defer<RunnableLike>["defer"] = (f =>
  Observable_defer(f, false, true)) as Defer<RunnableLike>["defer"];

export default Runnable_defer;
