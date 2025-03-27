[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / ObservableModule

# Interface: ObservableModule

## Extends

- [`ComputationModule`](../../interfaces/ComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md), \{ `genPure`: \{ `delay`: `number`; `delayStart`: `boolean`; \}; `lastAsync`: \{ `scheduler`: [`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md); \}; `toReadonlyArrayAsync`: \{ `scheduler`: [`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md); \}; \}\>.[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md), \{ `broadcast`: \{ `scheduler`: [`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md); \}; `toProducer`: \{ `scheduler`: [`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md); \}; \}\>.[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md)\>.[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md)\>.[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md)\>.[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md), \{ `first`: \{ `maxMicroTaskTicks`: `number`; \}; `last`: \{ `maxMicroTaskTicks`: `number`; \}; `reduce`: \{ `maxMicroTaskTicks`: `number`; \}; `run`: \{ `maxMicroTaskTicks`: `number`; \}; `toReadonlyArray`: \{ `maxMicroTaskTicks`: `number`; \}; `toRunnable`: \{ `maxMicroTaskTicks`: `number`; \}; \}\>.[`ConcurrentComputationModule`](../../interfaces/ConcurrentComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md)\>.[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md), \{ `subscribe`: \{ `scheduler`: [`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md); \}; \}\>

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: [`ObservableComputation`](ObservableComputation.md)

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`[ComputationModuleLike_computationType]`](../../interfaces/DeferredReactiveComputationModule.md#computationmodulelike_computationtype)

***

### combineLatest

> **combineLatest**: [`CombineConstructor`](../../interfaces/CombineConstructor.md)\<[`ObservableComputation`](ObservableComputation.md)\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`combineLatest`](../../interfaces/ConcurrentReactiveComputationModule.md#combinelatest)

***

### currentTime

> **currentTime**: [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`number`\>

***

### forkMerge

> **forkMerge**: `MulticastComputationForkMerge`\<[`ObservableComputation`](ObservableComputation.md)\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`forkMerge`](../../interfaces/ConcurrentReactiveComputationModule.md#forkmerge)

***

### zipLatest

> **zipLatest**: [`CombineConstructor`](../../interfaces/CombineConstructor.md)\<[`ObservableComputation`](ObservableComputation.md)\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`zipLatest`](../../interfaces/ConcurrentReactiveComputationModule.md#ziplatest)

## Methods

### actionReducer()

> **actionReducer**\<`TAction`, `T`\>(`reducer`, `initialState`, `options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TAction`, `T`\>

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

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TAction`, `T`\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`actionReducer`](../../interfaces/SequentialReactiveComputationModule.md#actionreducer)

***

### backpressureStrategy()

> **backpressureStrategy**\<`T`\>(`options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

***

### broadcast()

> **broadcast**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`object` & `object`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Inherited from

[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md).[`broadcast`](../../interfaces/ConcurrentDeferredComputationModule.md#broadcast)

***

### buffer()

> **buffer**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, readonly `T`[]\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`buffer`](../../interfaces/SequentialReactiveComputationModule.md#buffer)

***

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`catchError`](../../interfaces/SequentialComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`, `TInnerLike`\>(`onError`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`, `T`\>

##### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`\>\>

###### options

###### innerType

`TInnerLike`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`catchError`](../../interfaces/SequentialComputationModule.md#catcherror)

***

### concat()

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>[]

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>[]

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>[]

##### Returns

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>[]

##### Returns

[`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concatAll`](../../interfaces/SequentialComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`, `TInnerLike`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`\>, `T`\>

##### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### options

###### innerType

`TInnerLike`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`\>, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concatAll`](../../interfaces/SequentialComputationModule.md#concatall)

***

### create()

> **create**\<`T`\>(`f`): [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### f

(`observer`) => `void`

#### Returns

[`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\>

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset?

`string`

###### fatal?

`boolean`

###### ignoreBOM?

`boolean`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `ArrayBuffer`, `string`\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`decodeWithCharset`](../../interfaces/SequentialReactiveComputationModule.md#decodewithcharset)

***

### delay()

> **delay**(`duration`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`number`\>

#### Parameters

##### duration

`number`

#### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`number`\>

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`distinctUntilChanged`](../../interfaces/ComputationModule.md#distinctuntilchanged)

***

### encodeUtf8()

> **encodeUtf8**(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`encodeUtf8`](../../interfaces/ComputationModule.md#encodeutf8)

***

### first()

> **first**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### maxMicroTaskTicks?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`first`](../../interfaces/SynchronousComputationModule.md#first)

***

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`forEach`](../../interfaces/SequentialComputationModule.md#foreach)

***

### fromAsyncFactory()

> **fromAsyncFactory**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<(`options`?) => `Promise`\<`T`\>, [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<(`options`?) => `Promise`\<`T`\>, [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Inherited from

[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md).[`fromAsyncFactory`](../../interfaces/ConcurrentDeferredComputationModule.md#fromasyncfactory)

***

### fromAsyncIterable()

> **fromAsyncIterable**\<`T`\>(`options`?): [`FromAsyncIterableOperator`](../../type-aliases/FromAsyncIterableOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`FromAsyncIterableOperator`](../../type-aliases/FromAsyncIterableOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromAsyncIterable`](../../interfaces/ConcurrentReactiveComputationModule.md#fromasynciterable)

***

### fromBroadcaster()

> **fromBroadcaster**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>, [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>, [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromBroadcaster`](../../interfaces/ConcurrentReactiveComputationModule.md#frombroadcaster)

***

### fromObservable()

> **fromObservable**\<`T`\>(`options`?): [`FromObservableOperator`](../../type-aliases/FromObservableOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### scheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

#### Returns

[`FromObservableOperator`](../../type-aliases/FromObservableOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromObservable`](../../interfaces/ConcurrentReactiveComputationModule.md#fromobservable)

***

### fromProducer()

> **fromProducer**\<`T`\>(): [`FromProducerOperator`](../../type-aliases/FromProducerOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Returns

[`FromProducerOperator`](../../type-aliases/FromProducerOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromProducer`](../../interfaces/ConcurrentReactiveComputationModule.md#fromproducer)

***

### gen()

> **gen**\<`T`\>(`factory`, `options`?): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`Iterator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`gen`](../../interfaces/SequentialComputationModule.md#gen)

***

### genAsync()

> **genAsync**\<`T`\>(`factory`, `options`?): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`AsyncIterator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### Inherited from

[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md).[`genAsync`](../../interfaces/ConcurrentDeferredComputationModule.md#genasync)

***

### genPure()

> **genPure**\<`T`\>(`factory`, `options`?): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`Iterator`\<`T`, `any`, `any`\>\>

##### options?

###### delay?

`number`

###### delayStart?

`boolean`

#### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`genPure`](../../interfaces/ComputationModule.md#genpure)

***

### genPureAsync()

> **genPureAsync**\<`T`\>(`factory`, `options`?): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`AsyncIterator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### Inherited from

[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md).[`genPureAsync`](../../interfaces/ConcurrentDeferredComputationModule.md#genpureasync)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`keep`](../../interfaces/ComputationModule.md#keep)

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

> **last**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### maxMicroTaskTicks?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`last`](../../interfaces/SynchronousComputationModule.md#last)

***

### makeModule()

> **makeModule**\<`TModule`\>(`o`): `TModule` & `object`

#### Type Parameters

• **TModule** *extends* `object`

#### Parameters

##### o

`TModule`

#### Returns

`TModule` & `object`

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`makeModule`](../../interfaces/ComputationModule.md#makemodule)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `TB`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`map`](../../interfaces/ComputationModule.md#map)

***

### merge()

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>[]

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`merge`](../../interfaces/ConcurrentReactiveComputationModule.md#merge)

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>[]

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`merge`](../../interfaces/ConcurrentReactiveComputationModule.md#merge)

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>[]

##### Returns

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`merge`](../../interfaces/ConcurrentReactiveComputationModule.md#merge)

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>[]

##### Returns

[`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`merge`](../../interfaces/ConcurrentReactiveComputationModule.md#merge)

#### Call Signature

> **merge**\<`T`\>(...`computations`): `never`

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly `never`[]

##### Returns

`never`

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`merge`](../../interfaces/ConcurrentReactiveComputationModule.md#merge)

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>[]

##### Returns

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`merge`](../../interfaces/ConcurrentReactiveComputationModule.md#merge)

***

### mergeAll()

> **mergeAll**\<`T`, `TInnerLike`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`\>, `T`\>

#### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

#### Parameters

##### options

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

###### innerType

`TInnerLike`

#### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`\>, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`mergeAll`](../../interfaces/DeferredReactiveComputationModule.md#mergeall)

***

### never()

> **never**\<`T`\>(`options`?): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`never`](../../interfaces/ConcurrentReactiveComputationModule.md#never)

***

### pairwise()

> **pairwise**\<`T`\>(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`pairwise`](../../interfaces/ComputationModule.md#pairwise)

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

##### options?

###### maxMicroTaskTicks?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>, `TAcc`\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`reduce`](../../interfaces/SynchronousComputationModule.md#reduce)

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`repeat`](../../interfaces/SequentialComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(`count`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`repeat`](../../interfaces/SequentialComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`repeat`](../../interfaces/SequentialComputationModule.md#repeat)

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`retry`](../../interfaces/SequentialComputationModule.md#retry)

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `TAcc`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`scan`](../../interfaces/ComputationModule.md#scan)

***

### scanMany()

> **scanMany**\<`T`, `TAcc`, `TInnerLike`\>(`scanner`, `initialValue`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

#### Parameters

##### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `TAcc`\>\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

##### options

###### innerType

`TInnerLike`

#### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`, `TAcc`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`scanMany`](../../interfaces/DeferredReactiveComputationModule.md#scanmany)

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`skipFirst`](../../interfaces/ComputationModule.md#skipfirst)

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

> **subscribe**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### scheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`subscribe`](../../interfaces/DeferredReactiveComputationModule.md#subscribe)

***

### subscribeOn()

> **subscribeOn**\<`T`\>(`scheduler`): [`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

#### Returns

[`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

***

### switchAll()

> **switchAll**\<`T`, `TInnerLike`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`\>, `T`\>

#### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

#### Parameters

##### options

###### innerType

`TInnerLike`

#### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TInnerLike`, `T`\>, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`switchAll`](../../interfaces/DeferredReactiveComputationModule.md#switchall)

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`takeFirst`](../../interfaces/ComputationModule.md#takefirst)

***

### takeLast()

> **takeLast**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`takeLast`](../../interfaces/SequentialReactiveComputationModule.md#takelast)

***

### takeUntil()

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`unknown`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`takeUntil`](../../interfaces/ConcurrentReactiveComputationModule.md#takeuntil)

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`unknown`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`unknown`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`takeUntil`](../../interfaces/ConcurrentReactiveComputationModule.md#takeuntil)

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`unknown`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`unknown`\>

##### Returns

[`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`takeUntil`](../../interfaces/ConcurrentReactiveComputationModule.md#takeuntil)

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>, [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`unknown`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`unknown`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>, [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`takeUntil`](../../interfaces/ConcurrentReactiveComputationModule.md#takeuntil)

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

`never`

##### Returns

[`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`takeUntil`](../../interfaces/ConcurrentReactiveComputationModule.md#takeuntil)

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`takeWhile`](../../interfaces/ComputationModule.md#takewhile)

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`throwIfEmpty`](../../interfaces/SequentialComputationModule.md#throwifempty)

***

### toObservable()

> **toObservable**\<`T`\>(): [`ToObservableOperator`](../../type-aliases/ToObservableOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Returns

[`ToObservableOperator`](../../type-aliases/ToObservableOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

#### Inherited from

[`ConcurrentComputationModule`](../../interfaces/ConcurrentComputationModule.md).[`toObservable`](../../interfaces/ConcurrentComputationModule.md#toobservable)

***

### toProducer()

> **toProducer**\<`T`\>(`options`?): [`ToProducer`](../../type-aliases/ToProducer.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`ToProducer`](../../type-aliases/ToProducer.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

#### Inherited from

[`ConcurrentComputationModule`](../../interfaces/ConcurrentComputationModule.md).[`toProducer`](../../interfaces/ConcurrentComputationModule.md#toproducer)

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### maxMicroTaskTicks?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>, readonly `T`[]\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`toReadonlyArray`](../../interfaces/SynchronousComputationModule.md#toreadonlyarray)

***

### toRunnable()

> **toRunnable**\<`T`\>(`options`?): [`ToRunnableOperator`](../../type-aliases/ToRunnableOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### maxMicroTaskTicks?

`number`

#### Returns

[`ToRunnableOperator`](../../type-aliases/ToRunnableOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`toRunnable`](../../interfaces/SynchronousComputationModule.md#torunnable)

***

### withCurrentTime()

> **withCurrentTime**\<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`number`, `TA`, `TB`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `TB`\>

***

### withLatestFrom()

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

##### Returns

[`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`\>, [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`\>, [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`\>, [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`\>, [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

`never`

##### Returns

[`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

`never`

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)
