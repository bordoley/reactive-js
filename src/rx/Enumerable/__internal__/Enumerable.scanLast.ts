import { EnumerableContainer, Reactive } from "../../../rx.js";
import HigherOrderObservable_scanLast from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanLast.js";
import Enumerable_create from "./Enumerable.create.js";

const EnumerableObservable_scanLast: Reactive.ScanLast<EnumerableContainer>["scanLast"] =
  HigherOrderObservable_scanLast<EnumerableContainer>(Enumerable_create);

export default EnumerableObservable_scanLast;
