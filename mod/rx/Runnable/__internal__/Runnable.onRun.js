/// <reference types="./Runnable.onRun.d.ts" />

import ReactiveContainer_onSink from "../../ReactiveContainer/__internal__/ReactiveContainer.onSink.js";
import Runnable_create from "./Runnable.create.js";
const Runnable_onRun = (f) => (runnable) => ReactiveContainer_onSink(Runnable_create, runnable, f);
export default Runnable_onRun;
