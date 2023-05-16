import MulticastObservable_create from "../../MulticastObservable/__internal__/MulticastObservable.create.js";
import type * as Observable from "../../Observable.js";
import { ignore } from "../../functions.js";

const neverInstance = /*@__PURE__*/ MulticastObservable_create(ignore);
const Observable_never: Observable.Signature["never"] = () => neverInstance;

export default Observable_never;
