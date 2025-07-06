import * as rt from 'runtypes';
import { computerAssetRt } from './computer';
import { bananaAssetRt } from './banana';

export const assetRt = rt.Union(computerAssetRt, bananaAssetRt);
