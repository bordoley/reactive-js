[Reactive-JS](../README.md) / [observable](../modules/observable.md) / ToObservable

# Interface: ToObservable<C\>

[observable](../modules/observable.md).ToObservable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`ToObservable`**

## Table of contents

### Properties

- [TContainerOf](observable.ToObservable.md#tcontainerof)

### Methods

- [toObservable](observable.ToObservable.md#toobservable)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>, [`ObservableLike`](observable.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>, [`ObservableLike`](observable.ObservableLike.md)<`T`\>\>
