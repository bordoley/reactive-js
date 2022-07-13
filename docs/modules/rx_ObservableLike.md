[Reactive-JS](../README.md) / rx/ObservableLike

# Module: rx/ObservableLike

## Table of contents

### Interfaces

- [ObservableLike](../interfaces/rx_ObservableLike.ObservableLike.md)

### Variables

- [DefaultObservable](rx_ObservableLike.md#defaultobservable)
- [EnumerableObservable](rx_ObservableLike.md#enumerableobservable)
- [ObservableLike\_observableType](rx_ObservableLike.md#observablelike_observabletype)
- [RunnableObservable](rx_ObservableLike.md#runnableobservable)

### Functions

- [getObservableType](rx_ObservableLike.md#getobservabletype)

## Variables

### DefaultObservable

• `Const` **DefaultObservable**: ``0``

___

### EnumerableObservable

• `Const` **EnumerableObservable**: ``2``

___

### ObservableLike\_observableType

• `Const` **ObservableLike\_observableType**: unique `symbol`

___

### RunnableObservable

• `Const` **RunnableObservable**: ``1``

## Functions

### getObservableType

▸ **getObservableType**(`obs`): ``0`` \| ``2`` \| ``1``

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/rx_ObservableLike.ObservableLike.md)<`unknown`\> |

#### Returns

``0`` \| ``2`` \| ``1``
