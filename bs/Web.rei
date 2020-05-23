module EventSourceEvent: {
  type t = {
    id: string,
    [@bs.as "type"]
    kind: string,
    data: string,
  };
};

let createEventSource:
  (~events: array(string)=?, ~withCredentials: bool=?, string) =>
  Observable.ObservableLike.t(EventSourceEvent.t);

[@bs.module "@reactive-js/core/web"] [@bs.val]
external fromEvent:
  (
    ~target: Dom.eventTarget,
    ~eventName: string,
    ~selector: [@bs.uncurry] (Dom.event => 'a),
    unit
  ) =>
  Observable.ObservableLike.t('a) =
  "fromEvent";

[@bs.module "@reactive-js/core/web"] [@bs.val]
external historyStateStore: StateStore.StateStoreLike.t(string) =
  "historyStateStore";