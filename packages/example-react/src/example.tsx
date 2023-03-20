import React, { useCallback, useEffect, useState } from "react";
import ReactDOMClient from "react-dom/client";
import * as Runnable from "@reactive-js/core/rx/Runnable";
import {
  useFlowable,
  useObservable,
} from "@reactive-js/core/integrations/react";
import { createSchedulerWithNormalPriority } from "@reactive-js/core/integrations/scheduler";
import {
  windowLocation,
  WindowLocationURI,
  WindowLocationStreamLike_canGoBack,
  WindowLocationStreamLike_goBack,
} from "@reactive-js/core/integrations/web";
import { increment, pipe, returns } from "@reactive-js/core/functions";
import { QueueableLike_push } from "@reactive-js/core/util";
import {
  FlowableState,
  FlowableState_paused,
  FlowableState_running,
  StreamableLike_stream,
} from "@reactive-js/core/streaming";

const normalPriorityScheduler = createSchedulerWithNormalPriority();

// History must be globally unique to an application
const historyStream = windowLocation[StreamableLike_stream](
  normalPriorityScheduler,
  {
    replay: 1,
  },
);

const counterFlowable = pipe(
  Runnable.generate(increment, returns(0), { delay: 100 }),
  Runnable.toFlowable(),
);

const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
  const { value: path } = ev.target;

  historyStream[QueueableLike_push]((uri: WindowLocationURI) => ({
    ...uri,
    path,
  }));
};

const onGoBack = () => {
  historyStream[WindowLocationStreamLike_goBack]();
};

const Root = () => {
  const uri = useObservable(historyStream);

  const canGoBack = historyStream[WindowLocationStreamLike_canGoBack];

  const [mode, updateMode] = useState<FlowableState>(FlowableState_paused);
  const [counter = 0, { pause, resume }] = useFlowable(counterFlowable);

  const label = mode === FlowableState_running ? "PAUSE" : "RESUME";
  const toggleMode = useCallback(
    () => {
      updateMode(mode =>
        mode === FlowableState_paused
        ? FlowableState_running
        : FlowableState_paused
      );
    },
    [updateMode]
  );

  useEffect(
    () => {
      if(mode === FlowableState_running) {
        resume();
      } else {
        pause();
      }
    }, [mode, pause, resume]
  );

  useEffect(
    () => {
        historyStream[QueueableLike_push](
          (uri: WindowLocationURI) => ({
            ...uri,
            query: `v=${counter}`,
          }),
          { replace: true },
        );
    }, [counter]
  )

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={onChange}
          value={String(uri?.path ?? "")}
        ></input>
        <button onClick={onGoBack} disabled={!canGoBack}>
          Back
        </button>
      </div>
      <div>{counter}</div>
      <button onClick={toggleMode}>{label}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(<Root />);
