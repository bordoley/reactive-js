import { ObservableContainer, ObservableContainers } from "../../../core.js";
import { ignore } from "../../../functions.js";
import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";

// FIXME: Move into DeferredObservable
const Observable_never: ObservableContainers.TypeClass<ObservableContainer>["never"] =
  () => DeferredObservable_create(ignore);

export default Observable_never;
