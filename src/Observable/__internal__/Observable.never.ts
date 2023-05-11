import type * as Observable from "../../Observable.js";
import SharedObservable_create from "../../SharedObservable/__internal__/SharedObservable.create.js";
import { ignore } from "../../functions.js";

const neverInstance = /*@__PURE__*/ SharedObservable_create(ignore);
const Observable_never: Observable.Signature["never"] = () => neverInstance;

export default Observable_never;
