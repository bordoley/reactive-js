import React, { useCallback, useEffect, useState } from "react";
import ReactDOMClient from "react-dom/client";
import * as Observable from "@reactive-js/core/computations/Observable";
import * as SynchronousObservable from "@reactive-js/core/computations/SynchronousObservable";
import { useDisposable, useEventSource } from "@reactive-js/core/react";
import {
  useAnimate,
  useAnimationGroup,
  useWindowLocation,
  WindowLocationProvider,
} from "@reactive-js/core/react/web";
import { WindowLocationURI } from "@reactive-js/core/web";
import {
  isNone,
  isSome,
  none,
  Optional,
  pipe,
  pipeLazy,
  pipeSome,
} from "@reactive-js/core/functions";
import {
  __await,
  __constant,
  __currentScheduler,
  __memo,
  __subscribe,
} from "@reactive-js/core/computations/Observable/effects";
import { Wordle } from "./wordle.js";
import Measure from "./measure.js";
import * as WindowLocation from "@reactive-js/core/web/WindowLocation";
import * as ReactScheduler from "@reactive-js/core/react/Scheduler";
import {
  BroadcasterLike,
  StoreLike_value,
} from "@reactive-js/core/computations";
import {
  PauseableLike_resume,
  PauseableLike_isPaused,
  PauseableLike_pause,
  EventListenerLike_notify,
} from "@reactive-js/core/utils";
import * as Producer from "@reactive-js/core/computations/Producer";
import { scale } from "@reactive-js/core/math";
import { AnimationLike_isRunning } from "@reactive-js/core/computations/Streamable";
import * as Dictionary from "@reactive-js/core/collections/Dictionary";
import * as ReadonlyArray from "@reactive-js/core/collections/ReadonlyArray";

const AnimatedBox = ({
  animation,
}: {
  animation?: BroadcasterLike<number>;
}) => {
  const ref: React.Ref<HTMLDivElement> = useAnimate(
    animation,
    value => ({
      margin: `${50 - value * 50}px`,
      padding: `${value * 50}px`,
    }),
    [],
  );

  return (
    <div
      ref={ref}
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
  );
};

const AnimationGroup = () => {
  const animation = useAnimationGroup<number>({
    a: pipe(
      SynchronousObservable.concat(
        SynchronousObservable.keyFrame(500),
        SynchronousObservable.delay(250),
        pipe(
          SynchronousObservable.keyFrame(500),
          SynchronousObservable.map(scale(1, 0)),
        ),
      ),
      SynchronousObservable.repeat(2),
    ),
    b: SynchronousObservable.concat(
      SynchronousObservable.keyFrame(500),
      SynchronousObservable.delay(250),
      pipe(
        SynchronousObservable.spring({ stiffness: 0.01, damping: 0.01 }),
        SynchronousObservable.map(scale(1, 0)),
      ),
    ),
  });

  const isAnimationPaused =
    useEventSource(animation?.[PauseableLike_isPaused]) ?? true;

  const isAnimationRunning =
    useEventSource(animation?.[AnimationLike_isRunning]) ?? false;

  return (
    <div>
      <div>
        {pipeSome(
          animation,
          Dictionary.entries(),
          ReadonlyArray.fromIterable(),
          ReadonlyArray.map(([key, animation]) => (
            <AnimatedBox key={key} animation={animation} />
          )),
        )}
      </div>
      <div>
        <button
          onClick={() => {
            if (isAnimationRunning && isAnimationPaused) {
              animation?.[PauseableLike_resume]();
            } else if (isAnimationRunning) {
              animation?.[PauseableLike_pause]();
            } else {
              animation?.[EventListenerLike_notify](none);
            }
          }}
        >
          {!isAnimationRunning
            ? "Run Animation"
            : isAnimationPaused
              ? "Resume"
              : "Pause"}
        </button>
      </div>
    </div>
  );
};

/*
const inMemoryCacheContext =
createContext<Optional<Cache.CacheLike<string>>>(none);*/

/*
const CacheComponent = () => {
  const cache = useContext(inMemoryCacheContext);

  const values = cache && Cache.get(cache, "a");
  const value = useObserve(values) ?? "";

  const onChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const next = ev.target.value;
      cache && Cache.set(cache, "a", next);
    },
    [values],
  );

  return (
    <div>
      <input type="text" onChange={onChange}></input>
      <span>{value}</span>
    </div>
  );
};*/

