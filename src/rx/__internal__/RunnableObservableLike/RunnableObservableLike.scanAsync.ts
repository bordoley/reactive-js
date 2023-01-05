import { RunnableObservableLike, ScanAsync } from "../../../rx";
import HigherOrderObservableLike__scanAsync from "../HigherOrderObservableLike/HigherOrderObservableLike.scanAsync";
import RunnableObservableLike__create from "./RunnableObservableLike.create";

const RunnableObservableLike__scanAsync: ScanAsync<
  RunnableObservableLike,
  RunnableObservableLike
>["scanAsync"] = HigherOrderObservableLike__scanAsync<
  RunnableObservableLike,
  RunnableObservableLike
>(RunnableObservableLike__create);

export default RunnableObservableLike__scanAsync;
