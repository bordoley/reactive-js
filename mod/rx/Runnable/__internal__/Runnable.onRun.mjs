/// <reference types="./Runnable.onRun.d.ts" />
import ReactiveContainer_onSink from '../../ReactiveContainer/__internal__/ReactiveContainer.onSink.mjs';
import Runnable_create from './Runnable.create.mjs';

const Runnable_onRun = (f) => (runnable) => ReactiveContainer_onSink(Runnable_create, runnable, f);

export { Runnable_onRun as default };
