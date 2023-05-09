import HigherOrderObservable_scanLast from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanLast.js";
import { Containers, ObservableContainer } from "../../containers.js";
import Observable_create from "./Observable.create.js";

const Observable_scanLast: Containers.TypeClass<ObservableContainer>["scanLast"] =
  /*@__PURE__*/ HigherOrderObservable_scanLast<ObservableContainer>(
    Observable_create,
  );

export default Observable_scanLast;
