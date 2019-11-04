/** @customConstructor GuiGridList */
declare class GuiGridList extends BaseGuiElement {
  readonly rowCount: number;
  readonly selectedCount: number;
  readonly selectedItems: {[key: number]: {[key: string]: number}};
  readonly columnCount: number;
  selectionMode: number; // Can be the following values: 0 - 9
  sortingEnabled: boolean;
  horizontalScrollPosition: number;
  verticalScrollPosition: number;

  /**
   * This function creates a grid list GUI element.
   * These are menu's which are designed in lists and can have multiple columns.
   * A good example of a gridlist element can be found in MTA's settings box, under Controls.
   * @param x A number of the 2D x position of the GUI gridlist on a player's screen. This is affected by the relative argument.
   * @param y A number of the 2D y position of the GUI gridlist on a player's screen. This is affected by the relative argument.
   * @param width A number of the width of the GUI gridlist. This is affected by the relative argument.
   * @param height A number of the height of the GUI gridlist. This is affected by the relative argument.
   * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing sizes relative to the parent.
   * @param [parent=undefined] This is the parent that the gui gridlist is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
   * @see https://wiki.mtasa.com/wiki/GuiCreateGridList
   **/
  constructor(x: number, y: number, width: number, height: number, relative: boolean, parent?: BaseGuiElement);

  /**
   * This function is used to create columns in grid lists.
   * @param title Title of the column.
   * @param width Column width, relative to the grid list width.
   * @returns Returns the column id if it was created, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListAddColumn
   **/
  addColumn(title: string, width: number): number | false;

  /**
   * Adds a row to a grid list, and optionally add simple text items with your rows.
   * Use guiGridListSetItemText to add row headers.
   * @param itemText The text for the column item in the row. Either a string or a number can be passed (use numbers for sorting purposes).
   * @returns Returns the row id if it has been created, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListAddRow
   **/
  addRow(...itemText: string[] | number[]): number | false;

  /**
   * This allows you to automatically size a column to display everything in it correctly, with the most minimal width.
   * @param columnIndex The ID of the column you want to be auto-sized.
   * @returns Returns true if the column was auto-sized, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListAutoSizeColumn
   **/
  autoSizeColumn(columnIndex: number): boolean;

  /**
   * This function clears all the data from a grid list.
   * @returns Returns true if the grid list has been cleared successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListClear
   **/
  clear(): boolean;

  /**
   * This allows you to insert a new row after a specified row, and simultaneously set text.
   * Good for inserting new rows in the middle of existing rows.
   * To insert at the top use -1 as row index.
   * @param rowIndex Row ID of the row you want to insert the new row after.
   * @param itemText The text for the column item in the row. Either a string or a number can be passed (use numbers for sorting purposes).
   * @returns Returns true if the row was successfully added, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListInsertRowAfter
   **/
  insertRowAfter(rowIndex?: number, ...itemText: string[] | number[]): number | false;

  /**
   * This allows you to delete columns that exist in grid lists.
   * @param columnIndex Column ID.
   * @returns Returns true if the grid list column was successfully removed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListRemoveColumn
   **/
  removeColumn(columnIndex: number): boolean;

  /**
   * This allows you to delete rows that exist in grid lists.
   * @param rowIndex Row ID.
   * @returns Returns true if the grid list row was successfully removed, false otherwise.
   * @see https://wiki.multitheftauto.com/wiki/GuiGridListRemoveRow
   **/
  removeRow(rowIndex: number): boolean;

  /**
   * With this function you can retrieve the string data associated with an item in a grid list.
   * This is not the text that is displayed on the item, but an internal string that you can use to hold extra information about the item.
   * - Note: This function will only work after you set the item's text using guiGridListSetItemText!
   * @param rowIndex the row index of the item.
   * @param columnIndex the column index of the item.
   * @returns Returns the item data of the specified item if succesful, false if one of the arguments was invalid.
   * @see https://wiki.mtasa.com/wiki/GuiGridListGetItemData
   **/
  getItemData(rowIndex: number, columnIndex: number): any;

