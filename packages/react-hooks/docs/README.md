[@reactive-js/react-hooks](README.md)

# @reactive-js/react-hooks

## Index

### Functions

* [useAsyncIteratorResource](README.md#const-useasynciteratorresource)
* [useDisposable](README.md#const-usedisposable)
* [useObservable](README.md#const-useobservable)
* [useObservableResource](README.md#const-useobservableresource)

## Functions

### `Const` useAsyncIteratorResource

▸ **useAsyncIteratorResource**<**TReq**, **T**>(`factory`: function, `deps`: keyof any[] | undefined): *[T | undefined, function]*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **factory**: *function*

▸ (): *AsyncIteratorResourceLike‹TReq, T›*

▪ **deps**: *keyof any[] | undefined*

**Returns:** *[T | undefined, function]*

___

### `Const` useDisposable

▸ **useDisposable**<**T**>(`factory`: function, `deps`: keyof any[] | undefined): *T*

**Type parameters:**

▪ **T**: *DisposableLike*

**Parameters:**

▪ **factory**: *function*

▸ (): *T*

▪ **deps**: *keyof any[] | undefined*

**Returns:** *T*

___

### `Const` useObservable

▸ **useObservable**<**T**>(`factory`: function, `deps`: keyof any[] | undefined): *T | undefined*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **factory**: *function*

▸ (): *ObservableLike‹T›*

▪ **deps**: *keyof any[] | undefined*

**Returns:** *T | undefined*

___

### `Const` useObservableResource

▸ **useObservableResource**<**T**>(`factory`: function, `deps`: keyof any[] | undefined): *T | undefined*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **factory**: *function*

▸ (): *ObservableResourceLike‹T›*

▪ **deps**: *keyof any[] | undefined*

**Returns:** *T | undefined*
