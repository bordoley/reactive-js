module DispatcherLike = {
  type t('a);

  [@bs.send] external dispatch: (t('a), 'a) => unit = "dispatch";
}
