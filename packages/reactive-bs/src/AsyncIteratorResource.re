type t('req, 'resp) = {
  isDisposed: bool,
};

external asAsyncIterator: t('req, 'resp) => AsyncIterator.t('req, 'resp) = "%identity";
external asDisposable: t('req, 'resp) => Disposable.t = "%identity";
external asDisposableOrTeardown: t('req, 'resp) => Disposable.DisposableOrTeardown.t = "%identity";
external asObservable: t('req, 'resp) => Observable.t('resp) = "%identity";
external asObservableResource: t('req, 'resp) => ObservableResource.t('resp) = "%identity";

[@bs.send] external add: (t('req, 'resp), Disposable.DisposableOrTeardown.t) => unit = "add";
[@bs.send] [@bs.variadic] external addAll: (t('req, 'resp), array(Disposable.DisposableOrTeardown.t)) => unit = "add";
[@bs.send] external dispose: t('req, 'resp) => unit = "dispose";
[@bs.send] external remove: (t('req, 'resp), Disposable.DisposableOrTeardown.t) => unit = "remove";
[@bs.send] [@bs.variadic] external removeAll: (t('req, 'resp), array(Disposable.DisposableOrTeardown.t)) => unit = "remove";

[@bs.send] external dispatch: (t('req, 'resp), 'resp') => unit = "dispatch";

[@bs.module "@reactive-js/ix"]
external createEventEmitter:  unit => t('event, 'event) = "createEventEmitter";

[@bs.module "@reactive-js/ix"]
external createPersistentStateStore: (
    ~persistentStore: t('state, 'state),
    ~initialState: 'state,
    ~scheduler: Scheduler.t,
    ~equals:('state, 'state)=>bool=?,
    unit,
) => t('state => 'state, 'state) = "createPersistentStateStore";

[@bs.module "@reactive-js/ix"]
external createReducerStore: (
  ~initialState: 'state,
  ~reducer: ('state, 'action) => 'state,
  ~scheduler: Scheduler.t,
  ~equals:('state, 'state)=>bool=?,
  unit,
) => t('action, 'state) = "createReducerStore";

[@bs.module "@reactive-js/ix"]
external createStateStore: (
  ~initialState: 'state,
  ~scheduler: Scheduler.t,
  ~equals:('state, 'state)=>bool=?,
  unit,
) => t('state => 'state, 'state) = "createStateStore";
