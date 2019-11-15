# @reactive-js/react-hooks

## API

### Static Functions

*`useResource<T extends DisposableLike>(factory: () => T, deps: readonly any[] | undefined): T `*

*`useObservable<T>(observable: ObservableLike<T>, scheduler?: SchedulerLike): T | undefined`*

*`useObservableResource<T>(factory: () => ObservableResourceLike<T>, deps: readonly any[] | undefined, scheduler?: SchedulerLike): T | undefined`*

*`useAsyncIterator<TReq, T>(factory: () => AsyncIteratorLike<TReq, T>, deps: readonly any[] | undefined, scheduler?: SchedulerLike): [T | undefined, (req: TReq) => void]`*