  /**
   * This function retrieves the text from a specific grid list item.
   * @param rowIndex row id of the item.
   * @param columnIndex column id of the item.
   * @returns Returns the text of the item if the arguments are right, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListGetItemText
   **/
  getItemText(rowIndex: number, columnIndex: number): string | false;

  /**
   * This function returns the number of rows in a grid list.
   * @returns Returns the number of rows.
   * @see https://wiki.mtasa.com/wiki/GuiGridListGetRowCount
   **/
  getRowCount(): number;

  /**
   * This function returns the row and column indexes of the selected item in a grid list.
   * @returns Returns the row and column indexes of the selected item if the specified grid list is valid and has a selected item, (-1, -1) if no item is selected.
   * @see https://wiki.mtasa.com/wiki/GuiGridListGetSelectedItem
   * @tupleReturn
   **/
  getSelectedItem(): [number, number];

  /**
   * This function retrieves the current selection mode of a gui gridlist.
   * @returns Returns the ID of the current gridlist's selection mode.
   * @see https://wiki.mtasa.com/wiki/GuiGridListGetSelectionMode
   **/
  getSelectionMode(): number;

  /**
   * This function checks whether the gridlist sorting is enabled or disabled.
   * @returns Returns true if sorting is enabled, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListIsSortingEnabled
   **/
  isSortingEnabled(): boolean;

  /**
   * This function gets the color of a gridlist item.
   * @param rowIndex Row ID.
   * @param columnIndex Column ID.
   * @returns Returns four numbers values, representing the amount of red, green, blue and alpha if successful. false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListGetItemColor
   * @tupleReturn
   **/
  getItemColor(rowIndex: number, columnIndex: number): [number, number, number, number] | [false];

  /**
   * This function is used to get the column title of a gridlist column.
   * @param columnIndex Column ID.
   * @returns Returns a string containing the column title, or false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListGetColumnTitle
   **/
  getColumnTitle(columnIndex: number): string | false;

  /**
   * This function is used to get the horizontal scroll position from a grid list.
   * @returns Returns a number between 0 and 100 indicating the horizontal scroll position.
   * @see https://wiki.mtasa.com/wiki/GuiGridListGetHorizontalScrollPosition
   **/
  getHorizontalScrollPosition(): number;

  /**
   * This function is used to get the vertical scroll position from a grid list.
   * @returns Returns a number between 0 and 100 indicating the vertical scroll position.
   * @see https://wiki.mtasa.com/wiki/GuiGridListGetVerticalScrollPosition
   **/
  getVerticalScrollPosition(): number;

  /**
   * This function returns the amount of options selected in the specified grid list.
   * @returns Returns a number representing the amount of selected options.
   * @see https://wiki.mtasa.com/wiki/GuiGridListGetSelectedCount
   **/
  getSelectedCount(): number;

  /**
   * This function returns the items selected in the specified grid list.
   * Note that for some reason the column ID is 1 lower than it should be, for example 0 is returned but if you try and get the text for column 0 there is nothing, but column 1 has what you clicked on.
   * @returns Returns an object over the selected items in the grid list in this format: if everything was successful.
   * @see https://wiki.mtasa.com/wiki/GuiGridListGetSelectedItems
   **/
  guiGridListGetSelectedItems(): {[key: number]: {[key: string]: number}};

  /**
   * This allows you to get the count of existing columns in a gridlist.
   * @returns Returns a number with the amount of columns in the gridlist.
   * @see https://wiki.mtasa.com/wiki/GuiGridListGetColumnCount
   **/
  getColumnCount(): number;

  /**
   * This function sets a Item Data associated to a grid list item.
   * - Note: This function will only work after you set the item's text using guiGridListSetItemText!
   * @param rowIndex The row of the item you wish to set to.
   * @param columnIndex The column of the item you wish to set to.
   * @param data The data you wish to set to the item.
   * @returns Returns true if the data was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListSetItemData
   **/
  setItemData(rowIndex: number, columnIndex: number, data: any): boolean;

  /**
   * This function changes the text of a gridlist item.
   * Notice: This function doesn't work well with Sorting.
   * If you are using sorting, please use the optional arguments of guiGridListAddRow as much as possible.
   * @param rowIndex Row ID.
   * @param columnIndex Column ID.
   * @param text The text you want to put in (does NOT accept numbers, use tostring for that).
   * @param section Determines if the item is a section.
   * @param number Tells whether the text item is a number value or not (used for sorting).
   * @returns Returns true if the item text was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListSetItemText
   **/
  setItemText(rowIndex: number, columnIndex: number, text: string, section: boolean, number: boolean): boolean;

