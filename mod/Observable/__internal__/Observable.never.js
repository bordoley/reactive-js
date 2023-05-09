/// <reference types="./Observable.never.d.ts" />

import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import { ignore } from "../../functions.js";
const Observable_never = () => DeferredObservable_create(ignore);
export default Observable_never;
