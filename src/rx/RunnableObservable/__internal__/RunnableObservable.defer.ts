import { Defer } from "../../../containers.js";
import { RunnableObservableLike } from "../../../rx.js";
import Observable_defer from "../../Observable/__internal__/Observable.defer.js";

const RunnableObservable_defer: Defer<RunnableObservableLike>["defer"] = (f =>
  Observable_defer(f, false, true)) as Defer<RunnableObservableLike>["defer"];

export default RunnableObservable_defer;
