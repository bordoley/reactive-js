import { Defer } from "../../../containers";
import { EnumerableObservableLike } from "../../../rx";
import ObservableLike__defer from "../ObservableLike/ObservableLike.defer";

const defer: Defer<EnumerableObservableLike>["defer"] = (f =>
  ObservableLike__defer(
    f,
    true,
    true,
  )) as Defer<EnumerableObservableLike>["defer"];

export default defer;
