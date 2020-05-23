module StreamableLike: {type t('req, 'resp);};

let createActionReducer:
  (~equality: ('acc, 'acc) => bool=?, ('acc, 'action) => 'acc, unit => 'acc) =>
  StreamableLike.t('action, 'acc);

[@bs.module "@reactive-js/core/streamable"] [@bs.val]
external createStreamable:
  (
  [@bs.uncurry]
  (Observable.ObservableLike.t('req) => Observable.ObservableLike.t('resp))
  ) =>
  StreamableLike.t('req, 'resp) =
  "createStreamable";

let empty: (~delay: int=?, unit) => StreamableLike.t('req, 'resp);

[@bs.module "@reactive-js/core/streamable"] [@bs.val]
external identity: unit => StreamableLike.t('a, 'a) = "identity";

let map:
  ('a => 'b, StreamableLike.t('req, 'a)) => StreamableLike.t('req, 'b);


let mapReq:
  ('a => 'b, StreamableLike.t('a, 'resp)) => StreamableLike.t('b, 'resp);

let mapTo: ('b, StreamableLike.t('req, 'a)) => StreamableLike.t('req, 'b);

let onNotify:
  ('resp => unit, StreamableLike.t('req, 'resp)) =>
  StreamableLike.t('req, 'resp);

let scan:
  (('acc, 'a) => 'acc, unit => 'acc, StreamableLike.t('req, 'a)) =>
  StreamableLike.t('req, 'acc);

[@bs.module "@reactive-js/core/streamable"] [@bs.val]
external sink:
  (StreamableLike.t('req, 'resp), StreamableLike.t('resp, 'req)) =>
  Observable.ObservableLike.t(unit) =
  "sink";

let withLatestFrom:
  (
    Observable.ObservableLike.t('b),
    ('a, 'b) => 'c,
    StreamableLike.t('req, 'a)
  ) =>
  StreamableLike.t('req, 'c);