type t('req, 'resp) = {
    subscriberCount: int,
};

external asMulticastObservable: t('req, 'resp) => MulticastObservable.t('resp) = "%identity";
external asObservable: t('req, 'resp) => Observable.t('resp) = "%identity";

[@bs.send] external dispatch: (t('req, 'resp), 'resp') => unit = "dispatch";