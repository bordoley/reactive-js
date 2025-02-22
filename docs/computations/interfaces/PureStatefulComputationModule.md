[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / PureStatefulComputationModule

# Interface: PureStatefulComputationModule\<C\>

## Extended by

- [`DeferableModule`](../Deferable/interfaces/DeferableModule.md)

## Type Parameters

• **C** *extends* [`Computation`](Computation.md)

## Methods

### buffer()

> **buffer**\<`T`\>(`options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, readonly `T`[]\>

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset?

`string`

###### fatal?

`boolean`

###### ignoreBOM?

`boolean`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `ArrayBuffer`, `string`\>

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

***

### pairwise()

> **pairwise**\<`T`\>(): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `TAcc`\>

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>
