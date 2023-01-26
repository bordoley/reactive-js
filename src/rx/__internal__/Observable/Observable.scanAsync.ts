import { ObservableLike, ScanAsync } from "../../../rx";
import HigherOrderObservable$scanAsync from "../HigherOrderObservable/HigherOrderObservable.scanAsync";
import Observable$create from "./Observable.create";

const Observable$scanAsync: ScanAsync<
  ObservableLike,
  ObservableLike
>["scanAsync"] = HigherOrderObservable$scanAsync<
  ObservableLike,
  ObservableLike
>(Observable$create);

export default Observable$scanAsync;
