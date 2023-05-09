import HigherOrderObservable_defer from "../../HigherOrderObservable/__internal__/HigherOrderObservable.defer.js";
import { EnumerableContainer } from "../../types.js";
import Enumerable_create from "./Enumerable.create.js";

const Enumerable_defer =
  /*@__PURE__*/ HigherOrderObservable_defer<EnumerableContainer>(
    Enumerable_create,
  );
export default Enumerable_defer;
