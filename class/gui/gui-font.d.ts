/** @customConstructor GuiFont */
declare class GuiFont extends BaseElement {
  /**
   * This function creates a GUI font element that can be used in guiSetFont.
   * Successful font creation is not guaranteed, and may fail due to hardware or memory limitations.
   * To see if creation is likely to fail, use dxGetStatus (when VideoMemoryFreeForMTA is zero, failure is guaranteed).
   * @param filepath the name of the file containing the font.
   * @param [size=9] size of the font.
   * @see https://wiki.mtasa.com/wiki/GuiCreateFont
   **/
  constructor(filepath: string, size?: number);
}
