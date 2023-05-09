import { SharedObservableContainer } from "../../../core.js";
import HigherOrderObservable_defer from "../../HigherOrderObservable/__internal__/HigherOrderObservable.defer.js";
import SharedObservable_create from "./SharedObservable.create.js";

const SharedObservable_defer =
  /*@__PURE__*/ HigherOrderObservable_defer<SharedObservableContainer>(
    SharedObservable_create,
  );
export default SharedObservable_defer;
