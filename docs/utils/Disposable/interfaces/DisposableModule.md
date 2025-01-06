[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [utils/Disposable](../README.md) / DisposableModule

# Interface: DisposableModule

## Properties

### disposed

> `readonly` **disposed**: [`DisposableLike`](../../interfaces/DisposableLike.md)

## Methods

### add()

> **add**\<`TDisposable`\>(`child`): [`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

#### Type Parameters

• **TDisposable** *extends* [`DisposableLike`](../../interfaces/DisposableLike.md)

#### Parameters

##### child

[`DisposableLike`](../../interfaces/DisposableLike.md)

#### Returns

[`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

***

### addTo()

> **addTo**\<`TDisposable`\>(`parent`): [`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

#### Type Parameters

• **TDisposable** *extends* [`DisposableLike`](../../interfaces/DisposableLike.md)

#### Parameters

##### parent

[`DisposableLike`](../../interfaces/DisposableLike.md)

#### Returns

[`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

***

### addToContainer()

> **addToContainer**\<`TDisposable`\>(`parent`): [`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

#### Type Parameters

• **TDisposable** *extends* [`DisposableLike`](../../interfaces/DisposableLike.md)

#### Parameters

##### parent

[`DisposableContainerLike`](../../interfaces/DisposableContainerLike.md)

#### Returns

[`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

***

### bindTo()

> **bindTo**\<`TDisposable`\>(`child`): [`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

#### Type Parameters

• **TDisposable** *extends* [`DisposableLike`](../../interfaces/DisposableLike.md)

#### Parameters

##### child

[`DisposableLike`](../../interfaces/DisposableLike.md)

#### Returns

[`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

***

### create()

> **create**(): [`DisposableLike`](../../interfaces/DisposableLike.md)

#### Returns

[`DisposableLike`](../../interfaces/DisposableLike.md)

***

### raiseIfDisposedWithError()

> **raiseIfDisposedWithError**(`disposable`): `void`

#### Parameters

##### disposable

[`DisposableLike`](../../interfaces/DisposableLike.md)

#### Returns

`void`

***

### toErrorHandler()

> **toErrorHandler**(`disposable`): [`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`unknown`\>

Returns a function that disposes `disposable` with an error wrapping the provided `cause`.

#### Parameters

##### disposable

[`DisposableLike`](../../interfaces/DisposableLike.md)

#### Returns

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`unknown`\>
