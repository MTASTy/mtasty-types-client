// TODO: SearchLight? Or Light

/**
 * This function creates a 3D light in the world.
 * - Note: The direction of the light only has any effect if the light type is spot light. One light will only apply illumination effects to peds, players, wheels and number plates (like a emergency vehicle siren light does). Two or more lights will apply illumination effects to everything (excluding objects) that is in range of, at least, two of them.
 * @param lightType An integer representing the type of light to create.
 * @param posX A floating point number representing the X coordinate on the map.
 * @param posY A floating point number representing the Y coordinate on the map.
 * @param posZ A floating point number representing the Z coordinate on the map.
 * @param [radius=3] A floating point number representing the radius of the light.
 * @param [r=255] An integer number representing the amount of red to use in the colouring of the light (0 - 255).
 * @param [g=0] An integer number representing the amount of green to use in the colouring of the light (0 - 255).
 * @param [b=0] An integer number representing the amount of blue to use in the colouring of the light (0 - 255).
 * @param [dirX=0] A floating point number representing the light direction's X coordinate on the map.
 * @param [dirY=0] A floating point number representing the light direction's Y coordinate on the map.
 * @param [dirZ=0] A floating point number representing the light direction's Z coordinate on the map.
 * @param [createsShadow=false] A boolean representing whether or not does the light cast shadows.
 * @returns Returns the light element if creation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CreateLight
 **/
declare function createLight(lightType: number, posX: number, posY: number, posZ: number, radius?: number, r?: number, g?: number, b?: number, dirX?: number, dirY?: number, dirZ?: number, createsShadow?: boolean): SearchLight | false;

/**
 * This function returns the color for a light element.
 * @param theLight The light that you wish to retrieve the color of.
 * @returns Returns three numbers corresponding to the amount of red, green and blue (respectively) of the light, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetLightColor
 * @tupleReturn
 **/
declare function getLightColor(theLight: SearchLight): [number, number, number] | [false];

/**
 * This function returns the direction for a light element.
 * @param theLight The light that you wish to retrieve the direction of.
 * @returns Returns three numbers corresponding to the x, y and z coordinates (respectively) of the light direction, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetLightDirection
 * @tupleReturn
 **/
declare function getLightDirection(theLight: SearchLight): [number, number, number] | [false];

/**
 * This function returns the radius for a light element.
 * @param theLight The light that you wish to retrieve the radius of.
 * @returns Returns a number containing the radius of the specified light, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetLightRadius
 **/
declare function getLightRadius(theLight: SearchLight): number | false;

/**
 * This function returns the type for a light element.
 * @param theLight The light that you wish to retrieve the type of.
 * @returns Returns an int containing the type of the specified light, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetLightType
 **/
declare function getLightType(theLight: SearchLight): number | false;

/**
 * This function sets the color for a light element.
 * @param theLight The light that you wish to set the color of.
 * @param r Color code RGB. Valid range are: 0 - 255.
 * @param g Color code RGB. Valid range are: 0 - 255.
 * @param b Color code RGB. Valid range are: 0 - 255.
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetLightColor
 **/
declare function setLightColor(theLight: SearchLight, r: number, g: number, b: number): boolean;

/**
 * This function sets the direction for a light element.
 * @param theLight The light that you wish to set the direction of.
 * @param x Coordinate.
 * @param y Coordinate.
 * @param z Coordinate.
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetLightDirection
 **/
declare function setLightDirection(theLight: SearchLight, x: number, y: number, z: number): boolean;

/**
 * This function sets the radius for a light element.
 * @param theLight The light that you wish to set the radius of.
 * @param radius Radius.
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetLightRadius
 **/
declare function setLightRadius(theLight: SearchLight, radius: number): boolean;
