module EnumeratorLike: {type t('a);};

module EnumerableLike: {type t('a);};

let compute: (unit => 'a) => EnumerableLike.t('a);

[@bs.module "@reactive-js/core/enumerable"] [@bs.val] [@bs.variadic]
external concat: array(EnumerableLike.t('a)) => EnumerableLike.t('a) =
  "concat";

let concatAll:
  EnumerableLike.t(EnumerableLike.t('a)) => EnumerableLike.t('a);

let concatMap:
  ('b => EnumerableLike.t('a), EnumerableLike.t('b)) => EnumerableLike.t('a);

let concatWith:
  (EnumerableLike.t('a), EnumerableLike.t('a)) => EnumerableLike.t('a);

let distinctUntilChanged:
  (~equality: ('a, 'a) => bool=?, EnumerableLike.t('a)) =>
  EnumerableLike.t('a);

[@bs.module "@reactive-js/core/enumerable"] [@bs.val]
external empty: unit => EnumerableLike.t('a) = "empty";

let endWith: (array('a), EnumerableLike.t('a)) => EnumerableLike.t('a);

let fromArray:
  (~startIndex: int=?, ~endIndex: int=?, array('a)) => EnumerableLike.t('a);

// FIXME: fromIterable/Iterator

let fromValue: 'a => EnumerableLike.t('a);

// FIXME: generate

let keep: ('a => bool, EnumerableLike.t('a)) => EnumerableLike.t('a);

let map: ('a => 'b, EnumerableLike.t('a)) => EnumerableLike.t('b);

let mapTo: ('b, EnumerableLike.t('a)) => EnumerableLike.t('b);

let repeat: EnumerableLike.t('a) => EnumerableLike.t('a);

let repeatCount: (int, EnumerableLike.t('a)) => EnumerableLike.t('a);

let repeatPredicate:
  ('a => bool, EnumerableLike.t('a)) => EnumerableLike.t('a);

let scan:
  (('acc, 'a) => 'acc, unit => 'acc, EnumerableLike.t('a)) =>
  EnumerableLike.t('acc);

let skipFirst: (~count: int=?, EnumerableLike.t('a)) => EnumerableLike.t('a);

let startWith: (array('a), EnumerableLike.t('a)) => EnumerableLike.t('a);

let takeFirst: (~count: int=?, EnumerableLike.t('a)) => EnumerableLike.t('a);

let takeLast: (~count: int=?, EnumerableLike.t('a)) => EnumerableLike.t('a);

let takeWhile:
  (~inclusive: bool=?, 'a => bool, EnumerableLike.t('a)) =>
  EnumerableLike.t('a);

// FIXME: toIterable

let toRunnable: EnumerableLike.t('a) => Runnable.RunnableLike.t('a);

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

let zipWith:
  (EnumerableLike.t('b), EnumerableLike.t('a)) =>
  EnumerableLike.t(('a, 'b));