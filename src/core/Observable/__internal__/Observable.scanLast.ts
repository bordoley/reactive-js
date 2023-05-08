import { ObservableContainer, ReactiveContainers } from "../../../core.js";
import HigherOrderObservable_scanLast from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanLast.js";
import Observable_create from "./Observable.create.js";

const Observable_scanLast: ReactiveContainers.TypeClass<ObservableContainer>["scanLast"] =
  /*@__PURE__*/ HigherOrderObservable_scanLast<ObservableContainer>(
    Observable_create,
  );

export default Observable_scanLast;
