type t('req, 'resp);

external asAsyncIterator: t('req, 'resp) => AsyncIterator.t('req, 'resp) = "%identity";
external asDisposable: t('req, 'resp) => Disposable.t = "%identity";
external asDisposableOrTeardown: t('req, 'resp) => Disposable.DisposableOrTeardown.t = "%identity";
external asMulticastObservable: t('req, 'resp) => MulticastObservable.t('resp) = "%identity";
external asMulticastObservableResource: t('req, 'resp) => MulticastObservableResource.t('resp) = "%identity";
external asObservable: t('req, 'resp) => Observable.t('resp) = "%identity";
external asObservableResource: t('req, 'resp) => ObservableResource.t('resp) = "%identity";

[@bs.send] external add: (t('req, 'resp), Disposable.DisposableOrTeardown.t) => t('req, 'resp) = "add";
[@bs.send] [@bs.variadic] external addAll: (t('req, 'resp), array(Disposable.DisposableOrTeardown.t)) => t('req, 'resp) = "add";
[@bs.send] external dispose: t('req, 'resp) => unit = "dispose";
[@bs.get] external isDisposed: t('req, 'resp) => bool = "isDisposed";
[@bs.send] external remove: (t('req, 'resp), Disposable.DisposableOrTeardown.t) => t('req, 'resp) = "remove";
[@bs.send] [@bs.variadic] external removeAll: (t('req, 'resp), array(Disposable.DisposableOrTeardown.t)) => t('req, 'resp) = "remove";

[@bs.send] external dispatch: (t('req, 'resp), 'resp') => unit = "dispatch";
[@bs.get] external subscriberCount: t('req, 'resp) => int = "subscriberCount";


[@bs.module "@reactive-js/async-enumerable"]
external createEventEmitter:  unit => t('event, 'event) = "createEventEmitter";

[@bs.module "@reactive-js/async-enumerable"]
external createPersistentStateStore: (
    ~persistentStore: t('state, 'state),
    ~initialState: 'state,
    ~scheduler: Scheduler.t,
    ~equals:('state, 'state)=>bool=?,
    unit,
) => t('state => 'state, 'state) = "createPersistentStateStore";

[@bs.module "@reactive-js/async-enumerable"]
external createReducerStore: (
  ~initialState: 'state,
  ~reducer: ('state, 'action) => 'state,
  ~scheduler: Scheduler.t,
  ~equals:('state, 'state)=>bool=?,
  unit,
) => t('action, 'state) = "createReducerStore";

[@bs.module "@reactive-js/async-enumerable"]
external createStateStore: (
  ~initialState: 'state,
  ~scheduler: Scheduler.t,
  ~equals:('state, 'state)=>bool=?,
  unit,
) => t('state => 'state, 'state) = "createStateStore";
