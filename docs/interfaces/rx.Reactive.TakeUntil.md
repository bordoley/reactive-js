[Reactive-JS](../README.md) / [rx](../modules/rx.md) / [Reactive](../modules/rx.Reactive.md) / TakeUntil

# Interface: TakeUntil<C\>

[rx](../modules/rx.md).[Reactive](../modules/rx.Reactive.md).TakeUntil

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](rx.ObservableContainer.md) |

## Table of contents

### Operator Methods

- [takeUntil](rx.Reactive.TakeUntil.md#takeuntil)

## Operator Methods

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `unknown`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
