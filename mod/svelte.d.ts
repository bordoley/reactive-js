/// <reference types="node" />
import { Function1, SideEffect1 } from './functions';
import { Option } from './option';
import './disposable';
import './dispatcher';
import { SchedulerLike } from './scheduler';
import { ObservableLike } from './observable';
import './enumerable';
import './runnable';
import { StreamableLike } from './streamable';
import { Readable } from 'svelte/store';

declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, Readable<Option<T>>>;
declare const stream: <TReq, T>(scheduler: SchedulerLike, options?: {
    replay?: number;
}) => Function1<StreamableLike<TReq, T>, [Readable<Option<T>>, SideEffect1<TReq>]>;

export { stream, subscribe };
