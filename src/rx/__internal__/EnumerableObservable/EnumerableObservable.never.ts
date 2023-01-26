import { Never } from "../../../containers";
import { ignore } from "../../../functions";
import { EnumerableObservableLike } from "../../../rx";
import EnumerableObservable$create from "./EnumerableObservable.create";

const EnumerableObservable$never: Never<EnumerableObservableLike>["never"] =
  () => EnumerableObservable$create(ignore);

export default EnumerableObservable$never;
