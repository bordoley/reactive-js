import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
  useWindowLocationStream,
  WindowLocationProvider,
} from "@reactive-js/core/integrations/react-web";
import {
  WindowLocationStreamLike,
  WindowLocationURI,
} from "@reactive-js/core/integrations/web";
import {
  increment,
  isNone,
  isSome,
  Optional,
  pipe,
  returns,
  SideEffect,
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

  const [counterInitialValue, setCounterInitialValue] =
    useState<Optional<number>>();
  useEffect(() => {
    if (isSome(history.uri?.query) && isNone(counterInitialValue)) {
      const counterHistoryValue = new URLSearchParams(history.uri?.query);
      setCounterInitialValue(
        Number.parseInt(counterHistoryValue.get("v") ?? "-1"),
      );
    }
  }, [history.uri, counterInitialValue, setCounterInitialValue]);

  const counterFlowable = useMemo(
    () =>
      pipe(
        Runnable.generate(increment, returns(counterInitialValue ?? -1), {
          delay: 500,
        }),
        Runnable.forEach(value => {
          history.replace((uri: WindowLocationURI) => ({
            ...uri,
            query: `v=${value}`,
          }));
        }),
        Runnable.toFlowable(),
      ),
    [history.replace, counterInitialValue],
  );
  const counter = useFlowable(counterFlowable);

  const animatedDivRef = useRef<HTMLDivElement>(null);
  const animationStreamable = useMemo(
    () =>
      Streamable.create(
        Observable.exhaustMap(
          pipe(
            Observable.concat(
              Observable.tween(0, 50, { duration: 1000 }),
              Observable.tween(50, 0, { duration: 1000 }),
            ),
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
            returns,
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
        <span>{counter.value ?? counterInitialValue}</span>
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
      windowLocationStream: WindowLocationStreamLike;
    }>,
  ) => {
    const asyncEnumerable = AsyncEnumerable.generate(increment, () => -1);
    const createRef = () => ({ current: null });

    const createAnimationStream = (animatedDivRef: {
      current: HTMLElement | null;
    }) =>
      Streamable.create<void, boolean>(
        Observable.exhaustMap(
          pipe(
            Observable.concat(
              Observable.tween(0, 50, { duration: 1000 }),
              Observable.spring(50, 0, {
                stiffness: 0.01,
                damping: 0.1,
                precision: 1,
              }),
            ),
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
            returns,
          ),
        ),
      );

    return Observable.compute(() => {
      const {windowLocationStream} = Observable.__await(props);
      const uri = Observable.__await(windowLocationStream);

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
          <div>{String(uri) ?? ""}</div>
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
  const windowLocationStream = useWindowLocationStream();

  return isSome(windowLocationStream) ? (
    <RxComponent windowLocationStream={windowLocationStream} />
  ) : null;
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(
  <WindowLocationProvider>
    <Root />
    <RootRxComponent />
  </WindowLocationProvider>,
);
