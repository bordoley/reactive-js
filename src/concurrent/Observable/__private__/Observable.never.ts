import { ignore } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_createMulticast from "./Observable.createMulticast.js";

const neverInstance = /*@__PURE__*/ Observable_createMulticast(ignore);
const Observable_never: Observable.Signature["never"] = () => neverInstance;

export default Observable_never;
