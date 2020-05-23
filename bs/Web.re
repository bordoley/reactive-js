module EventSourceOptions = {
  type t = {
    events: option(array(string)),
    withCredentials: option(bool),
  };
};

module EventSourceEvent = {
  type t = {
    id: string,
    [@bs.as "type"]
    kind: string,
    data: string,
  };
};

[@bs.module "@reactive-js/core/web"] [@bs.val]
external creatEventSource:
  (string, EventSourceOptions.t) =>
  Observable.ObservableLike.t(EventSourceEvent.t) =
  "createEventSource";

let createEventSource = (~events=?, ~withCredentials=?, url) =>
  creatEventSource(url, {events, withCredentials});

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