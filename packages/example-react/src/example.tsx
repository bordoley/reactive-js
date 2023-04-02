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
  useObservable,
  useStream,
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
import { QueueableLike_enqueue } from "@reactive-js/core/util";
import {
  CacheStreamLike_get,
  CacheStreamLike,
} from "@reactive-js/core/streaming";

const CacheInner = ({ cache }: { cache: CacheStreamLike<string> }) => {
  const values = cache[CacheStreamLike_get]("a");
  const value = useObservable(values);

  const onChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const next = ev.target.value;
      cache[QueueableLike_enqueue]({ a: _ => next });
    },
    [values],
  );

  return (
    <div>
      <input type="text" onChange={onChange} value={value}></input>
      <span>{value}</span>
    </div>
  );
};

const CacheComponent = () => {
  const cache = useMemo(() => Streamable.createInMemoryCache<string>(), []);
  const cacheStream = useStream(cache);

  return isSome(cacheStream) ? <CacheInner cache={cacheStream} /> : null;
};

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
        Runnable.generate(increment, returns(counterInitialValue ?? -1)),
        Runnable.enqueue<number>(value =>
          history.replace((uri: WindowLocationURI) => ({
            ...uri,
            query: `v=${value}`,
          })),
        ),
        Runnable.toFlowable(),
      ),
    [history.replace, counterInitialValue],
  );
  const counter = useFlowable(counterFlowable);

  const animatedDivRef = useRef<HTMLDivElement>(null);
  const animationStreamable = useMemo(
    () =>
      Streamable.createBlockingEventHandler(
        pipe(
          Observable.concat(
            Observable.tween(1000),
            pipe(
              Observable.tween(1000),
              Observable.map(x => 1 - x),
            ),
          ),
          Observable.map(v => ({
            margin: `${50 - v * 50}px`,
            padding: `${v * 50}px`,
          })),
          Observable.forEach(({ margin, padding }) => {
            const animatedDiv = animatedDivRef.current;
            if (animatedDiv != null) {
              animatedDiv.style.margin = margin;
              animatedDiv.style.padding = padding;
            }
          }),
          Observable.subscribeOn(createAnimationFrameScheduler),
          returns,
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
      <div
        ref={animatedDivRef}
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: "#bbb",
          borderRadius: "50%",
          display: "inline-block",
          margin: "50px",
          padding: "0px",
        }}
      />
      <div>
        <button onClick={dispatch} disabled={animationRunning}>
          Run Animation
        </button>
      </div>
      <CacheComponent />
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
      Streamable.createSwitchingEventHandler(
        pipe(
          Observable.concat(
            Observable.tween(1000),
            pipe(
              Observable.spring({
                stiffness: 0.01,
                damping: 0.1,
              }),
              Observable.map(x => 1 - x),
            ),
          ),
          Observable.map(v => ({
            margin: `${50 - v * 50}px`,
            padding: `${v * 50}px`,
          })),
          Observable.forEach(({ margin, padding }) => {
            const animatedDiv = animatedDivRef.current;
            if (animatedDiv != null) {
              animatedDiv.style.margin = margin;
              animatedDiv.style.padding = padding;
            }
          }),
          Observable.subscribeOn(createAnimationFrameScheduler),
          returns,
        ),
      );

    return Observable.compute(() => {
      const { windowLocationStream } = Observable.__await(props);
      const uri = Observable.__await(windowLocationStream);

      const enumerator = Observable.__stream(asyncEnumerable);
      const move: SideEffect = Observable.__bindMethod(
        enumerator,
        QueueableLike_enqueue,
      );

      const animatedDivRef = Observable.__memo(createRef);
      const animationStreamable = Observable.__memo(
        createAnimationStream,
        animatedDivRef,
      );
      const animationStream = Observable.__stream(animationStreamable);

      const runAnimation = Observable.__bindMethod(
        animationStream,
        QueueableLike_enqueue,
      );

      Observable.__observe(animationStream);

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
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#bbb",
              borderRadius: "50%",
              display: "inline-block",
              margin: "50px",
              padding: "0px",
            }}
          />
          <div>
            <button onClick={runAnimation}>Run Animation</button>
          </div>
        </div>
      );
    });
  },
);

const RootRxComponent = () => {
  const windowLocationStream = useWindowLocationStream();

  return <RxComponent windowLocationStream={windowLocationStream} />;
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(
  <WindowLocationProvider>
    <Root />
    <RootRxComponent />
  </WindowLocationProvider>,
);
