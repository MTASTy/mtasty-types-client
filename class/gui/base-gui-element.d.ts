declare class BaseGuiElement extends BaseElement {
  readonly chatBoxInputActive: boolean;
  readonly consoleActive: boolean;
  debugViewActive: boolean;
  readonly mainMenuActive: boolean;
  readonly mtaWindowActive: boolean;
  readonly transferBoxActive: boolean;
  inputEnabled: boolean;
  inputMode: "allow_binds" | "no_binds" | "no_binds_when_editing";
  cursorAlpha: number; // 0-255, where 255 is fully opaque and 0 is fully transparent
  readonly cursorType: string;
  font: GuiFont | string;
  visible: boolean;
  properties: {[key: string]: any};
  alpha: number; // Ranges from 0 (fully transparent) to 1 (fully opaque). Default value is 0.80.
  enabled: boolean;
  text: string;
  size: [number, number];
  position: [number, number];
  readonly screenSize: [number, number];

  protected constructor();

  /**
   * This function brings a GUI element on top of others.
   * - Note: If property "AlwaysOnTop" sets to "True", this function will return false.
   * @returns Returns true if the function was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiBringToFront
   **/
  bringToFront(): boolean;

  /**
   * This function moves a GUI element to the very back of all other GUI elements.
   * @returns Returns true if the function was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiMoveToBack
   **/
  moveToBack(): boolean;

  /**
   * This function defocuses a focused GUI element.
   * Used primarily for edit fields and memos.
   * @returns Returns true if the function was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiBlur
   **/
  blur(): boolean;

  /**
   * This function focuses a defocused GUI element.
   * Used primarily for edit fields and memos.
   * @returns Returns true if the function was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiFocus
   **/
  focus(): boolean;

  /**
   * This function gets a list of the CEGUI property names and values of a GUI element.
   * To find out what the different properties mean, check out the CEGUI properties page.
   * @returns If the function succeeds, the return value is an object. Its keys are property names, the corresponding values are the values of the properties (both names and values are always strings).
   * @see https://wiki.mtasa.com/wiki/GuiGetProperties
   **/
  getProperties(): {[key: string]: any};

  /**
   * Alpha represents the transparency of a gui element.
   * This function allows retrieval of a gui element's current alpha.
   * @returns This function returns a positive number in between 0 and 1 of the gui element's current alpha, or false if it could not be retrieved.
   * @see https://wiki.mtasa.com/wiki/GuiGetAlpha
   **/
  // TODO: BaseElement already contain method getAlpha
  // getAlpha(): number | false;

  /**
   * This function is used to get the current font that is used to draw text in GUI elements.
   * @returns A string containing the name of the element's current font, or the custom GUI font that is used, or undefined otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGetFont
   **/
  getFont(): string | GuiFont | undefined;

  /**
   * This function determines if a GUI element is enabled.
   * @returns Returns true if the element is enabled, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGetEnabled
   **/
  getEnabled(): boolean;

  /**
   * This function determines if a GUI element is visible.
   * @returns Returns true if the element is visible, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGetVisible
   **/
  getVisible(): boolean;

  /**
   * This function is used to get the text of GUI elements like edit boxes, labels, buttons etc.
   * @returns Returns a string containing the requested element's text4.
   * @see https://wiki.mtasa.com/wiki/GuiGetText
   **/
  getText(): string;

  /**
   * This function allows retrieval of a GUI element's current position, relative to its parent.
   * @param relative A boolean representing whether the position should be relative to the element's parent width, or the number of offset pixels from the parent's origin.
   * @returns Returns numbers representing the x and y position of the element, or false if the position could not be retrieved.
   * @tupleReturn
   * @see https://wiki.mtasa.com/wiki/GuiGetPosition
   **/
  // TODO: BaseElement already contain method getPosition
  // getPosition(relative: boolean): [number, number] | [false];

  /**
   * This function gets the size of a GUI element.
   * @param relative A boolean representing whether the size should be relative to the element's parent width, or an absolute size in pixels.
   * @returns Returns the GUI element size x and y if the function has been successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGetSize
   * @tupleReturn
   **/
  getSize(relative: boolean): [number, number];

  /**
   * This function gets the value of a specific CEGUI property of a GUI element.
   * For a list of properties and their meaning, see the CEGUI properties page.
   * @param property the name of of property you want the value of.
   * @returns If the function succeeds, it returns a string with the value of the property. If it fails, it returns false.
   * @see https://wiki.mtasa.com/wiki/GuiGetProperty
   **/
  getProperty(property: string): string | false;

  /**
   * This changes the alpha level (the visibleness/transparency) of a GUI element.
   * @param alpha The visibility/transparency of the GUI element. Ranges from 0 (fully transparent) to 1 (fully opaque). Default value is 0.80.
   * @returns Returns true if the gui element's alpha was successfully changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiSetAlpha
   **/
  setAlpha(alpha: number): boolean;

  /**
   * This function enables/disables a GUI element.
   * A disabled GUI element can't be used, gets a gray aspect and doesn't receive any events.
   * @param enabled the new state.
   * @returns If the function succeeds it returns true, if it fails it returns false.
   * @see https://wiki.mtasa.com/wiki/GuiSetEnabled
   **/
  setEnabled(enabled: boolean): boolean;

  /**
   * This function sets the font of a GUI element to be used when drawing text.
   * @param font Either a custom GUI font element or the name of a built-in GUI font.
   * @returns Returns true if the font has been successfully set on the gui element, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiSetFont
   **/
  setFont(font: GuiFont | string): boolean;

  /**
   * This function changes the visibility state of a GUI element.
   * @param state the new visibility state.
   * @returns Returns true if the element's visibility could be changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiSetVisible
   **/
  setVisible(state: boolean): boolean;

  /**
   * This function sets the text of a GUI element.
   * @param text The new text.
   * @returns Returns true if text has been successfully set on the gui element, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiSetText
   **/
  setText(text: string): boolean;

  /**
   * This function sets the value of a specific CEGUI property of a GUI element.
   * For a list of properties and their meaning, see the CEGUI properties page.
   * @param property the name of of property you want the value of.
   * @param value the new value for the property.
   * @returns If the function succeeds it returns true, if it fails it returns false.
   * @see https://wiki.mtasa.com/wiki/GuiSetProperty
   **/
  setProperty(property: string, value: string): boolean;

  /**
   * This function sets the position of a GUI element.
   * @param x Position over the X axis.
   * @param y Position over the Y axis.
   * @param relative Bool that indicates if the x/y positions are relative to the elements parent element.
   * @returns Returns true if the position has been successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiSetPosition
   **/
  // TODO: BaseElement already contain method setPosition
  // setPosition(x: number, y: number, relative: boolean): boolean;

  /**
   * This function sets the dimensions (size) of a GUI element.
   * It refers to the bounding box size for GUI elements.
   * It does not make GUI elements smaller or larger in appearance.
   * @param guiElement the GUI element whose visibility is to be changed.
   * @param width The desired width setting for the gui element.
   * @param height The desired height setting for the gui element.
   * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing sizes relative to the parent.
   * @returns Returns true if the gui element's size was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiSetSize
   **/
  setSize(width: number, height: number, relative: boolean): boolean;
}
