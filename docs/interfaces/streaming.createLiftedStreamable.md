[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / createLiftedStreamable

# Interface: createLiftedStreamable

[streaming](../modules/streaming.md).createLiftedStreamable

## Callable

### createLiftedStreamable

▸ **createLiftedStreamable**<`T`, `A`\>(`op1`): [`StreamableLike`](streaming.StreamableLike.md)<`T`, `A`, [`StreamLike`](streaming.StreamLike.md)<`T`, `A`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |

#### Returns

[`StreamableLike`](streaming.StreamableLike.md)<`T`, `A`, [`StreamLike`](streaming.StreamLike.md)<`T`, `A`\>\>

### createLiftedStreamable

▸ **createLiftedStreamable**<`T`, `A`, `B`\>(`op1`, `op2`): [`StreamableLike`](streaming.StreamableLike.md)<`T`, `B`, [`StreamLike`](streaming.StreamLike.md)<`T`, `B`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |

#### Returns

[`StreamableLike`](streaming.StreamableLike.md)<`T`, `B`, [`StreamLike`](streaming.StreamLike.md)<`T`, `B`\>\>

### createLiftedStreamable

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`\>(`op1`, `op2`, `op3`): [`StreamableLike`](streaming.StreamableLike.md)<`T`, `C`, [`StreamLike`](streaming.StreamLike.md)<`T`, `C`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |

#### Returns

[`StreamableLike`](streaming.StreamableLike.md)<`T`, `C`, [`StreamLike`](streaming.StreamLike.md)<`T`, `C`\>\>

### createLiftedStreamable

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`\>(`op1`, `op2`, `op3`, `op4`): [`StreamableLike`](streaming.StreamableLike.md)<`T`, `D`, [`StreamLike`](streaming.StreamLike.md)<`T`, `D`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |

#### Returns

[`StreamableLike`](streaming.StreamableLike.md)<`T`, `D`, [`StreamLike`](streaming.StreamLike.md)<`T`, `D`\>\>

### createLiftedStreamable

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`\>(`op1`, `op2`, `op3`, `op4`, `op5`): [`StreamableLike`](streaming.StreamableLike.md)<`T`, `E`, [`StreamLike`](streaming.StreamLike.md)<`T`, `E`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |

#### Returns

[`StreamableLike`](streaming.StreamableLike.md)<`T`, `E`, [`StreamLike`](streaming.StreamLike.md)<`T`, `E`\>\>

### createLiftedStreamable

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`StreamableLike`](streaming.StreamableLike.md)<`T`, `F`, [`StreamLike`](streaming.StreamLike.md)<`T`, `F`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |

#### Returns

[`StreamableLike`](streaming.StreamableLike.md)<`T`, `F`, [`StreamLike`](streaming.StreamLike.md)<`T`, `F`\>\>

### createLiftedStreamable

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`StreamableLike`](streaming.StreamableLike.md)<`T`, `G`, [`StreamLike`](streaming.StreamLike.md)<`T`, `G`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |

#### Returns

[`StreamableLike`](streaming.StreamableLike.md)<`T`, `G`, [`StreamLike`](streaming.StreamLike.md)<`T`, `G`\>\>

### createLiftedStreamable

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`StreamableLike`](streaming.StreamableLike.md)<`T`, `H`, [`StreamLike`](streaming.StreamLike.md)<`T`, `H`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |
| `op8` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `G`, `H`\> |

#### Returns

[`StreamableLike`](streaming.StreamableLike.md)<`T`, `H`, [`StreamLike`](streaming.StreamLike.md)<`T`, `H`\>\>

### createLiftedStreamable

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`StreamableLike`](streaming.StreamableLike.md)<`T`, `I`, [`StreamLike`](streaming.StreamLike.md)<`T`, `I`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |
| `op8` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `G`, `H`\> |
| `op9` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `H`, `I`\> |

#### Returns

[`StreamableLike`](streaming.StreamableLike.md)<`T`, `I`, [`StreamLike`](streaming.StreamLike.md)<`T`, `I`\>\>

### createLiftedStreamable

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): [`StreamableLike`](streaming.StreamableLike.md)<`T`, `J`, [`StreamLike`](streaming.StreamLike.md)<`T`, `J`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |
| `op8` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `G`, `H`\> |
| `op9` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `H`, `I`\> |
| `op10` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `I`, `J`\> |

#### Returns

[`StreamableLike`](streaming.StreamableLike.md)<`T`, `J`, [`StreamLike`](streaming.StreamLike.md)<`T`, `J`\>\>

### createLiftedStreamable

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): [`StreamableLike`](streaming.StreamableLike.md)<`T`, `K`, [`StreamLike`](streaming.StreamLike.md)<`T`, `K`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |
| `op8` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `G`, `H`\> |
| `op9` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `H`, `I`\> |
| `op10` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `I`, `J`\> |
| `op11` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `J`, `K`\> |

#### Returns

[`StreamableLike`](streaming.StreamableLike.md)<`T`, `K`, [`StreamLike`](streaming.StreamLike.md)<`T`, `K`\>\>

### createLiftedStreamable

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): [`StreamableLike`](streaming.StreamableLike.md)<`T`, `L`, [`StreamLike`](streaming.StreamLike.md)<`T`, `L`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |
| `op8` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `G`, `H`\> |
| `op9` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `H`, `I`\> |
| `op10` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `I`, `J`\> |
| `op11` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `J`, `K`\> |
| `op12` | [`ContainerOperator`](../modules/containers.md#containeroperator)<[`ObservableLike`](rx.ObservableLike.md)<`unknown`\>, `K`, `L`\> |

#### Returns

[`StreamableLike`](streaming.StreamableLike.md)<`T`, `L`, [`StreamLike`](streaming.StreamLike.md)<`T`, `L`\>\>
