import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_scanLast from "../../Observable/__internal__/Observable.scanLast.js";
import DeferredObservable_create from "./DeferredObservable.create.js";

const DeferredObservable_scanLast: DeferredObservable.Signature["scanLast"] =
  /*@__PURE__*/ Observable_scanLast<
    DeferredObservable.Type,
    DeferredObservable.Type
  >(DeferredObservable_create);

export default DeferredObservable_scanLast;
