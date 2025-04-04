[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/AsyncIterable](../README.md) / AsyncIterableModule

# Interface: AsyncIterableModule

## Extends

- [`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md)\>.[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md)\>.[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), \{ `toObservable`: \{ `bufferSize`: `number`; \}; \}\>.[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md)\>

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: [`AsyncIterableComputation`](AsyncIterableComputation.md)

#### Inherited from

[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md).[`[ComputationModuleLike_computationType]`](../../interfaces/ConcurrentDeferredComputationModule.md#computationmodulelike_computationtype)

## Methods

### buffer()

> **buffer**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, readonly `T`[]\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`buffer`](../../interfaces/DeferredComputationModule.md#buffer)

***

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`\>(`onError`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`\>(`onError`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

***

### concat()

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)[]

##### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concat`](../../interfaces/DeferredComputationModule.md#concat)

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>[]

##### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concat`](../../interfaces/DeferredComputationModule.md#concat)

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Type Parameters

• **T**

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatAll`](../../interfaces/DeferredComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatAll`](../../interfaces/DeferredComputationModule.md#concatall)

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>\>, [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>\>, [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatAll`](../../interfaces/DeferredComputationModule.md#concatall)

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset?

`string`

###### fatal?

`boolean`

###### ignoreBOM?

`boolean`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `ArrayBuffer`, `string`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`decodeWithCharset`](../../interfaces/DeferredComputationModule.md#decodewithcharset)

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`distinctUntilChanged`](../../interfaces/ComputationModule.md#distinctuntilchanged)

***

### encodeUtf8()

> **encodeUtf8**(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`encodeUtf8`](../../interfaces/ComputationModule.md#encodeutf8)

***

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`forEach`](../../interfaces/DeferredComputationModule.md#foreach)

***

### fromAsyncFactory()

> **fromAsyncFactory**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<(`options`?) => `Promise`\<`T`\>, [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<(`options`?) => `Promise`\<`T`\>, [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\>\>

***

### gen()

> **gen**\<`T`\>(`factory`, `options`?): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`Iterator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`gen`](../../interfaces/DeferredComputationModule.md#gen)

***

### genAsync()

> **genAsync**\<`T`\>(`factory`, `options`?): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`AsyncIterator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

#### Inherited from

[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md).[`genAsync`](../../interfaces/ConcurrentDeferredComputationModule.md#genasync)

***

### genPure()

> **genPure**\<`T`\>(`factory`, `options`?): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`Iterator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`genPure`](../../interfaces/ComputationModule.md#genpure)

***

### genPureAsync()

> **genPureAsync**\<`T`\>(`factory`, `options`?): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`AsyncIterator`\<`T`, `any`, `any`\>\>

##### options?

`unknown`

#### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### Inherited from

[`ConcurrentDeferredComputationModule`](../../interfaces/ConcurrentDeferredComputationModule.md).[`genPureAsync`](../../interfaces/ConcurrentDeferredComputationModule.md#genpureasync)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`keep`](../../interfaces/ComputationModule.md#keep)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TA`, `TB`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`map`](../../interfaces/ComputationModule.md#map)

***

### of()

> **of**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`AsyncIterable`\<`T`, `any`, `any`\>, [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`AsyncIterable`\<`T`, `any`, `any`\>, [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\>\>

***

### pairwise()

> **pairwise**\<`T`\>(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`pairwise`](../../interfaces/ComputationModule.md#pairwise)

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(`count`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`retry`](../../interfaces/DeferredComputationModule.md#retry)

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `TAcc`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`scan`](../../interfaces/ComputationModule.md#scan)

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`skipFirst`](../../interfaces/ComputationModule.md#skipfirst)

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`takeFirst`](../../interfaces/ComputationModule.md#takefirst)

***

### takeLast()

> **takeLast**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`takeLast`](../../interfaces/DeferredComputationModule.md#takelast)

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`takeWhile`](../../interfaces/ComputationModule.md#takewhile)

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`throwIfEmpty`](../../interfaces/DeferredComputationModule.md#throwifempty)

***

### toObservable()

> **toObservable**\<`T`\>(`options`?): \<`TComputationOf`\>(`iter`) => `TComputationOf` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) & [`SynchronousComputationLike`](../../interfaces/SynchronousComputationLike.md) ? [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> : `TComputationOf` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) & [`SynchronousComputationLike`](../../interfaces/SynchronousComputationLike.md) ? [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> : `never`

#### Type Parameters

• **T**

#### Parameters

##### options?

###### bufferSize?

`number`

#### Returns

`Function`

##### Type Parameters

• **TComputationOf** *extends* [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>

##### Parameters

###### iter

`TComputationOf`

##### Returns

`TComputationOf` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) & [`SynchronousComputationLike`](../../interfaces/SynchronousComputationLike.md) ? [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> : `TComputationOf` *extends* [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) & [`SynchronousComputationLike`](../../interfaces/SynchronousComputationLike.md) ? [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> : `never`

#### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`toObservable`](../../interfaces/InteractiveComputationModule.md#toobservable)

***

### toProducer()

> **toProducer**\<`T`\>(`options`?): \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> : `TComputationOf` *extends* [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> : `never`

#### Type Parameters

• **T**

#### Parameters

##### options?

`unknown`

#### Returns

`Function`

##### Type Parameters

• **TComputationOf** *extends* [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`\>

##### Parameters

###### computation

`TComputationOf`

##### Returns

`TComputationOf` *extends* [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md) ? [`PureProducerLike`](../../interfaces/PureProducerLike.md)\<`T`\> : `TComputationOf` *extends* [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md) ? [`ProducerWithSideEffectsLike`](../../interfaces/ProducerWithSideEffectsLike.md)\<`T`\> : `never`

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`toProducer`](../../interfaces/ComputationModule.md#toproducer)

***

### withEffect()

> **withEffect**\<`T`\>(`effect`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### effect

() => `void` \| [`DisposableLike`](../../../utils/interfaces/DisposableLike.md) \| [`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`Error`\>\>

#### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`withEffect`](../../interfaces/DeferredComputationModule.md#witheffect)

***

### zip()

#### Call Signature

> **zip**\<`TA`, `TB`\>(`a`, `b`): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`zip`](../../interfaces/InteractiveComputationModule.md#zip)

#### Call Signature

> **zip**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### c

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`zip`](../../interfaces/InteractiveComputationModule.md#zip)

#### Call Signature

> **zip**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### b

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### c

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

###### d

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TD`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`zip`](../../interfaces/InteractiveComputationModule.md#zip)

#### Call Signature

> **zip**\<`TA`, `TB`\>(`a`, `b`): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TB`\>

##### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`zip`](../../interfaces/InteractiveComputationModule.md#zip)

#### Call Signature

> **zip**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TB`\>

###### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TC`\>

##### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`zip`](../../interfaces/InteractiveComputationModule.md#zip)

#### Call Signature

> **zip**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TA`\>

###### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TB`\>

###### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TC`\>

###### d

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TD`\>

##### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`zip`](../../interfaces/InteractiveComputationModule.md#zip)
