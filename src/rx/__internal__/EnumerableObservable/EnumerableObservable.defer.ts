import { Defer } from "../../../containers";
import { EnumerableObservableLike } from "../../../rx";
import Observable$defer from "../Observable/Observable.defer";

const EnumerableObservable$defer: Defer<EnumerableObservableLike>["defer"] =
  (f =>
    Observable$defer(
      f,
      true,
      true,
    )) as Defer<EnumerableObservableLike>["defer"];

export default EnumerableObservable$defer;
