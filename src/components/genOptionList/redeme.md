生成antd Select组件的下拉列表函数

/**
 *
 * @param dataSource 数据源
 * @param filters 可选， 需要过滤的值， 当数据源是数据字典时传数据项， 当数据源是自定义数据时传selectValue的数据值
 * @param filterModel 可选，不传默认0 过滤模式 0过滤 1保留
 * @param selectValue 可选，不传默认dictItemCode， 选项选中后的值
 * @param selectShow 可选， 不传默认dictItemName， 需要展示的字段， 支持多字段展示
 * @param unlimited 可选， 不传默认无， 如果你需要额外的自定义选择项，传入不限对应的value
 */
 
eg: 
```javascript
//传入数据状态B001的数据字典，过滤掉B001_1数据项，生成值为umlimited的不限选项
const dataState = [] // B001的数据源
const dataStateList = genOptionList({ dataSource: dataState, filters:['B00_1'], unlimited: {value: 'unlimited', show: '不限'} });

//传入自定义数据源，指定显示secName字段的值，点击后获取secCode的值, 并只保留secCode = 1的项
const secDataSource = [
  {
    secCode: '1',
    secName: '期货1',
  },
  {
    secCode: '2',
    secName: '期货2',
  },
];
const secList = genOptionList(
  {
    dataSource: secDataSource,
    selectShow: 'secName',
    selectValue: 'secCode',
    filters: ['1'],
    filterModel: 1,
  }
);
```
