module RunnableLike: {type t('a);};

let compute: (unit => 'a) => RunnableLike.t('a);

[@bs.module "@reactive-js/core/runnable"] [@bs.val] [@bs.variadic]
external concat: array(RunnableLike.t('a)) => RunnableLike.t('a) = "concat";

let concatAll: RunnableLike.t(RunnableLike.t('a)) => RunnableLike.t('a);

let concatMap:
  ('b => RunnableLike.t('a), RunnableLike.t('b)) => RunnableLike.t('a);

let concatWith:
  (RunnableLike.t('a), RunnableLike.t('a)) => RunnableLike.t('a);

let contains: (~equality: ('a, 'a) => bool=?, 'a, RunnableLike.t('a)) => bool;

// createRunnable

let distinctUntilChanged:
  (~equality: ('a, 'a) => bool=?, RunnableLike.t('a)) => RunnableLike.t('a);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external empty: unit => RunnableLike.t('a) = "empty";

let endWith: (array('a), RunnableLike.t('a)) => RunnableLike.t('a);

let everySatisfy: ('a => bool, RunnableLike.t('a)) => bool;

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external first: RunnableLike.t('a) => bool = "first";

let forEach: ('a => unit, RunnableLike.t('a)) => unit;

let fromArray:
  (~startIndex: int=?, ~endIndex: int=?, array('a)) => RunnableLike.t('a);

let fromValue: 'a => RunnableLike.t('a);

// FIXME: generate

let keep: ('a => bool, RunnableLike.t('a)) => RunnableLike.t('a);

[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external last:
  RunnableLike.t('a) => bool =
  "last";

let map: ('a => 'b, RunnableLike.t('a)) => RunnableLike.t('b);

let mapTo: ('b, RunnableLike.t('a)) => RunnableLike.t('b);

let noneSatisfy: ('a => bool, RunnableLike.t('a)) => bool;

let reduce: (('acc, 'a) => 'acc, unit => 'acc, RunnableLike.t('a)) => 'acc;

let repeat: RunnableLike.t('a) => RunnableLike.t('a);

let repeatCount: (int, RunnableLike.t('a)) => RunnableLike.t('a);

let repeatPredicate: ('a => bool, RunnableLike.t('a)) => RunnableLike.t('a);

let scan:
  (('acc, 'a) => 'acc, unit => 'acc, RunnableLike.t('a)) =>
  RunnableLike.t('acc);

let skipFirst: (~count: int=?, RunnableLike.t('a)) => RunnableLike.t('a);

let someSatisfy: ('a => bool, RunnableLike.t('a)) => bool;

let startWith: (array('a), RunnableLike.t('a)) => RunnableLike.t('a);

let takeFirst: (~count: int=?, RunnableLike.t('a)) => RunnableLike.t('a);

let takeLast: (~count: int=?, RunnableLike.t('a)) => RunnableLike.t('a);

let takeWhile:
  (~inclusive: bool=?, 'a => bool, RunnableLike.t('a)) => RunnableLike.t('a);
  
[@bs.module "@reactive-js/core/runnable"] [@bs.val]
external toArray: RunnableLike.t('a) => array('a) = "toArray";