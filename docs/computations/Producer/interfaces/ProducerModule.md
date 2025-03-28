[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Producer](../README.md) / ProducerModule

# Interface: ProducerModule

## Extends

- [`ComputationModule`](../../interfaces/ComputationModule.md)\<[`ProducerComputation`](ProducerComputation.md)\>.[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md)\<[`ProducerComputation`](ProducerComputation.md)\>.[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<[`ProducerComputation`](ProducerComputation.md)\>.[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<[`ProducerComputation`](ProducerComputation.md)\>.[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md)\<[`ProducerComputation`](ProducerComputation.md)\>.[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md)\<[`ProducerComputation`](ProducerComputation.md)\>

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: [`ProducerComputation`](ProducerComputation.md)

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`[ComputationModuleLike_computationType]`](../../interfaces/DeferredReactiveComputationModule.md#computationmodulelike_computationtype)

***

### combineLatest

> **combineLatest**: [`CombineConstructor`](../../interfaces/CombineConstructor.md)\<[`ProducerComputation`](ProducerComputation.md)\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`combineLatest`](../../interfaces/ConcurrentReactiveComputationModule.md#combinelatest)

***

### forkMerge

> **forkMerge**: `MulticastComputationForkMerge`\<[`ProducerComputation`](ProducerComputation.md)\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`forkMerge`](../../interfaces/ConcurrentReactiveComputationModule.md#forkmerge)

***

### zipLatest

> **zipLatest**: [`CombineConstructor`](../../interfaces/CombineConstructor.md)\<[`ProducerComputation`](ProducerComputation.md)\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`zipLatest`](../../interfaces/ConcurrentReactiveComputationModule.md#ziplatest)

## Methods

### actionReducer()

> **actionReducer**\<`TAction`, `T`\>(`reducer`, `initialState`, `options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TAction`, `T`\>

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

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TAction`, `T`\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`actionReducer`](../../interfaces/SequentialReactiveComputationModule.md#actionreducer)

***

### broadcast()

> **broadcast**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>, [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### autoDispose?

`boolean`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>, [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Inherited from

[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md).[`broadcast`](../../interfaces/ConcurrentDeferredComputationModule.md#broadcast)

***

### buffer()

> **buffer**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, readonly `T`[]\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`buffer`](../../interfaces/SequentialReactiveComputationModule.md#buffer)

***

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`catchError`](../../interfaces/SequentialComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`, `TInnerLike`\>(`onError`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, `T`, `T`\>

##### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, `T`\>\>

###### options

###### innerType

`TInnerLike`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`catchError`](../../interfaces/SequentialComputationModule.md#catcherror)

***

### concat()

#### Call Signature

> **concat**\<`T`\>(...`computations`): `never`

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly `never`[]

##### Returns

`never`

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): `never`

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly `never`[]

##### Returns

`never`

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>[]

##### Returns

[`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>[]

##### Returns

[`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `never`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `never`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concatAll`](../../interfaces/SequentialComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`, `TInnerLike`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, `T`\>, `T`\>

##### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

##### Parameters

###### options

###### innerType

`TInnerLike`

##### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, `T`\>, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concatAll`](../../interfaces/SequentialComputationModule.md#concatall)

***

### create()

> **create**\<`T`\>(`f`): [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### f

(`consumer`) => `void`

#### Returns

[`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\>

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset?

`string`

###### fatal?

`boolean`

###### ignoreBOM?

`boolean`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `ArrayBuffer`, `string`\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`decodeWithCharset`](../../interfaces/SequentialReactiveComputationModule.md#decodewithcharset)

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`distinctUntilChanged`](../../interfaces/ComputationModule.md#distinctuntilchanged)

***

### encodeUtf8()

> **encodeUtf8**(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`encodeUtf8`](../../interfaces/ComputationModule.md#encodeutf8)

***

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`forEach`](../../interfaces/SequentialComputationModule.md#foreach)

***

### fromAsyncFactory()

> **fromAsyncFactory**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<(`options`?) => `Promise`\<`T`\>, [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<(`options`?) => `Promise`\<`T`\>, [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>\>

#### Inherited from

[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md).[`fromAsyncFactory`](../../interfaces/ConcurrentDeferredComputationModule.md#fromasyncfactory)

***

### fromAsyncIterable()

> **fromAsyncIterable**\<`T`\>(`options`?): [`FromAsyncIterableOperator`](../../type-aliases/FromAsyncIterableOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`FromAsyncIterableOperator`](../../type-aliases/FromAsyncIterableOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromAsyncIterable`](../../interfaces/ConcurrentReactiveComputationModule.md#fromasynciterable)

***

### fromBroadcaster()

> **fromBroadcaster**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>, [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>, [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromBroadcaster`](../../interfaces/ConcurrentReactiveComputationModule.md#frombroadcaster)

***

### fromObservable()

> **fromObservable**\<`T`\>(`options`?): [`FromObservableOperator`](../../type-aliases/FromObservableOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### scheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

#### Returns

[`FromObservableOperator`](../../type-aliases/FromObservableOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromObservable`](../../interfaces/ConcurrentReactiveComputationModule.md#fromobservable)

***

### fromProducer()

> **fromProducer**\<`T`\>(): [`FromProducerOperator`](../../type-aliases/FromProducerOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>

#### Type Parameters

• **T**

#### Returns

[`FromProducerOperator`](../../type-aliases/FromProducerOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromProducer`](../../interfaces/ConcurrentReactiveComputationModule.md#fromproducer)

***

### gen()

> **gen**\<`T`\>(`factory`, `options`?): [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`Iterator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

[`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`gen`](../../interfaces/SequentialComputationModule.md#gen)

***

### genAsync()

> **genAsync**\<`T`\>(`factory`, `options`?): [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`AsyncIterator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

[`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

#### Inherited from

[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md).[`genAsync`](../../interfaces/ConcurrentDeferredComputationModule.md#genasync)

***

### genPure()

> **genPure**\<`T`\>(`factory`, `options`?): [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`Iterator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

[`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`genPure`](../../interfaces/ComputationModule.md#genpure)

***

### genPureAsync()

> **genPureAsync**\<`T`\>(`factory`, `options`?): [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`AsyncIterator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

[`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

#### Inherited from

[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md).[`genPureAsync`](../../interfaces/ConcurrentDeferredComputationModule.md#genpureasync)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`keep`](../../interfaces/ComputationModule.md#keep)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, `TB`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`map`](../../interfaces/ComputationModule.md#map)

***

### merge()

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

> **merge**\<`T`\>(...`computations`): [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>[]

##### Returns

[`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`merge`](../../interfaces/ConcurrentReactiveComputationModule.md#merge)

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>[]

##### Returns

[`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

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

> **merge**\<`T`\>(...`computations`): [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>[]

##### Returns

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`merge`](../../interfaces/ConcurrentReactiveComputationModule.md#merge)

***

### mergeAll()

> **mergeAll**\<`T`, `TInnerLike`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, `T`\>, `T`\>

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

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, `T`\>, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`mergeAll`](../../interfaces/DeferredReactiveComputationModule.md#mergeall)

***

### never()

> **never**\<`T`\>(`options`?): [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`never`](../../interfaces/ConcurrentReactiveComputationModule.md#never)

***

### pairwise()

> **pairwise**\<`T`\>(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`pairwise`](../../interfaces/ComputationModule.md#pairwise)

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`repeat`](../../interfaces/SequentialComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(`count`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`repeat`](../../interfaces/SequentialComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`repeat`](../../interfaces/SequentialComputationModule.md#repeat)

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`retry`](../../interfaces/SequentialComputationModule.md#retry)

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `TAcc`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`scan`](../../interfaces/ComputationModule.md#scan)

***

### scanMany()

> **scanMany**\<`T`, `TAcc`, `TInnerLike`\>(`scanner`, `initialValue`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

#### Parameters

##### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, `TAcc`\>\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

##### options

###### innerType

`TInnerLike`

#### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, `T`, `TAcc`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`scanMany`](../../interfaces/DeferredReactiveComputationModule.md#scanmany)

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`skipFirst`](../../interfaces/ComputationModule.md#skipfirst)

***

### switchAll()

> **switchAll**\<`T`, `TInnerLike`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, `T`\>, `T`\>

#### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

#### Parameters

##### options

###### innerType

`TInnerLike`

#### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TInnerLike`, `T`\>, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`switchAll`](../../interfaces/DeferredReactiveComputationModule.md#switchall)

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`takeFirst`](../../interfaces/ComputationModule.md#takefirst)

***

### takeLast()

> **takeLast**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`takeLast`](../../interfaces/SequentialReactiveComputationModule.md#takelast)

***

### takeUntil()

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

`never`

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`takeUntil`](../../interfaces/ConcurrentReactiveComputationModule.md#takeuntil)

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

`never`

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`takeUntil`](../../interfaces/ConcurrentReactiveComputationModule.md#takeuntil)

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`unknown`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`unknown`\>

##### Returns

[`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`takeUntil`](../../interfaces/ConcurrentReactiveComputationModule.md#takeuntil)

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>, [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`unknown`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`unknown`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>, [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`takeUntil`](../../interfaces/ConcurrentReactiveComputationModule.md#takeuntil)

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

`never`

##### Returns

[`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`takeUntil`](../../interfaces/ConcurrentReactiveComputationModule.md#takeuntil)

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`takeWhile`](../../interfaces/ComputationModule.md#takewhile)

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`throwIfEmpty`](../../interfaces/SequentialComputationModule.md#throwifempty)

***

### toProducer()

> **toProducer**\<`T`\>(`options`?): [`ToProducer`](../../type-aliases/ToProducer.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

[`ToProducer`](../../type-aliases/ToProducer.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`toProducer`](../../interfaces/ComputationModule.md#toproducer)

***

### withLatestFrom()

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

`never`

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, `T`\>

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

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, `T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

`never`

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, `T`\>

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

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, `T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`TB`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\>

##### Returns

[`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`TB`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, `T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`\>, [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`TB`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`\>, [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`\>, [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`TB`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`\>, [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> & [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

`never`

##### Returns

[`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, `T`\>

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

[`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, `T`\>

##### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ConcurrentReactiveComputationModule.md#withlatestfrom)
