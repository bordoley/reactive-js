module AsyncEnumerableLike: {
  type t('a) = Streamable.StreamableLike.t(unit, 'a);
};

module ConsumeRequest: {
  type t('a);

  [@bs.module "@reactive-js/core/asyncEnumerable"] [@bs.val]
  external done_: 'acc => t('acc) = "done";

  [@bs.module "@reactive-js/core/asyncEnumerable"] [@bs.val]
  external notify: 'acc => t('acc) = "notify";
};

let consume:
  (
    ('acc, 'a) => ConsumeRequest.t('acc),
    unit => 'acc,
    AsyncEnumerableLike.t('a)
  ) =>
  Observable.ObservableLike.t('acc);

let consumeAsync:
  (
    ('acc, 'a) => Observable.ObservableLike.t(ConsumeRequest.t('acc)),
    unit => 'acc,
    AsyncEnumerableLike.t('a)
  ) =>
  Observable.ObservableLike.t('acc);

let fromArray:
  (~delay: int=?, ~startIndex: int=?, ~endIndex: int=?, array('a)) =>
  AsyncEnumerableLike.t('a);

let generate:
  (~delay: int=?, ~generator: 'a => 'a, ~initialValue: unit => 'a, unit) =>
  AsyncEnumerableLike.t('a);