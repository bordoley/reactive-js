[Reactive-JS](../README.md) / [source](../modules/source.md) / Lift

# Interface: Lift<C\>

[source](../modules/source.md).Lift

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](source.SourceLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Lift`**

## Table of contents

### Properties

- [type](source.Lift.md#type)

### Methods

- [lift](source.Lift.md#lift)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### lift

▸ **lift**<`TA`, `TB`\>(`operator`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `TA`\>, [`ContainerOf`](../modules/container.md#containerof)<`C`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | [`Function1`](../modules/functions.md#function1)<[`SinkOf`](../modules/source.md#sinkof)<`C`, `TB`\>, [`SinkOf`](../modules/source.md#sinkof)<`C`, `TA`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `TA`\>, [`ContainerOf`](../modules/container.md#containerof)<`C`, `TB`\>\>