  /**
   * This function allows a gridlist's scrollbar to be forced on, or returned to default.
   * @param horizontalBar A bool where true forces the horizontal scrollbar on, and false returns them to default.
   * @param verticalBar A bool where true forces the verical scrollbar on, and false returns them to default.
   * @returns Returns true if the scrollbars were successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListSetScrollBars
   **/
  setScrollBars(horizontalBar: boolean, verticalBar: boolean): boolean;

  /**
   * This function selects an item from a gridlist.
   * If you wish to deselect whatever item is selected, pass 0 as both the rowIndex and columnIndex arguments.
   * @param rowIndex the row you want to select (index 0 is the first row).
   * @param columnIndex the column you want to select (index 1 is the first column).
   * @param [bReset=true] set to false for multiple selections.
   * @returns Returns true if the passed arguments are correct and the item has been selected, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListSetSelectedItem
   **/
  setSelectedItem(rowIndex: number, columnIndex: number, bReset?: boolean): boolean;

  /**
   * This function sets the selection mode of a gui gridlist.
   * For example, the MTA server browser selects a whole row, while the Controls dialog selects a single cell.
   * To select multiple items you must be holding down 'ctrl'.
   * @param mode The mode of the selection. Can be the following values: 0 - 9.
   * @returns Returns true if the selection mode was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListSetSelectionMode
   **/
  setSelectionMode(mode: number): boolean;

  /**
   * This function allows the disabling or enabling of sorting within a gridlist.
   * Sorting is achieved by clicking a column header.
   * Gridlist items will be sorted according to the clicked column.
   * By default, gridlists have sorting enabled.
   * This function will allow you to toggle this.
   * @param enabled A boolean representing whether the sorting is enabled, or disabled.
   * @returns Returns true if sorting was successfully toggled, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListSetSortingEnabled
   **/
  setSortingEnabled(enabled: boolean): boolean;

  /**
   * This allows you to set the width of an existing column in a gridlist.
   * @param columnIndex Column ID of the size you want to change.
   * @param width A number or number of the width of the column depending on the relative argument.
   * @param relative A boolean defining whether width measurements will be relative to the Gridlist size, or absolute pixels.
   * @returns Returns true if the gridlist column width was successfully set, false if bad arguments were given.
   * @see https://wiki.mtasa.com/wiki/GuiGridListSetColumnWidth
   **/
  setColumnWidth(columnIndex: number, width: number, relative: boolean): boolean;

  /**
   * This function changes the color of a gridlist item.
   * @param rowIndex Row ID.
   * @param columnIndex Column ID.
   * @param red The amount of red in the color (0-255).
   * @param green The amount of green in the color (0-255).
   * @param blue The amount of blue in the color (0-255).
   * @param [alpha=255] The amount of alpha in the color (0-255).
   * @returns Returns true if the item color was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListSetItemColor
   **/
  setItemColor(rowIndex: number, columnIndex: number, red: number, green: number, blue: number, alpha?: number): boolean;

  /**
   * This function is used to change the column title of a gridlist column.
   * @param columnIndex Column ID.
   * @param title The title of the column.
   * @returns Returns true if the new title was set, or false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListSetColumnTitle
   **/
  setColumnTitle(columnIndex: number, title: string): boolean;

  /**
   * This function is used to set the horizontal scroll position from a grid list.
   * @param fPosition A number representing the horizontal scroll position (0-100).
   * @returns Returns true if the horizontal scroll position was set, or false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListSetHorizontalScrollPosition
   **/
  setHorizontalScrollPosition(fPosition: number): boolean;

  /**
   * This function is used to set the vertical scroll position from a grid list.
   * @param fPosition A number representing the vertical scroll position (0-100).
   * @returns Returns true if the vertical scroll position was set, or false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiGridListSetVerticalScrollPosition
   **/
  setVerticalScrollPosition(fPosition: number): boolean;
}
