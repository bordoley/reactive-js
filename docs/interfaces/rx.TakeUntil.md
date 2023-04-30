[Reactive-JS](../README.md) / [rx](../modules/rx.md) / TakeUntil

# Interface: TakeUntil<C\>

[rx](../modules/rx.md).TakeUntil

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container.md) |

## Table of contents

### Operator Methods

- [takeUntil](rx.TakeUntil.md#takeuntil)

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
