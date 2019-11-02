/** @customConstructor DxTexture */
declare class DxTexture extends DxMaterial {
  /**
   * This function creates a texture element that can be used in the dxDraw functions.
   * It is possible to use dxCreateTexture to load cubemaps and volume textures, but these will only be useable as inputs for a shader.
   * The Microsoft utility DxTex can view and change cubemaps and volume textures.
   * DxTex can also convert standard textures into DXT1/3/5 compressed .dds which should reduce file sizes.
   * - Important note: It seems like dxCreateTexture uses both VRAM and RAM (more of RAM), so, if you want to have big render targets (on which you don't draw every frame), this is a good solution using dxSetTexturePixels.
   * - Note: The times shown at the right of the page are only the time needed to add the thing to the draw queue, its not the actual time it takes to draw them.
   * @param width Desired width, preferably power of two (16, 32, 64 etc.), maximum is 16384.
   * @param height Desired height, preferably power of two (16, 32, 64 etc.), maximum is 16384.
   * @param [textureFormat="argb"] A string representing the desired texture format, which can be one of: "argb", "dxt1", "dxt3", "dxt5".
   * @param [textureEdge="wrap"] A string representing the desired texture edge handling, which can be one of: "wrap", "clamp", "mirror".
   * @param [textureType="2d"] A string representing the desired texture type, which can be one of: "2d", "3d", "cube".
   * @param [depth=1] Desired number of slices when creating a volume texture.
   * @see https://wiki.mtasa.com/wiki/DxCreateTexture
   **/
  constructor(width: number, height: number, textureFormat?: "argb" | "dxt1" | "dxt3" | "dxt5", textureEdge?: "wrap" | "clamp" | "mirror", textureType?: "2d" | "3d" | "cube", depth?: number);

  /**
   * This function creates a texture element that can be used in the dxDraw functions.
   * It is possible to use dxCreateTexture to load cubemaps and volume textures, but these will only be useable as inputs for a shader.
   * The Microsoft utility DxTex can view and change cubemaps and volume textures.
   * DxTex can also convert standard textures into DXT1/3/5 compressed .dds which should reduce file sizes.
   * - Important note: It seems like dxCreateTexture uses both VRAM and RAM (more of RAM), so, if you want to have big render targets (on which you don't draw every frame), this is a good solution using dxSetTexturePixels.
   * - Note: The times shown at the right of the page are only the time needed to add the thing to the draw queue, its not the actual time it takes to draw them.
   * @param filepath The filepath of the image (.bmp, .dds, .jpg, .png, and .tga images are supported). Image files should ideally have dimensions that are a power of two, to prevent possible blurring.
   * @param [textureFormat="argb"] A string representing the desired texture format, which can be one of: "argb", "dxt1", "dxt3", "dxt5".
   * @param [mipmaps=true] True to create a mip-map chain so the texture looks good when drawn at various sizes.
   * @param [textureEdge="wrap"] A string representing the desired texture edge handling, which can be one of: "wrap", "clamp", "mirror".
   * @see https://wiki.mtasa.com/wiki/DxCreateTexture
   **/
  constructor(filepath: string, textureFormat?: "argb" | "dxt1" | "dxt3" | "dxt5", mipmaps?: boolean, textureEdge?: "wrap" | "clamp" | "mirror");

  /**
   * This function creates a texture element that can be used in the dxDraw functions.
   * It is possible to use dxCreateTexture to load cubemaps and volume textures, but these will only be useable as inputs for a shader.
   * The Microsoft utility DxTex can view and change cubemaps and volume textures.
   * DxTex can also convert standard textures into DXT1/3/5 compressed .dds which should reduce file sizes.
   * - Important note: It seems like dxCreateTexture uses both VRAM and RAM (more of RAM), so, if you want to have big render targets (on which you don't draw every frame), this is a good solution using dxSetTexturePixels.
   * - Note: The times shown at the right of the page are only the time needed to add the thing to the draw queue, its not the actual time it takes to draw them.
   * @param pixels Pixels containing image data ('plain', 'jpeg' or 'png' pixels can be used here).
   * @param [textureFormat="argb"] A string representing the desired texture format, which can be one of: "argb", "dxt1", "dxt3", "dxt5".
   * @param [mipmaps=true] True to create a mip-map chain so the texture looks good when drawn at various sizes.
   * @param [textureEdge="wrap"] A string representing the desired texture edge handling, which can be one of: "wrap", "clamp", "mirror".
   * @see https://wiki.mtasa.com/wiki/DxCreateTexture
   **/
  constructor(pixels: string, textureFormat?: "argb" | "dxt1" | "dxt3" | "dxt5", mipmaps?: boolean, textureEdge?: "wrap" | "clamp" | "mirror");

  /**
   * This functions allows you to change the edge handling after creating the texture.
   * @param textureEdge The texture edge mode. Available modes are "wrap", "mirror", "clamp", "border", "mirror-once".
   * @param borderColor If textureEdge is set to border, you are able to define a border color here.
   * @returns Returns true if the texture edge was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/DxSetTextureEdge
   **/
  setEdge(textureEdge: "wrap" | "mirror" | "clamp" | "border" | "mirror-once", borderColor?: number): boolean;

  /**
   * This function sets the pixels of a texture element.
   * It can be used with a standard texture, render target or screen source.
   * Only 'plain' format pixels please.
   * - Note: This function is slow and not something you want to be doing once a frame.
   * - It is very slow when setting pixels to a render target or screen source.
   * - And is very slow indeed if the texture format is not "argb".
   * @param pixels The 'plain' format pixels to use.
   * @param [x=0] Rectangle left position.
   * @param [y=0] Rectangle top position.
   * @param [width=0] Rectangle width.
   * @param [height=0] Rectangle height.
   * @returns Returns a string if successful, false if invalid arguments were passed to the function.
   * @see https://wiki.mtasa.com/wiki/DxSetTexturePixels
   **/
  setPixels(pixels: string, x?: number, y?: number, width?: number, height?: number): boolean;

  /**
   * This function fetches the pixels from a texture element.
   * It can be used with a standard texture, render target or screen source.
   * - Important note: dxGetTexturePixels will not work on a screen source or render target if the player has disabled screen upload.
   * - Note: This function is slow and not something you want to be doing once a frame.
   * - It is slower when reading pixels from a render target or screen source.
   * - And is very slow indeed if the texture format is not 'argb'.
   * @param [x=0] Rectangle left position.
   * @param [y=0] Rectangle top position.
   * @param [width=0] Rectangle width.
   * @param [height=0] Rectangle height.
   * @returns Returns a 'plain' format pixels string if successful, false if invalid arguments were passed to the function.
   * @see https://wiki.mtasa.com/wiki/DxGetTexturePixels
   **/
  getPixels(x?: number, y?: number, width?: number, height?: number): string | false;
}
