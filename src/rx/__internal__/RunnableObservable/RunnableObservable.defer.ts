import { Defer } from "../../../containers";
import { RunnableObservableLike } from "../../../rx";
import Observable$defer from "../Observable/Observable.defer";

const RunnableObservable$defer: Defer<RunnableObservableLike>["defer"] = (f =>
  Observable$defer(f, false, true)) as Defer<RunnableObservableLike>["defer"];

export default RunnableObservable$defer;
