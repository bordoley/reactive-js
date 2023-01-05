import { EnumerableObservableLike, ScanAsync } from "../../../rx";
import HigherOrderObservableLike__scanAsync from "../HigherOrderObservableLike/HigherOrderObservableLike.scanAsync";
import EnumerableObservableLike__create from "./EnumerableObservableLike.create";

const EnumerableObservableLike__scanAsync: ScanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
>["scanAsync"] = HigherOrderObservableLike__scanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
>(EnumerableObservableLike__create);

export default EnumerableObservableLike__scanAsync;
