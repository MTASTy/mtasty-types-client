/**
 * This function is used to get alpha (transparency) from the client's cursor.
 * @returns Returns a int, 0-255, where 255 is fully opaque and 0 is fully transparent.
 * @see https://wiki.mtasa.com/wiki/GetCursorAlpha
 **/
declare function getCursorAlpha(): number | false;

/**
 * This function gets the current position of the mouse cursor.
 * Note that for performance reasons, the world position returned is always 300 units away.
 * If you want the exact world point (similar to onClientClick), use processLineOfSight between the camera position and the worldX/Y/Z result of this function.
 * @returns Returns 5 values: cursorX, cursorY, worldX, worldY, worldZ. The first two values are the 2D relative screen coordinates of the cursor: cursorX goes from 0 (left side of the screen) to 1 (right side), cursorY goes from 0 (top) to 1 (bottom). The 3 values that follow are the 3D world map coordinates that the cursor points at. If the cursor isn't showing, returns false as the first value.
 * @see https://wiki.mtasa.com/wiki/GetCursorPosition
 * @tupleReturn
 **/
declare function getCursorPosition(): [number, number, number, number, number] | [false];

/**
 * This function is used to determine whether or not a player's cursor is showing.
 * - Note: This retrieves the cursor state that has been set using showCursor, and thus doesn't take into account the cursor shown while the chatbox, menu or console are open. Also, keep in mind that while the client is aware of cursor states set from the server, the server doesn't know about cursor states set from the client.
 * @returns Returns true if the player's cursor is showing, false if it isn't or if invalid parameters were passed. Returns true if the player's cursor is showing, false if it isn't.
 * @see https://wiki.mtasa.com/wiki/IsCursorShowing
 **/
declare function isCursorShowing(): boolean;

/**
 * This function is used to change alpha (transparency) from the client's cursor.
 * @param alpha The alpha value to set. Value can be 0-255, where 255 is fully opaque and 0 is fully transparent.
 * @returns Returns true if the new alpha value was set, or false otherwise.
 * @see https://wiki.multitheftauto.com/wiki/SetCursorAlpha
 **/
declare function setCursorAlpha(alpha: number): boolean;

/**
 * This function sets the current position of the mouse cursor.
 * @param cursorX Position over the X axis.
 * @param cursorY Position over the Y axis.
 * @returns Returns true if the position has been successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetCursorPosition
 **/
declare function setCursorPosition(cursorX: number, cursorY: number): boolean;

/**
 * This function is used to show or hide a player's cursor.
 * - Note: Regardless of the cursor state you set using this function, the cursor will always be visible while the menu, the chatbox input line or the console are active, or if another resource has called this function.
 * @param show A boolean value determining whether to show (true) or hide (false) the cursor.
 * @param [toggleControls=true] A boolean value determining whether to disable controls whilst the cursor is showing.true implies controls are disabled, false implies controls remain enabled.
 * @returns Returns true if the player's cursor was shown or hidden successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ShowCursor
 **/
declare function showCursor(show: boolean, toggleControls?: boolean): boolean;
