<script>
import * as PostTaskScheduler from "@reactive-js/core/integrations/web/PostTaskScheduler";
import * as Observable from "@reactive-js/core/computations/Observable";
import { subscribe } from "@reactive-js/core/integrations/svelte";
import {
  bindMethod,
  increment,
  invoke,
  pipe,
  returns,
} from "@reactive-js/core/functions";
import {
  PauseableLike_isPaused,
  PauseableLike_pause, 
  PauseableLike_resume
} from "@reactive-js/core/utils";
import { FlowableLike_flow }from "@reactive-js/core/computations";
import * as Flowable from "@reactive-js/core/computations/Flowable";

  const scheduler = PostTaskScheduler.get();

  const counter = pipe(
    Observable.generate(increment, returns(-1), {delay: 500}),
    Flowable.fromSynchronousObservable(),
    invoke(FlowableLike_flow, scheduler)
  );

  const pause = bindMethod(counter, PauseableLike_pause);
  const resume = bindMethod(counter, PauseableLike_resume);

  const isPaused = pipe(
    counter[PauseableLike_isPaused],
    // FIXME: Maybe we should add a function to avoid the need for scheduling?
    Observable.fromStore(),
    subscribe(scheduler),
  );

  const counterValue = pipe(
     counter,
     subscribe(scheduler),
  );
</script>

<main>
	<h1>{$counterValue ?? 0}</h1>
   <button 
     on:click={
      ($isPaused ?? counter[PauseableLike_isPaused]) ? resume : pause
    }>{
      ($isPaused ?? counter[PauseableLike_isPaused]) ? "Resume" : "Pause"
    }</button>
</main>