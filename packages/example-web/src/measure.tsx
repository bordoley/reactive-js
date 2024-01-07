import {
  Optional,
  Tuple2,
  compose,
  isSome,
  pipeLazy,
  pipeSome,
  pipeSomeLazy,
  tuple,
} from "@reactive-js/core/functions";
import React, { useState } from "react";
import * as Observable from "@reactive-js/core/concurrent/Observable";
import {
  useDispatcher,
  useDisposable,
  useStream,
  useObserve,
} from "@reactive-js/core/integrations/react";
import { useAnimate } from "@reactive-js/core/integrations/react/web";
import * as WebElement from "@reactive-js/core/integrations/web/Element";
import { Rect } from "@reactive-js/core/integrations/web";
import * as Streamable from "@reactive-js/core/concurrent/Streamable";
import * as ReactScheduler from "@reactive-js/core/integrations/react/Scheduler";
import * as AnimationFrameScheduler from "@reactive-js/core/integrations/web/AnimationFrameScheduler";
import { pick } from "@reactive-js/core/computations";
import { DictionaryLike_get } from "@reactive-js/core/collections";

const Measure = () => {
  const [container, setContainer] = useState<Optional<HTMLDivElement>>();

  const animationScheduler = useDisposable(
    pipeLazy(ReactScheduler.get(), AnimationFrameScheduler.create),
    [],
  );

  const animationGroup = useStream(
    () =>
      Streamable.createAnimationGroupEventHandler<
        {
          prevWidth?: number;
          width: number;
        },
        string,
        number
      >(
        {
          a: ({ prevWidth, width }: { prevWidth?: number; width: number }) =>
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
        },
        { mode: "switching", scheduler: animationScheduler },
      ),
    [],
    { capacity: 1, backpressureStrategy: "drop-oldest" },
  );

  const animation = animationGroup?.[DictionaryLike_get]("a");

  const { enqueue } = useDispatcher(animationGroup);

  const containerSize = useDisposable(
    pipeSomeLazy(container, WebElement.measure()),
    [container],
  );

  const boxWidth =
    useObserve<number>(
      pipeSomeLazy(
        containerSize,
        Observable.fromStore(),
        Observable.distinctUntilChanged<Rect>({
          equality: (a, b) => a.width === b.width,
        }),
        pick<Observable.PuredDeferredObservableComputation, Rect, "width">(
          { map: Observable.map },
          "width",
        ),
        Observable.forkMerge(
          compose(
            Observable.withLatestFrom<number, number, Tuple2<number, number>>(
              pipeSome(animation, Observable.fromEventSource()) ??
                Observable.never<number>(),
              tuple,
            ),
            Observable.forEach<Tuple2<number, number>>(
              ([boxWidth, currentWidth]) => {
                if (currentWidth > 0) {
                  enqueue({ width: boxWidth });
                }
              },
            ),
            Observable.ignoreElements(),
          ),

          compose(Observable.throttle(50, { mode: "interval" }), x => x),
        ),
      ),
      [containerSize, animation, enqueue],
    ) ?? 0;

  const width =
    useObserve(
      pipeSomeLazy(
        animation,
        Observable.fromEventSource(),
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
