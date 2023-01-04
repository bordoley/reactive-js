import { Never } from "../../../containers";
import { ignore } from "../../../functions";
import { EnumerableObservableLike } from "../../../rx";
import EnumerableObservableLike__create from "./EnumerableObservableLike.create";

const EnumerableObservableLike__never: Never<EnumerableObservableLike>["never"] =
  () => EnumerableObservableLike__create(ignore);

export default EnumerableObservableLike__never;
