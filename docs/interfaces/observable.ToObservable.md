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

- [type](observable.ToObservable.md#type)

### Methods

- [toObservable](observable.ToObservable.md#toobservable)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>, [`ObservableLike`](observable.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>, [`ObservableLike`](observable.ObservableLike.md)<`T`\>\>
