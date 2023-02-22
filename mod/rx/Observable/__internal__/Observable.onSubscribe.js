/// <reference types="./Observable.onSubscribe.d.ts" />

import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import ReactiveContainer_onSink from "../../ReactiveContainer/__internal__/ReactiveContainer.onSink.js";
const Observable_onSubscribe = (f) => (obs) => ReactiveContainer_onSink(Observable_create, obs, f);
export default Observable_onSubscribe;
