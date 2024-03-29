/** @noSelfInFile */

/**
 * This function creates a blip element, which is displayed as an icon on the client's radar.
 * @param x The x position of the blip, in world coordinates.
 * @param y The y position of the blip, in world coordinates.
 * @param z The z position of the blip, in world coordinates.
 * @param [icon=0] The icon that the radar blips should be. Valid values can be seen at Radar Blips.
 * @param [size=2] The size of the radar blip. Only applicable to the Marker icon. Default is 2. Maximum is 25.
 * @param [r=255] The amount of red in the blip's color (0–255). Only applicable to the Marker icon.
 * @param [g=0] The amount of green in the blip's color (0–255). Only applicable to the Marker icon.
 * @param [b=0] The amount of blue in the blip's color (0–255). Only applicable to the Marker icon.
 * @param [a=255] The amount of alpha in the blip's color (0–255). Only applicable to the Marker icon. Default is 255.
 * @param [ordering=0] This defines the blip's Z-level ordering (-32768–32767).
 * @param [visibleDistance=16383] The maximum distance from the camera at which the blip is still visible (0–65535).
 * @returns Returns an element of the blip if it was created successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CreateBlip
 **/
declare function createBlip(x: number, y: number, z: number, icon?: number, size?: number, r?: number, g?: number, b?: number, a?: number, ordering?: number, visibleDistance?: number): Blip | false;

/**
 * This function creates a blip that is attached to an element. This blip is displayed as an icon on the client's radar and will 'follow' the element that it is attached to around.
 * @param elementToAttachTo The element to attach the marker to.
 * @param [icon=0] The icon that the radar blips should be. Valid values can be seen at Radar Blips.
 * @param [size=2] The size of the radar blip. Only applicable to the Marker icon. Default is 2. Maximum is 25.
 * @param [r=255] The amount of red in the blip's color (0–255). Only applicable to the Marker icon.
 * @param [g=0] The amount of green in the blip's color (0–255). Only applicable to the Marker icon.
 * @param [b=0] The amount of blue in the blip's color (0–255). Only applicable to the Marker icon.
 * @param [a=255] The amount of alpha in the blip's color (0–255). Only applicable to the Marker icon. Default is 255.
 * @param [ordering=0] This defines the blip's Z-level ordering (-32768–32767).
 * @param [visibleDistance=16383] The maximum distance from the camera at which the blip is still visible (0–65535).
 * @returns Returns an element of the blip if it was created successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CreateBlipAttachedTo
 **/
declare function createBlipAttachedTo(elementToAttachTo: BaseElement, icon?: number, size?: number, r?: number, g?: number, b?: number, a?: number, ordering?: number, visibleDistance?: number): Blip | false;

/**
 * This function will tell you what color a blip is. This color is only applicable to the default blip icon.
 * All other icons will ignore this.
 * @param theBlip The blip whose color you wish to get.
 * @returns Returns four integers in RGBA format, with a maximum value of 255 for each. The values are, in order, red, green, blue, and alpha. Alpha decides the transparancy where 255 is opaque and 0 is fully transparent. false is returned if the blip is invalid.
 * @see https://wiki.mtasa.com/wiki/GetBlipColor
 * @tupleReturn
 **/
declare function getBlipColor(theBlip: Blip): [number, number, number, number] | [false];

/**
 * This function returns the icon a blip currently has.
 * @param theBlip the blip we're getting the icon number of.
 * @returns Returns an int indicating which icon the blip has. Valid values are listed on the Radar Blips page.
 * @see https://wiki.mtasa.com/wiki/GetBlipIcon
 **/
declare function getBlipIcon(theBlip: Blip): number | false;

/**
 * This function gets the Z ordering value of a blip.
 * The Z ordering determines if a blip appears on top of or below other blips.
 * Blips with a higher Z ordering value appear on top of blips with a lower value.
 * The default value for all blips is 0.
 * @param theBlip the blip to retrieve the Z ordering value of.
 * @returns Returns the Z ordering value of the blip if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetBlipOrdering
 **/
declare function getBlipOrdering(theBlip: Blip): number | false;

/**
 * This function gets the size of a blip.
 * @param theBlip The blip you wish to get the size of.
 * @returns Returns an int indicating the size of the blip. The default value is 2. The maximum value is 25.
 * @see https://wiki.mtasa.com/wiki/GetBlipSize
 **/
declare function getBlipSize(theBlip: Blip): number | false;

/**
 * This function will tell you what visible distance a blip has.
 * @param theBlip The blip whose visible distance you wish to get.
 * @returns Returns one number with the blips visible distance, false if the blip is invalid.
 * @see https://wiki.mtasa.com/wiki/GetBlipVisibleDistance
 **/
declare function getBlipVisibleDistance(theBlip: Blip): number | false;

/**
 * This function will let you change the color of a blip.
 * This color is only applicable to the default blip icon.
 * All other icons will ignore this.
 * @param theBlip The blip who's color you wish to set.
 * @param red The amount of red in the blip's color (0 - 255).
 * @param green The amount of green in the blip's color (0 - 255).
 * @param blue The amount of blue in the blip's color (0 - 255).
 * @param alpha The amount of alpha in the blip's color (0 - 255). Alpha decides transparancy where 255 is opaque and 0 is transparent.
 * @returns Returns true if the blip's color was set successfully. Returns false if the blip passed to the function is invalid, or any of the colors are out of the valid range.
 * @see https://wiki.mtasa.com/wiki/SetBlipColor
 **/
declare function setBlipColor(theBlip: Blip, red: number, green: number, blue: number, alpha: number): boolean;

/**
 * This function sets the icon for an existing blip element.
 * @param theBlip unknown
 * @param icon A number indicating the icon you wish to change it do. Valid values are listed on the Radar Blips page.
 * @returns Returns true if the icon was successfully set, false if the element passed was not a valid blip or the icon value was not a valid icon number.
 * @see https://wiki.mtasa.com/wiki/SetBlipIcon
 **/
declare function setBlipIcon(theBlip: Blip, icon: number): boolean;

/**
 * This function sets the Z ordering of a blip.
 * It allows you to make a blip appear on top of or below other blips.
 * @param theBlip the blip whose Z ordering to change.
 * @param ordering the new Z ordering value. Blips with higher values will appear on top of blips with lower values. Possible range: -32767 to 32767. Default: 0.
 * @returns Returns true if the blip ordering was changed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetBlipOrdering
 **/
declare function setBlipOrdering(theBlip: Blip, ordering: number): boolean;

/**
 * This function sets the size of a blip's icon.
 * @param theBlip The blip you wish to get the size of.
 * @param iconSize The size you wish the icon to be. 2 is the default value. 25 is the maximum value. Value gets clamped between 0 and 25.
 * @returns Returns an true if the blip's size was set successfully. Returns false if the element passed was not a blip or if the icon size passed was invalid.
 * @see https://wiki.mtasa.com/wiki/SetBlipSize
 **/
declare function setBlipSize(theBlip: Blip, iconSize: number): boolean;

/**
 * This function will set the visible distance of a blip.
 * @param theBlip The blip whose visible distance you wish to get.
 * @param theDistance The distance you want the blip to be visible for. Value gets clamped between 0 and 65535.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetBlipVisibleDistance
 **/
declare function setBlipVisibleDistance(theBlip: Blip, theDistance: number): boolean;
