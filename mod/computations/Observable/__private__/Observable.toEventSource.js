/// <reference types="./Observable.toEventSource.d.ts" />

import * as Computation from "../../../computations/Computation.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import EventSource_create from "../../EventSource/__private__/EventSource.create.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const ObservableModule = { forEach: Observable_forEach };
const Observable_toEventSource = (scheduler) => (obs) => EventSource_create(listener => pipe(obs, Computation.notify(ObservableModule)(listener), Observable_subscribe(scheduler), Disposable.bindTo(listener)));
export default Observable_toEventSource;
