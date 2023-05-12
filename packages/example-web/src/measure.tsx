import {
  Optional,
  compose,
  isSome,
  pipeLazy,
  pipeSome,
  pipeSomeLazy,
} from "@reactive-js/core/functions";
import React, { useState } from "react";
import * as Observable from "@reactive-js/core/Observable";
import * as SharedObservable from "@reactive-js/core/SharedObservable";
import {
  useDispatcher,
  useDisposable,
  useStream,
  useObserve,
} from "@reactive-js/core/integrations/react";
import { useAnimate } from "@reactive-js/core/integrations/react/web";
import * as EventSource from "@reactive-js/core/EventSource";
import * as WebElement from "@reactive-js/core/integrations/web/Element";
import { Rect } from "@reactive-js/core/integrations/web";
import * as Streamable from "@reactive-js/core/Streamable";
import {
  DeferredObservableLike,
  KeyedCollectionLike_get,
} from "@reactive-js/core/types";
import { getScheduler } from "@reactive-js/core/integrations/scheduler";
import * as WebScheduler from "@reactive-js/core/integrations/web/Scheduler";

const Measure = () => {
  const [container, setContainer] = useState<Optional<HTMLDivElement>>();

  const animationScheduler = useDisposable(
    pipeLazy(getScheduler(), WebScheduler.createAnimationFrameScheduler),
    [],
  );

  const animationGroup = useStream(
    () =>
      Streamable.createAnimationGroupEventHandler<
        {
          prevWidth?: number;
          width: number;
        },
        number,
        number
      >(
        [
          ({ prevWidth, width }) =>
            isSome(prevWidth)
              ? {
                  type: "spring",
                  from: prevWidth,
                  to: width,
                  precision: 0.2,
                }
              : {
                  type: "frame",
                  value: width,
                },
        ],
        { mode: "switching", scheduler: animationScheduler },
      ),
    [],
    { capacity: 1, backpressureStrategy: "drop-oldest" },
  );

  const animation = animationGroup?.[KeyedCollectionLike_get](0);

  const { enqueue } = useDispatcher(animationGroup);

  const boxWidth =
    useObserve<number>(
      pipeSomeLazy(
        container,
        WebElement.observeMeasure(),
        Observable.distinctUntilChanged<Rect>({
          equality: (a, b) => a.width === b.width,
        }),
        Observable.pick<Rect, "width">("width"),
        Observable.forkMerge<DeferredObservableLike<number>, number, number>(
          compose(
            Observable.withLatestFrom<number, number, [number, number]>(
              pipeSome(animation, EventSource.toSharedObservable()) ??
                SharedObservable.never<number>(),
              (boxWidth, currentWidth) => [boxWidth, currentWidth],
            ),
            Observable.forEach<[number, number]>(([boxWidth, currentWidth]) => {
              if (currentWidth > 0) {
                enqueue({ width: boxWidth });
              }
            }),
            Observable.ignoreElements(),
          ),
          Observable.throttle(50, { mode: "interval" }),
        ),
      ),
      [container, animation, enqueue],
    ) ?? 0;

  const width =
    useObserve(
      pipeSomeLazy(
        animation,
        EventSource.toSharedObservable(),
        Observable.throttle(50),
        Observable.map(Math.floor),
      ),
      [animation],
    ) ?? 0;

  const fillRef: React.Ref<HTMLDivElement> = useAnimate(
    animation,
    value => ({
      width: `${value}px`,
    }),
    [],
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div
        ref={setContainer as React.Ref<HTMLDivElement>}
        style={{
          position: "relative",
          width: "1000px",
          height: "50px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "2px solid #272727",
          overflow: "hidden",
        }}
        onClick={() => {
          if (width > 0) {
            enqueue({ prevWidth: width, width: 0 });
          } else {
            enqueue({ prevWidth: 0, width: boxWidth });
          }
        }}
      >
        <div
          ref={fillRef}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "0",
            height: "100%",
            background: "hotpink",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#272727",
          }}
        >
          {width}
        </div>
      </div>
    </div>
  );
};

export default Measure;
