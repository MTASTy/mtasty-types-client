/** @customConstructor DxRenderTarget */
declare class DxRenderTarget extends DxTexture {
  /**
   * This function creates a render target element, which is a special type of texture that can be drawn on with the dx functions.
   * Successful render target creation is not guaranteed, and may fail due to hardware or memory limitations.
   * To see if creation is likely to fail, use dxGetStatus.
   * - Tip: Use dxSetBlendMode to get better quality.
   * - Tip: It is highly recommended that dxSetTestMode is used when writing and testing scripts using dxCreateRenderTarget.
   * - Note: Render targets are usually cleared when the player minimizes MTA (i.e. alt-tab). See onClientRestore for details on when to restore any fixed content.
   * @param width The width of the texture in pixels.
   * @param height The height of the texture in pixels.
   * @param [withAlpha=false] The render target will be created with an alpha channel. 'false' will turn images' alpha channels to black color.
   * @see https://wiki.mtasa.com/wiki/DxCreateRenderTarget
   **/
  constructor(width: number, height: number, withAlpha?: boolean);

  /**
   * This function changes the drawing destination for the dx functions.
   * It can be used to select a previously created render target, or if called with no arguments, restore drawing directly to the screen.
   * @param [clear=false] If set to true, the render target will also be cleared.
   * @returns Returns true if the render target was successfully changed.
   * @see https://wiki.mtasa.com/wiki/DxSetRenderTarget
   **/
  setAsTarget(clear?: boolean): boolean;
}
