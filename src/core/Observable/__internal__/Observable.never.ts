import { ObservableContainer, ReactiveContainer } from "../../../core.js";
import { ignore } from "../../../functions.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";

const Observable_never: ReactiveContainer.TypeClass<ObservableContainer>["never"] =
  () => Observable_create(ignore);

export default Observable_never;
