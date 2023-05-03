[Reactive-JS](../README.md) / [rx](../modules/rx.md) / DispatchTo

# Interface: DispatchTo<C\>

[rx](../modules/rx.md).DispatchTo

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container-1.md) |

## Table of contents

### Operator Methods

- [dispatchTo](rx.DispatchTo.md#dispatchto)

## Operator Methods

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](util.DispatcherLike.md)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
