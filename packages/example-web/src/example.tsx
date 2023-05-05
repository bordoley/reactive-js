import React, { useCallback, useEffect, useState } from "react";
import ReactDOMClient from "react-dom/client";
import * as Enumerable from "@reactive-js/core/rx/Enumerable";
import * as Runnable from "@reactive-js/core/rx/Runnable";
import * as Observable from "@reactive-js/core/rx/Observable";
import {
  createComponent,
  useDispatcher,
  useDisposable,
  useEnumerate,
  useEnumerator,
  usePauseable,
  useStream,
  useSubscribe,
} from "@reactive-js/core/integrations/react";
import {
  useAnimateEvent,
  useWindowLocation,
  WindowLocationProvider,
} from "@reactive-js/core/integrations/react/web";
import {
  CSSStyleKey,
  WindowLocationLike,
  WindowLocationURI,
} from "@reactive-js/core/integrations/web";
import {
  increment,
  isNone,
  isSome,
  Optional,
  pipe,
  pipeLazy,
  pipeSome,
  returns,
} from "@reactive-js/core/functions";
import * as Streamable from "@reactive-js/core/rx/Streamable";
import { ObservableLike, CacheLike } from "@reactive-js/core/rx";
import {
  QueueableLike_enqueue,
  EventSourceLike,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableLike_isPaused,
  SchedulerLike,
  StoreLike_value,
} from "@reactive-js/core/util";
import * as Dictionary from "@reactive-js/core/containers/Dictionary";
import * as Enumerator from "@reactive-js/core/containers/Enumerator";
import {
  __await,
  __bindMethod,
  __constant,
  __currentScheduler,
  __memo,
  __observe,
  __stream,
  __using,
} from "@reactive-js/core/rx/effects";
import { __animateEvent } from "@reactive-js/core/integrations/web/effects";
import { Wordle } from "./wordle";
import Measure from "./measure";
import * as WindowLocation from "@reactive-js/core/integrations/web/WindowLocation";
import * as Scheduler from "@reactive-js/core/util/Scheduler";
import { getScheduler } from "@reactive-js/core/integrations/scheduler";
import {
  KeyedCollectionLike_get,
  ReadonlyObjectMapLike,
} from "@reactive-js/core/containers";
import * as Store from "@reactive-js/core/util/Store";

const AnimatedBox = ({
  animation,
}: {
  animation?: EventSourceLike<{ type: unknown; value: number }>;
}) => {
  const ref = useAnimateEvent<HTMLDivElement>(animation, ({ value }) => ({
    margin: `${50 - value * 50}px`,
    padding: `${value * 50}px`,
  }));

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
  const animationScheduler = useDisposable(
    pipeLazy(getScheduler(), Scheduler.createAnimationFrameScheduler),
    [],
  );

  const animationStream = useStream(
    () =>
      Streamable.createAnimationGroupEventHandler(
        {
          abc: () => ({
            type: "loop",
            count: 2,
            animation: [
              { type: "keyframe", duration: 500, from: 0, to: 1 },
              { type: "delay", duration: 250 },
              { type: "keyframe", duration: 500, from: 1, to: 0 },
            ],
          }),

          def: () => [
            { type: "keyframe", duration: 500, from: 0, to: 1 },
            { type: "delay", duration: 250 },
            { type: "spring", stiffness: 0.01, damping: 0.1, from: 1, to: 0 },
          ],
        },
        { mode: "blocking", scheduler: animationScheduler },
      ),
    [animationScheduler],
  );

  const animationDispatcher = useDispatcher(animationStream);
  const isAnimationRunning = useSubscribe(animationStream) ?? false;

  return (
    <div>
      <div>
        {pipeSome(
          animationStream,
          Dictionary.entries(),
          Enumerator.map(([key, animation]) => (
            <AnimatedBox key={key} animation={animation} />
          )),
          Enumerator.toReadonlyArray(),
        )}{" "}
      </div>
      <div>
        <button
          onClick={animationDispatcher.dispatch}
          disabled={isAnimationRunning}
        >
          Run Animation
        </button>
      </div>
    </div>
  );
};

