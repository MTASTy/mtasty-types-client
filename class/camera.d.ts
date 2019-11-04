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

  /**
   * This function will fade a player's camera to a color or back to normal over a specified time period.
   * This will also affect the sound volume for the player (50% faded = 50% volume, full fade = no sound).
   * For clientside scripts you can perform 2 fade ins or fade outs in a row, but for serverside scripts you must use one then the other.
   * - Note: The speed of the effect depends directly on the current gamespeed.
   * @param fadeIn Should the camera be faded in or out? Pass true to fade the camera in, false to fade it out to a color.
   * @param [timeToFade=1] The number of seconds it should take to fade.
   * @param [red=0] The amount of red in the color that the camera fades out to (0 - 255). Not required for fading in.
   * @param [green=0] The amount of green in the color that the camera fades out to (0 - 255). Not required for fading in.
   * @param [blue=0] The amount of blue in the color that the camera fades out to (0 - 255). Not required for fading in.
   * @returns Returns true if the camera was faded successfully, false if invalid arguments were passed to the function.
   * @see https://wiki.mtasa.com/wiki/FadeCamera
   **/
  static fade(fadeIn: boolean, timeToFade?: number, red?: number, green?: number, blue?: number): boolean;

  /**
   * This function resets the far clip distance to its default state.
   * - Note: The function will not reset far clip distance client-side, unless it is relying on a value set by the server.
   * - Note: The function will reset the far clip distance to false server-side, as there is no default value to begin with.
   * @returns Returns true if operation was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/ResetFarClipDistance
   **/
  static resetFarClipDistance(): boolean;

  static resetNearClipDistance(): boolean;

  static getPosition(): Vector3;

  static getRotation(): Vector3;

  /**
   * This function returns an element that corresponds to the current target of the specified player's camera (i.e. what it is following).
   * @returns Returns an element of the target if the function was successful, or false if bad arguments were specified.
   * @see https://wiki.mtasa.com/wiki/GetCameraTarget
   **/
  static getTarget(): Player | false;

  /**
   * Returns the interior of the local camera (independent of the interior of the local player).
   * @returns Returns a number indicating the camera's interior.
   * @see https://wiki.mtasa.com/wiki/GetCameraInterior
   **/
  static getInterior(): number;

  /**
   * This function allows you to get the camera's view mode.
   * This indicates at what distance the camera will follow the player.
   * - Note: It currently only returns vehicle view modes.
   * @returns Returns a number indicating the current camera view mode.
   * @see https://wiki.mtasa.com/wiki/GetCameraViewMode
   **/
  static getViewMode(): 0 | 1 | 2 | 3 | 4 | 5;

  /**
   * This function gets the position of the camera and the position of the point it is facing.
   * @returns This function returns Matrix.
   * @see https://wiki.mtasa.com/wiki/GetCameraMatrix
   * @tupleReturn
   **/
  static getMatrix(): Matrix;

  /**
   * This function returns the field of view of the dynamic camera as set by setCameraFieldOfView.
   * @param cameraMode: the camera mode to get the field of view of: "player", "vehicle", "vehicle_max".
   * @returns Returns one number - the field of view angle.
   * @see https://wiki.mtasa.com/wiki/GetCameraFieldOfView
   * @tupleReturn
   **/
  static getFieldOfView(cameraMode: "player" | "vehicle" | "vehicle_max"): number;

  /**
   * This function returns what goggle effect is currently affecting the camera.
   * @returns String indicating the current camera goggle effect.
   * @see https://wiki.mtasa.com/wiki/GetCameraGoggleEffect
   **/
  static getGoggleEffect(): "normal" | "nightvision" | "thermalvision";

  /**
   * This function checks if the camera will "collide" with any objects or vehicles in its way.
   * @returns Objects: if you want the camera to clip on objects. Vehicles: if you want the camera to clip on vehicles.
   * @see https://wiki.mtasa.com/wiki/GetCameraClip
   * @tupleReturn
   **/
  static getClip(): [boolean, boolean];

  /**
   * This function will tell you what is the current render distance.
   * - Note: The function will return false server-side if far clip distance has not been set before the function is called.
   * @returns Returns a number with the current render distance, false if the operation could not be completed.
   * @see https://wiki.mtasa.com/wiki/GetFarClipDistance
   **/
  static getFarClipDistance(): number | false;

  /**
   * This function gets the distance from the camera at which the world starts rendering.
   * For more information about this please refer to setNearClipDistance.
   * @returns This function returns a float containing the actual near clip distance.
   * @see https://wiki.mtasa.com/wiki/GetNearClipDistance
   **/
  static getNearClipDistance(): number;

  static setPosition(position: Vector3): boolean;

  static setRotation(rotation: Vector3): boolean;

  /**
   * This function sets the camera's position and direction.
   * The first three arguments are the point at which the camera lies, the last three are the point the camera faces (or the point it "looks at").
   * - Note: Calling this function takes the camera's focus away from the player and sets the camera in a fixed position and rotation. The camera's focus can be brought back to the player using the setCameraTarget function.
   * @param matrix Matrix.
   * @returns Returns true if the arguments are valid, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetCameraMatrix
   **/
  static setCameraMatrix(matrix: Matrix): boolean;

  /**
   * This function sets the field of view of the dynamic camera - this is the field of view of the non-fixed camera - yes, the camera that the user can control whilst on foot or in a vehicle. The higher the field of view angle, the more you will be able to see to your sides.
   * @param cameraMode the camera mode to get the field of view of: "player", "vehicle", "vehicle_max".
   * @param fieldOfView The field of view angle, 0 to 179.
   * @returns Returns true if the arguments are valid, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetCameraClip
   **/
  static setFieldOfView(cameraMode: "player" | "vehicle" | "vehicle_max", fieldOfView: number): boolean;

  /**
   * Sets the interior of the local camera.
   * Only the interior of the camera is changed, the local player stays in the interior he was in.
   * @param interior the interior to place the camera in.
   * @returns Returns true if the camera's interior was changed successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetCameraInterior
   **/
  static setInterior(interior: number): boolean;

  /**
   * This function allows you to set a player's camera to follow other elements instead. Currently supported element type is: Player.
   * @param target The player who you want the camera to follow. If none is specified, the camera will target the player.
   * @returns Returns true if the function was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetCameraTarget
   **/
  static setTarget(target: Player): boolean;

  /**
   * This function allows you to set a player's camera to follow other elements instead. Currently supported element type is: Player.
   * @param targetX The target position that you want the local camera to look at.
   * @param targetY The target position that you want the local camera to look at.
   * @param targetZ The target position that you want the local camera to look at.
   * @returns Returns true if the function was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetCameraTarget
   **/
  static setTarget(targetX: number, targetY: number, targetZ: number): boolean;

  /**
   * This function allows you to set the camera's view mode if you are inside a vehicle.
   * This indicates at what distance the camera will follow the player.
   * @param viewMode The view mode you wish to use.
   * @returns Returns true if the view was set correctly, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetCameraViewMode
   **/
  static setViewMode(viewMode: 0 | 1 | 2 | 3 | 4 | 5): boolean;

  /**
   * This function allows you to set the camera's current goggle effect.
   * This means you can activate nightvision or infrared effects by script.
   * @param goggleEffect the goggle effect you wish to set: "normal", "nightvision", "thermalvision".
   * @param [noiseEnabled=true] whether or not there should be a fuzzy noise effect.
   * @returns Returns true if the effect was set correctly, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetCameraGoggleEffect
   **/
  static setGoggleEffect(goggleEffect: "normal" | "nightvision" | "thermalvision", noiseEnabled?: boolean): boolean;

  /**
   * This function sets if the camera will "collide" with any objects or vehicles in its way.
   * This means that if object clip is enabled an object is in the way of where the camera actually wants to be, the camera will try to be in front of it. This function can disable that.
   * - Note: This function doesn't fix the issue of camera clip not working on objects out of world bounds.
   * @param [objects=true] Sets if you want the camera to clip on objects.
   * @param [vehicles=true] Sets if you want the camera to clip on vehicles.
   * @returns Always returns true.
   * @see https://wiki.mtasa.com/wiki/SetCameraClip
   **/
  static setClip(objects?: boolean, vehicles?: boolean): true;

  /**
   * This function is used to set the distance of render.
   * Areas beyond the specified distance will not be rendered.
   * @param distance A number specifying the distance of render. Setting this less than 5 will cause problems to the client.
   * @returns Returns true if the distance was set correctly, false if invalid arguments were passed.
   * @see https://wiki.mtasa.com/wiki/SetFarClipDistance
   **/
  static setFarClipDistance(distance: number): boolean;

  /**
   * This function sets the distance from the camera at which the world starts rendering.
   * Do not use this function unless you have a specific reason to do so, as any values can cause artifacts and flickering problems.
   * It can be used in many ways, including: reducing Z-fighting, creating more sophisticated first person views, allowing the camera to fly closer to the ground without passing through it, etcetera.
   * - Note: setNearClipDistance should only be used when the camera orientation is controlled by setCameraMatrix, because GTA automatically adjusts this value for the optimum setting when the camera is attached to a player. Therefore ensure resetNearClipDistance is called when returning camera control back to GTA.
   * @param distance the new near clip distance. It must be between 0.1 and 20 for the function to do any effect. Default value is 0.3.
   * @returns This function returns true if the argument is valid. Returns false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetNearClipDistance
   **/
  static setNearClipDistance(distance: number): boolean;

  protected constructor();
}
