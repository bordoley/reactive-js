[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / ObservableModule

# Interface: ObservableModule

## Extends

- [`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md)\>.[`ConcurrentReactiveComputationModule`](../../../computations/interfaces/ConcurrentReactiveComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md)\>

## Properties

### combineLatest

> **combineLatest**: [`ZippingConstructor`](../../../computations/interfaces/ZippingConstructor.md)\<[`ObservableComputation`](ObservableComputation.md)\>

***

### currentTime

> **currentTime**: [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`number`\>

***

### zipLatest

> **zipLatest**: [`ZippingConstructor`](../../../computations/interfaces/ZippingConstructor.md)\<[`ObservableComputation`](ObservableComputation.md)\>

## Methods

### backpressureStrategy()

> **backpressureStrategy**\<`T`\>(`capacity`, `backpressureStrategy`): [`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### capacity

`number`

##### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

#### Returns

[`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

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

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`ObserverLike`](../../interfaces/ObserverLike.md)\<`T`\>\>

#### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

***

### defer()

> **defer**\<`T`\>(`f`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### f

[`Factory`](../../../functions/type-aliases/Factory.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

#### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

***

### dispatchTo()

> **dispatchTo**\<`T`\>(`dispatcher`): [`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### dispatcher

[`DispatcherLike`](../../interfaces/DispatcherLike.md)\<`T`\>

#### Returns

[`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

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

[`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md).[`empty`](../../../computations/interfaces/DeferredReactiveComputationModule.md#empty)

***

### encodeUtf8()

> **encodeUtf8**(): [`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Returns

[`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

***

### enqueue()

> **enqueue**\<`T`\>(`queue`): [`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### queue

[`QueueableLike`](../../../utils/interfaces/QueueableLike.md)\<`T`\>

#### Returns

[`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

***

### exhaust()

#### Call Signature

> **exhaust**\<`T`\>(): [`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Returns

[`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **exhaust**\<`T`, `TInnerType`\>(`options`): [`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, [`ComputationOfInnerType`](../../../computations/type-aliases/ComputationOfInnerType.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, `T`\>, `T`\>

##### Type Parameters

• **T**

• **TInnerType** *extends* [`DeferringHigherOrderInnerType`](../../../computations/type-aliases/DeferringHigherOrderInnerType.md)

##### Parameters

###### options

###### innerType

`TInnerType`

##### Returns

[`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, [`ComputationOfInnerType`](../../../computations/type-aliases/ComputationOfInnerType.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, `T`\>, `T`\>

***

### firstAsync()

> **firstAsync**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `Promise`\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `Promise`\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>

***

### flatMapAsync()

> **flatMapAsync**\<`TA`, `TB`\>(`f`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### f

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `AbortSignal`, `Promise`\<`TB`\>\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

***

### forkMerge()

> **forkMerge**\<`TIn`, `TOut`, `TInnerType`\>(`fst`, `snd`, ...`tail`): \<`TComputationIn`\>(`observable`) => `TComputationIn` *extends* [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TIn`\> ? `TInnerType` *extends* [`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md) ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

#### Type Parameters

• **TIn**

• **TOut**

• **TInnerType** *extends* [`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md) \| [`DeferredComputationWithSideEffectsLike`](../../../computations/interfaces/DeferredComputationWithSideEffectsLike.md) = [`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md)

#### Parameters

##### fst

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ComputationOfInnerType`](../../../computations/type-aliases/ComputationOfInnerType.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, `TOut`\>\>

##### snd

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ComputationOfInnerType`](../../../computations/type-aliases/ComputationOfInnerType.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, `TOut`\>\>

##### tail

readonly \[[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ComputationOfInnerType`](../../../computations/type-aliases/ComputationOfInnerType.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, `TOut`\>\>, \{ `innerType`: `TInnerType`; \}\] | readonly [`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ComputationOfInnerType`](../../../computations/type-aliases/ComputationOfInnerType.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, `TOut`\>\>[]

#### Returns

`Function`

##### Type Parameters

• **TComputationIn** *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>

##### Parameters

###### observable

`TComputationIn`

##### Returns

`TComputationIn` *extends* [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TIn`\> ? `TInnerType` *extends* [`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md) ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

***

### fromAsyncFactory()

> **fromAsyncFactory**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`Function1`](../../../functions/type-aliases/Function1.md)\<`AbortSignal`, `Promise`\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`Function1`](../../../functions/type-aliases/Function1.md)\<`AbortSignal`, `Promise`\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### fromAsyncIterable()

> **fromAsyncIterable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`AsyncIterable`\<`T`, `any`, `any`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`AsyncIterable`\<`T`, `any`, `any`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### fromEventSource()

> **fromEventSource**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

***

### fromIterable()

> **fromIterable**\<`T`\>(`options`?): \<`TIterable`\>(`iterable`) => `TIterable` *extends* [`PureIterableLike`](../../../computations/interfaces/PureIterableLike.md)\<`unknown`\> ? [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> : [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### delay

`number`

###### delayStart?

`boolean`

#### Returns

`Function`

##### Type Parameters

• **TIterable** *extends* [`IterableLike`](../../../computations/interfaces/IterableLike.md)\<`T`\> = [`IterableLike`](../../../computations/interfaces/IterableLike.md)\<`T`\>

##### Parameters

###### iterable

`TIterable`

##### Returns

`TIterable` *extends* [`PureIterableLike`](../../../computations/interfaces/PureIterableLike.md)\<`unknown`\> ? [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> : [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### Overrides

[`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md).[`fromIterable`](../../../computations/interfaces/DeferredReactiveComputationModule.md#fromiterable)

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

[`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md).[`fromReadonlyArray`](../../../computations/interfaces/DeferredReactiveComputationModule.md#fromreadonlyarray)

***

### fromStore()

> **fromStore**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`StoreLike`](../../../events/interfaces/StoreLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`StoreLike`](../../../events/interfaces/StoreLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

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

[`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md).[`fromValue`](../../../computations/interfaces/DeferredReactiveComputationModule.md#fromvalue)

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

[`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md).[`generate`](../../../computations/interfaces/DeferredReactiveComputationModule.md#generate)

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

[`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md).[`last`](../../../computations/interfaces/DeferredReactiveComputationModule.md#last)

***

### lastAsync()

> **lastAsync**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `Promise`\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `Promise`\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>

***

### mergeAll()

#### Call Signature

> **mergeAll**\<`T`\>(`options`?): [`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

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

[`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **mergeAll**\<`T`, `TInnerType`\>(`options`): [`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, [`ComputationOfInnerType`](../../../computations/type-aliases/ComputationOfInnerType.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, `T`\>, `T`\>

##### Type Parameters

• **T**

• **TInnerType** *extends* [`DeferringHigherOrderInnerType`](../../../computations/type-aliases/DeferringHigherOrderInnerType.md)

##### Parameters

###### options

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

###### innerType

`TInnerType`

##### Returns

[`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, [`ComputationOfInnerType`](../../../computations/type-aliases/ComputationOfInnerType.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, `T`\>, `T`\>

***

### multicast()

> **multicast**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

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

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### never()

> **never**\<`T`\>(): [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Returns

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

***

### onSubscribe()

> **onSubscribe**\<`T`\>(`f`): [`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### f

[`SideEffect`](../../../functions/type-aliases/SideEffect.md) | [`Factory`](../../../functions/type-aliases/Factory.md)\<[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`Error`\>\> \| [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Returns

[`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

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

[`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md).[`raise`](../../../computations/interfaces/DeferredReactiveComputationModule.md#raise)

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

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, `T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TAcc`\>\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

##### Returns

[`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, `T`, `TAcc`\>

#### Call Signature

> **scanMany**\<`T`, `TAcc`, `TInnerType`\>(`scanner`, `initialValue`, `options`): [`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, `T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

• **TInnerType** *extends* [`DeferringHigherOrderInnerType`](../../../computations/type-aliases/DeferringHigherOrderInnerType.md)

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`ComputationOfInnerType`](../../../computations/type-aliases/ComputationOfInnerType.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, `T`\>\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options

###### innerType

`TInnerType`

##### Returns

[`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, `T`, `TAcc`\>

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

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### subscribeOn()

> **subscribeOn**\<`T`\>(`scheduler`, `options`?): \<`TObservableIn`\>(`observable`) => `TObservableIn` *extends* [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> : `TObservableIn` *extends* [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> ? [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> : `TObservableIn` *extends* [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` *extends* [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `never`

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

#### Returns

`Function`

##### Type Parameters

• **TObservableIn** *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Parameters

###### observable

`TObservableIn`

##### Returns

`TObservableIn` *extends* [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> : `TObservableIn` *extends* [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> ? [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> : `TObservableIn` *extends* [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` *extends* [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `never`

***

### switchAll()

#### Call Signature

> **switchAll**\<`T`\>(): [`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Returns

[`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **switchAll**\<`T`, `TInnerType`\>(`options`): [`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, [`ComputationOfInnerType`](../../../computations/type-aliases/ComputationOfInnerType.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, `T`\>, `T`\>

##### Type Parameters

• **T**

• **TInnerType** *extends* [`DeferringHigherOrderInnerType`](../../../computations/type-aliases/DeferringHigherOrderInnerType.md)

##### Parameters

###### options

###### innerType

`TInnerType`

##### Returns

[`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, [`ComputationOfInnerType`](../../../computations/type-aliases/ComputationOfInnerType.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerType`, `T`\>, `T`\>

***

### takeUntil()

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)

##### Returns

[`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)

##### Returns

[`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`DeferredComputationOperator`](../../../computations/type-aliases/DeferredComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)

##### Returns

[`DeferredComputationOperator`](../../../computations/type-aliases/DeferredComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

***

### throttle()

> **throttle**\<`T`\>(`duration`, `options`?): [`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### duration

`number`

##### options?

###### mode?

[`ThrottleMode`](../type-aliases/ThrottleMode.md)

#### Returns

[`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

***

### toEventSource()

> **toEventSource**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`T`\>\>

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

[`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md).[`toReadonlyArray`](../../../computations/interfaces/DeferredReactiveComputationModule.md#toreadonlyarray)

***

### toReadonlyArrayAsync()

> **toReadonlyArrayAsync**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `Promise`\<readonly `T`[]\>\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `Promise`\<readonly `T`[]\>\>

***

### toRunnable()

> **toRunnable**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`RunnableLike`](../../../computations/interfaces/RunnableLike.md)\<`T`\>\>

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

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`RunnableLike`](../../../computations/interfaces/RunnableLike.md)\<`T`\>\>

#### Overrides

[`DeferredReactiveComputationModule`](../../../computations/interfaces/DeferredReactiveComputationModule.md).[`toRunnable`](../../../computations/interfaces/DeferredReactiveComputationModule.md#torunnable)

***

### withCurrentTime()

> **withCurrentTime**\<`TA`, `TB`\>(`selector`): [`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`number`, `TA`, `TB`\>

#### Returns

[`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `TB`\>

***

### withLatestFrom()

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

##### Returns

[`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TB`\>

##### Returns

[`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`DeferredComputationOperator`](../../../computations/type-aliases/DeferredComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\>

##### Returns

[`DeferredComputationOperator`](../../../computations/type-aliases/DeferredComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferredComputationOperator`](../../../computations/type-aliases/DeferredComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`DeferredComputationOperator`](../../../computations/type-aliases/DeferredComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`DeferredComputationOperator`](../../../computations/type-aliases/DeferredComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TB`\>

##### Returns

[`DeferredComputationOperator`](../../../computations/type-aliases/DeferredComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferredComputationOperator`](../../../computations/type-aliases/DeferredComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`DeferredComputationOperator`](../../../computations/type-aliases/DeferredComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>
