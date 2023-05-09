import HigherOrderObservable_scanMany from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanMany.js";
import { ObservableContainer, ObservableContainers } from "../../containers.js";
import Observable_create from "./Observable.create.js";

const Observable_scanMany: ObservableContainers.TypeClass<ObservableContainer>["scanMany"] =
  HigherOrderObservable_scanMany<ObservableContainer>(Observable_create);

export default Observable_scanMany;
