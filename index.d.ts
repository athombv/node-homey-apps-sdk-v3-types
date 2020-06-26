import SimpleClass from './lib/SimpleClass';
import Api from './lib/Api';
import ApiApp from './lib/ApiApp';
import App from './lib/App';
import BleAdvertisement from './lib/BleAdvertisement';
import BleCharacteristic from './lib/BleCharacteristic';
import BleDescriptor from './lib/BleDescriptor';
import BlePeripheral from './lib/BlePeripheral';
import BleService from './lib/BleService';
import CloudOAuth2Callback from './lib/CloudOAuth2Callback';
import CloudWebhook from './lib/CloudWebhook';
import Device from './lib/Device';
import DiscoveryResult from './lib/DiscoveryResult';
import DiscoveryResultMAC from './lib/DiscoveryResultMAC';
import DiscoveryResultMDNSSD from './lib/DiscoveryResultMDNSSD';
import DiscoveryResultSSDP from './lib/DiscoveryResultSSDP';
import DiscoveryStrategy from './lib/DiscoveryStrategy';
import Driver from './lib/Driver';
import FlowArgument from './lib/FlowArgument';
import FlowCard from './lib/FlowCard';
import FlowCardAction from './lib/FlowCardAction';
import FlowCardCondition from './lib/FlowCardCondition';
import FlowCardTrigger from './lib/FlowCardTrigger';
import FlowCardTriggerDevice from './lib/FlowCardTriggerDevice';
import FlowToken from './lib/FlowToken';
import Image from './lib/Image';
import InsightsLog from './lib/InsightsLog';
import LedringAnimation from './lib/LedringAnimation';
import LedringAnimationSystem from './lib/LedringAnimationSystem';
import LedringAnimationSystemProgress from './lib/LedringAnimationSystemProgress';
import Manager from './lib/Manager';
import Signal from './lib/Signal';
import Signal433 from './lib/Signal433';
import Signal868 from './lib/Signal868';
import SignalInfrared from './lib/SignalInfrared';
import ZigBeeNode from './lib/ZigBeeNode';
import ZwaveCommandClass from './lib/ZwaveCommandClass';
import ZwaveNode from './lib/ZwaveNode';

declare const manifest: any;
declare const env: any;

declare module "homey" {
  export {
    // Properties
    env,
    manifest,
    // Classes
    SimpleClass,
    Api,
    ApiApp,
    App,
    BleAdvertisement,
    BleCharacteristic,
    BleDescriptor,
    BlePeripheral,
    BleService,
    CloudOAuth2Callback,
    CloudWebhook,
    Device,
    DiscoveryResult,
    DiscoveryResultMAC,
    DiscoveryResultMDNSSD,
    DiscoveryResultSSDP,
    DiscoveryStrategy,
    Driver,
    FlowArgument,
    FlowCard,
    FlowCardAction,
    FlowCardCondition,
    FlowCardTrigger,
    FlowCardTriggerDevice,
    FlowToken,
    Image,
    InsightsLog,
    LedringAnimation,
    LedringAnimationSystem,
    LedringAnimationSystemProgress,
    Manager,
    Signal,
    Signal433,
    Signal868,
    SignalInfrared,
    ZigBeeNode,
    ZwaveCommandClass,
    ZwaveNode,
  };
}