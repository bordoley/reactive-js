import { DeferredObservableContainer } from "../../../core.js";
import HigherOrderObservable_defer from "../../HigherOrderObservable/__internal__/HigherOrderObservable.defer.js";
import DeferredObservable_create from "./DeferredObservable.create.js";

const DeferredObservable_defer =
  /*@__PURE__*/ HigherOrderObservable_defer<DeferredObservableContainer>(
    DeferredObservable_create,
  );
export default DeferredObservable_defer;
