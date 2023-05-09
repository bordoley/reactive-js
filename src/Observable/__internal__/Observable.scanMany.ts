import HigherOrderObservable_scanMany from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanMany.js";
import { ObservableContainer } from "../../containers.js";
import Observable_create from "./Observable.create.js";

const Observable_scanMany: ObservableContainer.TypeClass["scanMany"] =
  HigherOrderObservable_scanMany<ObservableContainer.Type>(Observable_create);

export default Observable_scanMany;
