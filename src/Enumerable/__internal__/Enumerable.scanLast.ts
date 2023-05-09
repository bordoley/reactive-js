import HigherOrderObservable_scanLast from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanLast.js";
import { EnumerableContainer } from "../../containers.js";
import Enumerable_create from "./Enumerable.create.js";

const EnumerableObservable_scanLast: EnumerableContainer.TypeClass["scanLast"] =
  HigherOrderObservable_scanLast<EnumerableContainer.Type>(Enumerable_create);

export default EnumerableObservable_scanLast;
