/// <reference types="./Observable.tween.d.ts" />

import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { pipe, returns } from "../../../functions.js";
import Observable_scanTweening from "./Observable.scanTweening.js";
const Observable_tween = (start, finish, options) => pipe(finish, Optional_toObservable(), Observable_scanTweening(returns(start), options));
export default Observable_tween;
