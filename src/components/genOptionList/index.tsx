import React from 'react';
import { Select } from 'antd';
import { isEmpty, cloneDeep, isArray } from 'lodash';

const { Option } = Select;

/**
 *
 * @param dataSource 数据源
 * @param filters 可选， 需要过滤的值， 当数据源是数据字典时传数据项， 当数据源是自定义数据时传selectValue的数据值
 * @param filterModel 可选，不传默认0 过滤模式 0过滤 1保留
 * @param selectValue 可选，不传默认dictItemCode， 选项选中后的值
 * @param selectShow 可选， 不传默认dictItemName， 需要展示的字段， 支持多字段展示
 * @param unlimited 可选， 不传默认无， 如果你需要额外的自定义选择项，传入不限对应的value
 */
const genOptionList = ({
  dataSource,
  filters = [],
  filterModel = 0,
  selectValue = 'dictItemCode',
  selectShow = 'dictItemName',
  unlimited,
}: {
  selectValue?: string;
  selectShow?: string | string[];
  filters?: string | string[];
  filterModel?: 0 | 1;
  unlimited?: { value: string; show: string };
  dataSource: { dictItemCode?: string; dictItemName?: string; [key: string]: any }[];
}): React.ReactNode[] => {
  const tempSource = cloneDeep<typeof dataSource>(dataSource);
  if (isEmpty(tempSource)) {
    return [];
  }

  const finalSource = [] as { show: string; value: string }[];
  tempSource.forEach((item) => {
    const isFilter = !(
      ((typeof filters === 'string' ? [filters] : filters).indexOf(item[selectValue]) === -1 ? 1 : 0) ^ filterModel
    );
    if (!isFilter) {
      finalSource.push({
        show: isArray(selectShow)
          ? selectShow
              .map((show) => item[show])
              .filter((showItem) => showItem)
              .join('/')
          : item[selectShow],
        value: item[selectValue],
      });
    }
  });

  // 是否有自定义选项
  if (unlimited) {
    finalSource.unshift({ value: unlimited.value, show: unlimited.show });
  }
  return finalSource.map(({ value, show }) => (
    <Option key={value} value={value}>
      {show}
    </Option>
  ));
};

export default genOptionList;
