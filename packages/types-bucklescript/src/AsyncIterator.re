type t('req, 'resp);

external asMulticastObservable: t('req, 'resp) => MulticastObservable.t('resp) = "%identity";
external asObservable: t('req, 'resp) => Observable.t('resp) = "%identity";

[@bs.send] external dispatch: (t('req, 'resp), 'resp') => unit = "dispatch";
[@bs.get] external subscriberCount: t('req, 'resp) => int = "subscriberCount";
