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
declare function fadeCamera(fadeIn: boolean, timeToFade?: number, red?: number, green?: number, blue?: number): boolean;

/**
 * This function returns an element that corresponds to the game camera.
 * - Note: Using attachElements with the camera and the main player can interfere with movement.
 * - Note: Using setElementPosition/Rotation/Matrix on the camera element will automatically clear any target set with setCameraTarget.
 * @returns Returns an element that corresponds to the game camera.
 * @see https://wiki.mtasa.com/wiki/GetCamera
 **/
declare function getCamera(): Camera;

/**
 * This function checks if the camera will "collide" with any objects or vehicles in its way.
 * @returns Objects: if you want the camera to clip on objects. Vehicles: if you want the camera to clip on vehicles.
 * @see https://wiki.mtasa.com/wiki/GetCameraClip
 * @tupleReturn
 **/
declare function getCameraClip(): [boolean, boolean];

/**
 * This function returns the field of view of the dynamic camera as set by setCameraFieldOfView.
 * @param cameraMode: the camera mode to get the field of view of: "player", "vehicle", "vehicle_max".
 * @returns Returns one number - the field of view angle.
 * @see https://wiki.mtasa.com/wiki/GetCameraClip
 * @tupleReturn
 **/
declare function getCameraFieldOfView(cameraMode: "player" | "vehicle" | "vehicle_max"): number | false;

/**
 * This function returns what goggle effect is currently affecting the camera.
 * @returns String indicating the current camera goggle effect.
 * @see https://wiki.mtasa.com/wiki/GetCameraGoggleEffect
 **/
declare function getCameraGoggleEffect(): string;

/**
 * Returns the interior of the local camera (independent of the interior of the local player).
 * @returns Returns a number indicating the camera's interior, false if the argument is invalid.
 * @see https://wiki.mtasa.com/wiki/GetCameraInterior
 **/
declare function getCameraInterior(): number | false;

/**
 * This function gets the position of the camera and the position of the point it is facing.
 * @returns This function returns 8 floats if the argument is valid (when applicable); the first three indicate the position of the camera, the next three indicate the position of the point it's facing, and the last two are the roll and field of view. Returns false if the argument is invalid.
 * @see https://wiki.mtasa.com/wiki/GetCameraMatrix
 * @tupleReturn
 **/
declare function getCameraMatrix(): [number, number, number, number, number, number, number, number] | [false];

/**
 * This function gets the camera shake level set by setCameraShakeLevel.
 * @returns Returns a number representing the camera shake level, from 0 (no shaking effect) to 255 (maximum shaking effect). By default, the camera has no shaking effect.
 * @see https://wiki.mtasa.com/wiki/GetCameraShakeLevel
 **/
declare function getCameraShakeLevel(): number;

/**
 * This function returns an element that corresponds to the current target of the specified player's camera (i.e. what it is following).
 * @returns Returns an element of the target if the function was successful, or false if bad arguments were specified.
 * @see https://wiki.mtasa.com/wiki/GetCameraTarget
 **/
declare function getCameraTarget(): Element | false;

/**
 * This function allows you to get the camera's view mode.
 * This indicates at what distance the camera will follow the player.
 * - Note: It currently only returns vehicle view modes.
 * @returns Returns a number indicating the current camera view mode.
 * @see https://wiki.mtasa.com/wiki/GetCameraViewMode
 **/
declare function getCameraViewMode(): number;

/**
 * This function sets if the camera will "collide" with any objects or vehicles in its way.
 * This means that if object clip is enabled an object is in the way of where the camera actually wants to be, the camera will try to be in front of it. This function can disable that.
 * - Note: This function doesn't fix the issue of camera clip not working on objects out of world bounds.
 * @param [objects=true] Sets if you want the camera to clip on objects.
 * @param [vehicles=true] Sets if you want the camera to clip on vehicles.
 * @returns Always returns true.
 * @see https://wiki.mtasa.com/wiki/SetCameraClip
 **/
declare function setCameraClip(objects?: boolean, vehicles?: boolean): true;

