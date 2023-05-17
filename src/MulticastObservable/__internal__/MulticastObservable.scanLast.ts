import type * as DeferredObservable from "../../DeferredObservable.js";
import type * as MulticastObservable from "../../MulticastObservable.js";
import Observable_scanLast from "../../Observable/__internal__/Observable.scanLast.js";
import MulticastObservable_create from "./MulticastObservable.create.js";

const MulticastObservable_scanLast: MulticastObservable.Signature["scanLast"] =
  /*@__PURE__*/ Observable_scanLast<
    MulticastObservable.Type,
    DeferredObservable.Type
  >(MulticastObservable_create);

export default MulticastObservable_scanLast;
