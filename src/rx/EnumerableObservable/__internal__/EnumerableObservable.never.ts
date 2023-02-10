import { Never } from "../../../containers";
import { ignore } from "../../../functions";
import { EnumerableObservableLike } from "../../../rx";
import EnumerableObservable_create from "./EnumerableObservable.create";

const EnumerableObservable_never: Never<EnumerableObservableLike>["never"] =
  () => EnumerableObservable_create(ignore);

export default EnumerableObservable_never;
