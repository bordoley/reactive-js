/// <reference types="./Observable.toAsyncIterable.d.ts" />

import { compose } from "../../../functions.js";
import Producer_toAsyncIterable from "../../Producer/__private__/Producer.toAsyncIterable.js";
import Observable_toProducer from "./Observable.toProducer.js";
const Observable_toAsyncIterable = (options => compose(Observable_toProducer(options), Producer_toAsyncIterable()));
export default Observable_toAsyncIterable;
