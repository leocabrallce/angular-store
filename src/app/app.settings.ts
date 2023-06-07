import { InjectionToken } from '@angular/core';
import { AppConfig } from 'src/types/app-config.model';

export const webAppConfig: AppConfig = {
  pageSize: 6,
  dataSourceURL: 'http://localhost:3000/products'
};

export const APP_CONFIG = new InjectionToken<AppConfig>('App configuration');