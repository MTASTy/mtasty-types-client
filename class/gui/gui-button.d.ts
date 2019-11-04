/** @customConstructor GuiButton */
declare class GuiButton extends BaseGuiElement {
  /**
   * This function allows creation of a GUI Button, which is a clickable item as part of GUI.
   * @param x A number of the 2D x position of the GUI button on a player's screen. This is affected by the relative argument.
   * @param y A number of the 2D y position of the GUI button on a player's screen. This is affected by the relative argument.
   * @param width A number of the width of the GUI button. This is affected by the relative argument.
   * @param height A number of the height of the GUI button. This is affected by the relative argument.
   * @param text A string of the text that will be displayed as a label on the button.
   * @param relative This is whether sizes and positioning are relative. If this is true, then all x, y, width and height numbers must be between 0 and 1, representing sizes relative to the parent.
   * @param [parent=undefined] This is the parent that the gui button is attached to.If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
   * @see https://wiki.mtasa.com/wiki/GuiCreateButton
   **/
  constructor(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: BaseGuiElement);
}
