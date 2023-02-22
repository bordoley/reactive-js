/// <reference types="./Observable.never.d.ts" />

import { ignore } from "../../../functions.js";
import Observable_create from "../../EnumerableObservable/__internal__/EnumerableObservable.create.js";
const Observable_never = () => Observable_create(ignore);
export default Observable_never;
