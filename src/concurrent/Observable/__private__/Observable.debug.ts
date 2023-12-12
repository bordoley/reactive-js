import { debug } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";

const Observable_debug: Observable.Signature["debug"] = () =>
  Observable_forEach(debug);

export default Observable_debug;
