/// <reference types="./Observable.never.d.ts" />

import { ignore } from "../../../functions.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
const Observable_never = () => Observable_create(ignore);
export default Observable_never;
