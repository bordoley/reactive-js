import HigherOrderObservable_defer from "../../HigherOrderObservable/__internal__/HigherOrderObservable.defer.js";
import { EnumerableContainer } from "../../containers.js";
import Enumerable_create from "./Enumerable.create.js";

const Enumerable_defer =
  /*@__PURE__*/ HigherOrderObservable_defer<EnumerableContainer.Type>(
    Enumerable_create,
  );
export default Enumerable_defer;
