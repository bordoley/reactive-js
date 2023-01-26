import { RunnableObservableLike, ScanAsync } from "../../../rx";
import HigherOrderObservable$scanAsync from "../HigherOrderObservable/HigherOrderObservable.scanAsync";
import RunnableObservable$create from "./RunnableObservable.create";

const RunnableObservable$scanAsync: ScanAsync<
  RunnableObservableLike,
  RunnableObservableLike
>["scanAsync"] = HigherOrderObservable$scanAsync<
  RunnableObservableLike,
  RunnableObservableLike
>(RunnableObservable$create);

export default RunnableObservable$scanAsync;
