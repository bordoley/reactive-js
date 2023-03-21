import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ReactDOMClient from "react-dom/client";
import * as Runnable from "@reactive-js/core/rx/Runnable";
import { useFlowable } from "@reactive-js/core/integrations/react";
import {
  useWindowLocation,
  WindowLocationProvider,
} from "@reactive-js/core/integrations/react-web";
import { WindowLocationURI } from "@reactive-js/core/integrations/web";
import {
  identity,
  increment,
  none,
  pipe,
  pipeLazy,
  returns,
} from "@reactive-js/core/functions";
import {
  FlowableState,
  FlowableState_paused,
  FlowableState_running,
} from "@reactive-js/core/streaming";
import { createAnimationFrameScheduler } from "@reactive-js/core/scheduling/Scheduler";

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

  const animatedDivRef = useRef<HTMLDivElement>(null);
  const animationFlowable = useMemo(
    () =>
      pipe(
        Runnable.generate(identity, returns(none), { delay: 5000 }),
        Runnable.switchMap(
          pipeLazy(
            Runnable.generate(identity, returns(none)),
            Runnable.withCurrentTime(identity),
            Runnable.scan(
              ({ startTime }, time) => {
                startTime = Math.min(time, startTime);

                const elapsed = Math.max(time - startTime, 0);
                const size = 50 - 0.1 * elapsed;

                return {
                  elapsed,
                  startTime,
                  size,
                };
              },
              () => ({
                elapsed: 0,
                startTime: Number.MAX_SAFE_INTEGER,
                size: 50,
              }),
            ),
            Runnable.takeWhile(({ size }) => size > 0),
            Runnable.forEach(({ size }) => {
              console.log(size);
              const animatedDiv = animatedDivRef.current;
              if (animatedDiv != null) {
                animatedDiv.style.margin = `${50 - size}px`;
                animatedDiv.style.padding = `${size}px`;
                animatedDiv.style.backgroundColor = "#bbb";
                animatedDiv.style.borderRadius = "50%";
                animatedDiv.style.display = "inline-block";
              }
            }),
          ),
        ),
        Runnable.toFlowable(),
      ),
    [animatedDivRef],
  );
  const animation = useFlowable(animationFlowable, {
    scheduler: createAnimationFrameScheduler,
  });
  const [animationMode, updateAnimationMode] =
    useState<FlowableState>(FlowableState_paused);
  const animationLabel =
    animationMode === FlowableState_running
      ? "Pause Animation"
      : "Resume Animation";
  const toggleAnimationMode = useCallback(() => {
    updateAnimationMode(mode =>
      mode === FlowableState_paused
        ? FlowableState_running
        : FlowableState_paused,
    );
  }, [updateAnimationMode]);

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
    if (animationMode === FlowableState_running) {
      animation.resume();
    } else {
      animation.pause();
    }
  }, [animationMode, animation.pause, animation.resume]);

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
      <div>
        <button onClick={toggleMode}>{label}</button>
      </div>
      <div ref={animatedDivRef} style={{ height: "100px", width: "100px" }} />
      <div>
        <button onClick={toggleAnimationMode}>{animationLabel}</button>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(
  <WindowLocationProvider>
    <Root />
  </WindowLocationProvider>,
);
