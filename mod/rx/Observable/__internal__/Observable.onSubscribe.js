/// <reference types="./Observable.onSubscribe.d.ts" />

import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_onSink from "../../Observable/__internal__/Observable.onSink.js";
const Observable_onSubscribe = (f) => (obs) => Observable_onSink(Observable_create, obs, f);
export default Observable_onSubscribe;
