[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / ObservableModule

# Interface: ObservableModule

## Extends

- [`ComputationModule`](../../interfaces/ComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md), \{ `genPure`: \{ `delay`: `number`; `delayStart`: `boolean`; \}; `toProducer`: \{ `scheduler`: [`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md); \}; \}\>.[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md)\>.[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md)\>.[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md), \{ `gen`: \{ `delay`: `number`; `delayStart`: `boolean`; \}; \}\>.[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md), \{ `broadcast`: \{ `scheduler`: [`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md); \}; `compute`: \{ `mode`: `"batched"` \| `"combine-latest"`; \}; \}\>.[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md)\>.[`ScheduledReactiveComputationModule`](../../interfaces/ScheduledReactiveComputationModule.md)\<[`ObservableComputation`](ObservableComputation.md)\>

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: [`ObservableComputation`](ObservableComputation.md)

#### Inherited from

[`ScheduledReactiveComputationModule`](../../interfaces/ScheduledReactiveComputationModule.md).[`[ComputationModuleLike_computationType]`](../../interfaces/ScheduledReactiveComputationModule.md#computationmodulelike_computationtype)

***

### currentTime

> **currentTime**: [`ObservableLike`](../../interfaces/ObservableLike.md)\<`number`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Inherited from

[`ScheduledReactiveComputationModule`](../../interfaces/ScheduledReactiveComputationModule.md).[`currentTime`](../../interfaces/ScheduledReactiveComputationModule.md#currenttime)

***

### retry()

> **retry**: \<`T`\>(`shouldRetry`?) => [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `number` \| `boolean`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Overrides

[`ScheduledReactiveComputationModule`](../../interfaces/ScheduledReactiveComputationModule.md).[`retry`](../../interfaces/ScheduledReactiveComputationModule.md#retry)

## Methods

### broadcast()

> **broadcast**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>, [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`object` & `object`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>, [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`broadcast`](../../interfaces/DeferredReactiveComputationModule.md#broadcast)

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

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`buffer`](../../interfaces/DeferredComputationModule.md#buffer)

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

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`\>(`onError`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`\>(`onError`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

***

### combineLatest()

#### Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### d

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

#### Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TB`\>

##### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TB`\>

###### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TC`\>

##### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TB`\>

###### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TC`\>

###### d

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TD`\>

##### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`combineLatest`](../../interfaces/ReactiveComputationModule.md#combinelatest)

***

### compute()

> **compute**\<`T`\>(`computation`, `options`?): [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

#### Type Parameters

• **T**

#### Parameters

##### computation

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### mode?

`"batched"` \| `"combine-latest"`

#### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`compute`](../../interfaces/DeferredReactiveComputationModule.md#compute)

***

### concat()

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)[]

##### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concat`](../../interfaces/DeferredComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>[]

##### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concat`](../../interfaces/DeferredComputationModule.md#concat)

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Type Parameters

• **T**

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatAll`](../../interfaces/DeferredComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatAll`](../../interfaces/DeferredComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatAll`](../../interfaces/DeferredComputationModule.md#concatall)

***

### debounce()

> **debounce**\<`T`\>(`duration`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### duration

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Inherited from

[`ScheduledReactiveComputationModule`](../../interfaces/ScheduledReactiveComputationModule.md).[`debounce`](../../interfaces/ScheduledReactiveComputationModule.md#debounce)

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

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`decodeWithCharset`](../../interfaces/DeferredComputationModule.md#decodewithcharset)

***

### delay()

> **delay**(`duration`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<`unknown`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Parameters

##### duration

`number`

#### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`unknown`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Inherited from

[`ScheduledReactiveComputationModule`](../../interfaces/ScheduledReactiveComputationModule.md).[`delay`](../../interfaces/ScheduledReactiveComputationModule.md#delay)

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

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`forEach`](../../interfaces/DeferredComputationModule.md#foreach)

***

### forkMerge()

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TOut`\>\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TOut`\>\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TOut`\>\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TOut`\>\>

###### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TOut`\>\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `d`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### d

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `d`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `TIn`, `TOut`\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TOut`\>\>

###### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TOut`\>\>

###### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TOut`\>\>

###### d

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TOut`\>\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `TIn`, `TOut`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`forkMerge`](../../interfaces/ReactiveComputationModule.md#forkmerge)

***

### fromBroadcaster()

> **fromBroadcaster**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromBroadcaster`](../../interfaces/ConcurrentReactiveComputationModule.md#frombroadcaster)

***

### fromObservable()

> **fromObservable**\<`T`\>(`options`?): \<`TObservable`\>(`iterable`) => `TObservable` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) : `TObservable` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) : `never`

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

`TObservable` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) : `TObservable` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) : `never`

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromObservable`](../../interfaces/ConcurrentReactiveComputationModule.md#fromobservable)

***

### fromProducer()

> **fromProducer**\<`T`\>(): \<`TProducer`\>(`iterable`) => `TProducer` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) : `TProducer` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) : `never`

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

`TProducer` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) : `TProducer` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) : `never`

#### Inherited from

[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md).[`fromProducer`](../../interfaces/ConcurrentReactiveComputationModule.md#fromproducer)

***

### gen()

> **gen**\<`T`\>(`factory`, `options`?): [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

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

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`gen`](../../interfaces/DeferredComputationModule.md#gen)

***

### genAsync()

> **genAsync**\<`T`\>(`factory`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`AsyncIterator`\<`T`, `any`, `any`\>\>

#### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

#### Inherited from

[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md).[`genAsync`](../../interfaces/ConcurrentDeferredComputationModule.md#genasync)

***

### genPure()

> **genPure**\<`T`\>(`factory`, `options`?): [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

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

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`genPure`](../../interfaces/ComputationModule.md#genpure)

***

### genPureAsync()

> **genPureAsync**\<`T`\>(`factory`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`AsyncIterator`\<`T`, `any`, `any`\>\>

#### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

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

> **keyFrame**(`duration`, `options`?): [`ObservableLike`](../../interfaces/ObservableLike.md)\<`number`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Parameters

##### duration

`number`

##### options?

###### easing?

[`Function1`](../../../functions/type-aliases/Function1.md)\<`number`, `number`\>

#### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`number`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Inherited from

[`ScheduledReactiveComputationModule`](../../interfaces/ScheduledReactiveComputationModule.md).[`keyFrame`](../../interfaces/ScheduledReactiveComputationModule.md#keyframe)

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

> **merge**\<`T`\>(...`computations`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)[]

##### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`merge`](../../interfaces/ReactiveComputationModule.md#merge)

#### Call Signature

> **merge**\<`T`\>(...`computations`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>[]

##### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`merge`](../../interfaces/ReactiveComputationModule.md#merge)

***

### mergeAll()

#### Call Signature

> **mergeAll**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

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

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`mergeAll`](../../interfaces/DeferredReactiveComputationModule.md#mergeall)

#### Call Signature

> **mergeAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

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

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`mergeAll`](../../interfaces/DeferredReactiveComputationModule.md#mergeall)

#### Call Signature

> **mergeAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

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

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`mergeAll`](../../interfaces/DeferredReactiveComputationModule.md#mergeall)

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

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

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

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

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

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TAcc`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `TAcc`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`scanMany`](../../interfaces/DeferredReactiveComputationModule.md#scanmany)

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TAcc`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `TAcc`\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`scanMany`](../../interfaces/DeferredReactiveComputationModule.md#scanmany)

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TAcc`\>\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `TAcc`\>

##### Inherited from

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

> **spring**(`options`?): [`ObservableLike`](../../interfaces/ObservableLike.md)\<`number`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Parameters

##### options?

###### damping?

`number`

###### precision?

`number`

###### stiffness?

`number`

#### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`number`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Inherited from

[`ScheduledReactiveComputationModule`](../../interfaces/ScheduledReactiveComputationModule.md).[`spring`](../../interfaces/ScheduledReactiveComputationModule.md#spring)

***

### subscribeOn()

> **subscribeOn**\<`T`\>(`scheduler`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

***

### switchAll()

#### Call Signature

> **switchAll**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Type Parameters

• **T**

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`switchAll`](../../interfaces/DeferredReactiveComputationModule.md#switchall)

#### Call Signature

> **switchAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`switchAll`](../../interfaces/DeferredReactiveComputationModule.md#switchall)

#### Call Signature

> **switchAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Inherited from

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

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`takeLast`](../../interfaces/DeferredComputationModule.md#takelast)

***

### takeUntil()

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`unknown`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`takeUntil`](../../interfaces/ReactiveComputationModule.md#takeuntil)

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `unknown`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`takeUntil`](../../interfaces/ReactiveComputationModule.md#takeuntil)

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

### throttle()

> **throttle**\<`T`\>(`duration`, `options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### duration

`number`

##### options?

###### mode?

`"interval"` \| `"first"` \| `"last"`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Inherited from

[`ScheduledReactiveComputationModule`](../../interfaces/ScheduledReactiveComputationModule.md).[`throttle`](../../interfaces/ScheduledReactiveComputationModule.md#throttle)

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

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`throwIfEmpty`](../../interfaces/DeferredComputationModule.md#throwifempty)

***

### toProducer()

> **toProducer**\<`T`\>(`options`?): \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> : `TComputationOf` *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> : `never`

#### Type Parameters

• **T**

#### Parameters

##### options?

###### scheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

#### Returns

`Function`

##### Type Parameters

• **TComputationOf** *extends* [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `T`\>

##### Parameters

###### computation

`TComputationOf`

##### Returns

`TComputationOf` *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> : `TComputationOf` *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> : `never`

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`toProducer`](../../interfaces/ComputationModule.md#toproducer)

***

### withBackpressure()

> **withBackpressure**\<`T`\>(`config`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### config

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredReactiveComputationModule`](../../interfaces/DeferredReactiveComputationModule.md).[`withBackpressure`](../../interfaces/DeferredReactiveComputationModule.md#withbackpressure)

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

#### Inherited from

[`ScheduledReactiveComputationModule`](../../interfaces/ScheduledReactiveComputationModule.md).[`withCurrentTime`](../../interfaces/ScheduledReactiveComputationModule.md#withcurrenttime)

***

### withEffect()

> **withEffect**\<`T`\>(`effect`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### effect

() => `void` \| [`DisposableLike`](../../../utils/interfaces/DisposableLike.md) \| [`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`Error`\>\>

#### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`withEffect`](../../interfaces/DeferredComputationModule.md#witheffect)

***

### withLatestFrom()

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TB`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ReactiveComputationModule.md#withlatestfrom)

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`, `T`\>

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`withLatestFrom`](../../interfaces/ReactiveComputationModule.md#withlatestfrom)

***

### zipLatest()

#### Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### d

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)

#### Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TB`\>

##### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TB`\>

###### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TC`\>

##### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TB`\>

###### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TC`\>

###### d

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](ObservableComputation.md), `TD`\>

##### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md).[`zipLatest`](../../interfaces/ReactiveComputationModule.md#ziplatest)
