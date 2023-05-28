[Reactive-JS](../README.md) / [types](../modules/types.md) / ConcreteIndexedContainerModule

# Interface: ConcreteIndexedContainerModule<C\>

[types](../modules/types.md).ConcreteIndexedContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`IndexedContainer`](types.IndexedContainer.md) |

## Hierarchy

- [`IndexedContainerModule`](types.IndexedContainerModule.md)<`C`\>

- [`ConcreteContainerModule`](types.ConcreteContainerModule.md)<`C`\>

  ↳ **`ConcreteIndexedContainerModule`**

  ↳↳ [`EventSourceContainerModule`](types.EventSourceContainerModule.md)

  ↳↳ [`FlowableContainerModule`](types.FlowableContainerModule.md)

## Table of contents

### Constructor Methods

- [empty](types.ConcreteIndexedContainerModule.md#empty)
- [fromEnumerable](types.ConcreteIndexedContainerModule.md#fromenumerable)
- [fromFactory](types.ConcreteIndexedContainerModule.md#fromfactory)
- [fromOptional](types.ConcreteIndexedContainerModule.md#fromoptional)
- [fromReadonlyArray](types.ConcreteIndexedContainerModule.md#fromreadonlyarray)
- [fromValue](types.ConcreteIndexedContainerModule.md#fromvalue)

### Operator Methods

- [buffer](types.ConcreteIndexedContainerModule.md#buffer)
- [distinctUntilChanged](types.ConcreteIndexedContainerModule.md#distinctuntilchanged)
- [mapTo](types.ConcreteIndexedContainerModule.md#mapto)
- [pairwise](types.ConcreteIndexedContainerModule.md#pairwise)
- [pick](types.ConcreteIndexedContainerModule.md#pick)
- [scan](types.ConcreteIndexedContainerModule.md#scan)
- [skipFirst](types.ConcreteIndexedContainerModule.md#skipfirst)
- [takeFirst](types.ConcreteIndexedContainerModule.md#takefirst)
- [takeLast](types.ConcreteIndexedContainerModule.md#takelast)
- [takeWhile](types.ConcreteIndexedContainerModule.md#takewhile)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>

#### Inherited from

[ConcreteContainerModule](types.ConcreteContainerModule.md).[empty](types.ConcreteContainerModule.md#empty)

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

___

## Operator Methods

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, readonly `T`[], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, readonly `T`[], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Inherited from

[IndexedContainerModule](types.IndexedContainerModule.md).[buffer](types.IndexedContainerModule.md#buffer)

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

Returns a ContainerOperator that emits all items emitted by the source that
are distinct by comparison from the previous item.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Inherited from

[IndexedContainerModule](types.IndexedContainerModule.md).[distinctUntilChanged](types.IndexedContainerModule.md#distinctuntilchanged)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TB` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Inherited from

[IndexedContainerModule](types.IndexedContainerModule.md).[mapTo](types.IndexedContainerModule.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, readonly [`T`, `T`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, readonly [`T`, `T`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Inherited from

[IndexedContainerModule](types.IndexedContainerModule.md).[pairwise](types.IndexedContainerModule.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKey`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKey`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Inherited from

[IndexedContainerModule](types.IndexedContainerModule.md).[pick](types.IndexedContainerModule.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Inherited from

[IndexedContainerModule](types.IndexedContainerModule.md).[pick](types.IndexedContainerModule.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |
| `TKeyC` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |
| `keyC` | `TKeyC` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Inherited from

[IndexedContainerModule](types.IndexedContainerModule.md).[pick](types.IndexedContainerModule.md#pick)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `TAcc`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

Returns a Container that applies an accumulator function over the source,
and emits each intermediate result.

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scanner` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> | The accumulator function called on each source value. |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> | The initial accumulation value. |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `TAcc`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Inherited from

[IndexedContainerModule](types.IndexedContainerModule.md).[scan](types.IndexedContainerModule.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

Returns a Container that skips the first count items emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Inherited from

[IndexedContainerModule](types.IndexedContainerModule.md).[skipFirst](types.IndexedContainerModule.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

Returns a Container that only emits the first `count` values emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Inherited from

[IndexedContainerModule](types.IndexedContainerModule.md).[takeFirst](types.IndexedContainerModule.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

Returns a Container that only emits the last `count` items emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Inherited from

[IndexedContainerModule](types.IndexedContainerModule.md).[takeLast](types.IndexedContainerModule.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

Returns a Container which emits values emitted by the source as long
as each value satisfies the given predicate, and then completes as soon as
this predicate is not satisfied.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> | The predicate function. |
| `options?` | `Object` | - |
| `options.inclusive?` | `boolean` | - |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Inherited from

[IndexedContainerModule](types.IndexedContainerModule.md).[takeWhile](types.IndexedContainerModule.md#takewhile)
