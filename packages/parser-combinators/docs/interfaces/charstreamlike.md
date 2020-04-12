
# Interface: CharStreamLike

## Hierarchy

* EnumeratorLike‹void, [CharCode](../README.md#charcode)›

  ↳ **CharStreamLike**

## Index

### Properties

* [current](charstreamlike.md#current)
* [hasCurrent](charstreamlike.md#hascurrent)
* [index](charstreamlike.md#index)
* [isDisposed](charstreamlike.md#isdisposed)
* [src](charstreamlike.md#src)

### Methods

* [add](charstreamlike.md#add)
* [dispose](charstreamlike.md#dispose)
* [move](charstreamlike.md#move)

## Properties

###  current

• **current**: *[CharCode](../README.md#charcode)*

*Inherited from void*

___

###  hasCurrent

• **hasCurrent**: *boolean*

*Inherited from void*

___

###  index

• **index**: *number*

___

###  isDisposed

• **isDisposed**: *boolean*

*Inherited from void*

___

###  src

• **src**: *string*

## Methods

###  add

▸ **add**(`disposable`: DisposableLike | function): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | DisposableLike &#124; function |

**Returns:** *this*

___

###  dispose

▸ **dispose**(`error?`: ErrorLike): *void*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | ErrorLike |

**Returns:** *void*

___

###  move

▸ **move**(`req`: void): *boolean*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`req` | void |

**Returns:** *boolean*
