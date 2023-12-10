/// <reference types="./Observable.throwIfEmpty.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observer_createThrowIfEmptyObserver from "../../Observer/__private__/Observer.createThrowIfEmptyObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_throwIfEmpty = (factory) => pipe(Observer_createThrowIfEmptyObserver, partial(factory), Observable_liftPure);
export default Observable_throwIfEmpty;
