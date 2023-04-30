import { ignore } from "../../../functions.js";
import { Never, ObservableContainerLike } from "../../../rx.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";

const Observable_never: Never<ObservableContainerLike>["never"] = () =>
  Observable_create(ignore);

export default Observable_never;
