declare class DxFont {
  // static getHeight(scale?: number, font?: DxFont | string): number;
  // static getTextWidth(text: string, scale?: number, font?: DxFont | string, bColorCoded?: boolean): number | false;

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
