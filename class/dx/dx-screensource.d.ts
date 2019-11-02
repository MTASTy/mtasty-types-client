/** @customConstructor DxScreenSource */
declare class DxScreenSource extends DxTexture {
  /**
   * This function creates a screen source, which is a special type of texture that contains the screen as rendered by GTA.
   * - Note that successful screen source creation is not guaranteed, and may fail due to hardware or memory limitations.
   * You should always check to see if this function has returned false.
   * @param width The width of the texture in pixels.
   * @param height The height of the texture in pixels.
   * @see https://wiki.mtasa.com/wiki/DxCreateScreenSource
   **/
  constructor(width: number, height: number);

  /**
   * This function updates the contents of a screen source texture with the screen output from GTA.
   * @param [resampleNow=false] A bool to indicate if the screen should be captured immediately. The default is false which means the screen from the end of the previous frame is used (better for performance and consistency). Use true for layering fullscreen effects.
   * @returns Returns true if the screen was successfully captured.
   * @see https://wiki.mtasa.com/wiki/DxUpdateScreenSource
   **/
  update(resampleNow?: boolean): boolean;
}
