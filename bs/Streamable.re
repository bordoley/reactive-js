module Function1 = {
  type t('a, 't) = (. 'a) => 't;
};

module StreamableLike = {
  type t('req, 'resp);
};

module CreateActionReducerOption = {
  type t('a) = {equality: option((. 'a, 'a) => bool)};
};

[@bs.module "@reactive-js/core/streamable"] [@bs.val]
external createActionReducer:
  (
    [@bs.uncurry] (('acc, 'action) => 'acc),
    [@bs.uncurry] (unit => 'acc),
    option(CreateActionReducerOption.t('acc))
  ) =>
  StreamableLike.t('action, 'acc) =
  "createActionReducer";

let createActionReducer = (~equality=?, reducer, acc) =>
  switch (equality) {
  | Some(equality) =>
    createActionReducer(
      reducer,
      acc,
      Some({equality: Some((. a, b) => equality(a, b))}),
    )
  | None => createActionReducer(reducer, acc, None)
  };

[@bs.module "@reactive-js/core/streamable"] [@bs.val]
external createStreamable:
  (
  [@bs.uncurry]
  (Observable.ObservableLike.t('req) => Observable.ObservableLike.t('resp))
  ) =>
  StreamableLike.t('req, 'resp) =
  "createStreamable";

module EmptyOptions = {
  type t = {delay: option(int)};
};

[@bs.module "@reactive-js/core/streamable"] [@bs.val]
external empty: EmptyOptions.t => StreamableLike.t('req, 'resp) = "empty";

let empty = (~delay=?, ()) => empty({delay: delay});

[@bs.module "@reactive-js/core/streamable"] [@bs.val]
external identity: unit => StreamableLike.t('a, 'a) = "identity";

[@bs.module "@reactive-js/core/streamable"] [@bs.val]
external map:
  ([@bs.uncurry] ('a => 'b)) =>
  Function1.t(StreamableLike.t('req, 'a), StreamableLike.t('req, 'b)) =
  "map";

let map = (f, streamable) => (map(f))(. streamable);

[@bs.module "@reactive-js/core/streamable"] [@bs.val]
external mapReq:
  ([@bs.uncurry] ('a => 'b)) =>
  Function1.t(StreamableLike.t('a, 'resp), StreamableLike.t('b, 'resp)) =
  "mapReq";

let mapReq = (f, streamable) => (mapReq(f))(. streamable);

[@bs.module "@reactive-js/core/streamable"] [@bs.val]
external mapTo:
  'b => Function1.t(StreamableLike.t('req, 'a), StreamableLike.t('req, 'b)) =
  "mapTo";

let mapTo = (v, streamable) => (mapTo(v))(. streamable);

[@bs.module "@reactive-js/core/streamable"] [@bs.val]
external onNotify:
  ([@bs.uncurry] ('a => unit)) =>
  Function1.t(StreamableLike.t('req, 'a), StreamableLike.t('req, 'a)) =
  "onNotify";

let onNotify = (f, streamable) => (onNotify(f))(. streamable);

[@bs.module "@reactive-js/core/streamable"] [@bs.val]
external scan:
  ([@bs.uncurry] (('acc, 'a) => 'acc), [@bs.uncurry] (unit => 'acc)) =>
  Function1.t(StreamableLike.t('req, 'a), StreamableLike.t('req, 'acc)) =
  "scan";

let scan = (f, acc, streamable) => (scan(f, acc))(. streamable);

[@bs.module "@reactive-js/core/streamable"] [@bs.val]
external sink:
  (StreamableLike.t('req, 'resp), StreamableLike.t('resp, 'req)) =>
  Observable.ObservableLike.t(unit) =
  "sink";

[@bs.module "@reactive-js/core/streamable"] [@bs.val]
external withLatestFrom:
  (Observable.ObservableLike.t('b), [@bs.uncurry] (('a, 'b) => 'c)) =>
  Function1.t(StreamableLike.t('req, 'a), StreamableLike.t('req, 'c)) =
  "withLatestFrom";

let withLatestFrom = (other, selector, obs) =>
  (withLatestFrom(other, selector))(. obs);

