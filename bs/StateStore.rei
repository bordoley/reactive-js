module Updater: {type t('a) = (. 'a) => 'a;};

module StateStoreLike: {
  type t('a) = Streamable.StreamableLike.t(Updater.t('a), 'a);
};

[@bs.module "@reactive-js/core/stateStore"] [@bs.val]
external createStateStore:
  (
    ~initialState: unit => 'a,
    ~equals: [@bs.uncurry] (('a, 'a) => bool)=?,
    unit
  ) =>
  StateStoreLike.t('a) =
  "createStateStore";

let map:
  (~parse: 'a => 'b, ~serialize: 'b => 'a, StateStoreLike.t('a)) =>
  StateStoreLike.t('b);

let toStateStore:
  Streamable.StreamableLike.t('a, 'a) => StateStoreLike.t('a);