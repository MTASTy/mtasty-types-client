/** @customConstructor GuiCheckBox */
declare class GuiCheckBox extends BaseGuiElement {
  selected: boolean;

  /**
   * This function creates a checkbox.
   * @param x A number of the 2D x position of the checkbox on a player's screen. This is affected by the relative argument.
   * @param y A number of the 2D y position of the checkbox on a player's screen. This is affected by the relative argument.
   * @param width A number of the width of the text field next to the checkbox. This is affected by the relative argument.
   * @param height A number of the height of the text field next to the checkbox. This is affected by the relative argument.
   * @param text The text to be displayed next to the checkbox.
   * @param selected A boolean representing whether the checkbox created should be selected by default.
   * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing measures relative to the parent.
   * @param [parent=undefined] This is the parent that the checkbox is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
   * @see https://wiki.mtasa.com/wiki/GuiCreateCheckBox
   **/
  constructor(x: number, y: number, width: number, height: number, text: string, selected: boolean, relative: boolean, parent?: BaseGuiElement);

  /**
   * This function gets a checkbox's selection state.
   * @returns Returns true if the checkbox is selected, false if it is not.
   * @see https://wiki.mtasa.com/wiki/GuiCheckBoxGetSelected
   **/
  getSelected(): boolean;

  /**
   * This function selects (ticks) or unselects a checkbox.
   * @param state The state of the checkbox, where true indicates selected, and false indicates unselected.
   * @returns Returns true if the checkbox's selection state was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiCheckBoxSetSelected
   **/
  setSelected(state: boolean): boolean;
}
