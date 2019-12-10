[@reactive-js/observable](../README.md) › [IteratorResource](iteratorresource.md)

# Interface: IteratorResource <**T, TReturn, TNext**>

## Type parameters

▪ **T**

▪ **TReturn**

▪ **TNext**

## Hierarchy

* Iterator‹T›

* DisposableLike

  ↳ **IteratorResource**

## Index

### Properties

* [isDisposed](iteratorresource.md#isdisposed)

### Methods

* [add](iteratorresource.md#add)
* [dispose](iteratorresource.md#dispose)
* [next](iteratorresource.md#next)
* [remove](iteratorresource.md#remove)
* [return](iteratorresource.md#optional-return)
* [throw](iteratorresource.md#optional-throw)

## Properties

###  isDisposed

• **isDisposed**: *boolean*

*Inherited from void*

## Methods

###  add

▸ **add**(`disposable`: DisposableOrTeardown, ...`disposables`: DisposableOrTeardown[]): *void*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | DisposableOrTeardown |
`...disposables` | DisposableOrTeardown[] |

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Inherited from void*

**Returns:** *void*

___

###  next

▸ **next**(...`args`: [] | [TNext]): *IteratorResult‹T, TReturn›*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [] &#124; [TNext] |

**Returns:** *IteratorResult‹T, TReturn›*

___

###  remove

▸ **remove**(`disposable`: DisposableOrTeardown, ...`disposables`: DisposableOrTeardown[]): *void*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | DisposableOrTeardown |
`...disposables` | DisposableOrTeardown[] |

**Returns:** *void*

___

### `Optional` return

▸ **return**(`value?`: TReturn): *IteratorResult‹T, TReturn›*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | TReturn |

**Returns:** *IteratorResult‹T, TReturn›*

___

### `Optional` throw

▸ **throw**(`e?`: any): *IteratorResult‹T, TReturn›*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`e?` | any |

**Returns:** *IteratorResult‹T, TReturn›*
