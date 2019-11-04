/** @customConstructor GuiComboBox */
declare class GuiComboBox extends BaseGuiElement {
  selected: number;
  readonly itemCount: number;
  open: boolean;

  /**
   * This function creates a combobox GUI element, which you can compare to a gridlist with a dropdown feature.
   * - Note: The height of a combobox must be enough to fit the drop down menu, else the drop down won't appear. See guiComboBoxAdjustHeight to give your combobox the correct height.
   * @param x A number of the 2D x position of the GUI combobox on a player's screen. This is affected by the relative argument.
   * @param y A number of the 2D y position of the GUI combobox on a player's screen. This is affected by the relative argument.
   * @param width A number of the width of the GUI combobox. This is affected by the relative argument.
   * @param height A number of the height of the GUI combobox. This is affected by the relative argument.
   * @param caption A string for what the title of your combobox will be. This will be shown if no item is selected.
   * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing sizes relative to the parent.
   * @param [parent=undefined] This is the parent that the GUI combobox is attached to.If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
   * @see https://wiki.mtasa.com/wiki/GuiCreateComboBox
   **/
  constructor(x: number, y: number, width: number, height: number, caption: string, relative: boolean, parent?: BaseGuiElement);

  /**
   * Adds an item to a combobox.
   * @param value The text that the item will contain.
   * @returns Returns the item ID.
   * @see https://wiki.mtasa.com/wiki/GuiComboBoxAddItem
   **/
  addItem(value: string): number;

  /**
   * This function removes all the items from a combobox.
   * @returns Returns true if the combobox element is valid and has been cleared successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiComboBoxClear
   **/
  clear(): boolean;

  /**
   * This function removes an item from a combobox.
   * @param itemId The index of the item to remove.
   * @returns Returns true if the item was removes successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiComboBoxRemoveItem
   **/
  removeItem(itemId: number): boolean;

  /**
   * This function returns the index of the selected combobox item.
   * @returns Returns the index of the selected item, -1 if no item is selected.
   * @see https://wiki.mtasa.com/wiki/GuiComboBoxGetSelected
   **/
  getSelected(): number;

  /**
   * This function retrieves the text from a specific combobox item.
   * @param itemId The index of the item.
   * @returns Returns the text of the item if the argument is right, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiComboBoxGetItemText
   **/
  getItemText(itemId: number): string | false;

  /**
   * This function returns the state of combobox.
   * @returns Returns true if combobox is opened, false if combobox is closed.
   * @see https://wiki.mtasa.com/wiki/GuiComboBoxIsOpen
   **/
  isOpen(): boolean;

  /**
   * This function returns the number of items in a combo box.
   * @returns Returns the number of items.
   * @see https://wiki.mtasa.com/wiki/GuiComboBoxGetItemCount
   **/
  getItemCount(): number;

  /**
   * This function changes the text of a combobox item.
   * @param itemId The index of the item.
   * @param text The text you want to put in (does NOT accept numbers, use tostring for that).
   * @returns Returns true if the text was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiComboBoxSetItemText
   **/
  setItemText(itemId: number, text: string): boolean;

  /**
   * This function sets the selected item from a combobox.
   * @param itemIndex the item you want to select (item 0 is the first item). If -1 is specified, then the combo box text is set to it's caption.
   * @returns Returns true if the selected item has been changed successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiComboBoxSetSelected
   **/
  setSelected(itemIndex: number): boolean;

  /**
   * This function set combo box state as open or close.
   * @param state The state of combobox. true, if the combobox is to be opened. false if the combobox is to be closed.
   * @returns Returns true if is successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiComboBoxSetOpen
   **/
  setOpen(state: boolean): boolean;
}
