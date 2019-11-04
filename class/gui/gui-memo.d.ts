/** @customConstructor GuiMemo */
declare class GuiMemo extends BaseGuiElement {
  caretIndex: number;
  verticalScrollPosition: number;
  readOnly: boolean;

  /**
   * This function creates a new GUI memo.
   * This is a multiline edit box in which the user can input text.
   * @param x A number of the 2D x position of the GUI memo on a player's screen. This is affected by the relative argument.
   * @param y A number of the 2D y position of the GUI memo on a player's screen. This is affected by the relative argument.
   * @param width A number of the width of the GUI memo. This is affected by the relative argument.
   * @param height A number of the height of the GUI memo. This is affected by the relative argument.
   * @param text A string of the text that will be displayed by default in the memo.
   * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing measures relative to the parent.
   * @param [parent=undefined] This is the parent that the GUI memo is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
   * @see https://wiki.mtasa.com/wiki/GuiCreateMemo
   **/
  constructor(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: BaseGuiElement);

  /**
   * This function returns the caret (the text cursor) position within the memo box.
   * @returns Returns the caret index.
   * @see https://wiki.mtasa.com/wiki/GuiMemoGetCaretIndex
   **/
  getCaretIndex(): number;

  /**
   * This function is used to get the vertical scroll position of a memo as a percentage.
   * @returns Returns a number ranging between 0 and 100.
   * @see https://wiki.multitheftauto.com/wiki/GuiMemoGetVerticalScrollPosition
   **/
  getVerticalScrollPosition(): number;

  /**
   * This function sets the current position of the caret (the text cursor) within the memo.
   * @param index A number referring to the desired character position within the box. 0 would be before the first character in the box, 1 before the second, etc.
   * @returns Returns true if the caret was successfully moved, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiMemoSetCaretIndex
   **/
  setCaretIndex(index: number): boolean;

  /**
   * This function is used to set the vertical scroll position of a memo as a percentage.
   * @param position a number ranging between 0 and 100.
   * @returns Returns true if the position was set, false otherwise.
   * @see https://wiki.multitheftauto.com/wiki/GuiMemoSetVerticalScrollPosition
   **/
  setVerticalScrollPosition(position: number): number | false;

  /**
   * This function allows you to set or remove read-only status for a GUI memo.
   * If read-only is set to true, the contents are not editable.
   * @param status A boolean value indicating whether read-only is to be enabled or disabled.
   * @returns Returns true if the status was successfully changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiMemoSetReadOnly
   **/
  setReadOnly(status: boolean): boolean;
}
