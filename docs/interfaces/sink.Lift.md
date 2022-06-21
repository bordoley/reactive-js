[Reactive-JS](../README.md) / [sink](../modules/sink.md) / Lift

# Interface: Lift<C\>

[sink](../modules/sink.md).Lift

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](sink.SourceLike.md) |

## Hierarchy

- [`SourceContainer`](sink.SourceContainer.md)<`C`\>

  ↳ **`Lift`**

## Table of contents

### Properties

- [type](sink.Lift.md#type)

### Methods

- [lift](sink.Lift.md#lift)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[SourceContainer](sink.SourceContainer.md).[type](sink.SourceContainer.md#type)

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
| `operator` | [`Function1`](../modules/functions.md#function1)<[`SinkOf`](../modules/sink.md#sinkof)<`C`, `TB`\>, [`SinkOf`](../modules/sink.md#sinkof)<`C`, `TA`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `TA`\>, [`ContainerOf`](../modules/container.md#containerof)<`C`, `TB`\>\>
