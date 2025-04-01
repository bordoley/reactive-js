/// <reference types="./Observable.takeLast.d.ts" />

import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import { Observable_genPure } from "./Observable.gen.js";
const Observable_takeLast = ((options) => DeferredEventSource.takeLast(Observable_genPure, Observer.takeLast, options));
export default Observable_takeLast;
