import { ObservableLike, ScanAsync } from "../../../rx";
import HigherOrderObservableLike__scanAsync from "../HigherOrderObservableLike/HigherOrderObservableLike.scanAsync";
import ObservableLike__create from "./ObservableLike.create";

const ObservableLike__scanAsync: ScanAsync<
  ObservableLike,
  ObservableLike
>["scanAsync"] = HigherOrderObservableLike__scanAsync<
  ObservableLike,
  ObservableLike
>(ObservableLike__create);

export default ObservableLike__scanAsync;
