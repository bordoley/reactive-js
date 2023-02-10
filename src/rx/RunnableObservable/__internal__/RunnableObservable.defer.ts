import { Defer } from "../../../containers";
import { RunnableObservableLike } from "../../../rx";
import Observable_defer from "../../Observable/__internal__/Observable.defer";

const RunnableObservable_defer: Defer<RunnableObservableLike>["defer"] = (f =>
  Observable_defer(f, false, true)) as Defer<RunnableObservableLike>["defer"];

export default RunnableObservable_defer;
