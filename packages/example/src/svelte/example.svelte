<script>
  import {
    pipe,
    returns,
    increment,
    compose,
  } from "@reactive-js/core/functions";
  import { generate, throttle } from "@reactive-js/core/observable";
  import { fromObservable } from "@reactive-js/core/flowable";
  import {
    createHostScheduler,
    toPriorityScheduler,
    toSchedulerWithPriority,
  } from "@reactive-js/core/scheduler";

  import { writable } from "svelte/store";
  import { stream } from "@reactive-js/core/experimental/svelte";

  const scheduler = pipe(
    createHostScheduler(),
    toPriorityScheduler,
    toSchedulerWithPriority(1),
  );

  const [value, setMode] = pipe(
    generate(increment, returns(0)),
    throttle(15),
    fromObservable(),
    stream(scheduler),
  );

  let mode = 2;
  let label = "RESUME";

  const onClick = () => {
    mode = mode === 1 ? 2 : 1;
    label = mode === 2 ? "RESUME" : "PAUSE";
    setMode(mode);
  };
</script>

<main>
  <h1>{$value || 0}</h1>

  <button on:click={onClick}>{label}</button>
</main>
