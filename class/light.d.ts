/** @customConstructor Light */
declare class Light extends BaseElement {
  direction: Vector3;
  radius: number;
  // TODO: class BaseElement already contain variable "type"
  // readonly type: number;

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
   * @see https://wiki.mtasa.com/wiki/CreateLight
   **/
  constructor(lightType: number, posX: number, posY: number, posZ: number, radius?: number, r?: number, g?: number, b?: number, dirX?: number, dirY?: number, dirZ?: number, createsShadow?: boolean);

  /**
   * This function returns the type for a light element.
   * @returns Returns an int containing the type of the specified light.
   * @see https://wiki.mtasa.com/wiki/GetLightType
   **/
  // TODO: class BaseElement already contain method "getType"
  // getType(): number;

  /**
   * This function returns the radius for a light element.
   * @returns Returns a number containing the radius of the specified light.
   * @see https://wiki.mtasa.com/wiki/GetLightRadius
   **/
  getRadius(): number;

  /**
   * This function returns the color for a light element.
   * @returns Returns three numbers corresponding to the amount of red, green and blue (respectively) of the light.
   * @see https://wiki.mtasa.com/wiki/GetLightColor
   * @tupleReturn
   **/
  getColor(): [number, number, number];

  /**
   * This function returns the direction for a light element.
   * @returns Returns three numbers corresponding to the x, y and z coordinates (respectively) of the light direction.
   * @see https://wiki.mtasa.com/wiki/GetLightDirection
   * @tupleReturn
   **/
  getDirection(): [number, number, number];

  /**
   * This function sets the radius for a light element.
   * @param radius Radius.
   * @returns Returns true if the function was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetLightRadius
   **/
  setRadius(radius: number): boolean;

  /**
   * This function sets the color for a light element.
   * @param r Color code RGB. Valid range are: 0 - 255.
   * @param g Color code RGB. Valid range are: 0 - 255.
   * @param b Color code RGB. Valid range are: 0 - 255.
   * @returns Returns true if the function was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetLightColor
   **/
  setColor(r: number, g: number, b: number): boolean;

  /**
   * This function sets the direction for a light element.
   * @param x Coordinate.
   * @param y Coordinate.
   * @param z Coordinate.
   * @returns Returns true if the function was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetLightDirection
   **/
  setDirection(x: number, y: number, z: number): boolean;
}
