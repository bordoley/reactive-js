[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ComputationModule

# Interface: ComputationModule\<TComputationType, TCreationOptions\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`AsyncIterableModule`](../AsyncIterable/interfaces/AsyncIterableModule.md)
- [`BroadcasterModule`](../Broadcaster/interfaces/BroadcasterModule.md)
- [`IterableModule`](../Iterable/interfaces/IterableModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`ProducerModule`](../Producer/interfaces/ProducerModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

• **TCreationOptions** *extends* `object` = \{\}

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

***

### empty()

> **empty**\<`T`\>(`options`?): [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"empty"`\]

#### Returns

[`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>

***

### firstAsync()

> **firstAsync**\<`T`\>(`options`?): [`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"firstAsync"`\]

#### Returns

[`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`object` & `TCreationOptions`\[`"fromReadonlyArray"`\]

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>\>

***

### fromValue()

> **fromValue**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"fromValue"`\]

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>\>

***

### gen()

> **gen**\<`T`\>(`factory`, `options`?): [`NewInstanceWithSideEffectsOf`](../type-aliases/NewInstanceWithSideEffectsOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<`Iterator`\<`T`, `any`, `any`\>\>

##### options?

`TCreationOptions`\[`"gen"`\]

#### Returns

[`NewInstanceWithSideEffectsOf`](../type-aliases/NewInstanceWithSideEffectsOf.md)\<`TComputationType`, `T`\>

***

### genPure()

> **genPure**\<`T`\>(`factory`, `options`?): [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<`Iterator`\<`T`, `any`, `any`\>\>

##### options?

`TCreationOptions`\[`"genPure"`\]

#### Returns

[`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>

***

### keep()

> **keep**\<`T`\>(`predicate`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

***

### lastAsync()

> **lastAsync**\<`T`\>(`options`?): [`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"lastAsync"`\]

#### Returns

[`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TA`, `TB`\>

***

### pairwise()

> **pairwise**\<`T`\>(): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

***

### reduceAsync()

> **reduceAsync**\<`T`, `TAcc`\>(`reducer`, `initialValue`, `options`?): [`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

##### options?

`TCreationOptions`\[`"reduceAsync"`\]

#### Returns

[`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, `TAcc`\>

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `TAcc`\>

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

***

### toReadonlyArrayAsync()

> **toReadonlyArrayAsync**\<`T`\>(`options`?): [`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"toReadonlyArrayAsync"`\]

#### Returns

[`AsyncFunction1`](../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, readonly `T`[]\>
