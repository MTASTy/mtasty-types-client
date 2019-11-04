/** @customConstructor SearchLight */
declare class SearchLight extends BaseElement {
  startPosition: Vector3;
  endPosition: Vector3;
  startRadius: number;
  endRadius: number;

  /**
   * This method creates a searchlight. A searchlight is a spotlight which looks like the one available in the Police Maverick.
   * - Tip: You should only use this method when you are sure that the searchlight will point upwards or downwards. Using them horizontally or almost horizontally will generate visual artifacts in the searchlight.
   * @param startX the X coordinate where the searchlight light cone will start.
   * @param startY the Y coordinate where the searchlight light cone will start.
   * @param startZ the Z coordinate where the searchlight light cone will start.
   * @param endX the X coordinate of the direction where the searchlight will point to.
   * @param endY the Y coordinate of the direction where the searchlight will point to.
   * @param endZ the Z coordinate of the direction where the searchlight will point to.
   * @param startRadius the radius of the searchlight's light cone in its beginning.
   * @param endRadius the radius of the searchlight's light cone in its end.
   * @param [renderSpot=true] if true, the searchlight will lighten the surface where it ends.
   * @see https://wiki.mtasa.com/wiki/CreateSearchLight
   **/
  constructor(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, startRadius: number, endRadius: number, renderSpot?: boolean);

  /**
   * This method gets the start position of a searchlight element.
   * @returns This method will return Vector.
   * @see https://wiki.mtasa.com/wiki/GetSearchLightStartPosition
   **/
  getStartPosition(): Vector3;

  /**
   * This method gets the end position of a searchlight element.
   * @returns This method will return Vector.
   * @see https://wiki.mtasa.com/wiki/GetSearchLightEndPosition
   **/
  getEndPosition(): Vector3;

  /**
   * This method gets the start radius of a searchlight element.
   * @returns This method will return one float, which is the searchlight's start radius.
   * @see https://wiki.mtasa.com/wiki/GetSearchLightStartRadius
   **/
  getStartRadius(): number;

  /**
   * This method gets the end radius of a searchlight element.
   * @returns This method will return one float, which is the searchlight's end radius.
   * @see https://wiki.mtasa.com/wiki/GetSearchLightEndRadius
   **/
  getEndRadius(): number;

  /**
   * This method sets the start position of a searchlight element.
   * @param startX the X coordinate where the searchlight light cone will start.
   * @param startY the Y coordinate where the searchlight light cone will start.
   * @param startZ the Z coordinate where the searchlight light cone will start.
   * @returns If every argument is correct, this method returns true. If not, it will return false.
   * @see https://wiki.mtasa.com/wiki/SetSearchLightStartPosition
   **/
  setStartPosition(startX: number, startY: number, startZ: number): boolean;

  /**
   * This method sets the end position of a searchlight element.
   * @param endX the X coordinate where the searchlight light cone will end.
   * @param endY the Y coordinate where the searchlight light cone will end.
   * @param endZ the Z coordinate where the searchlight light cone will end.
   * @returns If every argument is correct, this method returns true. If not, it will return false.
   * @see https://wiki.mtasa.com/wiki/SetSearchLightEndPosition
   **/
  setEndPosition(endX: number, endY: number, endZ: number): boolean;

  /**
   * This method sets the start radius of a searchlight element.
   * @param startRadius the radius of the searchlight's light cone in its beginning.
   * @returns If every argument is correct, this method returns true. If not, it will return false.
   * @see https://wiki.mtasa.com/wiki/SetSearchLightStartRadius
   **/
  setStartRadius(startRadius: number): boolean;

  /**
   * This method sets the end radius of a searchlight element.
   * @param endRadius the radius of the searchlight's light cone in its end.
   * @returns If every argument is correct, this method returns true. If not, it will return false.
   * @see https://wiki.mtasa.com/wiki/SetSearchLightEndRadius
   **/
  setEndRadius(endRadius: number): boolean;
}
