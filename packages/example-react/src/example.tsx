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
  const [uri, history] = useWindowLocation();
  const [mode, updateMode] = useState<FlowableState>(FlowableState_paused);
  const [counter = 0, { pause, resume }] = useFlowable(counterFlowable);

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
      resume();
    } else {
      pause();
    }
  }, [mode, pause, resume]);

  useEffect(() => {
    history.replace((uri: WindowLocationURI) => ({
      ...uri,
      query: `v=${counter}`,
    }));
  }, [history.replace, counter]);

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={onChange}
          value={String(uri?.path ?? "")}
        ></input>
        <button onClick={history.goBack} disabled={!history.canGoBack}>
          Back
        </button>
      </div>
      <div>{counter}</div>
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
