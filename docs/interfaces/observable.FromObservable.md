[Reactive-JS](../README.md) / [observable](../modules/observable.md) / FromObservable

# Interface: FromObservable<C\>

[observable](../modules/observable.md).FromObservable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`FromObservable`**

## Table of contents

### Properties

- [type](observable.FromObservable.md#type)

### Methods

- [fromObservable](observable.FromObservable.md#fromobservable)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### fromObservable

▸ **fromObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](observable.ObservableLike.md)<`T`\>, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](observable.ObservableLike.md)<`T`\>, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\>
