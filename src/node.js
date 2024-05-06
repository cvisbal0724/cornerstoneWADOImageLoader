
import external from './externalModules';
export {external}

import filemanager from './imageLoader/wadouri/fileManager';
export {filemanager};

import decodeImageFrame from './shared/decodeImageFrame';
export {decodeImageFrame};

import getPixelData from './imageLoader/wadouri/getPixelData';
export {getPixelData};

import metaDataFromDataSet from './imageLoader/wadouri/metaData/metaDataFromDataSet';
export {metaDataFromDataSet};

import {loadImage} from './imageLoader/wadouri/loadImage';
export {loadImage};

import dicomParser from 'dicom-parser';
export {dicomParser};

import isColorImage from './imageLoader/isColorImage.js';
export {isColorImage};

export function getImageFrame(parsedDicom) {
  const imagePixelModule = metaDataFromDataSet('imagePixelModule', parsedDicom)

  return {
    samplesPerPixel: imagePixelModule.samplesPerPixel,
    photometricInterpretation: imagePixelModule.photometricInterpretation,
    planarConfiguration: imagePixelModule.planarConfiguration,
    rows: imagePixelModule.rows,
    columns: imagePixelModule.columns,
    bitsAllocated: imagePixelModule.bitsAllocated,
    bitsStored: imagePixelModule.bitsStored,
    pixelRepresentation: imagePixelModule.pixelRepresentation, // 0 = unsigned,
    smallestPixelValue: imagePixelModule.smallestPixelValue,
    largestPixelValue: imagePixelModule.largestPixelValue,
    redPaletteColorLookupTableDescriptor:
      imagePixelModule.redPaletteColorLookupTableDescriptor,
    greenPaletteColorLookupTableDescriptor:
      imagePixelModule.greenPaletteColorLookupTableDescriptor,
    bluePaletteColorLookupTableDescriptor:
      imagePixelModule.bluePaletteColorLookupTableDescriptor,
    redPaletteColorLookupTableData:
      imagePixelModule.redPaletteColorLookupTableData,
    greenPaletteColorLookupTableData:
      imagePixelModule.greenPaletteColorLookupTableData,
    bluePaletteColorLookupTableData:
      imagePixelModule.bluePaletteColorLookupTableData,
    pixelData: undefined, // populated later after decoding
  };
}