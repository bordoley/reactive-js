import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import type * as Observable from "../../Observable.js";

const Observable_create: Observable.Signature["create"] =
  DeferredObservable_create;

export default Observable_create;
