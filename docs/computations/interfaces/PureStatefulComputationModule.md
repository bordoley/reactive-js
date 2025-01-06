[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / PureStatefulComputationModule

# Interface: PureStatefulComputationModule\<C\>

## Extended by

- [`EnumerableModule`](../../collections/Enumerable/interfaces/EnumerableModule.md)

## Type Parameters

• **C** *extends* [`Computation`](Computation.md)

## Methods

### buffer()

> **buffer**\<`T`\>(`options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count

`number`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, readonly `T`[]\>

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset

`string`

###### fatal

`boolean`

###### ignoreBOM

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

###### equality

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

###### count

`number`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count

`number`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive

`boolean`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>
