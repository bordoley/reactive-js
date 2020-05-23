module Function1 = {
  type t('a, 't) = (. 'a) => 't;
};

module EnumeratorLike = {
  type t('a);
};

module EnumerableLike = {
  type t('a);
};

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external compute: unit => Function1.t((. unit) => 'a, EnumerableLike.t('a)) =
  "compute";

let compute = f => (compute())(. (.) => f());

[@bs.module "@reactive-js/core/enumerable"] [@bs.val] [@bs.variadic]
external concat: array(EnumerableLike.t('a)) => EnumerableLike.t('a) =
  "concat";

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external concatAll:
  unit =>
  Function1.t(EnumerableLike.t(EnumerableLike.t('a)), EnumerableLike.t('a)) =
  "concatAll";

let concatAll = src => (concatAll())(. src);

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external concatMap:
  ([@bs.uncurry] ('a => EnumerableLike.t('b))) =>
  Function1.t(EnumerableLike.t('a), EnumerableLike.t('b)) =
  "concatMap";

let concatMap = (mapper, enumerable) => (concatMap(mapper))(. enumerable);

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external concatWith:
  EnumerableLike.t('a) =>
  Function1.t(EnumerableLike.t('a), EnumerableLike.t('a)) =
  "concatWith";

let concatWith = (enumerableB, enumerableA) =>
  (concatWith(enumerableB))(. enumerableA);

module DistinctUntilChangedOptions = {
  type t('a) = {equality: option((. 'a, 'a) => bool)};
};

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external distinctUntilChanged:
  option(DistinctUntilChangedOptions.t('a)) =>
  Function1.t(EnumerableLike.t('a), EnumerableLike.t('a)) =
  "distinctUntilChanged";

let distinctUntilChanged = (~equality=?, enumerable) =>
  switch (equality) {
  | Some(equality) =>
    (
      distinctUntilChanged(
        Some({equality: Some((. a, b) => equality(a, b))}),
      )
    )(.
      enumerable,
    )
  | None => (distinctUntilChanged(None))(. enumerable)
  };

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external empty: unit => EnumerableLike.t('a) = "empty";

[@bs.module "@reactive-js/core/enumerable"] [@bs.val] [@bs.variadic]
external endWith:
  array('a) => Function1.t(EnumerableLike.t('a), EnumerableLike.t('a)) =
  "endWith";

let endWith = (tail, enumerable) => (endWith(tail))(. enumerable);

module FromArrayOptions = {
  type t = {
    startIndex: option(int),
    endIndex: option(int),
  };
};

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external fromArray:
  FromArrayOptions.t => Function1.t(array('a), EnumerableLike.t('a)) =
  "fromArray";

let fromArray = (~startIndex=?, ~endIndex=?, arr) =>
  (fromArray({startIndex, endIndex}))(. arr);

let fromValue = v => fromArray([|v|]);

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external keep:
  ([@bs.uncurry] ('a => bool)) =>
  Function1.t(EnumerableLike.t('a), EnumerableLike.t('a)) =
  "keep";

let keep = (p, obs) => (keep(p))(. obs);

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external map:
  ([@bs.uncurry] ('a => 'b)) =>
  Function1.t(EnumerableLike.t('a), EnumerableLike.t('b)) =
  "map";

let map = (f, obs) => (map(f))(. obs);

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external mapTo:
  'b => Function1.t(EnumerableLike.t('a), EnumerableLike.t('b)) =
  "mapTo";

let mapTo = (b, obs) => (mapTo(b))(. obs);

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external repeat:
  unit => Function1.t(EnumerableLike.t('a), EnumerableLike.t('a)) =
  "repeat";

let repeat = obs => (repeat())(. obs);

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external repeatCount:
  int => Function1.t(EnumerableLike.t('a), EnumerableLike.t('a)) =
  "repeat";

let repeatCount = (n, obs) => (repeatCount(n))(. obs);

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external repeatPredicate:
  ([@bs.uncurry] ('a => bool)) =>
  Function1.t(EnumerableLike.t('a), EnumerableLike.t('a)) =
  "repeat";

let repeatPredicate = (p, obs) => (repeatPredicate(p))(. obs);

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external scan:
  ([@bs.uncurry] (('acc, 'a) => 'acc), [@bs.uncurry] (unit => 'acc)) =>
  Function1.t(EnumerableLike.t('a), EnumerableLike.t('acc)) =
  "scan";

let scan = (f, acc, obs) => (scan(f, acc))(. obs);

module SkipFirstOptions = {
  type t = {count: option(int)};
};

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external skipFirst:
  SkipFirstOptions.t =>
  Function1.t(EnumerableLike.t('a), EnumerableLike.t('a)) =
  "skipFirst";

let skipFirst = (~count=?, obs) => (skipFirst({count: count}))(. obs);

[@bs.module "@reactive-js/core/enumerable"] [@bs.val] [@bs.variadic]
external startWith:
  array('a) => Function1.t(EnumerableLike.t('a), EnumerableLike.t('a)) =
  "startWith";

let startWith = (arr, obs) => (startWith(arr))(. obs);

module TakeFirstOptions = {
  type t = {count: option(int)};
};

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external takeFirst:
  TakeFirstOptions.t =>
  Function1.t(EnumerableLike.t('a), EnumerableLike.t('a)) =
  "takeFirst";

let takeFirst = (~count=?, obs) => (takeFirst({count: count}))(. obs);

module TakeLastOptions = {
  type t = {count: option(int)};
};

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external takeLast:
  TakeLastOptions.t =>
  Function1.t(EnumerableLike.t('a), EnumerableLike.t('a)) =
  "takeLast";

let takeLast = (~count=?, obs) => (takeLast({count: count}))(. obs);

module TakeWhileOptions = {
  type t = {inclusive: option(bool)};
};

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external takeWhile:
  ([@bs.uncurry] ('a => bool), TakeWhileOptions.t) =>
  Function1.t(EnumerableLike.t('a), EnumerableLike.t('a)) =
  "takeWhile";

let takeWhile = (~inclusive=?, predicate, obs) =>
  (takeWhile(predicate, {inclusive: inclusive}))(. obs);

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external toRunnable:
  unit => Function1.t(EnumerableLike.t('a), Runnable.RunnableLike.t('a)) =
  "toRunnable";

let toRunnable = obs => (toRunnable())(. obs);

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external zip2:
  (EnumerableLike.t('a), EnumerableLike.t('b)) =>
  EnumerableLike.t(('a, 'b)) =
  "zip";

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external zip3:
  (EnumerableLike.t('a), EnumerableLike.t('b), EnumerableLike.t('c)) =>
  EnumerableLike.t(('a, 'b, 'c)) =
  "zip";

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external zip4:
  (
    EnumerableLike.t('a),
    EnumerableLike.t('b),
    EnumerableLike.t('c),
    EnumerableLike.t('d)
  ) =>
  EnumerableLike.t(('a, 'b, 'c, 'd)) =
  "zip";

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external zip5:
  (
    EnumerableLike.t('a),
    EnumerableLike.t('b),
    EnumerableLike.t('c),
    EnumerableLike.t('d),
    EnumerableLike.t('e)
  ) =>
  EnumerableLike.t(('a, 'b, 'c, 'd, 'e)) =
  "zip";

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external zip6:
  (
    EnumerableLike.t('a),
    EnumerableLike.t('b),
    EnumerableLike.t('c),
    EnumerableLike.t('d),
    EnumerableLike.t('e),
    EnumerableLike.t('f)
  ) =>
  EnumerableLike.t(('a, 'b, 'c, 'd, 'e, 'f)) =
  "zip";

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external zipWith:
  EnumerableLike.t('b) =>
  Function1.t(EnumerableLike.t('a), EnumerableLike.t(('a, 'b))) =
  "zipWith";

let zipWith = (other, obs) => (zipWith(other))(. obs);