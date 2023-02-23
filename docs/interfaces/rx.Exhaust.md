[Reactive-JS](../README.md) / [rx](../modules/rx.md) / Exhaust

# Interface: Exhaust<C, O\>

[rx](../modules/rx.md).Exhaust

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Exhaust`**

## Table of contents

### Operator Properties

- [exhaust](rx.Exhaust.md#exhaust)

## Operator Properties

### exhaust

• **exhaust**: <T\>(`options?`: `O`) => [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

##### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `T`\>
