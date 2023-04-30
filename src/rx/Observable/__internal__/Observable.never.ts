import { ignore } from "../../../functions.js";
import { Never, ObservableContainer } from "../../../rx.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";

const Observable_never: Never<ObservableContainer>["never"] = () =>
  Observable_create(ignore);

export default Observable_never;
