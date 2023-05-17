import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_scanMany from "../../Observable/__internal__/Observable.scanMany.js";
import DeferredObservable_create from "./DeferredObservable.create.js";

const DeferredObservable_scanMany: DeferredObservable.Signature["scanMany"] =
  /*@__PURE__*/ Observable_scanMany<
    DeferredObservable.Type,
    DeferredObservable.Type
  >(DeferredObservable_create);

export default DeferredObservable_scanMany;
