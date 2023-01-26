import { Defer } from "../../../containers";
import { EnumerableObservableLike } from "../../../rx";
import Observable_defer from "../Observable/Observable.defer";

const EnumerableObservable_defer: Defer<EnumerableObservableLike>["defer"] =
  (f =>
    Observable_defer(
      f,
      true,
      true,
    )) as Defer<EnumerableObservableLike>["defer"];

export default EnumerableObservable_defer;
