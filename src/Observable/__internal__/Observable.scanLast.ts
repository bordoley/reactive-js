import HigherOrderObservable_scanLast from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanLast.js";
import { ObservableContainer } from "../../containers.js";
import Observable_create from "./Observable.create.js";

const Observable_scanLast: ObservableContainer.TypeClass["scanLast"] =
  /*@__PURE__*/ HigherOrderObservable_scanLast<ObservableContainer.Type>(
    Observable_create,
  );

export default Observable_scanLast;
