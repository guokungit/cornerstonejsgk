import initProviders from './initProviders';
import initCornerstoneDICOMImageLoader from './initCornerstoneDICOMImageLoader';
import initVolumeLoader from './initVolumeLoader';
import { init as csRenderInit } from '@jushacornerstonejs/core';
import { init as csToolsInit } from '@jushacornerstonejs/tools';

export default async function initDemo() {
  initProviders();
  initCornerstoneDICOMImageLoader();
  initVolumeLoader();
  await csRenderInit();
  await csToolsInit();
}
