[@reactive-js/scheduler](../README.md) › [AbstractSchedulerContinuation](abstractschedulercontinuation.md)

# Class: AbstractSchedulerContinuation

## Hierarchy

* **AbstractSchedulerContinuation**

## Implements

* [SchedulerContinuationLike](../interfaces/schedulercontinuationlike.md)

## Index

### Properties

* [add](abstractschedulercontinuation.md#add)
* [disposable](abstractschedulercontinuation.md#disposable)
* [dispose](abstractschedulercontinuation.md#dispose)

### Accessors

* [isDisposed](abstractschedulercontinuation.md#isdisposed)

### Methods

* [produce](abstractschedulercontinuation.md#abstract-produce)
* [run](abstractschedulercontinuation.md#run)

## Properties

###  add

• **add**: *add* =  add

___

###  disposable

• **disposable**: *DisposableLike‹›* =  createDisposable()

___

###  dispose

• **dispose**: *dispose* =  dispose

## Accessors

###  isDisposed

• **get isDisposed**(): *boolean*

**Returns:** *boolean*

## Methods

### `Abstract` produce

▸ **produce**(`shouldYield?`: undefined | function): *number*

**Parameters:**

Name | Type |
------ | ------ |
`shouldYield?` | undefined &#124; function |

**Returns:** *number*

___

###  run

▸ **run**(`shouldYield?`: undefined | function): *number*

**Parameters:**

Name | Type |
------ | ------ |
`shouldYield?` | undefined &#124; function |

**Returns:** *number*