const Cache = () => {
  const cache = useStream<CacheLike<string>>(
    () => Streamable.createInMemoryCache<string>(),
    [],
  );

  const values = cache?.[KeyedCollectionLike_get]("a");
  const value = useSubscribe(values) ?? "";

  const onChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const next = ev.target.value;
      cache?.[QueueableLike_enqueue]({ a: _ => next });
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

const EnumeratorComponent = () => {
  const enumerator = useEnumerate(
    () => Enumerable.generate(increment, () => -1),
    [],
  );

  const enumeratorContoller = useEnumerator(enumerator);

  return (
    <div>
      <button onClick={enumeratorContoller.move}>Move the Enumerator</button>
      <span>
        {" "}
        {enumeratorContoller.hasCurrent
          ? enumeratorContoller.current
          : "no value"}
      </span>
    </div>
  );
};

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
    () =>
      pipe(
        Runnable.generate(increment, returns(counterInitialValue ?? -1)),
        Runnable.forEach<number>(value =>
          history.replace((uri: WindowLocationURI) => ({
            ...uri,
            query: `v=${value}`,
          })),
        ),
        Runnable.flow(getScheduler()),
      ),
    [history.replace, counterInitialValue],
  );
  const counterController = usePauseable(counter);
  const counterValue = useSubscribe(counter) ?? counterInitialValue;

  return (
    <div>
      <button
        onClick={
          counterController.isPaused
            ? counterController.resume
            : counterController.pause
        }
      >
        {counterController.isPaused ? "Resume Counter" : "Pause Counter"}
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

const RxComponent = createComponent(
  (
    props: ObservableLike<{
      windowLocation: WindowLocationLike;
    }>,
  ) => {
    const createAnimationGroupEventHandler = (
      animationFrameScheduler: SchedulerLike,
    ) =>
      Streamable.createAnimationGroupEventHandler<
        "animate" | "cancel",
        ReadonlyObjectMapLike<CSSStyleKey, string>
      >(
        {
          value: ev =>
            ev === "animate"
              ? [
                  {
                    type: "keyframe",
                    duration: 1000,
                    from: 0,
                    to: 50,
                    selector: (v: number) => ({
                      "background-color": "blue",
                      margin: `${50 - v}px`,
                      padding: `${v}px`,
                    }),
                  },
                  {
                    type: "spring",
                    stiffness: 0.01,
                    damping: 0.1,
                    from: 50,
                    to: 0,
                    selector: (v: number) => ({
                      "background-color": "green",
                      margin: `${50 - v}px`,
                      padding: `${v}px`,
                    }),
                  },
                ]
              : [],
        },
        { mode: "switching", scheduler: animationFrameScheduler },
      );

    return Observable.compute(() => {
      const { windowLocation } = __await(props);
      const uri = __await(windowLocation);

      const scheduler = __currentScheduler();
      const animationScheduler = __using(
        Scheduler.createAnimationFrameScheduler,
        scheduler,
      );

      const pauseableScheduler = __using(
        Scheduler.toPausableScheduler,
        animationScheduler,
      );

      const streamableAnimation = __memo(
        createAnimationGroupEventHandler,
        pauseableScheduler,
      );
      const animationGroupEventHandler = __stream(streamableAnimation);

      const isAnimationRunning = __observe(animationGroupEventHandler) ?? false;
      const isAnimationPausedObservable: ObservableLike<boolean> = __constant(
        pipe(pauseableScheduler[PauseableLike_isPaused], Store.toObservable()),
      );

      const isAnimationPaused =
        __observe(isAnimationPausedObservable) ??
        pauseableScheduler[PauseableLike_isPaused][StoreLike_value];
      const runAnimation = __bindMethod(
        animationGroupEventHandler,
        QueueableLike_enqueue,
      );

      const pauseAnimation = __bindMethod(
        pauseableScheduler,
        PauseableLike_pause,
      );
      const resumeAnimation = __bindMethod(
        pauseableScheduler,
        PauseableLike_resume,
      );

      const animatedDivRef = __animateEvent(
        animationGroupEventHandler[KeyedCollectionLike_get](
          "value",
        ) as any /*nonnull*/,
        ["animate"],
      );

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
              <button onClick={() => resumeAnimation()}>
                Resume Animation
              </button>
            ) : isAnimationRunning && !isAnimationPaused ? (
              <button onClick={() => pauseAnimation()}>Pause Animation</button>
            ) : (
              <button onClick={() => runAnimation("animate")}>
                Run Animation
              </button>
            )}
          </div>
        </div>
      );
    });
  },
);

// Subscribe to the window location using react's normal priority scheduler.
const windowLocation = WindowLocation.subscribe(getScheduler());
const rootElement = document.getElementById("root");

ReactDOMClient.createRoot(rootElement as any).render(
  <WindowLocationProvider windowLocation={windowLocation}>
    <History />
    <Counter />
    <AnimationGroup />
    <EnumeratorComponent />
    <Cache />
    <RxComponent windowLocation={windowLocation} />
    <Wordle />
    <Measure />
  </WindowLocationProvider>,
);
