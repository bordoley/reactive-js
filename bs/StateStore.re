module Function1 = {
  type t('a, 't) = (. 'a) => 't;
};

module Updater = {
  type t('a) = (. 'a) => 'a;
};

module StateStoreLike = {
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

[@bs.module "@reactive-js/core/stateStore"] [@bs.val]
external map:
  (~parse: [@bs.uncurry] ('a => 'b), ~serialize: [@bs.uncurry] ('b => 'a)) =>
  Function1.t(StateStoreLike.t('a), StateStoreLike.t('b)) =
  "map";

let map = (~parse, ~serialize, stateStore) =>
  (map(~parse, ~serialize))(. stateStore);

[@bs.module "@reactive-js/core/stateStore"] [@bs.val]
external toStateStore:
  unit =>
  Function1.t(Streamable.StreamableLike.t('a, 'a), StateStoreLike.t('a)) =
  "toStateStore";

let toStateStore = streamable => (toStateStore())(. streamable);