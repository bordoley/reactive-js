[Reactive-JS](../README.md) / ix

# Module: ix

## Table of contents

### Interfaces

- [AsyncEnumerableLike](../interfaces/ix.AsyncEnumerableLike.md)
- [AsyncEnumeratorLike](../interfaces/ix.AsyncEnumeratorLike.md)
- [EnumerableLike](../interfaces/ix.EnumerableLike.md)
- [EnumeratorLike](../interfaces/ix.EnumeratorLike.md)
- [InteractiveContainerLike](../interfaces/ix.InteractiveContainerLike.md)
- [InteractiveSourceLike](../interfaces/ix.InteractiveSourceLike.md)

### Type Aliases

- [InteractiveContainerCtxOf](ix.md#interactivecontainerctxof)
- [ToEnumerable](ix.md#toenumerable)

### Variables

- [emptyEnumerableT](ix.md#emptyenumerablet)

### Functions

- [createEnumerable](ix.md#createenumerable)
- [emptyEnumerable](ix.md#emptyenumerable)

## Type Aliases

### InteractiveContainerCtxOf

Ƭ **InteractiveContainerCtxOf**<`C`, `T`\>: `C` extends { `TCtx?`: `unknown`  } ? `NonNullable`<`C` & { `T`: `T`  }[``"TCtx"``]\> : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`InteractiveContainerLike`](../interfaces/ix.InteractiveContainerLike.md) |
| `T` | `T` |

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

## Functions

### createEnumerable

▸ **createEnumerable**<`T`\>(`enumerate`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerate` | [`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/ix.EnumeratorLike.md)<`T`\>\> |

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
