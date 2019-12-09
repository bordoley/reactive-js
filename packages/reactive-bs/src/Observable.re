type t('a);

module Operator {
  type observable('a) = t('a);
  type t('a, 'b) = observable('a) => observable('b);
}

[@bs.module "@reactive-js/rx"]
external connect: (t('a), Scheduler.t) => Disposable.t = "connect";

[@bs.module "@reactive-js/rx"]
external create: ([@bs.uncurry](Observer.t('a) => Disposable.t)) => t('a) =
  "createObservable";

[@bs.module "@reactive-js/observable"]
external fromArray: array('a) => t('a) = "fromArray";

[@bs.module "@reactive-js/observable"]
external fromArrayWithDelay: (array('a), int) => t('a) = "fromArray";

[@bs.module "@reactive-js/observable"]
external map: ('a => 'b) => Operator.t('a, 'b) = "map";