import React, { useCallback, useEffect, useState } from "react";
import ReactDOMClient from "react-dom/client";
import * as Runnable from "@reactive-js/core/rx/Runnable";
import { useFlowable } from "@reactive-js/core/integrations/react";
import {
  useWindowLocation,
  WindowLocationProvider,
} from "@reactive-js/core/integrations/react-web";
import { WindowLocationURI } from "@reactive-js/core/integrations/web";
import { increment, pipe, returns } from "@reactive-js/core/functions";
import {
  FlowableState,
  FlowableState_paused,
  FlowableState_running,
} from "@reactive-js/core/streaming";

const counterFlowable = pipe(
  Runnable.generate(increment, returns(-1), { delay: 500 }),
  Runnable.toFlowable(),
);

const Root = () => {
  const history = useWindowLocation();
  const [mode, updateMode] = useState<FlowableState>(FlowableState_paused);
  const counter = useFlowable(counterFlowable);

  const label = mode === FlowableState_running ? "PAUSE" : "RESUME";
  const toggleMode = useCallback(() => {
    updateMode(mode =>
      mode === FlowableState_paused
        ? FlowableState_running
        : FlowableState_paused,
    );
  }, [updateMode]);

  const onChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const { value: path } = ev.target;

      history.push((uri: WindowLocationURI) => ({
        ...uri,
        path,
      }));
    },
    [history.push],
  );

  useEffect(() => {
    if (mode === FlowableState_running) {
      counter.resume();
    } else {
      counter.pause();
    }
  }, [mode, counter.pause, counter.resume]);

  useEffect(() => {
    history.replace((uri: WindowLocationURI) => ({
      ...uri,
      query: `v=${counter.value}`,
    }));
  }, [history.replace, counter.value]);

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={onChange}
          value={String(history.uri?.path ?? "")}
        ></input>
        <button onClick={history.goBack} disabled={!history.canGoBack}>
          Back
        </button>
      </div>
      <div>{counter.value}</div>
      <button onClick={toggleMode}>{label}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(
  <WindowLocationProvider>
    <Root />
  </WindowLocationProvider>,
);
