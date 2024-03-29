/** @customConstructor Water */
declare class Water extends BaseElement {
  level: number;
  height: number;

  /**
   * This function checks to see if a line between two points collides with the water.
   * This is similar to processLineOfSight, but only collides with water.
   * Waves are taken into account when testing the line.
   * @param startX the position of the starting point of the line.
   * @param startY the position of the starting point of the line.
   * @param startZ the position of the starting point of the line.
   * @param endX the position of the end point of the line.
   * @param endY the position of the end point of the line.
   * @param endZ the position of the end point of the line.
   * @returns Returns true and the position of the intersection point of the line and the water surface if there is a collision, or false if there is no collision.
   * @see https://wiki.mtasa.com/wiki/TestLineAgainstWater
   * @tupleReturn
   **/
  static testLineAgainst(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): [true, number, number, number] | [false];

  /**
   * This function determines whether water is drawn last in the rendering order.
   * @returns Returns true if water is drawn last in the rendering order, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsWaterDrawnLast
   **/
  static isDrawnLast(): boolean;

  /**
   * This function changes the water rendering order.
   * @param bEnabled A boolean value determining whether water should be drawn last.
   * @returns Returns true if the rendering order was changed successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetWaterDrawnLast
   **/
  static setDrawnLast(bEnabled: boolean): boolean;

  /**
   * This function returns the current wave height.
   * @returns Returns the height as a number, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetWaveHeight
   **/
  static getWaveHeight(): number | false;

  /**
   * This function returns the water color of the GTA world.
   * - Note: The server can only return the water color, if it has actually been set by script.
   * @returns Returns 4 numbers, indicating the color of the water (RGBA).
   * @see https://wiki.mtasa.com/wiki/GetWaterColor
   * @tupleReturn
   **/
  static getColor(): [number, number, number, number];

  /**
   * This function sets the wave height to the desired value, the default is 0.
   * @param height A float between 0 and 100.
   * @returns Returns a boolean value true or false that tells you if it was successful or not.
   * @see https://wiki.mtasa.com/wiki/SetWaveHeight
   **/
  static setWaveHeight(height: number): boolean;

  /**
   * This function changes the water color of the GTA world.
   * @param red The red value of the water, from 0 to 255.
   * @param green The green value of the water, from 0 to 255.
   * @param blue The blue value of the water, from 0 to 255.
   * @param [alpha=200] The alpha (visibility) value of the water, from 0 to 255.Defaults to 200 if not declared.
   * @returns Returns true if water color was set correctly, false if invalid values were passed.
   * @see https://wiki.mtasa.com/wiki/SetWaterColor
   **/
  static setColor(red: number, green: number, blue: number, alpha?: number): boolean;

  /**
   * Sets the height of some or all the water in the game world.
   * - Note: When the water level is 0, the standard GTA rendering is performed so that water is visible when viewed through translucent surfaces, such as vehicle windows. However, some MTA custom objects placed underwater will appear in front of the water. Setting the water level to any non-zero value (i.e. setWaterLevel(0.001)) forces alternative rendering and MTA custom objects placed underwater will be drawn correctly.
   * @param level the new Z coordinate of the water surface.
   * @param [includeWaterFeatures=true] a boolean indicating whether to also set the level of water features such as ponds and pools.
   * @param [includeWaterElements=true] a boolean indicating whether to also set the level of all water elements.
   * @returns Returns true if successful, false in case of failure. Returns true if successful, false in case of failure (there is no water at the specified coordinates).
   * @see https://wiki.mtasa.com/wiki/SetWaterLevel
   **/
  static setLevel(level: number, includeWaterFeatures?: boolean, includeWaterElements?: boolean): boolean;

  /**
   * This function reset the water color of the GTA world to default.
   * @returns Returns true if water color was reset correctly, false otherwise.
   * @see https://wiki.mtasa.com/wiki/ResetWaterColor
   **/
  static resetColor(): boolean;

