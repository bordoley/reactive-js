import { EnumerableContainer, ReactiveContainers } from "../../../core.js";
import HigherOrderObservable_scanLast from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanLast.js";
import Enumerable_create from "./Enumerable.create.js";

const EnumerableObservable_scanLast: ReactiveContainers.TypeClass<EnumerableContainer>["scanLast"] =
  HigherOrderObservable_scanLast<EnumerableContainer>(Enumerable_create);

export default EnumerableObservable_scanLast;
