import React from "react";
import ReactDOMClient from "react-dom/client";
import {
  useAnimate,
  useScroll,
} from "@reactive-js/core/integrations/react/web";
import {
  useDispatcher,
  useDisposable,
  useStream,
} from "@reactive-js/core/integrations/react";
import { ScrollValue } from "@reactive-js/core/integrations/web";
import {
  Optional,
  pipe,
  pipeLazy,
  pipeSomeLazy,
  scale,
} from "@reactive-js/core/functions";
import * as EventSource from "@reactive-js/core/events/EventSource";
import * as Streamable from "@reactive-js/core/concurrent/Streamable";
import * as ReactScheduler from "@reactive-js/core/integrations/react/Scheduler";
import * as AnimationFrameScheduler from "@reactive-js/core/integrations/web/AnimationFrameScheduler";
import {
  EventListenerLike_notify,
  EventSourceLike,
} from "@reactive-js/core/events";
import * as Publisher from "@reactive-js/core/events/Publisher";
import { DictionaryLike_get } from "@reactive-js/core/collections";
import * as Observable from "@reactive-js/core/concurrent/Observable";

const AnimatedCircle = ({
  animation,
}: {
  animation: Optional<EventSourceLike<number>>;
}) => {
  const circleRef: React.Ref<HTMLDivElement> = useAnimate(
    animation,
    progress => ({
      clipPath: `circle(${progress * 25 + 5}%)`,
    }),
    [],
  );

  return (
    <div
      ref={circleRef}
      style={{
        backgroundColor: "orange",
        clipPath: `circle(5%)`,
        top: "50%",
        left: "50%",
        width: "100%",
        height: "100%",
        position: "fixed",
        inset: "0",
      }}
    />
  );
};

const ScrollApp = () => {
  const animationScheduler = useDisposable(
    pipeLazy(ReactScheduler.get(), AnimationFrameScheduler.create),
    [],
  );

  const animationGroup = useStream(
    () =>
      Streamable.animationGroup<number, boolean>(
        {
          spring: (direction: boolean) =>
            Observable.concat(
              pipe(
                Observable.spring({ precision: 0.1 }),
                direction
                  ? Observable.map(scale(1, 1.2))
                  : Observable.map(scale(0, -0.01)),
              ),
              pipe(
                Observable.spring({ precision: 0.1 }),
                direction
                  ? Observable.map(scale(1.2, 1))
                  : Observable.map(scale(-0.01, 0)),
              ),
            ),
        },
        { mode: "switching", scheduler: animationScheduler },
      ),
    [],
  );
  const { enqueue } = useDispatcher(animationGroup);

  const springAnimation = animationGroup?.[DictionaryLike_get]("spring");

  const publishedAnimation = useDisposable(Publisher.create, []);

  const containerRef = useScroll<HTMLDivElement>(
    ({ y }: ScrollValue) => {
      const pos = y.progress;
      const velocity = y.velocity;

      publishedAnimation?.[EventListenerLike_notify](pos);

      if (pos === 1 && Math.abs(velocity) > 0.5) {
        // FIXME: To make this really right, we should measure the velocity
        // and dispatch that so we can adjust the size of the overshoot
        // in the animation.
        enqueue(true);
      }

      if (pos === 0 && Math.abs(velocity) > 0.5) {
        // FIXME: To make this really right, we should measure the velocity
        // and dispatch that so we can adjust the size of the overshoot
        // in the animation.
        enqueue(false);
      }
    },
    [publishedAnimation, enqueue],
  );

  useDisposable(
    pipeSomeLazy(
      springAnimation,
      EventSource.addEventHandler(v =>
        publishedAnimation?.[EventListenerLike_notify](v),
      ),
    ),
    [springAnimation, publishedAnimation],
  );

  return (
    <div
      ref={containerRef}
      style={{
        height: "100%",
        width: "100%",
        overflowY: "scroll",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          height: "100%",
          width: "100%",
          position: "fixed",
          inset: "0",
          pointerEvents: "none",
          zIndex: "0",
        }}
      >
        <AnimatedCircle animation={publishedAnimation} />
      </div>

      <div
        style={{
          width: "100vw",
          height: "200vh",
        }}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(<ScrollApp />);
