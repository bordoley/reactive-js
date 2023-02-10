import { Never } from "../../../containers";
import { ignore } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Observable_create from "../../EnumerableObservable/__internal__/EnumerableObservable.create";

const Observable_never: Never<ObservableLike>["never"] = () =>
  Observable_create(ignore);

export default Observable_never;
