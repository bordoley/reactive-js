import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import { ObservableContainer, ObservableContainers } from "../../containers.js";
import { ignore } from "../../functions.js";

// FIXME: Move into DeferredObservable
const Observable_never: ObservableContainers.TypeClass<ObservableContainer>["never"] =
  () => DeferredObservable_create(ignore);

export default Observable_never;
