<script>
  import {
    pipe,
  } from "@reactive-js/core/functions";

  import {
    createHostScheduler,
    toPriorityScheduler,
    toSchedulerWithPriority,
  } from "@reactive-js/core/scheduler";

  import { subscribe } from "@reactive-js/core/svelte";

  import { appState } from "./example.state";

  const priorityScheduler = pipe(
    createHostScheduler({ yieldInterval: 15 }),
    toPriorityScheduler,
  );

  const scheduler = pipe(
    priorityScheduler,
    toSchedulerWithPriority(1),
  );

  const scheduler2 = pipe(
    priorityScheduler,
    toSchedulerWithPriority(2),
  );

  const props = pipe(appState(scheduler2), subscribe(scheduler));
</script>

<main>
	<h1>{$props?.value ?? 0}</h1>
  <button on:click={$props?.onClick}>{$props?.mode === 2 ? "RESUME" : "PAUSE"}</button>
</main>
