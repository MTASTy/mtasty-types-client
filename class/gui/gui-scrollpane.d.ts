/** @customConstructor GuiScrollBar */
declare class GuiScrollPane extends BaseGuiElement {
  horizontalScrollPosition: number;
  verticalScrollPosition: number;

  /**
   * This creates a GUI scroll pane.
   * @param x the 2D x offset of the GUI scrollpane from its parent. This is affected by the relative argument.
   * @param y the 2D y offset of the GUI scrollpane from its parent. This is affected by the relative argument.
   * @param width the width of the GUI scrollpane. This is affected by the relative argument.
   * @param height the height of the GUI scrollpane. This is affected by the relative argument.
   * @param relative whether sizes and positions are relative to their parent's. If this is true, then all measures must be between 0 and 1, representing sizes/positions as a fraction of the parent widget's size.
   * @param parent the gui-element this scrollpane is attached to. By default, it is undefined, meaning the widget is attached to the background.
   * @see https://wiki.mtasa.com/wiki/GuiCreateScrollPane
   **/
  constructor(x: number, y: number, width: number, height: number, relative: boolean, parent?: BaseGuiElement);

  /**
   * This function is used to get the position of a horizontal scroll pane as a percentage.
   * @returns Returns a number ranging between 0 and 100.
   * @see https://wiki.mtasa.com/wiki/GuiScrollPaneGetHorizontalScrollPosition
   **/
  getHorizontalScrollPosition(): number;

  /**
   * This function is used to get the position of a vertical scroll pane as a percentage.
   * @returns Returns a number ranging between 0 and 100.
   * @see https://wiki.mtasa.com/wiki/GuiScrollPaneGetVerticalScrollPosition
   **/
  getVerticalScrollPosition(): number;

  /**
   * This function allows a scrollpane's scrollbars to be forced on, or returned to default.
   * @param horizontal A bool where true forces the horizontal scrollbar on, and false returns them to default.
   * @param vertical A bool where true forces the vertical scrollbar on, and false returns them to default.
   * @returns Returns true if the call was successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiScrollPaneSetScrollBars
   **/
  setScrollBars(horizontal: boolean, vertical: boolean): boolean;

  /**
   * This function is used to set the position of a horizontal scroll pane as a percentage.
   * @param position a number ranging from 0 - 100.
   * @returns Returns true if the position was set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiScrollPaneSetHorizontalScrollPosition
   **/
  setHorizontalScrollPosition(position: number): boolean;

  /**
   * This function is used to set the position of a vertical scroll pane as a percentage..
   * @param position a number ranging from 0 - 100.
   * @returns Returns true if the position was set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiScrollPaneSetVerticalScrollPosition
   **/
  setVerticalScrollPosition(position: number): boolean;
}
