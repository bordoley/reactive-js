import React, { useCallback, useMemo, useRef } from "react";
import ReactDOMClient from "react-dom/client";
import * as Enumerable from "@reactive-js/core/rx/Enumerable";
import * as Runnable from "@reactive-js/core/rx/Runnable";
import * as Observable from "@reactive-js/core/rx/Observable";
import * as AsyncEnumerable from "@reactive-js/core/streaming/AsyncEnumerable";
import {
  createComponent,
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
  Optional,
  pipe,
  pipeLazy,
  returns,
  SideEffect,
  SideEffect1,
  Updater,
} from "@reactive-js/core/functions";
import { createAnimationFrameScheduler } from "@reactive-js/core/scheduling/Scheduler";
import * as Streamable from "@reactive-js/core/streaming/Streamable";
import { ObservableLike } from "@reactive-js/core/rx";
import { QueueableLike_push } from "@reactive-js/core/util";

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
            Observable.tween(50, 0, { duration: 1000 }),
            Observable.forEach(size => {
              const animatedDiv = animatedDivRef.current;
              if (animatedDiv != null) {
                animatedDiv.style.margin = `${50 - size}px`;
                animatedDiv.style.padding = `${size}px`;
                animatedDiv.style.backgroundColor = "#bbb";
                animatedDiv.style.borderRadius = "50%";
                animatedDiv.style.display = "inline-block";
              }
            }),
            Observable.ignoreElements(),
            Observable.subscribeOn(createAnimationFrameScheduler),
            Observable.startWith(true),
            Observable.endWith(false),
          ),
        ),
      ),
    [animatedDivRef],
  );
  const [animationRunning, dispatch] = useStreamable(animationStreamable);

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
        <button onClick={dispatch} disabled={animationRunning}>
          Run Animation
        </button>
      </div>
    </div>
  );
};

const RxComponent = createComponent(
  (
    props: ObservableLike<{
      uri: Optional<WindowLocationURI>;
      push: SideEffect1<WindowLocationURI | Updater<WindowLocationURI>>;
      replace: SideEffect1<WindowLocationURI | Updater<WindowLocationURI>>;
      canGoBack: boolean;
      goBack: () => boolean;
    }>,
  ) => {
    const asyncEnumerable = AsyncEnumerable.generate(increment, () => -1);
    const createRef = () => ({ current: null });

    const createAnimationStream = (animatedDivRef: {
      current: HTMLElement | null;
    }) =>
      Streamable.create<void, boolean>(
        Observable.exhaustMap(
          pipeLazy(
            Observable.spring(50, 0, {
              stiffness: 0.01,
              damping: 0.1,
            }),
            Observable.forEach(size => {
              const animatedDiv = animatedDivRef.current;
              if (animatedDiv != null) {
                animatedDiv.style.margin = `${50 - size}px`;
                animatedDiv.style.padding = `${size}px`;
                animatedDiv.style.backgroundColor = "#bbb";
                animatedDiv.style.borderRadius = "50%";
                animatedDiv.style.display = "inline-block";
              }
            }),
            Observable.ignoreElements(),
            Observable.subscribeOn(createAnimationFrameScheduler),
            Observable.startWith(true),
            Observable.endWith(false),
          ),
        ),
      );

    return Observable.compute(() => {
      const history = Observable.__await(props);
      const enumerator = Observable.__stream(asyncEnumerable);
      const move: SideEffect = Observable.__bind(
        enumerator[QueueableLike_push],
        enumerator,
      );

      const animatedDivRef = Observable.__memo(createRef);
      const animationStreamable = Observable.__memo(
        createAnimationStream,
        animatedDivRef,
      );
      const animationStream = Observable.__stream(animationStreamable);

      const runAnimation: SideEffect = Observable.__bind(
        animationStream[QueueableLike_push],
        animationStream,
      );

      const animationIsRunning = Observable.__observe(animationStream);

      const value = Observable.__observe<number>(enumerator) ?? "no value";

      return (
        <div>
          <div>This is not actually a React Component</div>
          <div>{String(history.uri) ?? ""}</div>
          <div>
            <button onClick={move}>Move the Enumerator</button>
            <span>{value}</span>
          </div>

          <div
            ref={animatedDivRef}
            style={{ height: "100px", width: "100px" }}
          />
          <div>
            <button onClick={runAnimation} disabled={animationIsRunning}>
              Run Animation
            </button>
          </div>
        </div>
      );
    });
  },
);

const RootRxComponent = () => {
  const history = useWindowLocation();

  return <RxComponent {...history} />;
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(
  <WindowLocationProvider>
    <Root />
    <RootRxComponent />
  </WindowLocationProvider>,
);
