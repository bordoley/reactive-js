[Reactive-JS](../README.md) / [types](../modules/types.md) / IndexedContainerModule

# Interface: IndexedContainerModule<C\>

[types](../modules/types.md).IndexedContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`IndexedContainer`](types.IndexedContainer.md) |

## Hierarchy

- [`ContainerModule`](types.ContainerModule.md)<`C`\>

  ↳ **`IndexedContainerModule`**

  ↳↳ [`PauseableObservableModule`](PauseableObservable.PauseableObservableModule.md)

  ↳↳ [`ConcreteIndexedContainerModule`](types.ConcreteIndexedContainerModule.md)

## Table of contents

### Operator Methods

- [buffer](types.IndexedContainerModule.md#buffer)
- [distinctUntilChanged](types.IndexedContainerModule.md#distinctuntilchanged)
- [pairwise](types.IndexedContainerModule.md#pairwise)
- [pick](types.IndexedContainerModule.md#pick)
- [scan](types.IndexedContainerModule.md#scan)
- [skipFirst](types.IndexedContainerModule.md#skipfirst)
- [takeFirst](types.IndexedContainerModule.md#takefirst)
- [takeLast](types.IndexedContainerModule.md#takelast)
- [takeWhile](types.IndexedContainerModule.md#takewhile)

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

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, readonly [`T`, `T`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, readonly [`T`, `T`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

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
