[Reactive-JS](../README.md) / [utils/Disposable](../modules/utils_Disposable.md) / DisposableModule

# Interface: DisposableModule

[utils/Disposable](../modules/utils_Disposable.md).DisposableModule

## Table of contents

### Properties

- [disposed](utils_Disposable.DisposableModule.md#disposed)

### Methods

- [add](utils_Disposable.DisposableModule.md#add)
- [addTo](utils_Disposable.DisposableModule.md#addto)
- [addToContainer](utils_Disposable.DisposableModule.md#addtocontainer)
- [bindTo](utils_Disposable.DisposableModule.md#bindto)
- [create](utils_Disposable.DisposableModule.md#create)
- [raiseIfDisposedWithError](utils_Disposable.DisposableModule.md#raiseifdisposedwitherror)
- [toErrorHandler](utils_Disposable.DisposableModule.md#toerrorhandler)
- [using](utils_Disposable.DisposableModule.md#using)
- [usingAsync](utils_Disposable.DisposableModule.md#usingasync)
- [usingAsyncLazy](utils_Disposable.DisposableModule.md#usingasynclazy)
- [usingLazy](utils_Disposable.DisposableModule.md#usinglazy)

## Properties

### disposed

• `Readonly` **disposed**: [`DisposableLike`](utils.DisposableLike.md)

## Methods

### add

▸ **add**\<`TDisposable`\>(`child`): [`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](utils.DisposableLike.md) |

#### Returns

[`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

___

### addTo

▸ **addTo**\<`TDisposable`\>(`parent`): [`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](utils.DisposableLike.md) |

#### Returns

[`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

___

### addToContainer

▸ **addToContainer**\<`TDisposable`\>(`parent`): [`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableContainerLike`](utils.DisposableContainerLike.md) |

#### Returns

[`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

___

### bindTo

▸ **bindTo**\<`TDisposable`\>(`child`): [`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](utils.DisposableLike.md) |

#### Returns

[`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

___

### create

▸ **create**(): [`DisposableLike`](utils.DisposableLike.md)

#### Returns

[`DisposableLike`](utils.DisposableLike.md)

___

### raiseIfDisposedWithError

▸ **raiseIfDisposedWithError**(`disposable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](utils.DisposableLike.md) |

#### Returns

`void`

___

### toErrorHandler

▸ **toErrorHandler**(`disposable`): [`SideEffect1`](../modules/functions.md#sideeffect1)\<`unknown`\>

Returns a function that disposes `disposable` with an error wrapping the provided `cause`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](utils.DisposableLike.md) |

#### Returns

[`SideEffect1`](../modules/functions.md#sideeffect1)\<`unknown`\>

___

### using

▸ **using**\<`TDisposable`, `TResult`\>(`factory`): [`Function1`](../modules/functions.md#function1)\<[`Function1`](../modules/functions.md#function1)\<`TDisposable`, `TResult`\>, `TResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)\<`TDisposable`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`Function1`](../modules/functions.md#function1)\<`TDisposable`, `TResult`\>, `TResult`\>

▸ **using**\<`TDisposableA`, `TDisposableB`, `TResult`\>(`factoryA`, `factoryB`): [`Function1`](../modules/functions.md#function1)\<[`Function2`](../modules/functions.md#function2)\<`TDisposableA`, `TDisposableB`, `TResult`\>, `TResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryA` | [`Factory`](../modules/functions.md#factory)\<`TDisposableA`\> |
| `factoryB` | [`Factory`](../modules/functions.md#factory)\<`TDisposableB`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`Function2`](../modules/functions.md#function2)\<`TDisposableA`, `TDisposableB`, `TResult`\>, `TResult`\>

▸ **using**\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>(`factoryA`, `factoryB`, `factoryC`): [`Function1`](../modules/functions.md#function1)\<[`Function3`](../modules/functions.md#function3)\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, `TResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryA` | [`Factory`](../modules/functions.md#factory)\<`TDisposableA`\> |
| `factoryB` | [`Factory`](../modules/functions.md#factory)\<`TDisposableB`\> |
| `factoryC` | [`Factory`](../modules/functions.md#factory)\<`TDisposableC`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`Function3`](../modules/functions.md#function3)\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, `TResult`\>

___

### usingAsync

▸ **usingAsync**\<`TDisposable`, `TResult`\>(`factory`): [`Function1`](../modules/functions.md#function1)\<[`Function1`](../modules/functions.md#function1)\<`TDisposable`, `Promise`\<`TResult`\>\>, `Promise`\<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)\<`TDisposable`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`Function1`](../modules/functions.md#function1)\<`TDisposable`, `Promise`\<`TResult`\>\>, `Promise`\<`TResult`\>\>

▸ **usingAsync**\<`TDisposableA`, `TDisposableB`, `TResult`\>(`factoryA`, `factoryB`): [`Function1`](../modules/functions.md#function1)\<[`Function2`](../modules/functions.md#function2)\<`TDisposableA`, `TDisposableB`, `Promise`\<`TResult`\>\>, `Promise`\<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryA` | [`Factory`](../modules/functions.md#factory)\<`TDisposableA`\> |
| `factoryB` | [`Factory`](../modules/functions.md#factory)\<`TDisposableB`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`Function2`](../modules/functions.md#function2)\<`TDisposableA`, `TDisposableB`, `Promise`\<`TResult`\>\>, `Promise`\<`TResult`\>\>

▸ **usingAsync**\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>(`factoryA`, `factoryB`, `factoryC`): [`Function1`](../modules/functions.md#function1)\<[`Function3`](../modules/functions.md#function3)\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `Promise`\<`TResult`\>\>, `Promise`\<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryA` | [`Factory`](../modules/functions.md#factory)\<`TDisposableA`\> |
| `factoryB` | [`Factory`](../modules/functions.md#factory)\<`TDisposableB`\> |
| `factoryC` | [`Factory`](../modules/functions.md#factory)\<`TDisposableC`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`Function3`](../modules/functions.md#function3)\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `Promise`\<`TResult`\>\>, `Promise`\<`TResult`\>\>

___

### usingAsyncLazy

▸ **usingAsyncLazy**\<`TDisposable`, `TResult`\>(`factory`): [`Function1`](../modules/functions.md#function1)\<[`Function1`](../modules/functions.md#function1)\<`TDisposable`, `Promise`\<`TResult`\>\>, [`Factory`](../modules/functions.md#factory)\<`Promise`\<`TResult`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)\<`TDisposable`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`Function1`](../modules/functions.md#function1)\<`TDisposable`, `Promise`\<`TResult`\>\>, [`Factory`](../modules/functions.md#factory)\<`Promise`\<`TResult`\>\>\>

▸ **usingAsyncLazy**\<`TDisposableA`, `TDisposableB`, `TResult`\>(`factoryA`, `factoryB`): [`Function1`](../modules/functions.md#function1)\<[`Function2`](../modules/functions.md#function2)\<`TDisposableA`, `TDisposableB`, `Promise`\<`TResult`\>\>, [`Factory`](../modules/functions.md#factory)\<`Promise`\<`TResult`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryA` | [`Factory`](../modules/functions.md#factory)\<`TDisposableA`\> |
| `factoryB` | [`Factory`](../modules/functions.md#factory)\<`TDisposableB`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`Function2`](../modules/functions.md#function2)\<`TDisposableA`, `TDisposableB`, `Promise`\<`TResult`\>\>, [`Factory`](../modules/functions.md#factory)\<`Promise`\<`TResult`\>\>\>

▸ **usingAsyncLazy**\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>(`factoryA`, `factoryB`, `factoryC`): [`Function1`](../modules/functions.md#function1)\<[`Function3`](../modules/functions.md#function3)\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `Promise`\<`TResult`\>\>, [`Factory`](../modules/functions.md#factory)\<`Promise`\<`TResult`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryA` | [`Factory`](../modules/functions.md#factory)\<`TDisposableA`\> |
| `factoryB` | [`Factory`](../modules/functions.md#factory)\<`TDisposableB`\> |
| `factoryC` | [`Factory`](../modules/functions.md#factory)\<`TDisposableC`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`Function3`](../modules/functions.md#function3)\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `Promise`\<`TResult`\>\>, [`Factory`](../modules/functions.md#factory)\<`Promise`\<`TResult`\>\>\>

___

### usingLazy

▸ **usingLazy**\<`TDisposable`, `TResult`\>(`factory`): [`Function1`](../modules/functions.md#function1)\<[`Function1`](../modules/functions.md#function1)\<`TDisposable`, `TResult`\>, [`Factory`](../modules/functions.md#factory)\<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)\<`TDisposable`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`Function1`](../modules/functions.md#function1)\<`TDisposable`, `TResult`\>, [`Factory`](../modules/functions.md#factory)\<`TResult`\>\>

▸ **usingLazy**\<`TDisposableA`, `TDisposableB`, `TResult`\>(`factoryA`, `factoryB`): [`Function1`](../modules/functions.md#function1)\<[`Function2`](../modules/functions.md#function2)\<`TDisposableA`, `TDisposableB`, `TResult`\>, [`Factory`](../modules/functions.md#factory)\<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryA` | [`Factory`](../modules/functions.md#factory)\<`TDisposableA`\> |
| `factoryB` | [`Factory`](../modules/functions.md#factory)\<`TDisposableB`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`Function2`](../modules/functions.md#function2)\<`TDisposableA`, `TDisposableB`, `TResult`\>, [`Factory`](../modules/functions.md#factory)\<`TResult`\>\>

▸ **usingLazy**\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>(`factoryA`, `factoryB`, `factoryC`): [`Function1`](../modules/functions.md#function1)\<[`Function3`](../modules/functions.md#function3)\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, [`Factory`](../modules/functions.md#factory)\<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryA` | [`Factory`](../modules/functions.md#factory)\<`TDisposableA`\> |
| `factoryB` | [`Factory`](../modules/functions.md#factory)\<`TDisposableB`\> |
| `factoryC` | [`Factory`](../modules/functions.md#factory)\<`TDisposableC`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`Function3`](../modules/functions.md#function3)\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, [`Factory`](../modules/functions.md#factory)\<`TResult`\>\>
