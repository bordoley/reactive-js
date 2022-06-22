[Reactive-JS](../README.md) / [source](../modules/source.md) / CreateDelegatingSink

# Interface: CreateDelegatingSink<C\>

[source](../modules/source.md).CreateDelegatingSink

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](source.SourceLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`CreateDelegatingSink`**

## Table of contents

### Properties

- [type](source.CreateDelegatingSink.md#type)

### Methods

- [createDelegatingSink](source.CreateDelegatingSink.md#createdelegatingsink)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### createDelegatingSink

▸ **createDelegatingSink**<`T`\>(`delegate`): [`LiftedStateOf`](../modules/liftable.md#liftedstateof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegate` | [`LiftedStateOf`](../modules/liftable.md#liftedstateof)<`C`, `T`\> |

#### Returns

[`LiftedStateOf`](../modules/liftable.md#liftedstateof)<`C`, `T`\>
