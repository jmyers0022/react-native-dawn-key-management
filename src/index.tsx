import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-dawn-key-management' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const DawnKeyManagementModule = isTurboModuleEnabled
  ? require('./NativeDawnKeyManagement').default
  : NativeModules.DawnKeyManagement;

const DawnKeyManagement = DawnKeyManagementModule
  ? DawnKeyManagementModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return DawnKeyManagement.multiply(a, b);
}
