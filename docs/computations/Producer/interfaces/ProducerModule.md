[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Producer](../README.md) / ProducerModule

# Interface: ProducerModule

## Extends

- [`ComputationModule`](../../interfaces/ComputationModule.md)\<[`ProducerComputation`](ProducerComputation.md)\>.[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md)\<[`ProducerComputation`](ProducerComputation.md)\>.[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md)\<[`ProducerComputation`](ProducerComputation.md)\>.[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<[`ProducerComputation`](ProducerComputation.md)\>.[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md)\<[`ProducerComputation`](ProducerComputation.md)\>.[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md)\<[`ProducerComputation`](ProducerComputation.md)\>.[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<[`ProducerComputation`](ProducerComputation.md)\>

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: [`ProducerComputation`](ProducerComputation.md)

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`[ComputationModuleLike_computationType]`](../../interfaces/ConcurrentReactiveComputationModule.md#computationmodulelike_computationtype)

## Methods

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

> **catchError**\<`T`\>(`onError`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`catchError`](../../interfaces/SequentialComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`\>(`onError`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`catchError`](../../interfaces/SequentialComputationModule.md#catcherror)

***

### combineLatest()

#### Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### c

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### c

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### d

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TD`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

#### Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TB`\>

##### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TB`\>

###### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TC`\>

##### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TB`\>

###### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TC`\>

###### d

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TD`\>

##### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

***

### concat()

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)[]

##### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>[]

##### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Type Parameters

• **T**

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concatAll`](../../interfaces/SequentialComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concatAll`](../../interfaces/SequentialComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>\>, [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>\>, [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

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

### forkMerge()

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TOut`\>\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TOut`\>\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TOut`\>\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TOut`\>\>

###### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TOut`\>\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `d`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### d

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `d`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TOut`\>\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TOut`\>\>

###### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TOut`\>\>

###### d

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TOut`\>\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

***

### fromBroadcaster()

> **fromBroadcaster**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>, [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>, [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromBroadcaster`](../../interfaces/ConcurrentReactiveComputationModule.md#frombroadcaster)

***

### fromObservable()

> **fromObservable**\<`T`\>(`options`?): \<`TObservable`\>(`iterable`) => `TObservable` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) : `TObservable` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) : `never`

#### Type Parameters

• **T**

#### Parameters

##### options?

###### scheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

#### Returns

`Function`

##### Type Parameters

• **TObservable** *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Parameters

###### iterable

`TObservable`

##### Returns

`TObservable` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) : `TObservable` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) : `never`

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromObservable`](../../interfaces/ConcurrentReactiveComputationModule.md#fromobservable)

***

### fromProducer()

> **fromProducer**\<`T`\>(): \<`TProducer`\>(`iterable`) => `TProducer` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) : `TProducer` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) : `never`

#### Type Parameters

• **T**

#### Returns

`Function`

##### Type Parameters

• **TProducer** *extends* [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>

##### Parameters

###### iterable

`TProducer`

##### Returns

`TProducer` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) : `TProducer` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) : `never`

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromProducer`](../../interfaces/ConcurrentReactiveComputationModule.md#fromproducer)

***

### gen()

> **gen**\<`T`\>(`factory`, `options`?): [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`Iterator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`gen`](../../interfaces/SequentialComputationModule.md#gen)

***

### genAsync()

> **genAsync**\<`T`\>(`factory`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`AsyncIterator`\<`T`, `any`, `any`\>\>

#### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

#### Inherited from

[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md).[`genAsync`](../../interfaces/ConcurrentDeferredComputationModule.md#genasync)

***

### genPure()

> **genPure**\<`T`\>(`factory`, `options`?): [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`Iterator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`genPure`](../../interfaces/ComputationModule.md#genpure)

***

### genPureAsync()

> **genPureAsync**\<`T`\>(`factory`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`AsyncIterator`\<`T`, `any`, `any`\>\>

#### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

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

> **merge**\<`T`\>(...`computations`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)[]

##### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`merge`](../../interfaces/ReactiveComputationModule.md#merge)

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>[]

##### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`merge`](../../interfaces/ReactiveComputationModule.md#merge)

***

### mergeAll()

#### Call Signature

> **mergeAll**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

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

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`mergeAll`](../../interfaces/DeferredReactiveComputationModule.md#mergeall)

#### Call Signature

> **mergeAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`mergeAll`](../../interfaces/DeferredReactiveComputationModule.md#mergeall)

#### Call Signature

> **mergeAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>\>, [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

`false`

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>\>, [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`mergeAll`](../../interfaces/DeferredReactiveComputationModule.md#mergeall)

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

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TAcc`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `TAcc`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`scanMany`](../../interfaces/DeferredReactiveComputationModule.md#scanmany)

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TAcc`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `TAcc`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`scanMany`](../../interfaces/DeferredReactiveComputationModule.md#scanmany)

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TAcc`\>\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `TAcc`\>

##### Inherited from

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

#### Call Signature

> **switchAll**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Type Parameters

• **T**

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`switchAll`](../../interfaces/DeferredReactiveComputationModule.md#switchall)

#### Call Signature

> **switchAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`switchAll`](../../interfaces/DeferredReactiveComputationModule.md#switchall)

#### Call Signature

> **switchAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>\>, [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>\>, [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Inherited from

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

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`unknown`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`takeUntil`](../../interfaces/ReactiveComputationModule.md#takeuntil)

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `unknown`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`takeUntil`](../../interfaces/ReactiveComputationModule.md#takeuntil)

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

> **toProducer**\<`T`\>(`options`?): \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> : `TComputationOf` *extends* [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> : `never`

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

`Function`

##### Type Parameters

• **TComputationOf** *extends* [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `T`\>

##### Parameters

###### computation

`TComputationOf`

##### Returns

`TComputationOf` *extends* [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> : `TComputationOf` *extends* [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> : `never`

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`toProducer`](../../interfaces/ComputationModule.md#toproducer)

***

### withBackpressure()

> **withBackpressure**\<`T`\>(`config`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### config

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`withBackpressure`](../../interfaces/DeferredReactiveComputationModule.md#withbackpressure)

***

### withEffect()

> **withEffect**\<`T`\>(`effect`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### effect

() => `void` \| [`DisposableLike`](../../../utils/interfaces/DisposableLike.md) \| [`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`Error`\>\>

#### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`withEffect`](../../interfaces/SequentialComputationModule.md#witheffect)

***

### withLatestFrom()

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, `T`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TB`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`, `T`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ReactiveComputationModule.md#withlatestfrom)

***

### zipLatest()

#### Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### c

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### c

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### d

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TD`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)

#### Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TB`\>

##### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TB`\>

###### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TC`\>

##### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TB`\>

###### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TC`\>

###### d

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](ProducerComputation.md), `TD`\>

##### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)
