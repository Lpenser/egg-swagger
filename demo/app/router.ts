
import { Application } from 'egg';
import { EggShell } from 'egg-shell-decorators';

export default (app: Application) => {
  EggShell(app, {
    prefix: '/',
    quickStart: true,
    swaggerOpt: {
      open: true,
      title: '动态表单',
      version: '1.0.0',
      host: '127.0.0.1',
      port: 7001,
      schemes: [ 'http' ],
      paths: {
        outPath: '../demo-docs/public/json/main.json',
        definitionPath: './definitions',
        swaggerPath: './swagger',
      }
    },
  });
};
