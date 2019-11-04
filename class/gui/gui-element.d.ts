declare abstract class GuiElement {
  /**
   * This function returns whether the ingame chatbox is being used (accepting chatbox input) or not.
   * @returns Returns true if the chatbox is receiving input, false if not active.
   * @see https://wiki.mtasa.com/wiki/IsChatBoxInputActive
   **/
  static isChatBoxInputActive(): boolean;

  /**
   * This function returns whether the ingame console window is visible or not.
   * @returns Returns true if the console is visible, false if not.
   * @see https://wiki.mtasa.com/wiki/IsConsoleActive
   **/
  static isConsoleActive(): boolean;

  /**
   * This function returns whether the ingame debug window is visible or not. This is the debugwindow visible using the "debugscript <level>" command.
   * @returns Returns true if the debug view is visible, false if not.
   * @see https://wiki.mtasa.com/wiki/IsDebugViewActive
   **/
  static isDebugViewActive(): boolean;

  /**
   * This function enables or disables the debug window.
   * @param enabled true if debug window should be visible, false otherwise.
   * @returns Returns true, false if invalid parameters are passed.
   * @see https://wiki.mtasa.com/wiki/SetDebugViewActive
   **/
  static setDebugViewActive(enabled: boolean): boolean;

  /**
   * This function returns whether the user is in the mainmenu or not.
   * @returns Returns true if the mainmenu is visible, false if not.
   * @see https://wiki.mtasa.com/wiki/IsMainMenuActive
   **/
  static isMainMenuActive(): boolean;

  /**
   * This function returns whether any system windows that take focus are active. This includes: Chatbox input, Console window, Main menu, Transferbox.
   * To get the status of the debug view, see isDebugViewActive.
   * @returns Returns true if the focus is on the MTA window, false if it isn't.
   * @see https://wiki.mtasa.com/wiki/IsMTAWindowActive
   **/
  static isMTAWindowActive(): boolean;

  /**
   * This function returns whether the file downloading dialog box is active or not.
   * This appears when a resource is started and the client doesn't have all the files that resource requires the client to have.
   * It's important to note that resources aren't started on the client until they're completely downloaded, so a resource cannot use this function to detect if it's own files are downloaded.
   * A client-side resource triggers the onClientResourceStart event when the files it requires are downloaded.
   * @returns Returns true if the file transfer box is visible, false if not.
   * @see https://wiki.mtasa.com/wiki/IsTransferBoxActive
   **/
  static isTransferBoxActive(): boolean;

  /**
   * This function checks whether user input is focused on the GUI or the game.
   * @returns Returns true if input is focused on GUI, false if it's focused on the game.
   * @see https://wiki.mtasa.com/wiki/GuiGetInputEnabled
   **/
  static isInputEnabled(): boolean;

  /**
   * This function returns the current input mode as set by guiSetInputMode.
   * Default mode is "allow_binds".
   * @returns Returns a string defining the current input mode.
   * @see https://wiki.mtasa.com/wiki/GuiGetInputMode
   **/
  static getInputMode(): "allow_binds" | "no_binds" | "no_binds_when_editing";

  /**
   * This function is used to get the type of the current cursor image.
   * @returns Returns a string containing the cursor type.
   * @see https://wiki.mtasa.com/wiki/GuiGetCursorType
   **/
  static getCursorType(): string;

  /**
   * This function retrieves the local screen size according to the resolution they are using.
   * @returns This returns two numbers representing the player's screen resolution, width and height.
   * @see https://wiki.mtasa.com/wiki/GuiGetScreenSize
   * @tupleReturn
   **/
  static getScreenSize(): [number, number];

  /**
   * This function enables or disables input focus for the GUI.
   * This means that any keybinds or MTA binds are overidden so that text can be input into an editbox, for example.
   * In other words, keys such as t and y which activate the chatbox are disabled.
   * guiSetInputMode can be used as an extended version of guiSetInputEnabled since it provides the same functionality with one added feature.
   * @param enabled true if input should go to GUI, false if it should go to the game.
   * @returns Returns true if input mode could be changed, false if invalid parameters are passed.
   * @see https://wiki.mtasa.com/wiki/GuiSetInputEnabled
   **/
  static setInputEnabled(enabled: boolean): boolean;

  /**
   * This function controls the input mode to define whether or not (and when) keybinds or MTA binds are overridden (disabled) so that text can be input into an editbox.
   * @param mode a string representing the desired input mode.
   * @returns Returns true if input mode could be changed, false if invalid parameters are passed.
   * @see https://wiki.mtasa.com/wiki/GuiSetInputMode
   **/
  static setInputMode(mode: "allow_binds" | "no_binds" | "no_binds_when_editing"): boolean;
}
