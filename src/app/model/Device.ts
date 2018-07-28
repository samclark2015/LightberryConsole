interface IDeviceMetadata {
  alexa: any;
  description: string;
  friendlyName: string;
  manufacturerName: string;
  type: string;
  deviceId: string;
  pairingCode: string;
}

export interface IDevice {
  state: any;
  metadata: IDeviceMetadata;
  isLinked: boolean;
  lastHeartbeat: Date;
}

export class Device implements IDevice {
  constructor(json: IDevice) {
    this.isLinked = json.isLinked;
    this.lastHeartbeat = new Date(json.lastHeartbeat);
    this.metadata = json.metadata;
    this.state = json.state;
  }

  isLinked: boolean;
  lastHeartbeat: Date;
  metadata: IDeviceMetadata;
  state: string;
}
