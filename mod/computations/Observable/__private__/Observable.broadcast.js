/// <reference types="./Observable.broadcast.d.ts" />

import { pipe } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import Producer_broadcast from "../../Producer/__private__/Producer.broadcast.js";
import SynchronousObservable_broadcast from "../../SynchronousObservable/__private__/SynchronousObservable.broadcast.js";
import Observable_toProducer from "./Observable.toProducer.js";
const Observable_broadcast = ((options) => (observable) => Computation.isSynchronous(observable)
    ? pipe(observable, SynchronousObservable_broadcast(options))
    : pipe(observable, Observable_toProducer(options), Producer_broadcast(options)));
export default Observable_broadcast;