/**
 * This function sets the field of view of the dynamic camera - this is the field of view of the non-fixed camera - yes, the camera that the user can control whilst on foot or in a vehicle. The higher the field of view angle, the more you will be able to see to your sides.
 * @param cameraMode the camera mode to get the field of view of: "player", "vehicle", "vehicle_max".
 * @param fieldOfView The field of view angle, 0 to 179.
 * @returns Returns true if the arguments are valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetCameraClip
 **/
declare function setCameraFieldOfView(cameraMode: "player" | "vehicle" | "vehicle_max", fieldOfView: number): boolean;

/**
 * This function allows you to set the camera's current goggle effect.
 * This means you can activate nightvision or infrared effects by script.
 * @param goggleEffect the goggle effect you wish to set: "normal", "nightvision", "thermalvision".
 * @param [noiseEnabled=true] whether or not there should be a fuzzy noise effect.
 * @returns Returns true if the effect was set correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetCameraGoggleEffect
 **/
declare function setCameraGoggleEffect(goggleEffect: "normal" | "nightvision" | "thermalvision", noiseEnabled?: boolean): boolean;

/**
 * Sets the interior of the local camera.
 * Only the interior of the camera is changed, the local player stays in the interior he was in.
 * @param interior the interior to place the camera in.
 * @returns Returns true if the camera's interior was changed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetCameraInterior
 **/
declare function setCameraInterior(interior: number): boolean;

/**
 * This function sets the camera's position and direction.
 * The first three arguments are the point at which the camera lies, the last three are the point the camera faces (or the point it "looks at").
 * - Note: Calling this function takes the camera's focus away from the player and sets the camera in a fixed position and rotation. The camera's focus can be brought back to the player using the setCameraTarget function.
 * @param positionX The x coordinate of the camera's position.
 * @param positionY The y coordinate of the camera's position.
 * @param positionZ The z coordinate of the camera's position.
 * @param lookAtX The x coordinate of the point the camera faces.
 * @param lookAtY The y coordinate of the point the camera faces.
 * @param lookAtZ The z coordinate of the point the camera faces.
 * @param [roll=0] The camera roll angle, -180 to 180. A value of 0 means the camera sits straight, positive values will turn it counter-clockwise and negative values will turn it clockwise. -180 or 180 means the camera is upside down.
 * @param [fov=70] the field of view angle, 0.01 to 180. The higher this value is, the more you will be able to see what is to your sides.
 * @returns Returns true if the arguments are valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetCameraMatrix
 **/
declare function setCameraMatrix(positionX: number, positionY: number, positionZ: number, lookAtX?: number, lookAtY?: number, lookAtZ?: number, roll?: number, fov?: number): boolean;

/**
 * This function sets the camera shake level (as seen on the Are you going to San Fierro? singleplayer mission).
 * @param shakeLevel a number between 0 and 255, which represents the camera shake intensity level.
 * @returns Returns true if the camera shake level was changed, false if the required argument is incorrect or missing.
 * @see https://wiki.mtasa.com/wiki/SetCameraShakeLevel
 **/
declare function setCameraShakeLevel(shakeLevel: number): boolean;

/**
 * This function allows you to set a player's camera to follow other elements instead. Currently supported element type is: Player.
 * @param target The player who you want the camera to follow. If none is specified, the camera will target the player.
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetCameraTarget
 **/
declare function setCameraTarget(target: Player): boolean;

/**
 * This function allows you to set a player's camera to follow other elements instead. Currently supported element type is: Player.
 * @param targetX The target position that you want the local camera to look at.
 * @param targetY The target position that you want the local camera to look at.
 * @param targetZ The target position that you want the local camera to look at.
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetCameraTarget
 **/
declare function setCameraTarget(targetX: number, targetY: number, targetZ: number): boolean;

/**
 * This function allows you to set the camera's view mode if you are inside a vehicle.
 * This indicates at what distance the camera will follow the player.
 * @param viewMode The view mode you wish to use.
 * @returns Returns true if the view was set correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetCameraViewMode
 **/
declare function setCameraViewMode(viewMode: 0 | 1 | 2 | 3 | 4 | 5): boolean;
