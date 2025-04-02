[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / SequentialComputationModule

# Interface: SequentialComputationModule\<TComputationType, TCreationOptions\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`AsyncIterableModule`](../AsyncIterable/interfaces/AsyncIterableModule.md)
- [`IterableModule`](../Iterable/interfaces/IterableModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`ProducerModule`](../Producer/interfaces/ProducerModule.md)
- [`RunnableModule`](../Runnable/interfaces/RunnableModule.md)
- [`SynchronousObservableModule`](../SynchronousObservable/interfaces/SynchronousObservableModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](ComputationTypeLike.md)

• **TCreationOptions** *extends* `object` = \{\}

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Call Signature

> **catchError**\<`T`\>(`onError`, `options`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../functions/type-aliases/Function1.md)\<`Error`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Call Signature

> **catchError**\<`T`\>(`onError`, `options`): [`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../functions/type-aliases/Function1.md)\<`Error`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

***

### concat()

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>

#### Call Signature

> **concat**\<`T`\>(...`computations`): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### computations

...readonly [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>[]

##### Returns

[`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

##### Type Parameters

• **T**

##### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

[`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>\>, [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>\>, [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

***

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

***

### gen()

> **gen**\<`T`\>(`factory`, `options`?): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<`Iterator`\<`T`, `any`, `any`\>\>

##### options?

`TCreationOptions`\[`"gen"`\]

#### Returns

[`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Call Signature

> **repeat**\<`T`\>(`count`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Call Signature

> **repeat**\<`T`\>(): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

***

### withEffect()

> **withEffect**\<`T`\>(`effect`): [`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### effect

() => `void` \| [`DisposableLike`](../../utils/interfaces/DisposableLike.md) \| [`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>\>

#### Returns

[`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>
