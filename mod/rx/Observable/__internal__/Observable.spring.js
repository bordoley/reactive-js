/// <reference types="./Observable.spring.d.ts" />

import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { pipe, returns } from "../../../functions.js";
import Observable_scanWithSpring from "./Observable.scanWithSpring.js";
const Observable_spring = (start, finish, options) => pipe(finish, Optional_toObservable(options), Observable_scanWithSpring(returns(start), options));
export default Observable_spring;
