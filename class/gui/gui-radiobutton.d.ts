/** @customConstructor GuiRadioButton */
declare class GuiRadioButton extends BaseGuiElement {
  selected: boolean;

  /**
   * This function creates a radio button.
   * @param x A number of the 2D x position of the radio button on a player's screen. This is affected by the relative argument.
   * @param y A number of the 2D y position of the radio button on a player's screen. This is affected by the relative argument.
   * @param width A number of the width of the text field next to the radio button. This is affected by the relative argument.
   * @param height A number of the height of the text field next to the radio button. This is affected by the relative argument.
   * @param text The text to be displayed next to the radio button.
   * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing measures relative to the parent.
   * @param [parent=undefined] This is the parent that the radio button is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parent's origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.NOTE: All radio buttons become grouped together with their parent item.Only ONE radio button per group/parent will be able to be selected at the same time.
   * @see https://wiki.mtasa.com/wiki/GuiCreateRadioButton
   **/
  constructor(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: BaseGuiElement);

  /**
   * This function gets a radio button's selection state.
   * @returns Returns true if the radio button is selected, false if it is not.
   * @see https://wiki.mtasa.com/wiki/GuiRadioButtonGetSelected
   **/
  getSelected(GuiRadioButton): boolean;

  /**
   * This function selects or unselects a radio button.
   * @param state The state of the radio button, where true indicates selected, and false indicates unselected.
   * @returns Returns true if the radio button's selection state was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiRadioButtonSetSelected
   **/
  setSelected(state: boolean): boolean;
}
