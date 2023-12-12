import { log } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";

const Observable_log: Observable.Signature["log"] = () =>
  Observable_forEach(log);

export default Observable_log;
