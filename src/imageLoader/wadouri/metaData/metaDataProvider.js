import external from '../../../externalModules.js';
import metaDataFromDataSet from './metaDataFromDataSet.js';
import parseImageId from '../parseImageId.js';
import dataSetCacheManager from '../dataSetCacheManager.js';

export default function metaDataProvider(type, imageId) {
  const { dicomParser } = external;
  const parsedImageId = parseImageId(imageId);

  const dataSet = dataSetCacheManager.get(parsedImageId.url);

  if (!dataSet) {
    return;
  }

  return metaDataFromDataSet(type, dataSet)
}
