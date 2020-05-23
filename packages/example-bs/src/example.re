let x = Reactive.Disposable.createDisposable();
let x = Reactive.Disposable.createDisposableWithTeardown(_e => ());
let x = Reactive.Disposable.createSerialDisposable();
let y = Reactive.Disposable.SerialDisposableLike.asDisposableLike(x);

let y =
  Reactive.Observable.never()
  |> Reactive.Observable.map(i => i + 1)
  |> Reactive.Observable.subscribe(Reactive.React.idlePriority);

Reactive.Web.createEventSource(
  ~events=[|"error", "message", "test"|],
  "http://localhost:8080/events",
);