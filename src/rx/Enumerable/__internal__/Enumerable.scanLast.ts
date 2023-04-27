import { EnumerableLike, ScanLast } from "../../../rx.js";
import HigherOrderObservable_scanLast from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanLast.js";
import Enumerable_create from "./Enumerable.create.js";

const EnumerableObservable_scanLast: ScanLast<EnumerableLike>["scanLast"] =
  HigherOrderObservable_scanLast<EnumerableLike>(Enumerable_create);

export default EnumerableObservable_scanLast;
