type t('a);

external asMulticastObservable: t('a) => MulticastObservable.t('a) = "%identity";
external asObservable: t('a) => Observable.t('a) = "%identity";
external asObserver: t('a) => Observer.t('a) = "%identity";

[@bs.send] external complete: (t('a), ~error: Error.t=?, unit) => unit = "complete";
[@bs.send] external next: (t('a), 'a) => unit = "next";

[@bs.get] external subscriberCount: t('a) => int = "subscriberCount";