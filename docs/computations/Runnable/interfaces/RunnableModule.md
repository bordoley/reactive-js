[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Runnable](../README.md) / RunnableModule

# Interface: RunnableModule

## Extends

- [`PureStatelessComputationModule`](../../interfaces/PureStatelessComputationModule.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md), [`RunnableComputation`](RunnableComputation.md)\>.[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md), [`RunnableComputation`](RunnableComputation.md)\>.[`PureStatefulComputationModule`](../../interfaces/PureStatefulComputationModule.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md), [`RunnableComputation`](RunnableComputation.md)\>.[`ComputationWithSideEffectsModule`](../../interfaces/ComputationWithSideEffectsModule.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md), [`RunnableComputation`](RunnableComputation.md), [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md), [`RunnableWithSideEffectsComputation`](RunnableWithSideEffectsComputation.md)\>.[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md), [`RunnableComputation`](RunnableComputation.md)\>

## Methods

### buffer()

> **buffer**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, readonly `T`[]\>

#### Inherited from

[`PureStatefulComputationModule`](../../interfaces/PureStatefulComputationModule.md).[`buffer`](../../interfaces/PureStatefulComputationModule.md#buffer)

***

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

***

### concat()

> **concat**\<`T`\>(`fst`, `snd`, ...`tail`): [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>

#### Type Parameters

• **T**

#### Parameters

##### fst

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>

##### snd

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>

##### tail

...readonly [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>[]

#### Returns

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concat`](../../interfaces/DeferredComputationModule.md#concat)

***

### concatAll()

> **concatAll**\<`T`\>(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>, `T`\>

#### Type Parameters

• **T**

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatAll`](../../interfaces/DeferredComputationModule.md#concatall)

***

### concatMany()

> **concatMany**\<`T`\>(`computations`): [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>

#### Type Parameters

• **T**

#### Parameters

##### computations

readonly \[[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>\]

#### Returns

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatMany`](../../interfaces/DeferredComputationModule.md#concatmany)

***

### concatMap()

> **concatMap**\<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `TA`, `TB`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatMap`](../../interfaces/DeferredComputationModule.md#concatmap)

***

### concatWith()

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### snd

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>

##### tail

...readonly [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>[]

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatWith`](../../interfaces/DeferredComputationModule.md#concatwith)

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset?

`string`

###### fatal?

`boolean`

###### ignoreBOM?

`boolean`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `ArrayBuffer`, `string`\>

#### Inherited from

[`PureStatefulComputationModule`](../../interfaces/PureStatefulComputationModule.md).[`decodeWithCharset`](../../interfaces/PureStatefulComputationModule.md#decodewithcharset)

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`PureStatefulComputationModule`](../../interfaces/PureStatefulComputationModule.md).[`distinctUntilChanged`](../../interfaces/PureStatefulComputationModule.md#distinctuntilchanged)

***

### empty()

> **empty**\<`T`\>(): [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>

#### Type Parameters

• **T**

#### Returns

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`empty`](../../interfaces/DeferredComputationModule.md#empty)

***

### endWith()

> **endWith**\<`T`\>(`value`, ...`values`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### value

`T`

##### values

...readonly `T`[]

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`endWith`](../../interfaces/DeferredComputationModule.md#endwith)

***

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`unknown`\>, [`RunnableWithSideEffectsComputation`](RunnableWithSideEffectsComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`unknown`\>, [`RunnableWithSideEffectsComputation`](RunnableWithSideEffectsComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationWithSideEffectsModule`](../../interfaces/ComputationWithSideEffectsModule.md).[`forEach`](../../interfaces/ComputationWithSideEffectsModule.md#foreach)

***

### fromIterable()

> **fromIterable**\<`T`, `TIterable`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`TIterable`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>\>

#### Type Parameters

• **T**

• **TIterable** *extends* [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\> = [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TIterable`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`fromIterable`](../../interfaces/DeferredComputationModule.md#fromiterable)

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`fromReadonlyArray`](../../interfaces/DeferredComputationModule.md#fromreadonlyarray)

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`fromValue`](../../interfaces/DeferredComputationModule.md#fromvalue)

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>

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

#### Returns

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`generate`](../../interfaces/DeferredComputationModule.md#generate)

***

### ignoreElements()

> **ignoreElements**\<`T`\>(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `any`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `any`, `T`\>

#### Inherited from

[`PureStatefulComputationModule`](../../interfaces/PureStatefulComputationModule.md).[`ignoreElements`](../../interfaces/PureStatefulComputationModule.md#ignoreelements)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`PureStatelessComputationModule`](../../interfaces/PureStatelessComputationModule.md).[`keep`](../../interfaces/PureStatelessComputationModule.md#keep)

***

### last()

> **last**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`last`](../../interfaces/SynchronousComputationModule.md#last)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `TA`, `TB`\>

#### Inherited from

[`PureStatelessComputationModule`](../../interfaces/PureStatelessComputationModule.md).[`map`](../../interfaces/PureStatelessComputationModule.md#map)

***

### pairwise()

> **pairwise**\<`T`\>(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Inherited from

[`PureStatefulComputationModule`](../../interfaces/PureStatefulComputationModule.md).[`pairwise`](../../interfaces/PureStatefulComputationModule.md#pairwise)

***

### raise()

> **raise**\<`T`\>(`options`?): [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`raise`](../../interfaces/DeferredComputationModule.md#raise)

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>, `TAcc`\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`reduce`](../../interfaces/SynchronousComputationModule.md#reduce)

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(`count`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`retry`](../../interfaces/DeferredComputationModule.md#retry)

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `TAcc`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`scan`](../../interfaces/DeferredComputationModule.md#scan)

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`PureStatefulComputationModule`](../../interfaces/PureStatefulComputationModule.md).[`skipFirst`](../../interfaces/PureStatefulComputationModule.md#skipfirst)

***

### startWith()

> **startWith**\<`T`\>(`value`, ...`values`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### value

`T`

##### values

...readonly `T`[]

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`startWith`](../../interfaces/DeferredComputationModule.md#startwith)

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`takeFirst`](../../interfaces/DeferredComputationModule.md#takefirst)

***

### takeLast()

> **takeLast**\<`T`\>(`options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`PureStatefulComputationModule`](../../interfaces/PureStatefulComputationModule.md).[`takeLast`](../../interfaces/PureStatefulComputationModule.md#takelast)

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`takeWhile`](../../interfaces/DeferredComputationModule.md#takewhile)

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, [`RunnableComputation`](RunnableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`throwIfEmpty`](../../interfaces/DeferredComputationModule.md#throwifempty)

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>, readonly `T`[]\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`toReadonlyArray`](../../interfaces/SynchronousComputationModule.md#toreadonlyarray)

***

### toRunnable()

> **toRunnable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\> & `Pick`\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md)\>, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`toRunnable`](../../interfaces/SynchronousComputationModule.md#torunnable)
