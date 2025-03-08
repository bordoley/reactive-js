/// <reference types="./Observable.never.d.ts" />

import { returns } from "../../../functions.js";
import * as Subject from "../../Subject.js";
const neverInstance = /*@__PURE__*/ Subject.create();
const Observable_never = /*@__PURE__*/ returns(neverInstance);
export default Observable_never;
