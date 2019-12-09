type t('a);

external asObservable: t('a) => Observable.t('a) = "%identity";
external asObserver: t('a) => Observer.t('a) = "%identity";