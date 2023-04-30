import { ObservableContainerLike, ScanLast } from "../../../rx.js";
import HigherOrderObservable_scanLast from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanLast.js";
import Observable_create from "./Observable.create.js";

const Observable_scanLast: ScanLast<ObservableContainerLike>["scanLast"] =
  /*@__PURE__*/ HigherOrderObservable_scanLast<ObservableContainerLike>(
    Observable_create,
  );

export default Observable_scanLast;
