import {
  Optional,
  compose,
  isSome,
  pipeSome,
} from "@reactive-js/core/functions";
import React, { useState } from "react";
import * as Observable from "@reactive-js/core/rx/Observable";
import {
  useDispatcher,
  useStream,
  useSubscribe,
} from "@reactive-js/core/integrations/react";
import { useAnimateEvent } from "@reactive-js/core/integrations/react/web";
import * as EventSource from "@reactive-js/core/util/EventSource";
import * as WebElement from "@reactive-js/core/integrations/web/Element";
import { Rect } from "@reactive-js/core/integrations/web";
import * as Streamable from "@reactive-js/core/rx/Streamable";
import { KeyedCollectionLike_get } from "@reactive-js/core/containers";

const Measure = () => {
  const [container, setContainer] = useState<Optional<HTMLDivElement>>();

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
        { mode: "switching" },
      ),
    [],
    { capacity: 1, backpressureStrategy: "drop-oldest" },
  );

  const animation = animationGroup?.[KeyedCollectionLike_get](0);

  const { enqueue } = useDispatcher(animationGroup);

  const { width: boxWidth } = useSubscribe<Rect>(
    () =>
      pipeSome(
        container,
        WebElement.observeMeasure(),
        Observable.distinctUntilChanged({
          equality: (a, b) => a.width === b.width,
        }),
        Observable.forkMerge(
          compose(
            Observable.withLatestFrom(
              pipeSome(animation, EventSource.toObservable()) ??
                Observable.empty<{
                  type: any;
                  value: number;
                }>(),
              ({ width: boxWidth }, ev) => [boxWidth, ev.value],
            ),
            Observable.forEach(([boxWidth, width]) => {
              if (width > 0) {
                enqueue({ width: boxWidth });
              }
            }),
            Observable.ignoreElements(),
          ),
          Observable.throttle(50, { mode: "interval" }),
        ),
      ) ?? Observable.empty<Rect>(),
    [container, animation, enqueue],
  ) ?? { width: 0 };

  const width =
    useSubscribe(
      () =>
        pipeSome(
          animation,
          EventSource.toObservable(),
          Observable.throttle(50),
          Observable.pick<{ value: number }, "value">("value"),
          Observable.map(Math.floor),
        ) ?? Observable.empty(),
      [animation],
    ) ?? 0;

  const fillRef = useAnimateEvent<HTMLDivElement, number>(animation, ev => ({
    width: `${ev.value}px`,
  }));

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
