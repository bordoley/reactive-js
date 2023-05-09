import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import { ObservableContainer } from "../../containers.js";
import { ignore } from "../../functions.js";

const Observable_never: ObservableContainer.TypeClass["never"] = () =>
  DeferredObservable_create(ignore);

export default Observable_never;
