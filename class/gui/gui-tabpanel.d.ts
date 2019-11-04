/** @customConstructor GuiTabPanel */
declare class GuiTabPanel extends BaseGuiElement {
  selectedTab: GuiTab | undefined;

  /**
   * This function creates a Tab Panel, which acts as a template to create Tabs upon.
   * @param x A number of the 2D x position of the GUI tab panel on a player's screen. This is affected by the relative argument.
   * @param y A number of the 2D y position of the GUI tab panel on a player's screen. This is affected by the relative argument.
   * @param width A number of the width of the GUI tab panel. This is affected by the relative argument.
   * @param height A number of the height of the GUI tab panel. This is affected by the relative argument.
   * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing sizes relative to the parent.
   * @param [parent=undefined] This is the parent that the tab panel is attached to.If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parent's origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
   * @see https://wiki.mtasa.com/wiki/GuiCreateTabPanel
   **/
  constructor(x: number, y: number, width: number, height: number, relative: boolean, parent?: BaseGuiElement);

  /**
   * This function returns the currently selected tab in the specified tab panel.
   * @returns Returns an element of the tab if a tab was selected or undefined if no tab was selected.
   * @see https://wiki.mtasa.com/wiki/GuiGetSelectedTab
   **/
  getSelectedTab(): GuiTab | undefined;

  /**guiCreateStaticImage
   * This function is used to change the currently selected tab in a tab panel.
   * @param theTab The tab which will be the new active tab.
   * @returns Returns true if the selected tab was changed to a new one successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiSetSelectedTab
   **/
  setSelectedTab(theTab: GuiTab): boolean;
}
