import { EnumerableContainerLike } from "../../../rx.js";
import HigherOrderObservable_defer from "../../HigherOrderObservable/__internal__/HigherOrderObservable.defer.js";
import Enumerable_create from "./Enumerable.create.js";

const Enumerable_defer =
  /*@__PURE__*/ HigherOrderObservable_defer<EnumerableContainerLike>(
    Enumerable_create,
  );
export default Enumerable_defer;
