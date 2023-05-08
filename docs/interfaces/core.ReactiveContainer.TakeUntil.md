[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / TakeUntil

# Interface: TakeUntil<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).TakeUntil

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Methods

- [takeUntil](core.ReactiveContainer.TakeUntil.md#takeuntil)

## Operator Methods

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`Of`](../modules/core.Container.md#of)<`C`, `unknown`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>
