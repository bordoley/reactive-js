import {
  Tuple2,
  compose,
  isSome,
  none,
  pipe,
  pipeSome,
  pipeSomeLazy,
  scale,
  tuple,
} from "@reactive-js/core/functions";
import React, { useState } from "react";
import * as Observable from "@reactive-js/core/concurrent/Observable";
import {
  useDispatcher,
  useObserve,
} from "@reactive-js/core/integrations/react";
import {
  useAnimate,
  useAnimation,
} from "@reactive-js/core/integrations/react/web";
import * as WebElement from "@reactive-js/core/integrations/web/Element";
import { pick } from "@reactive-js/core/computations";
import { AnimationStreamLike_animation } from "@reactive-js/core/concurrent";

const Measure = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  const animationStream = useAnimation<
    { prevWidth?: number; width: number },
    number
  >(({ prevWidth, width }: { prevWidth?: number; width: number }) =>
    isSome(prevWidth)
      ? pipe(
          Observable.spring({ precision: 0.2 }),
          Observable.map(scale(prevWidth, width)),
        )
      : Observable.fromValue<number>()(width),
  );

  const { enqueue } = useDispatcher(animationStream);

  const boxWidth =
    useObserve<number>(
      pipeSomeLazy(
        container ?? none,
        WebElement.measure({ autoDispose: true }),
        Observable.fromStore(),
        pick<Observable.MulticastObservableComputation>(Observable.map)(
          "width",
        ),
        Observable.distinctUntilChanged(),
        Observable.forkMerge(
          compose(
            Observable.withLatestFrom<number, number, Tuple2<number, number>>(
              pipeSome(
                animationStream?.[AnimationStreamLike_animation],
                Observable.fromEventSource(),
              ) ?? Observable.never<number>(),
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
          Observable.throttle(50, { mode: "interval" }),
        ),
      ),
      [animationStream, enqueue],
    ) ?? 0;

  const width =
    useObserve(
      pipeSomeLazy(
        animationStream?.[AnimationStreamLike_animation],
        Observable.fromEventSource(),
        Observable.throttle(50),
        Observable.map(Math.floor),
      ),
      [animationStream],
    ) ?? 0;

  const fillRef: React.Ref<HTMLDivElement> = useAnimate(
    animationStream?.[AnimationStreamLike_animation],
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
        ref={setContainer}
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
          enqueue(
            width > 0
              ? { prevWidth: width, width: 0 }
              : { prevWidth: 0, width: boxWidth },
          );
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
