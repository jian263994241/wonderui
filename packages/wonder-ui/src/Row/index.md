---
sidemenu: false
---
### Row

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| alignContent |  flex | `ResponsiveValue< 'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'stretch' >` | start
| alignItems |  flex | `ResponsiveValue< 'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch' >` | start
| classes |  节点className | `Partial<ClassNameMap<'root' \| 'container'>>` |
| columns | 宫格设置 | `number` | 12
| ContainerProps | Container 的 props | `ContainerProps` |
| gutter | 间距, `theme.spacing`倍数 | `number \| [number, number]` | 2
| justifyContent |  flex | `ResponsiveValue< 'start' \| 'end' \| 'center' \| 'around' \| 'between' \| 'evenly' >` | start
| nowrap |  换行 | `boolean` | false
| rowCols | cols的默认配置 | `ResponsiveValue<'auto' \| boolean \| number>` |