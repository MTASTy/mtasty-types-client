/** @customConstructor DxFont */
declare class DxFont {
  /**
   * This function retrieves the theoretical height of a certain piece of text, if it were to be drawn using dxDrawText.
   * - Note: The returned height will be in logical units which are 1.75 times the actual pixel height.
   * @param [scale=1] The size of the text.
   * @param [font="default"] Either a custom DX font element or the name of a built-in dx font.
   * @returns Returns an number of the height of the text.
   * @see https://wiki.mtasa.com/wiki/DxGetFontHeight
   **/
  static getHeight(scale?: number, font?: DxFont | string): number;

  /**
   * This function retrieves the theoretical width of a certain piece of text, if it were to be drawn using dxDrawText.
   * - Note: This function is relative to the client's screen resolution.
   * @param text A string representing the text for which you wish to retrieve with width for.
   * @param [scale=1] The size of the text.
   * @param [font=default] Either a custom DX font element or the name of a built-in dx font.
   * @param [bColorCoded=false] Should we exclude color codes from the width (false will include the hex in the length)?
   * @returns Returns the number of the width of the text.
   * @see https://wiki.mtasa.com/wiki/DxGetTextWidth
   **/
  static getTextWidth(text: string, scale?: number, font?: DxFont | string, bColorCoded?: boolean): number | false;

  /**
   * This function creates a DX font element that can be used in dxDrawText. Successful font creation is not guaranteed, and may fail due to hardware or memory limitations. To see if creation is likely to fail, use dxGetStatus.
   * - Note: The size can't be less than 5 or more than 150.
   * @param filepath the name of the file containing the font.
   * @param [size=9] size of the font.
   * @param [bold=false] flag to indicate if the font should be bold.
   * @param [quality="proof"] the font quality.
   * @see https://wiki.mtasa.com/wiki/DxCreateFont
   **/
  constructor(filepath: string, size?: number, bold?: boolean, quality?: "default" | "draft" | "proof" | "nonantialiased" | "antialiased" | "cleartype" | "cleartype_natural");
}
