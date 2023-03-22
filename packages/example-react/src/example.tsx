import React, { useCallback, useMemo, useRef } from "react";
import ReactDOMClient from "react-dom/client";
import * as Enumerable from "@reactive-js/core/rx/Enumerable";
import * as Runnable from "@reactive-js/core/rx/Runnable";
import * as Observable from "@reactive-js/core/rx/Observable";
import {
  useEnumerable,
  useFlowable,
  useStreamable,
} from "@reactive-js/core/integrations/react";
import {
  useWindowLocation,
  WindowLocationProvider,
} from "@reactive-js/core/integrations/react-web";
import { WindowLocationURI } from "@reactive-js/core/integrations/web";
import {
  increment,
  pipe,
  pipeLazy,
  returns,
} from "@reactive-js/core/functions";
import { createAnimationFrameScheduler } from "@reactive-js/core/scheduling/Scheduler";
import * as Streamable from "@reactive-js/core/streaming/Streamable";

const animationScheduler = createAnimationFrameScheduler();

const Root = () => {
  const history = useWindowLocation();
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

  const counterFlowable = useMemo(
    () =>
      pipe(
        Runnable.generate(increment, returns(-1), { delay: 500 }),
        Runnable.forEach(value => {
          history.replace((uri: WindowLocationURI) => ({
            ...uri,
            query: `v=${value}`,
          }));
        }),
        Runnable.toFlowable(),
      ),
    [history.replace],
  );
  const counter = useFlowable(counterFlowable);

  const animatedDivRef = useRef<HTMLDivElement>(null);
  const animationStreamable = useMemo(
    () =>
      Streamable.create(
        Observable.exhaustMap(
          pipeLazy(
            Runnable.currentTime(),
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
            Runnable.takeWhile(({ size }) => size > 0, { inclusive: true }),
            Runnable.forEach(({ size }) => {
              const animatedDiv = animatedDivRef.current;
              if (animatedDiv != null) {
                animatedDiv.style.margin = `${50 - size}px`;
                animatedDiv.style.padding = `${size}px`;
                animatedDiv.style.backgroundColor = "#bbb";
                animatedDiv.style.borderRadius = "50%";
                animatedDiv.style.display = "inline-block";
              }
            }),
            Observable.subscribeOn(animationScheduler),
          ),
        ),
      ),
    [animatedDivRef],
  );
  const [animationState, dispatch] = useStreamable(animationStreamable);

  const enumerable = useMemo(
    () => Enumerable.generate(increment, () => -1),
    [],
  );
  const enumerator = useEnumerable(enumerable);

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

      <div>
        <button onClick={enumerator.move}>Move the Enumerator</button>
        <span> {enumerator.hasCurrent ? enumerator.current : "no value"}</span>
      </div>

      <div>
        <button onClick={counter.isPaused ? counter.resume : counter.pause}>
          {counter.isPaused ? "Resume Counter" : "Pause Counter"}
        </button>
        <span>{counter.value ?? 0}</span>
      </div>
      <div ref={animatedDivRef} style={{ height: "100px", width: "100px" }} />
      <div>
        <button onClick={dispatch} disabled={(animationState?.size ?? 0) > 0}>
          Run Animation
        </button>
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
