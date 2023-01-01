import { Defer } from "../../../containers";
import { RunnableObservableLike } from "../../../rx";
import ObservableLike__defer from "../ObservableLike/ObservableLike.defer";

const RunnableObservableLike__defer: Defer<RunnableObservableLike>["defer"] =
  (f =>
    ObservableLike__defer(
      f,
      false,
      true,
    )) as Defer<RunnableObservableLike>["defer"];

export default RunnableObservableLike__defer;
