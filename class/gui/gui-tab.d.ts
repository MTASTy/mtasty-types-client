/** @customConstructor GuiTab */
declare class GuiTab extends BaseGuiElement {
  /**
   * This function creates a tab on a pre-existing tab panel.
   * A tab is a button as well as a 'dimension' that can be used to switch between information by clicking on the tabs.
   * Tabs are sorted on a tab panel in the order that they are created.
   * @param text The caption for the tab.
   * @param parent The parent tab panel, as a tab panel element type.
   * @see https://wiki.mtasa.com/wiki/GuiCreateTab
   **/
  constructor(text: string, parent: BaseGuiElement);

  /**
   * This function deletes a tab from a tab panel.
   * @param tabPanel This is the tab panel parent that the tab is attached to.
   * @returns Returns true the tab was successfully deleted, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiDeleteTab
   **/
  delete(tabPanel: GuiTabPanel): boolean;
}
