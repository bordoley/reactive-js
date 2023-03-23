/// <reference types="./Observable.spring.d.ts" />

import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { pipe } from "../../../functions.js";
import Observable_scanWithSpring from "./Observable.scanWithSpring.js";
const Observable_spring = (start, finish, options) => pipe(finish, Optional_toObservable(), Observable_scanWithSpring(start, options));
export default Observable_spring;
