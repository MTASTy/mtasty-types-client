/** @customConstructor GuiWindow */
declare class GuiWindow extends BaseGuiElement {
  movable: boolean;
  sizable: boolean;

  /**
   * This function is for creating a new GUI window.
   * This provides a base for other gui elements to be created within.
   * However, windows do not have a parent and cannot be created in any GUI elements.
   * @param x A number of the 2D x position of the GUI window on a player's screen. This is affected by the relative argument.
   * @param y A number of the 2D y position of the GUI window on a player's screen. This is affected by the relative argument.
   * @param width A number of the width of the GUI window. This is affected by the relative argument.
   * @param height A number of the height of the GUI window. This is affected by the relative argument.
   * @param titleBarText A string of the text that will be displayed in the title bar of the window.
   * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing sizes/positions as a fraction of the screen size. If false, then the size and co-ordinates are based on client's resolution, accessible using guiGetScreenSize.
   * @see https://wiki.mtasa.com/wiki/GuiCreateWindow
   **/
  constructor(x: number, y: number, width: number, height: number, titleBarText: string, relative: boolean);

  /**
   * This function allows you to specify whether or not a user can move a GUI window.
   * @param status A boolean value indicating whether the window is movable or not.
   * @returns Returns true if the function is successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiWindowSetMovable
   **/
  setMovable(status: boolean): boolean;

  /**
   * This function enables or disables user resizing of a GUI window.
   * @param status A boolean value indicating whether user resizing is to be enabled or disabled.
   * @returns Returns true if the function is successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiWindowSetSizable
   **/
  setSizable(status: boolean): boolean;

  /**
   * This function checks if a GUI window is movable.
   * @returns Returns true if the window is movable, false if not.
   * @see https://wiki.mtasa.com/wiki/GuiWindowIsMovable
   **/
  isMovable(): boolean;

  /**
   * This function checks if a GUI window is sizable.
   * @returns Returns true if the window is sizable, false if not.
   * @see https://wiki.mtasa.com/wiki/GuiWindowIsSizable
   **/
  isSizable(): boolean;
}
