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

* [moveNext](virtualtimeschedulerlike.md#movenext)

## Properties

###  current

• **current**: *undefined*

The current value of the enumerator. Always undefined.

___

###  hasCurrent

• **hasCurrent**: *boolean*

Whether the enumerator has a current value.

## Methods

###  moveNext

▸ **moveNext**(): *boolean*

Advances the enumerator to the next element.

**Returns:** *boolean*