const Counter = () => {
  const history = useWindowLocation();
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

  const counter = useDisposable(
    pipeLazy(
      Observable.gen(function* () {
        let i = counterInitialValue ?? 0;
        while (true) {
          yield i;
          i++;
        }
      }),
      Observable.forEach<number>(value =>
        history.replace((uri: WindowLocationURI) => ({
          ...uri,
          query: `v=${value}`,
        })),
      ),
      Observable.toProducer({ scheduler: ReactScheduler.get() }),
      Producer.broadcast<number>(),
    ),
    [history.replace, counterInitialValue],
  );
  const counterValue = useEventSource(counter) ?? counterInitialValue;

  return (
    <div>
      <button
        onClick={() =>
          (counter?.[PauseableLike_isPaused]?.[StoreLike_value] ?? true)
            ? counter?.[PauseableLike_resume]?.()
            : counter?.[PauseableLike_pause]?.()
        }
      >
        {(counter?.[PauseableLike_isPaused]?.[StoreLike_value] ?? true)
          ? "Resume Counter"
          : "Pause Counter"}
      </button>
      <span>{counterValue}</span>
    </div>
  );
};

const History = () => {
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
    </div>
  );
};

/*
const RxComponent = createComponent(
  (
    props: BroadcasterLike<{
      windowLocation: WindowLocationLike;
    }>,
  ) =>
    Observable.computeDeferred(() => {
      const { windowLocation } = __await(props);
      const uri = __await(windowLocation);

      const animation = __animation(
        Observable.concat(
          pipe(
            Observable.keyFrame(1000),
            Observable.map(scale(0, 50)),
            Observable.map((v: number) => ({
              "background-color": "blue",
              margin: `${50 - v}px`,
              padding: `${v}px`,
            })),
          ),
          pipe(
            Observable.spring({ stiffness: 0.01, damping: 0.01 }),
            Observable.map(scale(50, 0)),
            Observable.map((v: number) => ({
              "background-color": "green",
              margin: `${50 - v}px`,
              padding: `${v}px`,
            })),
          ),
        ),

        { animationScheduler },
      );

      const isAnimationRunning = __observe(animation) ?? false;
      const isAnimationPausedObservable: ObservableLike<boolean> = __constant(
        pipe(animation[PauseableLike_isPaused], Observable.fromStore()),
        animation,
      );

      const isAnimationPaused =
        __observe(isAnimationPausedObservable) ??
        animation[PauseableLike_isPaused][StoreLike_value];
      const runAnimation = bindMethod(animation, EventListenerLike_notify);

      const pauseAnimation = bindMethod(animation, PauseableLike_pause);
      const resumeAnimation = bindMethod(animation, PauseableLike_resume);

      const animatedDivRef = __animate(animation);

      return (
        <div>
          <div>This is not actually a React Component</div>
          <div>{String(uri) ?? ""}</div>
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
            {isAnimationRunning && isAnimationPaused ? (
              <button onClick={resumeAnimation}>Resume Animation</button>
            ) : isAnimationRunning && !isAnimationPaused ? (
              <button onClick={pauseAnimation}>Pause Animation</button>
            ) : (
              <button onClick={runAnimation}>Run Animation</button>
            )}
          </div>
        </div>
      );
    }),
);*/

// Subscribe to the window location using react's normal priority scheduler.
const windowLocation = WindowLocation.subscribe(ReactScheduler.get());
const rootElement = document.getElementById("root");

/*
ReactDOMClient.createRoot(rootElement as any).render(
  <CacheProvider cacheContext={inMemoryCacheContext}>
    <WindowLocationProvider windowLocation={windowLocation}>
      <History />
      <Counter />
      <AnimationGroup />
      <CacheComponent />
      <RxComponent windowLocation={windowLocation} />
      <Wordle />
      <Measure />
    </WindowLocationProvider>
  </CacheProvider>,
);*/

ReactDOMClient.createRoot(rootElement as any).render(
  <WindowLocationProvider windowLocation={windowLocation}>
    <History />
    <Counter />
    <AnimationGroup />
    <Wordle />
    <Measure />
  </WindowLocationProvider>,
);
