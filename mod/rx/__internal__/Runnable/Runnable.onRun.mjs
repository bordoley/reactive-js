/// <reference types="./Runnable.onRun.d.ts" />
import ReactiveContainer$onSink from '../ReactiveContainer/ReactiveContainer.onSink.mjs';
import Runnable$create from './Runnable.create.mjs';

const Runnable$onRun = (f) => (runnable) => ReactiveContainer$onSink(Runnable$create, runnable, f);

export { Runnable$onRun as default };
