import type * as DeferredObservable from "../../DeferredObservable.js";
import type * as MulticastObservable from "../../MulticastObservable.js";
import Observable_scanMany from "../../Observable/__internal__/Observable.scanMany.js";
import MulticastObservable_create from "./MulticastObservable.create.js";

const MulticastObservable_scanMany: MulticastObservable.Signature["scanMany"] =
  /*@__PURE__*/ Observable_scanMany<
    MulticastObservable.Type,
    DeferredObservable.Type
  >(MulticastObservable_create);

export default MulticastObservable_scanMany;
