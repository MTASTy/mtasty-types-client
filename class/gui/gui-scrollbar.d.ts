/** @customConstructor GuiScrollBar */
declare class GuiScrollBar extends BaseGuiElement {
  scrollPosition: number;

  /**
   * This function creates a GUI scrollbar.
   * You can use the functions guiScrollPaneSetHorizontalScrollPosition, guiScrollPaneSetVerticalScrollPosition, guiScrollPaneGetHorizontalScrollPosition and guiScrollPaneGetVerticalScrollPosition to read and modify the scrollbar's scroll.
   * @param x the 2D x offset of the GUI scrollbar from its parent. This is affected by the relative argument.
   * @param y the 2D y offset of the GUI scrollbar from its parent. This is affected by the relative argument.
   * @param width the width of the GUI scrollbar. This is affected by the relative argument.
   * @param height the height of the GUI scrollbar. This is affected by the relative argument.
   * @param horizontal whether this scrollbar is horizontal (true) or vertical (false).
   * @param relative whether sizes and positions are relative to their parent's. If this is true, then all measures must be between 0 and 1, representing sizes/positions as a fraction of the parent widget's size.
   * @param parent the gui-element this scrollbar is attached to. By default, it is undefined, meaning the widget is attached to the background.
   * @see https://wiki.mtasa.com/wiki/GuiCreateScrollBar
   **/
  constructor(x: number, y: number, width: number, height: number, horizontal: boolean, relative: boolean, parent?: BaseGuiElement);

  /**
   * This function gets the scroll amount of a scrollbar as a percentage.
   * @returns Returns a number ranging between 0 and 100, representing the amount the scrollbar has been scrolled.
   * @see https://wiki.mtasa.com/wiki/GuiScrollBarGetScrollPosition
   **/
  getScrollPosition(): number;

  /**
   * This function is used to set the scroll amount of a scrollbar as a percentage.
   * @param amount a number ranging from 0 - 100 representing the amount you wish to set the scroll bar.
   * @returns Returns true if the scroll position was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiScrollBarSetScrollPosition
   **/
  setScrollPosition(amount: number): boolean;
}
