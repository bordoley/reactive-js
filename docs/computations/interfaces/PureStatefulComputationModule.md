[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / PureStatefulComputationModule

# Interface: PureStatefulComputationModule\<Type, C\>

## Extended by

- [`DeferableModule`](../Deferable/interfaces/DeferableModule.md)

## Type Parameters

• **Type** *extends* [`ComputationLike`](ComputationLike.md)

• **C** *extends* [`Computation`](Computation.md)\<`Type`\>

## Methods

### buffer()

> **buffer**\<`T`\>(`options`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, readonly `T`[]\>

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset?

`string`

###### fatal?

`boolean`

###### ignoreBOM?

`boolean`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `ArrayBuffer`, `string`\>

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

***

### ignoreElements()

> **ignoreElements**\<`T`\>(): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `any`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `any`, `T`\>

***

### pairwise()

> **pairwise**\<`T`\>(): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

***

### takeLast()

> **takeLast**\<`T`\>(`options`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>
