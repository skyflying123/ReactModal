// 本文件把less变量转换成了object
// 在umirc.ts中传入object,达到覆盖antd自带变量的效果
import fs from 'fs';
import path from 'path';
import lessToJs from 'less-vars-to-js';

const customLess = (): object => {
  const themePath = path.join(__dirname, './antdGlobalOverride.less');
  return lessToJs(fs.readFileSync(themePath, 'utf8'));
};

export default customLess();
