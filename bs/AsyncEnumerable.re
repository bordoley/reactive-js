module Function1 = {
  type t('a, 't) = (. 'a) => 't;
};

module AsyncEnumerableLike = {
  type t('a) = Streamable.StreamableLike.t(unit, 'a);
};

module ConsumeRequest = {
  type t('a);

  [@bs.module "@reactive-js/core/asyncEnumerable"] [@bs.val]
  external done_: 'acc => t('acc) = "done";

  [@bs.module "@reactive-js/core/asyncEnumerable"] [@bs.val]
  external notify: 'acc => t('acc) = "notify";
};

[@bs.module "@reactive-js/core/asyncEnumerable"] [@bs.val]
external consume:
  (
    [@bs.uncurry] (('acc, 'a) => ConsumeRequest.t('acc)),
    [@bs.uncurry] (unit => 'acc)
  ) =>
  Function1.t(AsyncEnumerableLike.t('a), Observable.ObservableLike.t('acc)) =
  "consume";

let consume = (f, acc, obs) => (consume(f, acc))(. obs);

[@bs.module "@reactive-js/core/asyncEnumerable"] [@bs.val]
external consumeAsync:
  (
    [@bs.uncurry] (
      ('acc, 'a) => Observable.ObservableLike.t(ConsumeRequest.t('acc))
    ),
    [@bs.uncurry] (unit => 'acc)
  ) =>
  Function1.t(AsyncEnumerableLike.t('a), Observable.ObservableLike.t('acc)) =
  "consumeAsync";

let consumeAsync = (f, acc, obs) => (consumeAsync(f, acc))(. obs);

module FromArrayOptions = {
  type t = {
    delay: option(int),
    startIndex: option(int),
    endIndex: option(int),
  };
};

[@bs.module "@reactive-js/core/asyncEnumerable"] [@bs.val]
external fromArray:
  FromArrayOptions.t => Function1.t(array('a), AsyncEnumerableLike.t('a)) =
  "fromArray";

let fromArray = (~delay=?, ~startIndex=?, ~endIndex=?, arr) =>
  (fromArray({delay, startIndex, endIndex}))(. arr);

// FIXME: fromEnumerable

// FIXME: fromIterable

module GenerateOptions = {
  type t = {delay: option(int)};
};

[@bs.module "@reactive-js/core/asyncEnumerable"] [@bs.val]
external generate:
  ([@bs.uncurry] ('a => 'a), [@bs.uncurry] (unit => 'a), GenerateOptions.t) =>
  AsyncEnumerableLike.t('a) =
  "generate";

let generate = (~delay=?, ~generator: 'a => 'a, ~initialValue: unit => 'a, ()) =>
  generate(generator, initialValue, {delay: delay});