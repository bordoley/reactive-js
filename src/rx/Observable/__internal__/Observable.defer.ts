import { ObservableContainerLike } from "../../../rx.js";
import HigherOrderObservable_defer from "../../HigherOrderObservable/__internal__/HigherOrderObservable.defer.js";
import Observable_create from "./Observable.create.js";

const Observable_defer =
  /*@__PURE__*/ HigherOrderObservable_defer<ObservableContainerLike>(
    Observable_create,
  );
export default Observable_defer;
