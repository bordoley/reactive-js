[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / DispatchTo

# Interface: DispatchTo<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).DispatchTo

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Methods

- [dispatchTo](core.ReactiveContainer.DispatchTo.md#dispatchto)

## Operator Methods

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](core.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>
