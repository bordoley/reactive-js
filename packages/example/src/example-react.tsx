import { createRouter, find } from "@reactive-js/core/router";
import {
  compose,
  pipe,
  SideEffect1,
  Updater,
} from "@reactive-js/core/functions";
import {
  createComponent,
  useObservable,
  idlePriority,
} from "@reactive-js/core/react";
import {
  empty as emptyURI,
  decodeAndGetHash,
  encodeAndSetHash,
  RelativeURI,
} from "@reactive-js/core/relativeURI";
import {
  createEventSource,
  fetch,
  historyStateStore,
} from "@reactive-js/core/web";
import React, { useCallback } from "react";
import { default as ReactDOM } from "react-dom";
import { appState } from "./example.state";
import {
  isNone,
  isSome,
  map as mapOption,
  none,
} from "@reactive-js/core/option";
import { FlowMode } from "@reactive-js/core/flowable";
import {
  async,
  distinctUntilChanged,
  map as mapObs,
  __await,
  __memo,
  __observe,
} from "@reactive-js/core/observable";
import { dispatchTo } from "@reactive-js/core/dispatcher";
import { __stream } from "@reactive-js/core/streamable";

const updateHash = (hash: string): Updater<RelativeURI> => uri =>
  encodeAndSetHash(uri, hash);

const TextInputURIState = ({
  dispatch,
  uri,
}: {
  readonly params: { readonly [key: string]: string };
  readonly dispatch: SideEffect1<Updater<RelativeURI>>;
  readonly uri: RelativeURI;
}) => {
  const onChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = ev.target;
      dispatch(updateHash(value));
    },
    [dispatch],
  );

  const state = decodeAndGetHash(uri);

  // FIXME: In the real world, maintain cursor position:
  // http://dimafeldman.com/js/maintain-cursor-position-after-changing-an-input-value-programatically/
  return (
    <div>
      <input type="text" onChange={onChange} value={state}></input>
    </div>
  );
};

const appStateOnScheduler = appState(idlePriority);
const StreamPauseResume = () => {
  const state = useObservable(appStateOnScheduler);
  if (isNone(state)) {
    return null;
  } else {
    const { onClick, value, mode } = state;

    const label = mode === FlowMode.Resume ? "PAUSE" : "RESUME";

    return (
      <>
        <div>{value}</div>
        <button onClick={onClick}>{label}</button>
      </>
    );
  }
};

const goToPath = (pathname: string): Updater<RelativeURI> => uri => ({
  ...uri,
  pathname,
});

const NotFound = createComponent<{
  readonly dispatch: SideEffect1<Updater<RelativeURI>>;
}>(
  compose(
    mapObs(props => props.dispatch),
    distinctUntilChanged(),
    mapObs(dispatch => {
      const goToEvents = () => dispatch(goToPath("/events"));
      const goToFetch = () => dispatch(goToPath("/fetch"));
      const goToStream = () => dispatch(goToPath("/stream"));
      const goToTextInput = () => dispatch(goToPath("/text"));

      return (
        <div>
          <div>{"Not Found"}</div>
          <div>
            <button onClick={goToEvents}>Events Source Example</button>
            <button onClick={goToFetch}>Fetch Example</button>
            <button onClick={goToStream}>Stream Example</button>
            <button onClick={goToTextInput}>Text Input Example</button>
          </div>
        </div>
      );
    }),
  ),
);

const eventSource = createEventSource("http://localhost:8080/events", {
  events: ["error", "message", "test"],
});

const EventSourceExample = createComponent(() =>
  async(() => {
    const eventData = __observe(eventSource);

    return (
      <div>
        <div>{JSON.stringify(eventData) ?? ""}</div>
      </div>
    );
  }),
);

const fetchFile = (uri: string) =>
  pipe(
    { uri },
    fetch(response => response.text()),
  );

const FetchExample = createComponent(() =>
  async(() => {
    const someData = __await(
      fetchFile,
      "http://localhost:8080/files/packages/example/build/example-react.js",
    );

    return (
      <div>
        <div>{someData ?? ""}</div>
      </div>
    );
  }),
);

const router = createRouter({
  "/events": EventSourceExample,
  "/fetch": FetchExample,
  "/stream": StreamPauseResume,
  "/text": TextInputURIState,
});

const Root = createComponent(() =>
  async(scheduler => {
    const historyStream = __stream(historyStateStore, scheduler);
    const dispatch = __memo(dispatchTo, historyStream);

    const uri = __observe(historyStream) ?? emptyURI;
    const [Component, params] = __memo(find, router, uri.pathname) ?? [
      NotFound,
      {},
    ];

    return isSome(dispatch) ? (
      <Component params={params} dispatch={dispatch} uri={uri} />
    ) : (
      none
    );
  }),
);

(ReactDOM as any).createRoot(document.getElementById("root")).render(<Root />);
