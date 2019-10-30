declare class Camera {
  interior: number;
  target: Player | false;
  viewMode: 0 | 1 | 2 | 3 | 4 | 5;
  goggleEffect: "normal" | "nightvision" | "thermalvision";
  farClipDistance: number;
  nearClipDistance: number;
  position: Vector3;
  rotation: Vector3;
  readonly matrix: Matrix;

  // static fade(fadeIn: boolean, timeToFade?: number, red?: number, green?: number, blue?: number): boolean;
  // static resetFarClipDistance(): boolean;
  // static resetNearClipDistance(): boolean;

  // static getPosition(): Vector3;
  // static getRotation(): Vector3;
  // static getTarget(): Player | false;
  // static getInterior(): number;
  // static getViewMode(): 0 | 1 | 2 | 3 | 4 | 5;
  // static getMatrix(): Matrix;
  // static getFieldOfView(cameraMode: "player" | "vehicle" | "vehicle_max"): number;
  // static getGoggleEffect(): "normal" | "nightvision" | "thermalvision";
  // static getClip(): [boolean, boolean];
  // static getFarClipDistance(): number | false;
  // static getNearClipDistance(): number;

  // static setPosition(position: Vector3): boolean;
  // static setRotation(rotation: Vector3): boolean;
  // static setCameraMatrix(matrix: Matrix): boolean;
  // static setFieldOfView(cameraMode: "player" | "vehicle" | "vehicle_max", fieldOfView: number): boolean;
  // static setInterior(interior: number): boolean;
  // static setTarget(target: Player): boolean;
  // static setViewMode(viewMode: 0 | 1 | 2 | 3 | 4 | 5): boolean;
  // static setGoggleEffect(goggleEffect: "normal" | "nightvision" | "thermalvision", noiseEnabled?: boolean): boolean;
  // static setClip(objects?: boolean, vehicles?: boolean): true;
  // static setFarClipDistance(distance: number): boolean;
  // static setNearClipDistance(distance: number): boolean;
}
