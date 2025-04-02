[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/SynchronousObservable](../README.md) / SynchronousObservableModule

# Interface: SynchronousObservableModule

## Extends

- [`ComputationModule`](../../interfaces/ComputationModule.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), \{ `genPure`: \{ `delay`: `number`; `delayStart`: `boolean`; \}; `toProducer`: \{ `scheduler`: [`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md); \}; \}\>.[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md)\>.[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), \{ `gen`: \{ `delay`: `number`; `delayStart`: `boolean`; \}; \}\>.[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md)\>.[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), \{ `toRunnable`: \{ `maxMicroTaskTicks`: `number`; \}; \}\>.[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md)\>

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: [`SynchronousObservableComputation`](SynchronousObservableComputation.md)

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`[ComputationModuleLike_computationType]`](../../interfaces/DeferredReactiveComputationModule.md#computationmodulelike_computationtype)

***

### currentTime

> **currentTime**: [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`number`\>

## Methods

### buffer()

> **buffer**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, readonly `T`[]\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`buffer`](../../interfaces/SequentialReactiveComputationModule.md#buffer)

***

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`catchError`](../../interfaces/SequentialComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`\>(`onError`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`catchError`](../../interfaces/SequentialComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`\>(`onError`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`catchError`](../../interfaces/SequentialComputationModule.md#catcherror)

***

### combineLatest()

#### Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### d

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TD`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

#### Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TB`\>

##### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TB`\>

###### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TC`\>

##### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TB`\>

###### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TC`\>

###### d

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TD`\>

##### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

***

### compute()

> **compute**\<`T`\>(`computation`, `options`?): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>

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

### concat()

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)[]

##### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`\>[]

##### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concat`](../../interfaces/SequentialComputationModule.md#concat)

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Type Parameters

• **T**

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concatAll`](../../interfaces/SequentialComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concatAll`](../../interfaces/SequentialComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`\>\>, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`\>\>, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`concatAll`](../../interfaces/SequentialComputationModule.md#concatall)

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset?

`string`

###### fatal?

`boolean`

###### ignoreBOM?

`boolean`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `ArrayBuffer`, `string`\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`decodeWithCharset`](../../interfaces/SequentialReactiveComputationModule.md#decodewithcharset)

***

### delay()

> **delay**(`duration`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)

#### Parameters

##### duration

`number`

#### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`distinctUntilChanged`](../../interfaces/ComputationModule.md#distinctuntilchanged)

***

### encodeUtf8()

> **encodeUtf8**(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`encodeUtf8`](../../interfaces/ComputationModule.md#encodeutf8)

***

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`forEach`](../../interfaces/SequentialComputationModule.md#foreach)

***

### forkMerge()

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TOut`\>\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TOut`\>\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TOut`\>\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TOut`\>\>

###### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TOut`\>\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `d`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### d

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `d`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TOut`\>\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TOut`\>\>

###### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TOut`\>\>

###### d

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TOut`\>\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

***

### gen()

> **gen**\<`T`\>(`factory`, `options`?): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

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

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`gen`](../../interfaces/SequentialComputationModule.md#gen)

***

### genPure()

> **genPure**\<`T`\>(`factory`, `options`?): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

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

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`genPure`](../../interfaces/ComputationModule.md#genpure)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

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

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`, `TB`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`map`](../../interfaces/ComputationModule.md#map)

***

### merge()

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)[]

##### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`merge`](../../interfaces/ReactiveComputationModule.md#merge)

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`\>[]

##### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`merge`](../../interfaces/ReactiveComputationModule.md#merge)

***

### mergeAll()

#### Call Signature

> **mergeAll**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

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

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`mergeAll`](../../interfaces/DeferredReactiveComputationModule.md#mergeall)

#### Call Signature

> **mergeAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

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

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`mergeAll`](../../interfaces/DeferredReactiveComputationModule.md#mergeall)

#### Call Signature

> **mergeAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`\>\>, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

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

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`\>\>, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`mergeAll`](../../interfaces/DeferredReactiveComputationModule.md#mergeall)

***

### pairwise()

> **pairwise**\<`T`\>(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`pairwise`](../../interfaces/ComputationModule.md#pairwise)

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`repeat`](../../interfaces/SequentialComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(`count`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`repeat`](../../interfaces/SequentialComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

##### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`repeat`](../../interfaces/SequentialComputationModule.md#repeat)

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`retry`](../../interfaces/SequentialComputationModule.md#retry)

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `TAcc`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`scan`](../../interfaces/ComputationModule.md#scan)

***

### scanMany()

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TAcc`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `TAcc`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`scanMany`](../../interfaces/DeferredReactiveComputationModule.md#scanmany)

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TAcc`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `TAcc`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`scanMany`](../../interfaces/DeferredReactiveComputationModule.md#scanmany)

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TAcc`\>\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `TAcc`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`scanMany`](../../interfaces/DeferredReactiveComputationModule.md#scanmany)

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

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

### switchAll()

#### Call Signature

> **switchAll**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Type Parameters

• **T**

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`switchAll`](../../interfaces/DeferredReactiveComputationModule.md#switchall)

#### Call Signature

> **switchAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`switchAll`](../../interfaces/DeferredReactiveComputationModule.md#switchall)

#### Call Signature

> **switchAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`\>\>, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`\>\>, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`switchAll`](../../interfaces/DeferredReactiveComputationModule.md#switchall)

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`takeFirst`](../../interfaces/ComputationModule.md#takefirst)

***

### takeLast()

> **takeLast**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialReactiveComputationModule`](../../interfaces/SequentialReactiveComputationModule.md).[`takeLast`](../../interfaces/SequentialReactiveComputationModule.md#takelast)

***

### takeUntil()

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`unknown`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`takeUntil`](../../interfaces/ReactiveComputationModule.md#takeuntil)

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `unknown`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`takeUntil`](../../interfaces/ReactiveComputationModule.md#takeuntil)

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`takeWhile`](../../interfaces/ComputationModule.md#takewhile)

***

### throttle()

> **throttle**\<`T`\>(`duration`, `options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### duration

`number`

##### options?

###### mode?

[`ThrottleMode`](../type-aliases/ThrottleMode.md)

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`throwIfEmpty`](../../interfaces/SequentialComputationModule.md#throwifempty)

***

### toProducer()

> **toProducer**\<`T`\>(`options`?): \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> : `TComputationOf` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> : `never`

#### Type Parameters

• **T**

#### Parameters

##### options?

###### scheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

#### Returns

`Function`

##### Type Parameters

• **TComputationOf** *extends* [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`\>

##### Parameters

###### computation

`TComputationOf`

##### Returns

`TComputationOf` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> : `TComputationOf` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> : `never`

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`toProducer`](../../interfaces/ComputationModule.md#toproducer)

***

### toRunnable()

> **toRunnable**\<`T`\>(`options`?): \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> : `TComputationOf` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> : `never`

#### Type Parameters

• **T**

#### Parameters

##### options?

###### maxMicroTaskTicks?

`number`

#### Returns

`Function`

##### Type Parameters

• **TComputationOf** *extends* [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`\>

##### Parameters

###### computation

`TComputationOf`

##### Returns

`TComputationOf` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> : `TComputationOf` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> : `never`

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`toRunnable`](../../interfaces/SynchronousComputationModule.md#torunnable)

***

### withBackpressure()

> **withBackpressure**\<`T`\>(`config`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### config

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`withBackpressure`](../../interfaces/DeferredReactiveComputationModule.md#withbackpressure)

***

### withCurrentTime()

> **withCurrentTime**\<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`number`, `TA`, `TB`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`, `TB`\>

***

### withEffect()

> **withEffect**\<`T`\>(`effect`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### effect

() => `void` \| [`DisposableLike`](../../../utils/interfaces/DisposableLike.md) \| [`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`Error`\>\>

#### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `T`, `T`\>

#### Inherited from

[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md).[`withEffect`](../../interfaces/SequentialComputationModule.md#witheffect)

***

### withLatestFrom()

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`, `T`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TB`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`, `T`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ReactiveComputationModule.md#withlatestfrom)

***

### zipLatest()

#### Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### d

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TD`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)

#### Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TB`\>

##### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TB`\>

###### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TC`\>

##### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TB`\>

###### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TC`\>

###### d

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](SynchronousObservableComputation.md), `TD`\>

##### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)
