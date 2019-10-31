/** @noSelfInFile */

/**
 * This function breaks a specific map object.
 * - Note: Only breakable map objects can be broken.
 * @param theObject an map object element.
 * @returns Returns true if the map object was successfully broken or false if the map object is not breakable, or a wrong map object was given.
 * @see https://wiki.mtasa.com/wiki/BreakObject
 **/
declare function breakObject(theObject: MapObject): boolean;

/**
 * Creates an map object in the GTA world.
 * - Note: Dynamic map objects do not automatically have physics applied to them. Use setElementVelocity(MapObject, 0, 0, 0) to fix this.
 * @param modelid a whole integer specifying the GTASA map object model ID.
 * @param x a number representing the X coordinate on the map.
 * @param y a number representing the Y coordinate on the map.
 * @param z a number representing the Z coordinate on the map.
 * @param rx a number representing the rotation about the X axis in degrees.
 * @param ry a number representing the rotation about the Y axis in degrees.
 * @param rz a number representing the rotation about the Z axis in degrees.
 * @param [isLowLOD=false] A bool value specifying if the map object will be low LOD. A low LOD map object has no collision and a longer draw distance.
 * @returns The map object element if creation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CreateObject
 **/
declare function createObject(modelid: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number, isLowLOD?: boolean): MapObject | false;

/**
 * This function returns the mass of a specified map object.
 * @param theObject the map object whose mass you want to get.
 * @returns A number representing the mass of the map object, false if invalid arguments were passed or -1 if map object was never streamed in.
 * @see https://wiki.mtasa.com/wiki/GetObjectMass
 **/
declare function getObjectMass(theObject: MapObject): number | false;

/**
 * This function returns the visible size of an map object.
 * @param theObject the map object you wish to return the scale of.
 * @returns Three number indicating the scale of the map object on the x, y, and z axis if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetObjectScale
 * @tupleReturn
 **/
declare function getObjectScale(theObject: MapObject): [number, number, number] | [false];

/**
 * This function checks if an map object / model ID is breakable.
 * @param theObjectOrModelID The map object / model ID that's being checked.
 * @returns Returns true if the map object is breakable or false if the map object is not breakable.
 * @see https://wiki.mtasa.com/wiki/IsObjectBreakable
 **/
declare function isObjectBreakable(theObjectOrModelID: MapObject | number): boolean;

/**
 * This function will smoothly move an map object from its current position to a specified rotation and position.
 * @param theObject the map object that will be moved.
 * @param time the time in milliseconds the map object will arrive at the destination.
 * @param targetX the X value of the target position.
 * @param targetY the Y value of the target position.
 * @param targetZ the Z value of the target position.
 * @param moveRX the rotation along the X axis relative to its current rotation, which is its starting angle.
 * @param moveRY the rotation along the Y axis relative to its current rotation, which is its starting angle.
 * @param moveRZ the rotation along the Z axis relative to its current rotation, which is its starting angle.
 * @param [strEasingType="Linear"] the easing function to use for the interpolation.
 * @param fEasingPeriod the period of the easing function (only some easing functions use this parameter).
 * @param fEasingAmplitude the amplitude of the easing function (only some easing functions use this parameter).
 * @param fEasingOvershoot the overshoot of the easing function (only some easing functions use this parameter).
 * @returns Return true if the function moved the map object succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/MoveObject
 **/
declare function moveObject(theObject: MapObject, time: number, targetX: number, targetY: number, targetZ: number, moveRX?: number, moveRY?: number, moveRZ?: number, strEasingType?: string, fEasingPeriod?: number, fEasingAmplitude?: number, fEasingOvershoot?: number): boolean;

/**
 * This function respawns a specific map object.
 * @param theObject an map object element
 * @returns Returns true if the map object was sucessfully respawned or false if the map object is not breakable, or a wrong map object was given.
 * @see https://wiki.mtasa.com/wiki/RespawnObject
 **/
declare function respawnObject(theObject: MapObject): boolean;

/**
 * This function sets an map object to be breakable/unbreakable.
 * @param theObject the map object that's being set.
 * @param breakable a boolean whether the map object is breakable (true) or unbreakable (false).
 * @returns Returns true if the map object is now breakable or false if it can't or if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/SetObjectBreakable
 **/
declare function setObjectBreakable(theObject: MapObject, breakable: boolean): boolean;

/**
 * This function sets the mass of a specified map object. Changing the mass leads to a different movement behavior for especially dynamic map objects.
 * @param theObject the map object that's being set.
 * @param mass the new mass.
 * @returns Returns true if the new mass value has been, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetObjectMass
 **/
declare function setObjectMass(theObject: MapObject, mass: number): boolean;

/**
 * This function changes the visible size of an map object.
 * - Note: setObjectScale does not affect the collision models for the map object, as such is unsuitable for use for interaction with players, vehicles or other map objects.
 * @param theObject the map object you wish to change the scale of.
 * @param scale a number containing the new scale. 1.0 is the standard scale, with 0.5 being half the size and 2.0 being twice the size. If the scaleY is set, this will be scaleX.
 * @param [scaleY=1] a number containing the new scale on the Y axis.
 * @param [scaleZ=1] a number containing the new scale on the Z axis.
 * @returns Return true if the scale was set properly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetObjectScale
 **/
declare function setObjectScale(theObject: MapObject, scale: number, scaleY?: number, scaleZ?: number): boolean;

/**
 * This will allow you to stop an map object that is currently moving.
 * @param theObject the map object whose movement you wish to stop.
 * @returns Return true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/StopObject
 **/
declare function stopObject(theObject: MapObject): boolean;

/**
 * This function is used to toggle if an map object should respawn after it got destroyed.
 * @param theObject the map object you want to toggle the respawn from.
 * @param respawn a bool denoting whether we want to enable (true) or disable (false) respawning.
 * @returns Returns true when the it was changed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ToggleObjectRespawn
 **/
declare function toggleObjectRespawn(theObject: MapObject, respawn: boolean): boolean;

interface ObjectPropertyFormat {
  mass: number;
  turn_mass: number;
  accuracy: number;
  air_resistance: number;
  elasticity: number;
  center_of_mass: Vector3;
  buoyancy: number;
}

/**
 * This function gets a property of the specified map object.
 * @param theObject the map object you wish to get a property of.
 * @param property the property you want to get.
 * @returns On success: object for all, 3 numbers for center_of_mass or number for other properties. On failure: false.
 * @see https://wiki.mtasa.com/wiki/GetObjectProperty
 **/
declare function getObjectProperty(theObject: MapObject, property: "all" | "mass" | "turn_mass" | "accuracy" | "air_resistance" | "elasticity" | "center_of_mass" | "buoyancy"): ObjectPropertyFormat | Vector3 | number | false;

/**
 * This function sets a property of the specified map object.
 * @param theObject the map object you wish to change a property of.
 * @param property the property you want to set.
 * @param value the new value for the property.
 * @returns Returns true if the property was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetObjectProperty
 **/
declare function setObjectProperty(theObject: MapObject, property: "mass" | "turn_mass" | "accuracy" | "air_resistance" | "elasticity" | "center_of_mass" | "buoyancy", value: Vector3 | number): boolean;
