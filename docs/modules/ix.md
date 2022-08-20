[Reactive-JS](../README.md) / ix

# Module: ix

## Table of contents

### Interfaces

- [AsyncEnumerableLike](../interfaces/ix.AsyncEnumerableLike.md)
- [AsyncEnumeratorLike](../interfaces/ix.AsyncEnumeratorLike.md)
- [EnumerableLike](../interfaces/ix.EnumerableLike.md)
- [InteractiveContainerLike](../interfaces/ix.InteractiveContainerLike.md)

### Type Aliases

- [ToAsyncEnumerable](ix.md#toasyncenumerable)
- [ToEnumerable](ix.md#toenumerable)

### Variables

- [emptyEnumerableT](ix.md#emptyenumerablet)
- [generateEnumerableT](ix.md#generateenumerablet)

### Functions

- [createEnumerable](ix.md#createenumerable)
- [emptyEnumerable](ix.md#emptyenumerable)
- [generateEnumerable](ix.md#generateenumerable)

## Type Aliases

### ToAsyncEnumerable

Ƭ **ToAsyncEnumerable**<`C`, `TOptions`\>: [`Container`](containers.md#container)<`C`\> & { `toAsyncEnumerable`: <T\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TOptions` | `never` |

___

### ToEnumerable

Ƭ **ToEnumerable**<`C`, `TOptions`\>: [`Container`](containers.md#container)<`C`\> & { `toEnumerable`: <T\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TOptions` | `never` |

## Variables

### emptyEnumerableT

• `Const` **emptyEnumerableT**: [`Empty`](containers.md#empty)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### generateEnumerableT

• `Const` **generateEnumerableT**: [`Generate`](containers.md#generate)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

## Functions

### createEnumerable

▸ **createEnumerable**<`T`\>(`f`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/util.EnumeratorLike.md)<`T`\>\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

___

### emptyEnumerable

▸ **emptyEnumerable**<`T`\>(`options?`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

___

### generateEnumerable

▸ **generateEnumerable**<`T`\>(`generator`, `initialValue`, `options?`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

Generates an EnumerableLike from a generator function
that is applied to an accumulator value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> | the generator function. |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |
| `options?` | `undefined` | - |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>
