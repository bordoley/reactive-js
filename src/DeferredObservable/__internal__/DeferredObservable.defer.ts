import HigherOrderObservable_defer from "../../HigherOrderObservable/__internal__/HigherOrderObservable.defer.js";
import { DeferredObservableContainer } from "../../containers.js";
import DeferredObservable_create from "./DeferredObservable.create.js";

const DeferredObservable_defer =
  /*@__PURE__*/ HigherOrderObservable_defer<DeferredObservableContainer.Type>(
    DeferredObservable_create,
  );
export default DeferredObservable_defer;
