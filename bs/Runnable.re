module Function1 = {
  type t('a, 't) = (. 'a) => 't;
};

module RunnableLike = {
  type t('a);
};

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external compute: unit => Function1.t((. unit) => 'a, RunnableLike.t('a)) =
  "compute";

let compute = f => (compute())(. (.) => f());

[@bs.module "@reactive-js/core/runnable"] [@bs.val] [@bs.variadic]
external concat: array(RunnableLike.t('a)) => RunnableLike.t('a) = "concat";

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external concatAll:
  unit =>
  Function1.t(RunnableLike.t(RunnableLike.t('a)), RunnableLike.t('a)) =
  "concatAll";

let concatAll = src => (concatAll())(. src);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external concatMap:
  ([@bs.uncurry] ('a => RunnableLike.t('b))) =>
  Function1.t(RunnableLike.t('a), RunnableLike.t('b)) =
  "concatMap";

let concatMap = (mapper, runnable) => (concatMap(mapper))(. runnable);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external concatWith:
  RunnableLike.t('a) => Function1.t(RunnableLike.t('a), RunnableLike.t('a)) =
  "concatWith";

let concatWith = (runnableB, runnableA) =>
  (concatWith(runnableB))(. runnableA);

module ContainsOption = {
  type t('a) = {equality: option((. 'a, 'a) => bool)};
};

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external contains:
  ('a, option(ContainsOption.t('a))) =>
  Function1.t(RunnableLike.t('a), bool) =
  "contains";

let contains = (~equality=?, v, runnable) =>
  switch (equality) {
  | Some(equality) =>
    (contains(v, Some({equality: Some((. a, b) => equality(a, b))})))(.
      runnable,
    )
  | None => (contains(v, None))(. runnable)
  };

module DistinctUntilChangedOptions = {
  type t('a) = {equality: option((. 'a, 'a) => bool)};
};

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external distinctUntilChanged:
  option(DistinctUntilChangedOptions.t('a)) =>
  Function1.t(RunnableLike.t('a), RunnableLike.t('a)) =
  "distinctUntilChanged";

let distinctUntilChanged = (~equality=?, runnable) =>
  switch (equality) {
  | Some(equality) =>
    (
      distinctUntilChanged(
        Some({equality: Some((. a, b) => equality(a, b))}),
      )
    )(.
      runnable,
    )
  | None => (distinctUntilChanged(None))(. runnable)
  };

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external empty: unit => RunnableLike.t('a) = "empty";

[@bs.module "@reactive-js/core/runnable"] [@bs.val] [@bs.variadic]
external endWith:
  array('a) => Function1.t(RunnableLike.t('a), RunnableLike.t('a)) =
  "endWith";

let endWith = (tail, runnable) => (endWith(tail))(. runnable);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external everySatisfy:
  ([@bs.uncurry] ('a => bool)) => Function1.t(RunnableLike.t('a), bool) =
  "everySatisfy";

let everySatisfy = (p, runnable) => (everySatisfy(p))(. runnable);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external first: RunnableLike.t('a) => bool = "first";

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external forEach:
  ([@bs.uncurry] ('a => unit)) => Function1.t(RunnableLike.t('a), unit) =
  "forEach";

let forEach = (f, runnable) => (forEach(f))(. runnable);

module FromArrayOptions = {
  type t = {
    startIndex: option(int),
    endIndex: option(int),
  };
};

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external fromArray:
  FromArrayOptions.t => Function1.t(array('a), RunnableLike.t('a)) =
  "fromArray";

let fromArray = (~startIndex=?, ~endIndex=?, arr) =>
  (fromArray({startIndex, endIndex}))(. arr);

let fromValue = v => fromArray([|v|]);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external keep:
  ([@bs.uncurry] ('a => bool)) =>
  Function1.t(RunnableLike.t('a), RunnableLike.t('a)) =
  "keep";

let keep = (p, obs) => (keep(p))(. obs);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external last: RunnableLike.t('a) => bool = "last";

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external map:
  ([@bs.uncurry] ('a => 'b)) =>
  Function1.t(RunnableLike.t('a), RunnableLike.t('b)) =
  "map";

let map = (f, obs) => (map(f))(. obs);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external mapTo: 'b => Function1.t(RunnableLike.t('a), RunnableLike.t('b)) =
  "mapTo";

let mapTo = (b, obs) => (mapTo(b))(. obs);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external noneSatisfy:
  ([@bs.uncurry] ('a => bool)) => Function1.t(RunnableLike.t('a), bool) =
  "noneSatisfy";

let noneSatisfy = (p, runnable) => (noneSatisfy(p))(. runnable);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external reduce:
  ([@bs.uncurry] (('acc, 'a) => 'acc), [@bs.uncurry] (unit => 'acc)) =>
  Function1.t(RunnableLike.t('a), 'acc) =
  "reduce";

let reduce = (f, acc, obs) => (reduce(f, acc))(. obs);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external repeat: unit => Function1.t(RunnableLike.t('a), RunnableLike.t('a)) =
  "repeat";

let repeat = obs => (repeat())(. obs);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external repeatCount:
  int => Function1.t(RunnableLike.t('a), RunnableLike.t('a)) =
  "repeat";

let repeatCount = (n, obs) => (repeatCount(n))(. obs);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external repeatPredicate:
  ([@bs.uncurry] ('a => bool)) =>
  Function1.t(RunnableLike.t('a), RunnableLike.t('a)) =
  "repeat";

let repeatPredicate = (p, obs) => (repeatPredicate(p))(. obs);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external scan:
  ([@bs.uncurry] (('acc, 'a) => 'acc), [@bs.uncurry] (unit => 'acc)) =>
  Function1.t(RunnableLike.t('a), RunnableLike.t('acc)) =
  "scan";

let scan = (f, acc, obs) => (scan(f, acc))(. obs);

module SkipFirstOptions = {
  type t = {count: option(int)};
};

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external skipFirst:
  SkipFirstOptions.t => Function1.t(RunnableLike.t('a), RunnableLike.t('a)) =
  "skipFirst";

let skipFirst = (~count=?, obs) => (skipFirst({count: count}))(. obs);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external someSatisfy:
  ([@bs.uncurry] ('a => bool)) => Function1.t(RunnableLike.t('a), bool) =
  "someSatisfy";

let someSatisfy = (p, runnable) => (someSatisfy(p))(. runnable);

[@bs.module "@reactive-js/core/runnable"] [@bs.val] [@bs.variadic]
external startWith:
  array('a) => Function1.t(RunnableLike.t('a), RunnableLike.t('a)) =
  "startWith";

let startWith = (arr, obs) => (startWith(arr))(. obs);

module TakeFirstOptions = {
  type t = {count: option(int)};
};

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external takeFirst:
  TakeFirstOptions.t => Function1.t(RunnableLike.t('a), RunnableLike.t('a)) =
  "takeFirst";

let takeFirst = (~count=?, obs) => (takeFirst({count: count}))(. obs);

module TakeLastOptions = {
  type t = {count: option(int)};
};

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external takeLast:
  TakeLastOptions.t => Function1.t(RunnableLike.t('a), RunnableLike.t('a)) =
  "takeLast";

let takeLast = (~count=?, obs) => (takeLast({count: count}))(. obs);

module TakeWhileOptions = {
  type t = {inclusive: option(bool)};
};

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external takeWhile:
  ([@bs.uncurry] ('a => bool), TakeWhileOptions.t) =>
  Function1.t(RunnableLike.t('a), RunnableLike.t('a)) =
  "takeWhile";

let takeWhile = (~inclusive=?, predicate, obs) =>
  (takeWhile(predicate, {inclusive: inclusive}))(. obs);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external toArray: RunnableLike.t('a) => array('a) = "toArray";