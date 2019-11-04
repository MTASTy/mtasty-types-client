/** @customConstructor GuiLabel */
declare class GuiLabel extends BaseGuiElement {
  readonly fontHeight: number;
  readonly textExtent: number;

  /**
   * This function is for creating a new GUI label. A label is simply a piece of text that cannot be edited by the user. If you would like to have a bigger text you'd have to change its font because font size is not supported.
   * @param x A number of the 2D x position of the GUI label on a player's screen. This is affected by the relative argument.
   * @param y A number of the 2D y position of the GUI label on a player's screen. This is affected by the relative argument.
   * @param width A number of the width of the GUI label. This is affected by the relative argument.
   * @param height A number of the height of the GUI label. This is affected by the relative argument.
   * @param text A string of the text that will be displayed by the label.
   * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing sizes relative to the parent.
   * @param [parent=undefined] This is the parent that the gui label is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
   * @see https://wiki.mtasa.com/wiki/GuiCreateLabel
   **/
  constructor(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: BaseGuiElement);

  /**
   * This function returns the height of the font currently used in a GUI text label.
   * @returns Returns the absolute height of the font currently used in the text label.
   * @see https://wiki.mtasa.com/wiki/GuiLabelGetFontHeight
   **/
  getFontHeight(): number;

  /**
   * This function returns the extent, or width, of the current text inside a GUI text label.
   * @returns Returns the absolute width of the current text inside the text label.
   * @see https://wiki.mtasa.com/wiki/GuiLabelGetTextExtent
   **/
  getTextExtent(): number;

  /**
   * This function gets the color of a label.
   * @returns Returns three numbers values, representing the amount of red, green, blue.
   * @see https://wiki.mtasa.com/wiki/GuiLabelGetColor
   * @tupleReturn
   **/
  getColor(): [number, number, number];

  /**
   * This function allows you to set the color of a GUI label.
   * @param red A number specifying the amount of red (0 to 255).
   * @param green A number specifying the amount of green (0 to 255).
   * @param blue A number specifying the amount of blue (0 to 255).
   * @returns Returns true if the the color of the gui label was successfully changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiLabelSetColor
   **/
  setColor(red: number, green: number, blue: number): boolean;

  /**
   * This function sets the horizontal alignment of a text label.
   * @param align The alignment type. Valid type strings are: "left", "center", "right".
   * @param [wordwrap=false] Whether or not to enable wordwrap for the gui-label.
   * @returns Returns true on success, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiLabelSetHorizontalAlign
   **/
  setHorizontalAlign(align: "left" | "center" | "right", wordwrap?: boolean): boolean;

  /**
   * This function sets the vertical alignment of a text label.
   * @param theLabel The text label to set the vertical alignment on.
   * @param align The alignment type. Valid type strings are: "top", "bottom", "center".
   * @returns Returns true on success, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiLabelSetVerticalAlign
   **/
  setVerticalAlign(theLabel: GuiLabel, align: "top" | "bottom" | "center"): boolean;
}
