[Reactive-JS](../README.md) / ix

# Module: ix

## Table of contents

### Interfaces

- [AsyncEnumerableLike](../interfaces/ix.AsyncEnumerableLike.md)
- [AsyncEnumeratorLike](../interfaces/ix.AsyncEnumeratorLike.md)
- [CreateInteractiveContainer](../interfaces/ix.CreateInteractiveContainer.md)
- [EnumerableLike](../interfaces/ix.EnumerableLike.md)
- [EnumeratorLike](../interfaces/ix.EnumeratorLike.md)
- [InteractiveContainerLike](../interfaces/ix.InteractiveContainerLike.md)
- [InteractiveSourceLike](../interfaces/ix.InteractiveSourceLike.md)

### Type Aliases

- [InteractiveContainerCtxOf](ix.md#interactivecontainerctxof)
- [ToEnumerable](ix.md#toenumerable)

### Variables

- [EnumeratorLike\_current](ix.md#enumeratorlike_current)
- [EnumeratorLike\_hasCurrent](ix.md#enumeratorlike_hascurrent)
- [InteractiveContainerLike\_interact](ix.md#interactivecontainerlike_interact)
- [InteractiveSourceLike\_move](ix.md#interactivesourcelike_move)

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

Ƭ **ToEnumerable**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `toEnumerable`: <T\>() => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

## Variables

### EnumeratorLike\_current

• `Const` **EnumeratorLike\_current**: unique `symbol`

___

### EnumeratorLike\_hasCurrent

• `Const` **EnumeratorLike\_hasCurrent**: unique `symbol`

___

### InteractiveContainerLike\_interact

• `Const` **InteractiveContainerLike\_interact**: unique `symbol`

___

### InteractiveSourceLike\_move

• `Const` **InteractiveSourceLike\_move**: unique `symbol`
