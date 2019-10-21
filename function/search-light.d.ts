/**
 * This function creates a searchlight. A searchlight is a spotlight which looks like the one available in the Police Maverick.
 * - Tip: You should only use this function when you are sure that the searchlight will point upwards or downwards. Using them horizontally or almost horizontally will generate visual artifacts in the searchlight.
 * @param startX the X coordinate where the searchlight light cone will start.
 * @param startY the Y coordinate where the searchlight light cone will start.
 * @param startZ the Z coordinate where the searchlight light cone will start.
 * @param endX the X coordinate of the direction where the searchlight will point to.
 * @param endY the Y coordinate of the direction where the searchlight will point to.
 * @param endZ the Z coordinate of the direction where the searchlight will point to.
 * @param startRadius the radius of the searchlight's light cone in its beginning.
 * @param endRadius the radius of the searchlight's light cone in its end.
 * @param [renderSpot=true] if true, the searchlight will lighten the surface where it ends.
 * @returns If every argument is correct and the limit of 1000 searchlights has not been reached, this function returns a searchlight element. Otherwise, it returns false.
 * @see https://wiki.mtasa.com/wiki/CreateSearchLight
 **/
declare function createSearchLight(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, startRadius: number, endRadius: number, renderSpot?: boolean): SearchLight | false;

/**
 * This function gets the end position of a searchlight element.
 * @param theSearchLight the searchlight to get the position where the searchlight's light cone ends.
 * @returns If the specified searchlight element is valid, this function will return three float, which are the three coordinates of searchlight's end position. If not, it will return false plus an error message.
 * @see https://wiki.mtasa.com/wiki/GetSearchLightEndPosition
 * @tupleReturn
 **/
declare function getSearchLightEndPosition(theSearchLight: SearchLight): [number, number, number] | [false];

/**
 * This function gets the end radius of a searchlight element.
 * @param theSearchLight the searchlight to get the radius of the searchlight's light cone in its end.
 * @returns If the specified searchlight element is valid, this function will return one float, which is the searchlight's end radius. If not, it will return false plus an error message.
 * @see https://wiki.mtasa.com/wiki/GetSearchLightEndRadius
 **/
declare function getSearchLightEndRadius(theSearchLight: SearchLight): number | false;

/**
 * This function gets the start position of a searchlight element.
 * @param theSearchLight the searchlight to get the position where the searchlight's light cone starts.
 * @returns If the specified searchlight element is valid, this function will return three float, which are the three coordinates of searchlight's start position. If not, it will return false plus an error message.
 * @see https://wiki.mtasa.com/wiki/GetSearchLightStartPosition
 * @tupleReturn
 **/
declare function getSearchLightStartPosition(theSearchLight: SearchLight): [number, number, number] | [false];

/**
 * This function gets the start radius of a searchlight element.
 * @param theSearchLight the searchlight to get the radius of the searchlight's light cone in its beginning.
 * @returns If the specified searchlight element is valid, this function will return one float, which is the searchlight's start radius. If not, it will return false plus an error message.
 * @see https://wiki.mtasa.com/wiki/GetSearchLightStartRadius
 **/
declare function getSearchLightStartRadius(theSearchLight: SearchLight): number | false;

/**
 * This function sets the end position of a searchlight element.
 * @param theSearchLight the searchlight to modify the property of.
 * @param endX the X coordinate where the searchlight light cone will end.
 * @param endY the Y coordinate where the searchlight light cone will end.
 * @param endZ the Z coordinate where the searchlight light cone will end.
 * @returns If every argument is correct, this function returns true. If not, it will return false plus an error message.
 * @see https://wiki.mtasa.com/wiki/SetSearchLightEndPosition
 **/
declare function setSearchLightEndPosition(theSearchLight: SearchLight, endX: number, endY: number, endZ: number): boolean;

/**
 * This function sets the end radius of a searchlight element.
 * @param theSearchlight the searchlight to modify the property of.
 * @param endRadius the radius of the searchlight's light cone in its end.
 * @returns If every argument is correct, this function returns true. If not, it will return false plus an error message.
 * @see https://wiki.mtasa.com/wiki/SetSearchLightEndRadius
 **/
declare function setSearchLightEndRadius(theSearchlight: SearchLight, endRadius: number): boolean;

/**
 * This function sets the start position of a searchlight element.
 * @param theSearchLight the searchlight to modify the property of.
 * @param startX the X coordinate where the searchlight light cone will start.
 * @param startY the Y coordinate where the searchlight light cone will start.
 * @param startZ the Z coordinate where the searchlight light cone will start.
 * @returns If every argument is correct, this function returns true. If not, it will return false plus an error message.
 * @see https://wiki.mtasa.com/wiki/SetSearchLightStartPosition
 **/
declare function setSearchLightStartPosition(theSearchLight: SearchLight, startX: number, startY: number, startZ: number): boolean;

/**
 * This function sets the start radius of a searchlight element.
 * @param theSearchlight the searchlight to modify the property of.
 * @param startRadius the radius of the searchlight's light cone in its beginning.
 * @returns If every argument is correct, this function returns true. If not, it will return false plus an error message.
 * @see https://wiki.mtasa.com/wiki/SetSearchLightStartRadius
 **/
declare function setSearchLightStartRadius(theSearchlight: SearchLight, startRadius: number): boolean;
