// Generated by https://quicktype.io

export interface IEasyEDABoard {
  head: Head;
  canvas: string;
  shape: string[];
  systemColor: string;
  layers: string[];
  objects: string[];
  BBox: BBox;
  preference: Preference;
  DRCRULE: Drcrule;
  routerRule: RouterRule;
  netColors: {};
}

export interface BBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Drcrule {
  Default: Default;
  isRealtime: boolean;
  checkObjectToCopperarea: boolean;
  showDRCRangeLine: boolean;
}

export interface Default {
  trackWidth: number;
  clearance: number;
  viaHoleDiameter: number;
  viaHoleD: number;
}

export interface Head {
  docType: string;
  editorVersion: string;
  c_para: {};
  hasIdFlag: boolean;
  x: string;
  y: string;
  importFlag: number;
  transformList: string;
}

export interface Preference {
  hideFootprints: string;
  hideNets: string;
}

export interface RouterRule {
  unit: string;
  trackWidth: number;
  trackClearance: number;
  viaHoleD: number;
  viaDiameter: number;
  routerLayers: number[];
  smdClearance: number;
  specialNets: any[];
  nets: string[];
  padsCount: number;
  skipNets: any[];
  realtime: boolean;
}
