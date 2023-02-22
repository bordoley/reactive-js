import { Defer } from "../../../containers.js";
import { EnumerableObservableLike } from "../../../rx.js";
import Observable_defer from "../../Observable/__internal__/Observable.defer.js";

const EnumerableObservable_defer: Defer<EnumerableObservableLike>["defer"] =
  (f =>
    Observable_defer(
      f,
      true,
      true,
    )) as Defer<EnumerableObservableLike>["defer"];

export default EnumerableObservable_defer;
