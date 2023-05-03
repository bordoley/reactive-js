import { ignore } from "../../../functions.js";
import { ObservableContainer, Reactive } from "../../../rx.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";

const Observable_never: Reactive.Never<ObservableContainer>["never"] = () =>
  Observable_create(ignore);

export default Observable_never;
