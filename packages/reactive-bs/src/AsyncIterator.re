type t('req, 'resp);

external asObservable: t('req, 'resp) => Observable.t('resp) = "%identity";

[@bs.send] external dispatch: (t('req, 'resp), 'resp') => unit = "dispatch";
