/// <reference types="./Runnable.first.d.ts" />

import Observable_takeFirst from "../../Observable/__internal__/Observable.takeFirst.js";
import { pipe } from "../../functions.js";
import Runnable_last from "./Runnable.last.js";
const Runnable_first = () => (src) => pipe(src, Observable_takeFirst(), Runnable_last());
export default Runnable_first;
