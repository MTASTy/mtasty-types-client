/** @customConstructor GuiEdit */
declare class GuiEdit extends BaseGuiElement {
  caretIndex: number;
  readOnly: boolean;
  masked: boolean;
  maxLength: number;

  /**
   * This function is for creating a new GUI edit box.
   * This is a text box in which the user can input text.
   * Edit boxes only allow a single line of text.
   * If you want to allow multiple lines of text create a memo box using guiCreateMemo.
   * @param x A number of the 2D x position of the GUI edit box on a player's screen. This is affected by the relative argument.
   * @param y A number of the 2D y position of the GUI edit box on a player's screen. This is affected by the relative argument.
   * @param width A number of the width of the GUI edit box. This is affected by the relative argument.
   * @param height A number of the height of the GUI edit box. This is affected by the relative argument.
   * @param text A string of the text that will be displayed by default in the edit box.
   * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing measures relative to the parent.
   * @param [parent=undefined] This is the parent that the GUI edit box is attached to.If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
   * @see https://wiki.mtasa.com/wiki/GuiCreateEdit
   **/
  constructor(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: BaseGuiElement);

  /**
   * This function returns the caret (the text cursor) position within the editbox.
   * @returns Returns the caret index on success.
   * @see https://wiki.mtasa.com/wiki/GuiEditGetCaretIndex
   **/
  getCaretIndex(): number;

  /**
   * This function sets the current position of the caret (the text cursor) within the edit box.
   * @param index A number referring to the desired position within the box.
   * @returns Returns true if the index was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiEditSetCaretIndex
   **/
  setCaretIndex(index: number): boolean;

  /**
   * This function allows you to set or remove read-only status for an edit box.
   * If read-only is set to true, the box is not editable.
   * @param status A boolean value indicating whether read-only is to be enabled or disabled.
   * @returns Returns true if edit field's read-only status was changed successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiEditSetReadOnly
   **/
  setReadOnly(status: boolean): boolean;

  /**
   * This function sets or removes masking (covering up the text being typed) for password text fields.
   * @param status A boolean value indicating whether masking is to be enabled or disabled.
   * @returns Returns true if the index was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiEditSetMasked
   **/
  setMasked(status: boolean): boolean;

  /**
   * This function sets the maximum text length that can be typed into an edit box.
   * @param length A number indicating the maximum number of characters that can be typed into the box.
   * @returns Returns true if the max length was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiEditSetMaxLength
   **/
  setMaxLength(length: number): boolean;
}
