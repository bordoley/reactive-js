/// <reference types="./RunnableLike.onRun.d.ts" />
import ReactiveContainerLike__onSink from '../ReactiveContainerLike/ReactiveContainerLike.onSink.mjs';
import RunnableLike__create from './RunnableLike.create.mjs';

const RunnableLike__onRun = (f) => (runnable) => ReactiveContainerLike__onSink(RunnableLike__create, runnable, f);

export { RunnableLike__onRun as default };
