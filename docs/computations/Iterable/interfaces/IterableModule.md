[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Iterable](../README.md) / IterableModule

# Interface: IterableModule

## Extends

- [`ComputationModule`](../../interfaces/ComputationModule.md)\<[`IterableLike`](../../interfaces/IterableLike.md), [`IterableComputation`](IterableComputation.md)\>.[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<[`IterableLike`](../../interfaces/IterableLike.md), [`IterableComputation`](IterableComputation.md)\>.[`ComputationWithSideEffectsModule`](../../interfaces/ComputationWithSideEffectsModule.md)\<[`IterableLike`](../../interfaces/IterableLike.md), [`IterableComputation`](IterableComputation.md), [`IterableWithSideEffectsLike`](../../interfaces/IterableWithSideEffectsLike.md), [`IterableWithSideEffectsComputation`](IterableWithSideEffectsComputation.md)\>.[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<[`IterableLike`](../../interfaces/IterableLike.md), [`IterableComputation`](IterableComputation.md)\>.[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md)\<[`IterableLike`](../../interfaces/IterableLike.md), [`IterableComputation`](IterableComputation.md)\>

## Methods

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>\>

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`catchError`](../../interfaces/DeferredComputationModule.md#catcherror)

***

### concat()

> **concat**\<`T`\>(`fst`, `snd`, ...`tail`): `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

#### Type Parameters

• **T**

#### Parameters

##### fst

`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

##### snd

`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

##### tail

...readonly `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>[]

#### Returns

`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concat`](../../interfaces/DeferredComputationModule.md#concat)

***

### concatAll()

> **concatAll**\<`T`\>(): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, `T`\>

#### Type Parameters

• **T**

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatAll`](../../interfaces/DeferredComputationModule.md#concatall)

***

### concatMany()

> **concatMany**\<`T`\>(`computations`): `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

#### Type Parameters

• **T**

#### Parameters

##### computations

readonly \[`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>\]

#### Returns

`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatMany`](../../interfaces/DeferredComputationModule.md#concatmany)

***

### concatMap()

> **concatMap**\<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `Iterable`\<`TB`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>\>

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `TA`, `TB`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatMap`](../../interfaces/DeferredComputationModule.md#concatmap)

***

### concatWith()

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### snd

`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

##### tail

...readonly `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>[]

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`concatWith`](../../interfaces/DeferredComputationModule.md#concatwith)

***

### empty()

> **empty**\<`T`\>(): `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

#### Type Parameters

• **T**

#### Returns

`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`empty`](../../interfaces/DeferredComputationModule.md#empty)

***

### endWith()

> **endWith**\<`T`\>(`value`, ...`values`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### value

`T`

##### values

...readonly `T`[]

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`endWith`](../../interfaces/DeferredComputationModule.md#endwith)

***

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), [`IterableWithSideEffectsLike`](../../interfaces/IterableWithSideEffectsLike.md)\<`unknown`\>, [`IterableWithSideEffectsComputation`](IterableWithSideEffectsComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), [`IterableWithSideEffectsLike`](../../interfaces/IterableWithSideEffectsLike.md)\<`unknown`\>, [`IterableWithSideEffectsComputation`](IterableWithSideEffectsComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationWithSideEffectsModule`](../../interfaces/ComputationWithSideEffectsModule.md).[`forEach`](../../interfaces/ComputationWithSideEffectsModule.md#foreach)

***

### fromIterable()

> **fromIterable**\<`T`, `TIterable`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`TIterable`, `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>\>

#### Type Parameters

• **T**

• **TIterable** *extends* [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\> = [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TIterable`, `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`fromIterable`](../../interfaces/DeferredComputationModule.md#fromiterable)

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`fromReadonlyArray`](../../interfaces/DeferredComputationModule.md#fromreadonlyarray)

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`fromValue`](../../interfaces/DeferredComputationModule.md#fromvalue)

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

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

`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`generate`](../../interfaces/DeferredComputationModule.md#generate)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`keep`](../../interfaces/ComputationModule.md#keep)

***

### last()

> **last**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`last`](../../interfaces/SynchronousComputationModule.md#last)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `TA`, `TB`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`map`](../../interfaces/ComputationModule.md#map)

***

### raise()

> **raise**\<`T`\>(`options`?): `Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`raise`](../../interfaces/DeferredComputationModule.md#raise)

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../../functions/type-aliases/Function1.md)\<`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, `TAcc`\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`reduce`](../../interfaces/SynchronousComputationModule.md#reduce)

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(`count`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

#### Call Signature

> **repeat**\<`T`\>(): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

##### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`repeat`](../../interfaces/DeferredComputationModule.md#repeat)

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`retry`](../../interfaces/DeferredComputationModule.md#retry)

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `TAcc`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`scan`](../../interfaces/DeferredComputationModule.md#scan)

***

### startWith()

> **startWith**\<`T`\>(`value`, ...`values`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### value

`T`

##### values

...readonly `T`[]

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`startWith`](../../interfaces/DeferredComputationModule.md#startwith)

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`takeFirst`](../../interfaces/DeferredComputationModule.md#takefirst)

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`takeWhile`](../../interfaces/DeferredComputationModule.md#takewhile)

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, [`IterableComputation`](IterableComputation.md), `T`, `T`\>

#### Inherited from

[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md).[`throwIfEmpty`](../../interfaces/DeferredComputationModule.md#throwifempty)

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, readonly `T`[]\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`toReadonlyArray`](../../interfaces/SynchronousComputationModule.md#toreadonlyarray)

***

### toRunnable()

> **toRunnable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Iterable`\<`T`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Inherited from

[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md).[`toRunnable`](../../interfaces/SynchronousComputationModule.md#torunnable)

***

### zip()

#### Call Signature

> **zip**\<`TA`, `TB`\>(`a`, `b`): `Iterable`\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

`Iterable`\<`TA`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

###### b

`Iterable`\<`TB`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

##### Returns

`Iterable`\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`zip`](../../interfaces/InteractiveComputationModule.md#zip)

#### Call Signature

> **zip**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): `Iterable`\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

`Iterable`\<`TA`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

###### b

`Iterable`\<`TB`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

###### c

`Iterable`\<`TC`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

##### Returns

`Iterable`\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`zip`](../../interfaces/InteractiveComputationModule.md#zip)

#### Call Signature

> **zip**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): `Iterable`\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

`Iterable`\<`TA`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

###### b

`Iterable`\<`TB`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

###### c

`Iterable`\<`TC`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

###### d

`Iterable`\<`TD`, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

##### Returns

`Iterable`\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>, `any`, `any`\> & `Pick`\<[`IterableLike`](../../interfaces/IterableLike.md)\<`unknown`\>, *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../variables/ComputationLike_isSynchronous.md) \| *typeof* [`ComputationLike_isInteractive`](../../variables/ComputationLike_isInteractive.md)\>

##### Inherited from

[`InteractiveComputationModule`](../../interfaces/InteractiveComputationModule.md).[`zip`](../../interfaces/InteractiveComputationModule.md#zip)
