/// <reference types="node" />
import { Function1 } from './functions';
import { DisposableLike } from './disposable';
import { SchedulerLike } from './scheduler';
import { ObservableLike } from './observable';

interface ResourceManagerLike<TResource> extends DisposableLike {
    readonly count: number;
    get(key: string): ObservableLike<TResource>;
}
declare const createResourceManager: <TResource extends DisposableLike>(createResource: Function1<string, TResource>, scheduler: SchedulerLike, options?: {
    readonly maxIdleTime?: number;
    readonly maxResourcesPerKey?: number;
    readonly maxTotalResources?: number;
}) => ResourceManagerLike<TResource>;

export { ResourceManagerLike, createResourceManager };
