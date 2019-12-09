type t('a);

[@bs.module "@reactive-js/rx"]
external connect: (t('a), Scheduler.t) => Disposable.t = "connect";

[@bs.module "@reactive-js/rx"]
external create: (Observer.t('a) => Disposable.t) => t('a) = "createObservable";

