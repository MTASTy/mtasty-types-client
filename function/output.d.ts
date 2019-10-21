/**
 * This function clears the chatbox.
 * It does not clear the console (F8).
 * @returns Returns true if the player's chat was cleared successfully, false otherwise. Returns true if the player's chat was cleared successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ClearChatBox
 **/
declare function clearChatBox(): boolean;

/**
 * This function checks if player's chat is visible.
 * @returns Returns true if the chat is visible, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsChatVisible
 **/
declare function isChatVisible(): boolean;

/**
 * This outputs the specified text string to the chatbox.
 * It can be specified as a message to certain player(s) or all players.
 * It can optionally allow you to embed color changes into the string by setting the colorCoded boolean to true.
 * - Note: Avoid outputting text to the chatbox that isn't actually chat, as this can be annoying for players. Output information and status messages to the HUD.
 * @param text The text string that you wish to send to the chat window.If more than 256 characters it will not be showed in chat.
 * @param [r=231] The amount of red in the color of the text. Default value is 231.
 * @param [g=217] The amount of green in the color of the text. Default value is 217.
 * @param [b=176] The amount of blue in the color of the text. Default value is 176.
 * @param [colorCoded=false] A boolean value determining whether or not '#RRGGBB' tags should be used.
 * @returns Returns true if the message was displayed successfully. Returns false if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/OutputChatBox
 **/
declare function outputChatBox(text: string, r?: number, g?: number, b?: number, colorCoded?: boolean): boolean;

/**
 * This outputs the specified text string to the console window (accessed with F8 or ~ key).
 * It can be specified as a message to certain player(s) or all players.
 * @param text The text string that you wish to send to the console window.
 * @returns Returns true if the message was displayed successfully. Returns false if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/OutputConsole
 **/
declare function outputConsole(text: string): boolean;

/**
 * This function outputs scripting debug messages, which can be read by enabling the debug textbox.
 * The debug display level can then be set so that info or warning messages get filtered out.
 * @param text the text to be output to the debug box.
 * @param [level=3] the debug message level.
 * @param [red=255] The amount of red in the color of the text. Default value is 255.
 * @param [green=255] The amount of green in the color of the text. Default value is 255.
 * @param [blue=255] The amount of blue in the color of the text. Default value is 255.
 * @returns Returns true if the debug message was successfully output, false if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/OutputDebugString
 **/
declare function outputDebugString(text: string, level?: 0 | 1 | 2 | 3, red?: number, green?: number, blue?: number): boolean;

/**
 * This function is used to show or hide the player's chat.
 * @param show A boolean value determining whether to show (true) or hide (false) the chat.
 * @returns Returns true if the player's chat was shown or hidden successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ShowChat
 **/
declare function showChat(show: boolean): boolean;
