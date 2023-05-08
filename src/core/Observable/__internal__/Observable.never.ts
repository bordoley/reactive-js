import { ObservableContainer, ReactiveContainers } from "../../../core.js";
import { ignore } from "../../../functions.js";
import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";

// FIXME: Move into DeferredObservable
const Observable_never: ReactiveContainers.TypeClass<ObservableContainer>["never"] =
  () => DeferredObservable_create(ignore);

export default Observable_never;
