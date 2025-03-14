[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / ObservableModule

# Interface: ObservableModule

## Extends

- [`ComputationModule`](../../interfaces/ComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md)\>.[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md)\>.[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md)\>.[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md)\>.[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md)\>

## Properties

### combineLatest

> **combineLatest**: `CombineConstructor`

***

### currentTime

> **currentTime**: [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`number`\>

***

### forkMerge

> **forkMerge**: `ForkMerge`

***

### zipLatest

> **zipLatest**: `CombineConstructor`

## Methods

### actionReducer()

> **actionReducer**\<`TAction`, `T`\>(`reducer`, `initialState`, `options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TAction`, `T`\>

#### Type Parameters

• **TAction**

• **T**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`TAction`, `T`\>

##### initialState

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TAction`, `T`\>

***

### backpressureStrategy()

> **backpressureStrategy**\<`T`\>(`options`): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

***

### computeDeferred()

> **computeDeferred**\<`T`\>(`computation`, `options`?): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### computation

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### mode?

[`ComputeMode`](../type-aliases/ComputeMode.md)

#### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

***

### computeSynchronousObservable()

> **computeSynchronousObservable**\<`T`\>(`computation`, `options`?): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### computation

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### mode?

[`ComputeMode`](../type-aliases/ComputeMode.md)

#### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>

***

### create()

> **create**\<`T`\>(`f`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### f

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`ObserverLike`](../../../utils/interfaces/ObserverLike.md)\<`T`\>\>

#### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

***

### defer()

> **defer**\<`T`\>(`f`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### f

[`Factory`](../../../functions/type-aliases/Factory.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

***

### empty()

> **empty**\<`T`\>(`options`?): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### delay

`number`

#### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`empty`](../../interfaces/ComputationModule.md#empty)

***

### enqueue()

> **enqueue**\<`T`\>(`queue`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### queue

[`QueueableLike`](../../../utils/interfaces/QueueableLike.md)\<`T`\>

#### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

***

### exhaust()

#### Call Signature

> **exhaust**\<`T`\>(): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **exhaust**\<`T`, `TInnerLike`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`\>, `T`\>

##### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### options

###### innerType

`TInnerLike`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`\>, `T`\>

***

### first()

> **first**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### maxMicroTaskTicks?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Overrides

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`first`](../../interfaces/SynchronousComputationModule.md#first)

***

### firstAsync()

#### Call Signature

> **firstAsync**\<`T`\>(`options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

##### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

##### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`firstAsync`](../../interfaces/ComputationModule.md#firstasync)

#### Call Signature

> **firstAsync**\<`T`\>(`scheduler`, `options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

###### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

##### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

##### Overrides

`ComputationModule.firstAsync`

***

### flatMapAsync()

> **flatMapAsync**\<`TA`, `TB`\>(`f`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`DeferredComputationWithSideEffectsLike`](../../interfaces/DeferredComputationWithSideEffectsLike.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### f

[`AsyncFunction2`](../../../functions/type-aliases/AsyncFunction2.md)\<`TA`, `AbortSignal`, `TB`\>

#### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`DeferredComputationWithSideEffectsLike`](../../interfaces/DeferredComputationWithSideEffectsLike.md), `TA`, `TB`\>

***

### fromAsyncFactory()

> **fromAsyncFactory**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<`AbortSignal`, `T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<`AbortSignal`, `T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### fromEventSource()

> **fromEventSource**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

***

### fromIterable()

> **fromIterable**\<`T`\>(`options`?): [`FromIterableOperator`](../../type-aliases/FromIterableOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### delay

`number`

###### delayStart?

`boolean`

#### Returns

[`FromIterableOperator`](../../type-aliases/FromIterableOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

#### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`fromIterable`](../../interfaces/ComputationModule.md#fromiterable)

***

### fromPromise()

> **fromPromise**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

#### Overrides

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromPromise`](../../interfaces/ConcurrentReactiveComputationModule.md#frompromise)

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### delay?

`number`

###### delayStart?

`boolean`

###### start?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

#### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`fromReadonlyArray`](../../interfaces/ComputationModule.md#fromreadonlyarray)

***

### fromStore()

> **fromStore**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`StoreLike`](../../interfaces/StoreLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`StoreLike`](../../interfaces/StoreLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

***

### fromValue()

> **fromValue**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### delay

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

#### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`fromValue`](../../interfaces/ComputationModule.md#fromvalue)

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### generator

[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### count?

`number`

###### delay?

`number`

###### delayStart?

`boolean`

#### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`generate`](../../interfaces/ComputationModule.md#generate)

***

### keyFrame()

> **keyFrame**(`duration`, `options`?): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`number`\>

#### Parameters

##### duration

`number`

##### options?

###### easing?

[`Function1`](../../../functions/type-aliases/Function1.md)\<`number`, `number`\>

#### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`number`\>

***

### last()

> **last**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### maxMicroTaskTicks?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Overrides

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`last`](../../interfaces/SynchronousComputationModule.md#last)

***

### lastAsync()

#### Call Signature

> **lastAsync**\<`T`\>(`options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

##### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

##### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`lastAsync`](../../interfaces/ComputationModule.md#lastasync)

#### Call Signature

> **lastAsync**\<`T`\>(`scheduler`, `options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

###### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

##### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

##### Overrides

`ComputationModule.lastAsync`

***

### mergeAll()

#### Call Signature

> **mergeAll**\<`T`\>(`options`?): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **mergeAll**\<`T`, `TInnerLike`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`\>, `T`\>

##### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### options

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

###### innerType

`TInnerLike`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`\>, `T`\>

***

### multicast()

> **multicast**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

##### options?

###### autoDispose?

`boolean`

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### replay?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### onSubscribe()

> **onSubscribe**\<`T`\>(`f`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### f

[`SideEffect`](../../../functions/type-aliases/SideEffect.md) | [`Factory`](../../../functions/type-aliases/Factory.md)\<[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`Error`\>\> \| [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

***

### raise()

> **raise**\<`T`\>(`options`?): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### delay?

`number`

###### raise?

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`raise`](../../interfaces/ComputationModule.md#raise)

***

### reduceAsync()

#### Call Signature

> **reduceAsync**\<`T`, `TAcc`\>(`reducer`, `initialValue`, `options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options?

###### autoDispose?

`boolean`

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### replay?

`number`

##### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `TAcc`\>

##### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`reduceAsync`](../../interfaces/ComputationModule.md#reduceasync)

#### Call Signature

> **reduceAsync**\<`T`, `TAcc`\>(`reducer`, `initialValue`, `scheduler`, `options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

###### options?

###### autoDispose?

`boolean`

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### replay?

`number`

##### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `TAcc`\>

##### Overrides

`ComputationModule.reduceAsync`

***

### run()

> **run**\<`T`\>(`options`?): [`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### maxMicroTaskTicks?

`number`

#### Returns

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>\>

***

### scanMany()

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, `T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TAcc`\>\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, `T`, `TAcc`\>

#### Call Signature

> **scanMany**\<`T`, `TAcc`, `TInnerLike`\>(`scanner`, `initialValue`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`\>\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options

###### innerType

`TInnerLike`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`, `TAcc`\>

***

### spring()

> **spring**(`options`?): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`number`\>

#### Parameters

##### options?

###### damping?

`number`

###### precision?

`number`

###### stiffness?

`number`

#### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`number`\>

***

### subscribe()

> **subscribe**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

##### options?

`object` & `Partial`\<`Pick`\<[`QueueableLike`](../../../utils/interfaces/QueueableLike.md)\<`unknown`\>, *typeof* [`QueueableLike_backpressureStrategy`](../../../utils/variables/QueueableLike_backpressureStrategy.md) \| *typeof* [`QueueableLike_capacity`](../../../utils/variables/QueueableLike_capacity.md)\>\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### subscribeOn()

> **subscribeOn**\<`T`\>(`scheduler`, `options`?): [`StatefulAsynchronousComputationOperator`](../../type-aliases/StatefulAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

#### Returns

[`StatefulAsynchronousComputationOperator`](../../type-aliases/StatefulAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

***

### switchAll()

#### Call Signature

> **switchAll**\<`T`\>(): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **switchAll**\<`T`, `TInnerLike`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`\>, `T`\>

##### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### options

###### innerType

`TInnerLike`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`\>, `T`\>

***

### takeUntil()

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)

##### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`StatefulAsynchronousComputationOperator`](../../type-aliases/StatefulAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)

##### Returns

[`StatefulAsynchronousComputationOperator`](../../type-aliases/StatefulAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`StatelessAsynchronousComputationOperator`](../../type-aliases/StatelessAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)

##### Returns

[`StatelessAsynchronousComputationOperator`](../../type-aliases/StatelessAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

***

### throttle()

> **throttle**\<`T`\>(`duration`, `options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### duration

`number`

##### options?

###### mode?

[`ThrottleMode`](../type-aliases/ThrottleMode.md)

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

***

### toEventSource()

> **toEventSource**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### toPauseableEventSource()

> **toPauseableEventSource**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`PauseableEventSourceLike`](../../interfaces/PauseableEventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`PauseableEventSourceLike`](../../interfaces/PauseableEventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### toPauseableObservable()

> **toPauseableObservable**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`PauseableObservableLike`](../../interfaces/PauseableObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### replay?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`PauseableObservableLike`](../../interfaces/PauseableObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### maxMicroTaskTicks?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, readonly `T`[]\>

#### Overrides

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`toReadonlyArray`](../../interfaces/SynchronousComputationModule.md#toreadonlyarray)

***

### toReadonlyArrayAsync()

#### Call Signature

> **toReadonlyArrayAsync**\<`T`\>(`options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, readonly `T`[]\>

##### Type Parameters

• **T**

##### Parameters

###### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

##### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, readonly `T`[]\>

##### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`toReadonlyArrayAsync`](../../interfaces/ComputationModule.md#toreadonlyarrayasync)

#### Call Signature

> **toReadonlyArrayAsync**\<`T`\>(`scheduler`, `options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, readonly `T`[]\>

##### Type Parameters

• **T**

##### Parameters

###### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

###### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

##### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, readonly `T`[]\>

##### Overrides

`ComputationModule.toReadonlyArrayAsync`

#### Call Signature

> **toReadonlyArrayAsync**\<`T`\>(`scheduler`, `options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, readonly `T`[]\>

##### Type Parameters

• **T**

##### Parameters

###### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

###### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

##### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, readonly `T`[]\>

##### Overrides

`ComputationModule.toReadonlyArrayAsync`

***

### toRunnable()

> **toRunnable**\<`T`\>(`options`?): [`ToRunnableOperator`](../../type-aliases/ToRunnableOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### maxMicroTaskTicks?

`number`

#### Returns

[`ToRunnableOperator`](../../type-aliases/ToRunnableOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

#### Overrides

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`toRunnable`](../../interfaces/SynchronousComputationModule.md#torunnable)

***

### withCurrentTime()

> **withCurrentTime**\<`TA`, `TB`\>(`selector`): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`number`, `TA`, `TB`\>

#### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `TB`\>