  /**
   * This function resets the water of the GTA world back to its default level.
   * Water elements are not affected.
   * @returns Returns true if water level was reset correctly, false otherwise.
   * @see https://wiki.mtasa.com/wiki/ResetWaterLevel
   **/
  static resetLevel(): boolean;

  /**
   * Creates an area of water.
   * The largest possible size of a water area is 5996×5996.
   * Also be aware that the function will change all x and y coordinates you specify into even integer numbers if necessary: this is because of a limitation of San Andreas.
   * You are able to give the water a shallow water effect, which practically changes the water invisible to the eye.
   * However, all elements still work the same way as without the shallow effect - allowing swimming, diving, vehicles to sink, etc.
   * - Note: X and Y positions will be changed to an even integer. i.e. -2, 0, 2, 4 etc.
   * - Important note: If you're working with dimensions, be sure to apply it by using setElementDimension.
   * @param x1 position of bottom left (south-west) corner.
   * @param y1 position of bottom left (south-west) corner.
   * @param z1 position of bottom left (south-west) corner.
   * @param x2 position of bottom right (south-east) corner.
   * @param y2 position of bottom right (south-east) corner.
   * @param z2 position of bottom right (south-east) corner.
   * @param x3 position of top left (north-west) corner.
   * @param y3 position of top left (north-west) corner.
   * @param z3 position of top left (north-west) corner.
   * @param x4 position of top right (north-east) corner.
   * @param y4 position of top right (north-east) corner.
   * @param z4 position of top right (north-east) corner.
   * @param [bShallow=false] gives the water a shallow water effect.
   * @see https://wiki.mtasa.com/wiki/CreateWater
   **/
  constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4?: number, y4?: number, z4?: number, bShallow?: boolean);

  /**
   * This function allows you to retrieve the water level from a certain location.
   * The water level is 0 in most places though it can vary (e.g. it's higher near the dam).
   * - Note: Some small water areas within parts of the city do not count as water to be used with this function. For example, the shallow water area in Northwest San Fierro.
   * @returns Returns an integer of the water level if the localPlayer/position is near the water (-3 to 20 on the Z coordinate).
   * @see https://wiki.mtasa.com/wiki/GetWaterLevel
   **/
  getLevel(): number;

  /**
   * Gets the world position of a vertex (i.e. corner) of a water area.
   * Each water area is either a triangle or quad (rectangle) so each has 3 or 4 corners.
   * @param vertexIndex the index of the vertex whose position to get. Values range from 1 to 4 for a water quad, or 1 to 3 for a triangle.
   * @returns Returns the x, y and z coordinates of the specified vertex if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetWaterVertexPosition
   * @tupleReturn
   **/
  getVertexPosition(vertexIndex: 1 | 2 | 3 | 4): [number, number, number] | [false];

  /**
   * Sets the world position of a corner point of a water area.
   * - Note: X and Y positions will be changed to an even integer. i.e. -2, 0, 2, 4 etc.
   * @param vertexIndex the index of the vertex to move. Values range from 1 to 4 for water quads, and 1 to 3 for triangles.
   * @param x the X coordinate to set for the vertex.
   * @param y the Y coordinate to set for the vertex.
   * @param z the Z coordinate to set for the vertex.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetWaterVertexPosition
   **/
  setVertexPosition(vertexIndex: 1 | 2 | 3 | 4, x: number, y: number, z: number): boolean;

  /**
   * Sets the height of some or all the water in the game world.
   * - Note: When the water level is 0, the standard GTA rendering is performed so that water is visible when viewed through translucent surfaces, such as vehicle windows. However, some MTA custom objects placed underwater will appear in front of the water. Setting the water level to any non-zero value (i.e. setWaterLevel(0.001)) forces alternative rendering and MTA custom objects placed underwater will be drawn correctly.
   * @param level the new Z coordinate of the water surface.
   * @returns Returns true if successful, false in case of failure. Returns true if successful, false in case of failure (there is no water at the specified coordinates).
   * @see https://wiki.mtasa.com/wiki/SetWaterLevel
   **/
  setLevel(level: number): boolean;
}
