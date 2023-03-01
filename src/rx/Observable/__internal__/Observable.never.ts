import { Never } from "../../../containers.js";
import { ignore } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";

const Observable_never: Never<ObservableLike>["never"] = () =>
  Observable_create(ignore);

export default Observable_never;
