[@reactive-js/schedulers](../README.md) › [VirtualTimeSchedulerLike](virtualtimeschedulerlike.md)

# Interface: VirtualTimeSchedulerLike

A scheduler that uses a virtual clock to simulate time. Useful for testing.

Note: VirtualTimeSchedulerLike implements the same EnumeratorLike protocol
defined in the @reactive-js/rx package.

## Hierarchy

* DisposableLike

* SchedulerLike

* SchedulerContinuationLike

  ↳ **VirtualTimeSchedulerLike**

## Index

### Properties

* [current](virtualtimeschedulerlike.md#current)
* [hasCurrent](virtualtimeschedulerlike.md#hascurrent)

### Methods

* [move](virtualtimeschedulerlike.md#move)

## Properties

###  current

• **current**: *undefined*

The current item. Always undefined.

___

###  hasCurrent

• **hasCurrent**: *boolean*

`true` if the current the enumerator has a current value, otherwise `false`.

## Methods

###  move

▸ **move**(): *boolean*

Advances the enumerator to the next item.

**Returns:** *boolean*

`true` if the enumerator was successfully advanced to the next item, otherwise `false`.
