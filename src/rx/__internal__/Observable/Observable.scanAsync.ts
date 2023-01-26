import { ObservableLike, ScanAsync } from "../../../rx";
import HigherOrderObservable_scanAsync from "../HigherOrderObservable/HigherOrderObservable.scanAsync";
import Observable_create from "./Observable.create";

const Observable_scanAsync: ScanAsync<
  ObservableLike,
  ObservableLike
>["scanAsync"] = HigherOrderObservable_scanAsync<
  ObservableLike,
  ObservableLike
>(Observable_create);

export default Observable_scanAsync;
