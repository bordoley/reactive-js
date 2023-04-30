import { ObservableContainer, ScanMany } from "../../../rx.js";
import HigherOrderObservable_scanMany from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanMany.js";
import Observable_create from "./Observable.create.js";

const Observable_scanMany: ScanMany<ObservableContainer>["scanMany"] =
  HigherOrderObservable_scanMany<ObservableContainer>(Observable_create);

export default Observable_scanMany;
