/** @customConstructor GuiBrowser */
declare class GuiBrowser extends BaseGuiElement {
  readonly browser: Browser;

  /**
   * This function creates a new CEGUI web browser element.
   * @param x A number of the 2D x position of the browser on a player's screen. This is affected by the relative argument.
   * @param y A number of the 2D y position of the browser on a player's screen. This is affected by the relative argument.
   * @param width The browser's native width. This should be greater than or equal to 1.
   * @param height The browser's native height. This should be greater than or equal to 1.
   * @param isLocal Sets whether the browser can only show local content or content from the internet.
   * @param isTransparent true if you want the browser to support transparency, false otherwise.
   * @param isRelative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing sizes/positions as a fraction of the screen size. If false, then the size and co-ordinates are based on client's resolution, accessible using guiGetScreenSize.
   * @param [parent=undefined] This is the parent that the radio button is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
   * @see https://wiki.mtasa.com/wiki/GuiCreateBrowser
   **/
  constructor(x: number, y: number, width: number, height: number, isLocal: boolean, isTransparent: boolean, isRelative: boolean, parent?: BaseGuiElement);


  /**
   * This function creates gets the browser element behind a gui-browser (a browser that has been created via guiCreateBrowser).
   * @returns Returns the Browser element.
   * @see https://wiki.mtasa.com/wiki/GuiGetBrowser
   **/
  getBrowser(): Browser;
}
