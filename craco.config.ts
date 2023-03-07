import { CracoConfig } from '@craco/types';
import path from 'path';

const pathResolve = (pathUrl: string) => path.join(__dirname, pathUrl);

export default {
  reactScriptsVersion: 'react-scripts' /* (default value) */,
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@containers': pathResolve('src/containers'),
      '@components': pathResolve('src/components'),
      '@router': pathResolve('src/router'),
      '@utils': pathResolve('src/utils'),
    },
    configure(webpackConfig) {
      // 配置扩展扩展名
      if (webpackConfig.resolve) {
        webpackConfig.resolve.extensions = [...(webpackConfig.resolve.extensions || []), ...['.scss', '.css']];
      }

      return webpackConfig;
    },
  },
  devServer: {
    // 本地服务的端口号
    port: 3001,
    // 本地服务的响应头设置
    headers: {
      // 允许跨域
      'Access-Control-Allow-Origin': '*',
    },
  },
} as CracoConfig;
