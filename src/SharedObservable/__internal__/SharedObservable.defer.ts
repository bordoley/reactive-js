import HigherOrderObservable_defer from "../../HigherOrderObservable/__internal__/HigherOrderObservable.defer.js";
import { SharedObservableContainer } from "../../containers.js";
import SharedObservable_create from "./SharedObservable.create.js";

const SharedObservable_defer =
  /*@__PURE__*/ HigherOrderObservable_defer<SharedObservableContainer.Type>(
    SharedObservable_create,
  );
export default SharedObservable_defer;
