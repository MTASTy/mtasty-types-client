/**
 * This function converts pixels from one format to another.
 * @param pixels The pixels to convert the format of.
 * @param newFormat The new format required ('plain' or 'png' or 'jpeg').
 * @param [quality=80] The quality of the returned pixels if the new format is 'jpeg'.
 * @returns Returns a copy of the pixels in the new format, or false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxConvertPixels
 **/
declare function dxConvertPixels(pixels: string, newFormat: "plain" | "png" | "jpeg", quality?: number): string | false;

/**
 * This function creates a DX font element that can be used in dxDrawText. Successful font creation is not guaranteed, and may fail due to hardware or memory limitations. To see if creation is likely to fail, use dxGetStatus.
 * - Note: The size can't be less than 5 or more than 150.
 * @param filepath the name of the file containing the font.
 * @param [size=9] size of the font.
 * @param [bold=false] flag to indicate if the font should be bold.
 * @param [quality="proof"] the font quality.
 * @returns Returns a DX font element if successful, false if invalid arguments were passed to the function, or there is insufficient resources available. You should always check to see if this function has returned false.
 * @see https://wiki.mtasa.com/wiki/DxCreateFont
 **/
declare function dxCreateFont(filepath: string, size?: number, bold?: boolean, quality?: "default" | "draft" | "proof" | "nonantialiased" | "antialiased" | "cleartype" | "cleartype_natural"): DxFont | false;

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
 * @returns Returns a texture element if successful, false if the system is unable to create a render target. You should always check to see if this function has returned false.
 * @see https://wiki.mtasa.com/wiki/DxCreateRenderTarget
 **/
declare function dxCreateRenderTarget(width: number, height: number, withAlpha?: boolean): DxRenderTarget | false;

/**
 * This function creates a screen source, which is a special type of texture that contains the screen as rendered by GTA.
 * - Note that successful screen source creation is not guaranteed, and may fail due to hardware or memory limitations.
 * You should always check to see if this function has returned false.
 * @param width The width of the texture in pixels.
 * @param height The height of the texture in pixels.
 * @returns Returns a texture element if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxCreateScreenSource
 **/
declare function dxCreateScreenSource(width: number, height: number): DxScreenSource | false;

/**
 * This function creates a shader element that can be used in the dxDraw functions.
 * Successful shader creation is not guaranteed unless the Effect File contains a fallback technique which will work on every PC in the universe.
 * It is highly recommended that dxSetTestMode is used when writing and testing scripts using dxCreateShader.
 * @param filepathOrRawdata The filepath of the shader Effect File (.fx) file or whole data buffer of the shader file.
 * @param [priority=0] If more than one shader is matched to a world texture, the shader with the highest priority will be used. If there is more than one shader with the same highest priority, the most recently created shader is used.
 * @param [maxDistance=0] If non-zero, the shader will be applied to textures nearer than maxDistance only. This can speed up rendering, but (to look good) may require the shader to fade out it's own effect as the texture reaches maxDistance.
 * @param [layered=false] When set to true, the shader will be drawn in a separate render pass. Several layered shaders can be drawn on the same world texture (to avoid Z fighting artifacts, you may have to add DepthBias -0.0002; to the technique pass, but this might cause visual artifacts when applied on vehicles).
 * @param [elementTypes="world"] A comma seperated list of element types to restrict this shader to. Valid element types are: "world", "ped", "vehicle", "object", 'other", "all".
 * @returns element: A shader element if successful, false if invalid arguments were passed to the function. You should always check to see if this function has returned false. Also return string: the name of the technique that will be used.
 * @see https://wiki.mtasa.com/wiki/DxCreateShader
 * @tupleReturn
 **/
declare function dxCreateShader(filepathOrRawdata: string, priority?: number, maxDistance?: number, layered?: boolean, elementTypes?: "world" | "ped" | "vehicle" | "object" | "other" | "all"): [ DxShader | string ] | [false];

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
 * @returns Returns a texture if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxCreateTexture
 **/
declare function dxCreateTexture(width: number, height: number, textureFormat?: "argb" | "dxt1" | "dxt3" | "dxt5", textureEdge?: "wrap" | "clamp" | "mirror", textureType?: "2d" | "3d" | "cube", depth?: number): DxTexture | false;

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
 * @returns Returns a texture if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxCreateTexture
 **/
declare function dxCreateTexture(filepath: string, textureFormat?: "argb" | "dxt1" | "dxt3" | "dxt5", mipmaps?: boolean, textureEdge?: "wrap" | "clamp" | "mirror"): DxTexture | false;

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
 * @returns Returns a texture if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxCreateTexture
 **/
declare function dxCreateTexture(pixels: string, textureFormat?: "argb" | "dxt1" | "dxt3" | "dxt5", mipmaps?: boolean, textureEdge?: "wrap" | "clamp" | "mirror"): DxTexture | false;

/**
 * This function draws a circle shape on the screen - rendered for one frame. This should be used in conjunction with onClientRender in order to be display continuously.
 * @param posX A number representing the absolute X position of the circle center, represented by pixels on the screen.
 * @param posY A number representing the absolute Y position of the circle center, represented by pixels on the screen.
 * @param radius A number representing the radius scale of the circle that is being drawn.
 * @param [startAngle=0] A number representing the angle of the first point of the circle.
 * @param [stopAngle=360] A number representing the angle of the last point of the circle.
 * @param [theColor=tocolor(255,255,255,255)] A number of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param [theCenterColor=tocolor(255,255,255,255)] A number of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param [segments=32] A number ranging from 3-1024 representing how many triangles are used to form the circle, more segments = smoother circle. Note: using lots of segments may cause lag.
 * @param [ratio=1] Ratio between width and height, e.g: 2 would mean that the width of the circle is 2 times the height.
 * @param [postGUI=false] A bool representing whether the circle should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @returns Returns true if the creation of the 2D circle was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawCircle
 **/
declare function dxDrawCircle(posX: number, posY: number, radius: number, startAngle?: number, stopAngle?: number, theColor?: number, theCenterColor?: number, segments?: number, ratio?: number, postGUI?: boolean): boolean;

/**
 * Draws an image on the screen for a single frame.
 * In order for the image to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender).
 * Image files should ideally have dimensions that are a power of two, to prevent possible blurring.
 * Power of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...
 * - Tip: Use a texture created with dxCreateTexture to speed up drawing.
 * - Tip: To help prevent edge artifacts when drawing textures, set textureEdge to "clamp" when calling dxCreateTexture.
 * @param posX the absolute X coordinate of the top left corner of the image.
 * @param posY the absolute Y coordinate of the top left corner of the image.
 * @param width the absolute width of the image.
 * @param height the absolute height of the image.
 * @param image Either a material element or a filepath of the image which is going to be drawn (.dds images are also supported). Image files should ideally have dimensions that are a power of two, to prevent possible blurring. Use a texture created with dxCreateTexture to speed up drawing.
 * @param [rotation=0] the rotation, in degrees for the image.
 * @param [rotationCenterOffsetX=0] the absolute X offset from the image center for which to rotate the image from.
 * @param [rotationCenterOffsetY=0] the absolute Y offset from the image center for which to rotate the image from.
 * @param [color=tocolor(255,255,255,255)] Tints the image with a value produced by tocolor or hexadecimal number in format.
 * @param [postGUI=false] A bool representing whether the image should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawImage
 **/
declare function dxDrawImage(posX: number, posY: number, width: number, height: number, image: any, rotation?: number, rotationCenterOffsetX?: number, rotationCenterOffsetY?: number, color?: number, postGUI?: boolean): boolean;

/**
 * Differing from dxDrawImage, this function only draws a part of an image on the screen for a single frame.
 * In order for the image to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender).
 * Image files should ideally have dimensions that are a power of two, to prevent possible blurring.
 * Power of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...
 * - Tip: Use a texture created with dxCreateTexture to speed up drawing.
 * - Tip: To help prevent edge artifacts when drawing textures, set textureEdge to "clamp" when calling dxCreateTexture.
 * @param posX the absolute X coordinate of the top left corner of the image.
 * @param posY the absolute Y coordinate of the top left corner of the image.
 * @param width the absolute width of the image.
 * @param height the absolute height of the image.
 * @param u the absolute X coordinate of the top left corner of the section which should be drawn from image.
 * @param v the absolute Y coordinate of the top left corner of the section which should be drawn from image.
 * @param usize the absolute width of the image section.
 * @param vsize the absolute height of the image section.
 * @param image Either a material element or a filepath of the image which is going to be drawn (.dds images are also supported). Image files should ideally have dimensions that are a power of two, to prevent possible blurring. Use a texture created with dxCreateTexture to speed up drawing.
 * @param [rotation=0] the rotation, in degrees for the image.
 * @param [rotationCenterOffsetX=0] the absolute X offset from the image center for which to rotate the image from.
 * @param [rotationCenterOffsetY=0] the absolute Y offset from the image center for which to rotate the image from.
 * @param [color=tocolor(255,255,255,255)] the color of the image, a value produced by tocolor or hexadecimal number in format.
 * @param [postGUI=false] A bool representing whether the image should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawImageSection
 **/
declare function dxDrawImageSection(posX: number, posY: number, width: number, height: number, u: number, v: number, usize: number, vsize: number, image: any, rotation?: number, rotationCenterOffsetX?: number, rotationCenterOffsetY?: number, color?: number, postGUI?: boolean): boolean;

/**
 * This function draws a 2D line across the screen - rendered for one frame.
 * This should be used in conjunction with onClientRender in order to display continuously.
 * @param startX A number representing the absolute start X position of the line, represented by pixels on the screen.
 * @param startY A number representing the absolute start Y position of the line, represented by pixels on the screen.
 * @param endX A number representing the absolute end X position of the line, represented by pixels on the screen.
 * @param endY A number representing the absolute end Y position of the line, represented by pixels on the screen.
 * @param color A number of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param [width=1] The width/thickness of the line.
 * @param [postGUI=false] A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawLine
 **/
declare function dxDrawLine(startX: number, startY: number, endX: number, endY: number, color: number, width?: number, postGUI?: boolean): boolean;

/**
 * This function draws a 3D line between two points in the 3D world - rendered for one frame.
 * This should be used in conjunction with onClientRender in order to display continuously.
 * @param startX The start X position of the 3D line, representing a coordinate in the GTA world.
 * @param startY The start Y position of the 3D line, representing a coordinate in the GTA world.
 * @param startZ The start Z position of the 3D line, representing a coordinate in the GTA world.
 * @param endX The end X position of the 3D line, representing a coordinate in the GTA world.
 * @param endY The end Y position of the 3D line, representing a coordinate in the GTA world.
 * @param endZ The end Z position of the 3D line, representing a coordinate in the GTA world.
 * @param [color=tocolor(255,255,255,255)] A number of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param [width=1] The width/thickness of the line.
 * @param [postGUI=false] A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawLine3D
 **/
declare function dxDrawLine3D(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, color?: number, width?: number, postGUI?: boolean): boolean;

/**
 * This function draws a textured 3D line between two points in the 3D world - rendered for one frame.
 * This should be used in conjunction with onClientPreRender in order to display continuously.
 * The 3D line with a large width value effectively becomes a rectangle, so it it possible to construct basic shapes such as boxes with several large width lines and the appropriate values for 'faceToward'.
 * 3D lines are drawn at a particular place in the game processing order, so use onClientPreRender for drawing if you are attaching them to world elements.
 * @param startX The start position of the 3D line, representing a coordinate in the GTA world.
 * @param startY The start position of the 3D line, representing a coordinate in the GTA world.
 * @param startZ The start position of the 3D line, representing a coordinate in the GTA world.
 * @param endX The end position of the 3D line, representing a coordinate in the GTA world.
 * @param endY The end position of the 3D line, representing a coordinate in the GTA world.
 * @param endZ The end position of the 3D line, representing a coordinate in the GTA world.
 * @param material A material to draw the line with.
 * @param width The width/thickness of the line in GTA world units (This is 1/75th of the width used in dxDrawLine3D).
 * @param [color=tocolor(255,255,255,255)] A number of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param [postGUI=false] A bool representing whether the line should be drawn on top of or behind any ingame GUI.
 * @param faceTowardX The position the front of the line should face towards. If this is not set, the camera position is used, so the front of the line faces toward the camera.
 * @param faceTowardY The position the front of the line should face towards. If this is not set, the camera position is used, so the front of the line faces toward the camera.
 * @param faceTowardZ The position the front of the line should face towards. If this is not set, the camera position is used, so the front of the line faces toward the camera.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawMaterialLine3D
 **/
declare function dxDrawMaterialLine3D(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, material: DxMaterial, width: number, color?: number, postGUI?: boolean, faceTowardX?: number, faceTowardY?: number, faceTowardZ?: number): boolean;

// TODO: Fix types
/**
 * This function draws a 2D primitive shape with material applied to it across the screen - rendered for one frame.
 * This should be used in conjunction with onClientRender in order to display continuously.
 * If image file is used, it should ideally have dimensions that are a power of two, to prevent possible blurring.
 * Power of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...
 * @param pType Type of primitive to be drawn.
 * @param material Either a material element or a filepath of the image which is going to be drawn. (.dds images are also supported). Image files should ideally have dimensions that are a power of two, to prevent possible blurring. Use a texture created with dxCreateTexture to speed up drawing.
 * @param postGUI A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @param vertice Objects representing each primitive vertice, required amount of them is determined by primitive type.
 * @param vertices Objects representing each primitive vertice, required amount of them is determined by primitive type.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawMaterialPrimitive
 **/
declare function dxDrawMaterialPrimitive(pType: string, material: DxMaterial | string, postGUI: boolean, vertice: object, ...vertices: object[]): boolean;

// TODO: Fix types
/**
 * This function draws a 2D primitive shape across the screen - rendered for one frame.
 * This should be used in conjunction with onClientRender in order to display continuously.
 * @param pType Type of primitive to be drawn.
 * @param postGUI A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @param vertice Objects representing each primitive vertice, required amount of them is determined by primitive type.
 * @param vertices Objects representing each primitive vertice, required amount of them is determined by primitive type.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawPrimitive
 **/
declare function dxDrawPrimitive(pType: string, postGUI: boolean, vertice: object, ...vertices: object[]): boolean;

// TODO: Fix types
/**
 * This function draws a 3D primitive in the 3D world - rendered for one frame. This should be used in conjunction with onClientRender in order to display continuously.
 * @param pType Type of primitive to be drawn.
 * @param postGUI A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @param vertex1: An object with the coordinates of the vertex plus its color.
 * @param vertex2: An object with the coordinates of the vertex plus its color.
 * @param vertex3: An object with the coordinates of the vertex plus its color.
 * @param vertexN: A table with the coordinates of the vertex plus its color. You can add as much as you want.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawPrimitive
 **/
declare function dxDrawPrimitive3D(pType: string, postGUI: boolean, vertex1: object,  vertex2: object,  vertex3: object, ...vertexN: object[]): boolean;

/**
 * This function draws a textured 3D line between two points in the 3D world - rendered for one frame.
 * This should be used in conjunction with onClientPreRender in order to display continuously.
 * The 3D line with a large width value effectively becomes a rectangle, so it it possible to construct basic shapes such as boxes with several large width lines and the appropriate values for 'faceToward'.
 * @param startX The start position of the 3D line, representing a coordinate in the GTA world.
 * @param startY The start position of the 3D line, representing a coordinate in the GTA world.
 * @param startZ The start position of the 3D line, representing a coordinate in the GTA world.
 * @param endX The end position of the 3D line, representing a coordinate in the GTA world.
 * @param endY The end position of the 3D line, representing a coordinate in the GTA world.
 * @param endZ The end position of the 3D line, representing a coordinate in the GTA world.
 * @param u the absolute X coordinate of the top left corner of the section.
 * @param v the absolute Y coordinate of the top left corner of the section.
 * @param usize the absolute width of the section.
 * @param vsize the absolute height of the section.
 * @param material A material to draw the line with.
 * @param width The width/thickness of the line in GTA world units (This is 1/75th of the width used in dxDrawLine3D).
 * @param [color=tocolor(255,255,255,255)] A number of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param [postGUI=false] A bool representing whether the line should be drawn on top of or behind any ingame GUI.
 * @param faceTowardX The direction the front of the line should face towards. If this is not set, the front of the line always faces toward the camera.
 * @param faceTowardY The direction the front of the line should face towards. If this is not set, the front of the line always faces toward the camera.
 * @param faceTowardZ The direction the front of the line should face towards. If this is not set, the front of the line always faces toward the camera.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawMaterialSectionLine3D
 **/
declare function dxDrawMaterialSectionLine3D(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, u: number, v: number, usize: number, vsize: number, material: DxMaterial, width: number, color?: number, postGUI?: boolean, faceTowardX?: number, faceTowardY?: number, faceTowardZ?: number): boolean;

/**
 * This function draws a 2D rectangle across the screen - rendered for one frame.
 * This should be used in conjunction with onClientRender in order to display continuously.
 * @param startX A number representing the absolute origin X position of the rectangle, represented by pixels on the screen.
 * @param startY A number representing the absolute origin Y position of the rectangle, represented by pixels on the screen.
 * @param width A number representing the width of the rectangle, drawn in a right direction from the origin.
 * @param height A number representing the height of the rectangle, drawn in a downwards direction from the origin.
 * @param [color=tocolor(255,255,255,255)] the hex color of the rectangle, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param [postGUI=false] A bool representing whether the line should be drawn on top of or behind any ingame GUI.
 * @param [subPixelPositioning=false] A bool representing whether the rectangle can be positioned sub-pixel-ly.
 * @returns Returns true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawRectangle
 **/
declare function dxDrawRectangle(startX: number, startY: number, width: number, height: number, color?: number, postGUI?: boolean, subPixelPositioning?: boolean): boolean;

/**
 * Draws a string of text on the screen for one frame.
 * In order for the text to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender).
 * @param text the text to draw.
 * @param leftX the absolute X coordinate of the top left corner of the text.
 * @param topY the absolute Y coordinate of the top left corner of the text.
 * @param [rightX=0] the absolute X coordinate of the right side of the text bounding box. Used for text aligning, clipping and word breaking.
 * @param [bottomY=0] the absolute Y coordinate of the bottom side of the text bounding box. Used for text aligning, clipping and word breaking.
 * @param [color=tocolor(255,255,255,255)] the color of the text, a value produced by tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param [scaleX=1] the size of the text scale: can (optionally) be specified as two numbers. i.e. scaleX, scaleY.
 * @param [scaleY=1] the size of the text scale: can (optionally) be specified as two numbers. i.e. scaleX, scaleY.
 * @param [font="default"] either a custom DX font element or the name of a built-in DX font: Note: Some fonts are incompatible with certain languages such as Arabic.
 * @param [alignX="left"] horizontal alignment of the text within the bounding box. Can be "left", "center" or "right".
 * @param [alignY="top"] vertical alignment of the text within the bounding box. Can be "top", "center" or "bottom".
 * @param [clip=false] if set to true, the parts of the text that don't fit within the bounding box will be cut off.
 * @param [wordBreak=false] if set to true, the text will wrap to a new line whenever it reaches the right side of the bounding box. If false, the text will always be completely on one line.
 * @param [postGUI=false] A bool representing whether the text should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @param [colorCoded=false] Set to true to enable embedded #FFFFFF color codes. Note: clip and wordBreak are forced false if this is set.
 * @param [subPixelPositioning=false] A bool representing whether the text can be positioned sub-pixel-ly. Looks nicer for moving/scaling animations.
 * @param [fRotation=0] Rotation.
 * @param [fRotationCenterX=0] Rotation Origin X.
 * @param [fRotationCenterY=0] Rotation Origin Y.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawText
 **/
declare function dxDrawText(text: string, leftX: number, topY: number, rightX?: number, bottomY?: number, color?: number, scaleX?: number, scaleY?: number, font?: DxFont | string, alignX?: "left" | "center" | "right", alignY?: "top" | "center" | "bottom", clip?: boolean, wordBreak?: boolean, postGUI?: boolean, colorCoded?: boolean, subPixelPositioning?: boolean, fRotation?: number, fRotationCenterX?: number, fRotationCenterY?: number): boolean;

/**
 * This function returns the current blend mode for the dxDraw functions.
 * The blend mode is set using dxSetBlendMode.
 * @returns Returns the current blend mode.
 * @see https://wiki.mtasa.com/wiki/DxGetBlendMode
 **/
declare function dxGetBlendMode(): string;

/**
 * This function retrieves the theoretical height of a certain piece of text, if it were to be drawn using dxDrawText.
 * - Note: The returned height will be in logical units which are 1.75 times the actual pixel height.
 * @param [scale=1] The size of the text.
 * @param [font="default"] Either a custom DX font element or the name of a built-in dx font.
 * @returns Returns an number of the height of the text.
 * @see https://wiki.mtasa.com/wiki/DxGetFontHeight
 **/
declare function dxGetFontHeight(scale?: number, font?: DxFont | string): number;

/**
 * This gets the dimensions of the supplied material element.
 * @param material The material element whose size is to be gotten.
 * @returns Returns two numbers representing the width and height in pixels of the material, or false if an invalid parameter was passed to the function. If the material is a volume texture, this function will return three numbers representing the width, height and depth.
 * @see https://wiki.mtasa.com/wiki/DxGetMaterialSize
 * @tupleReturn
 **/
declare function dxGetMaterialSize(material: DxMaterial): [number, number, number | undefined];

/**
 * This function gets the color of a single pixel from pixels contained in a string.
 * It only works with 'plain' format pixels.
 * @param pixels The pixels to use.
 * @param x The X coordinate for the pixel.
 * @param y The Y coordinate for the pixel.
 * @returns Returns 4 numbers representing the rgba color value of the pixel if succesful, or false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxGetPixelColor
 * @tupleReturn
 **/
declare function dxGetPixelColor(pixels: string, x: number, y: number): [number, number, number, number] | [false];

/**
 * This function gets the dimensions of pixels contained in a string.
 * It works with all pixel formats.
 * @param pixels The pixels to get the dimensions of.
 * @returns Returns width and height of the pixels if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxGetPixelsSize
 * @tupleReturn
 **/
declare function dxGetPixelsSize(pixels: string): [number, number] | [false];

/**
 * This function returns the format of pixels contained in a string.
 * @param pixels The pixels to get the format of.
 * @returns Returns the format of the pixels if successful ('plain' or 'png' or 'jpeg'), false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxGetPixelsFormat
 **/
declare function dxGetPixelsFormat(pixels: string): string | false;

// TODO: Fix types
/**
 * This function gets information about various internal datum.
 * @returns Returns a object.
 * @see https://wiki.mtasa.com/wiki/DxGetStatus
 **/
declare function dxGetStatus(): object;

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
declare function dxGetTextWidth(text: string, scale?: number, font?: DxFont | string, bColorCoded?: boolean): number | false;

/**
 * This function fetches the pixels from a texture element.
 * It can be used with a standard texture, render target or screen source.
 * - Important note: dxGetTexturePixels will not work on a screen source or render target if the player has disabled screen upload.
 * - Note: This function is slow and not something you want to be doing once a frame.
 * - It is slower when reading pixels from a render target or screen source.
 * - And is very slow indeed if the texture format is not 'argb'.
 * @param texture The texture element to get the pixels from.
 * @param [x=0] Rectangle left position.
 * @param [y=0] Rectangle top position.
 * @param [width=0] Rectangle width.
 * @param [height=0] Rectangle height.
 * @returns Returns a 'plain' format pixels string if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxGetTexturePixels
 **/
declare function dxGetTexturePixels(texture: DxTexture, x?: number, y?: number, width?: number, height?: number): string | false;

/**
 * This function fetches the pixels from a texture element.
 * It can be used with a standard texture, render target or screen source.
 * - Important note: dxGetTexturePixels will not work on a screen source or render target if the player has disabled screen upload.
 * - Note: This function is slow and not something you want to be doing once a frame.
 * - It is slower when reading pixels from a render target or screen source.
 * - And is very slow indeed if the texture format is not 'argb'.
 * @param [surfaceIndex=0] Desired slice to get if the texture is a volume texture, or desired face to get if the texture is a cube map. By default the pixels from the whole texture is returned.To get only a portion of the texture, define a rectangular area using all four of these optional arguments.
 * @param texture The texture element to get the pixels from.
 * @param [x=0] Rectangle left position.
 * @param [y=0] Rectangle top position.
 * @param [width=0] Rectangle width.
 * @param [height=0] Rectangle height.
 * @returns Returns a 'plain' format pixels string if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxGetTexturePixels
 **/
declare function dxGetTexturePixels(surfaceIndex: number, texture: DxTexture, x?: number, y?: number, width?: number, height?: number): string | false;

/**
 * This function allows for the positioning of dxDraw calls to be automatically adjusted according to the client's aspect ratio setting.
 * This lasts for a single execution of an event handler for one of the following events: onClientRender, onClientPreRender and onClientHUDRender.
 * So the function has to be called every frame, just like dxDraws.
 * This is particularly useful for draws that must align with the GTA HUD, for which the sizing and positioning can vary for different aspect ratios.
 * @param bEnabled Should the adjustment be enabled or disabled.
 * @param [sourceRatio=4/3] This should be set to the aspect ratio the dxDraws were originally designed in.
 * @returns Returns true when it was changed successfully, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxSetAspectRatioAdjustmentEnabled
 **/
declare function dxSetAspectRatioAdjustmentEnabled(bEnabled: boolean, sourceRatio?: number): boolean;

/**
 * This function sets the current blend mode for the dxDraw functions.
 * Changing the blend mode can increase the quality when drawing text or certain other images to a render target.
 * As a general guide use modulate_add when drawing text to a render target, and add when drawing the render target to the screen.
 * Don't forget to restore the default blend at the end.
 * @param blendMode The blend mode to use which can be one of: "blend", "add", "modulate_add", "overwrite".
 * @returns Returns true if successful, or false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxSetBlendMode
 **/
declare function dxSetBlendMode(blendMode: "blend" | "add" | "modulate_add" | "overwrite"): boolean;

/**
 * This function sets the color of a single pixel for pixels contained in a string.
 * It only works with 'plain' format pixels.
 * @param pixels The pixels to use.
 * @param x The X coordinate for the pixel.
 * @param y The Y coordinate for the pixel.
 * @param r The red channel for the color (0-255).
 * @param g The green channel for the color (0-255).
 * @param b The blue channel for the color (0-255).
 * @param [a=255] The alpha channel for the color (0-255).
 * @returns Returns true if successful, or false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxSetPixelColor
 **/
declare function dxSetPixelColor(pixels: string, x: number, y: number, r: number, g: number, b: number, a?: number): boolean;

/**
 * This function changes the drawing destination for the dx functions.
 * It can be used to select a previously created render target, or if called with no arguments, restore drawing directly to the screen.
 * @param renderTarget The render target element whose pixels we want to draw on.
 * @param [clear=false] If set to true, the render target will also be cleared.
 * @returns Returns true if the render target was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxSetRenderTarget
 **/
declare function dxSetRenderTarget(renderTarget?: DxRenderTarget, clear?: boolean): boolean;

/**
 * This sets a named parameter for a shader element.
 * - Important note: It's enough to set the texture only once if it's a render target.
 * @param theShader The shader element whose parameter is to be changed.
 * @param parameterName The name of parameter.
 * @param value The value to set, which can be a texture, a boolean, a number or a list of numbers(max 16 numbers).
 * @returns Returns true if the shader element's parameter was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxSetShaderValue
 **/
declare function dxSetShaderValue(theShader: DxShader, parameterName: string, value: any): boolean;

/**
 * This function sets the amount of geometric sub-division to use when drawing a shader element with dxDrawImage.
 * Using tessellation allows a shader to manipulate the shape of the rendered image at each sub-division boundary.
 * Needs checking: The example should depict better how does this function actually work with a texture.
 * @param theShader The shader element whose tessellation is to be changed.
 * @param tessellationX The number of sub-division points along the X axis. Range is 1 to 500.
 * @param tessellationY The number of sub-division points along the Y axis. Range is 1 to 500.
 * @returns Returns true if the shader element's tessellation was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxSetShaderTessellation
 **/
declare function dxSetShaderTessellation(theShader: DxShader, tessellationX: number, tessellationY: number): boolean;

/**
 * This function applies a 3D transformation to a shader element when it is drawn with dxDrawImage.
 * @param theShader The shader element whose transformation is to be changed.
 * @param rotationX Rotation angle in degrees around the X axis (Left,right). This will make the shader rotate along its width.
 * @param rotationY Rotation angle in degrees around the Y axis (Up,down). This will make the shader rotate along its height.
 * @param rotationZ Rotation angle in degrees around the Z axis (In,out). This will make the shader rotate in a similar way to the rotation argument in dxDrawImage.
 * @param [rotationCenterOffsetX=0] The center of rotation offset X position in screen relative units.
 * @param [rotationCenterOffsetY=0] The center of rotation offset Y position in screen relative units.
 * @param [rotationCenterOffsetZ=0] The center of rotation offset Z position in screen relative units.
 * @param [bRotationCenterOffsetOriginIsScreen=false] Set to true if the center of rotation origin should be the center of the screen rather than the center of the image.
 * @param [perspectiveCenterOffsetX=0] The center of perspective offset X position in screen relative units.
 * @param [perspectiveCenterOffsetY=0] The center of perspective offset Y position in screen relative units.
 * @param [bPerspectiveCenterOffsetOriginIsScreen=false] Set to true if the center of perspective origin should be the center of the screen rather than the center of the image.
 * @returns Returns true if the shader element's transform was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxSetShaderTransform
 **/
declare function dxSetShaderTransform(theShader: DxShader, rotationX: number, rotationY: number, rotationZ: number, rotationCenterOffsetX?: number, rotationCenterOffsetY?: number, rotationCenterOffsetZ?: number, bRotationCenterOffsetOriginIsScreen?: boolean, perspectiveCenterOffsetX?: number, perspectiveCenterOffsetY?: number, bPerspectiveCenterOffsetOriginIsScreen?: boolean): boolean;

/**
 * This function is used for testing scripts written using guiCreateFont, dxCreateFont, dxCreateShader and dxCreateRenderTarget.
 * Each one of the 3 test modes should be used in turn to help highlight any potential problems.
 * @param testMode The test mode to be set. It can be one of the following values: "none", "no_mem", "low_mem", "no_shader".
 * @returns Returns true if the test mode was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxSetTestMode
 **/
declare function dxSetTestMode(testMode: "none" | "no_mem" | "low_mem" | "no_shader"): boolean;

/**
 * This functions allows you to change the edge handling after creating the texture.
 * @param theTexture The affected texture.
 * @param textureEdge The texture edge mode. Available modes are "wrap", "mirror", "clamp", "border", "mirror-once".
 * @param borderColor If textureEdge is set to border, you are able to define a border color here.
 * @returns Returns true if the texture edge was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxSetTextureEdge
 **/
declare function dxSetTextureEdge(theTexture: DxTexture, textureEdge: "wrap" | "mirror" | "clamp" | "border" | "mirror-once", borderColor?: number): boolean;

/**
 * This function sets the pixels of a texture element.
 * It can be used with a standard texture, render target or screen source.
 * Only 'plain' format pixels please.
 * - Note: This function is slow and not something you want to be doing once a frame.
 * - It is very slow when setting pixels to a render target or screen source.
 * - And is very slow indeed if the texture format is not "argb".
 * @param texture The texture element to set the pixels of.
 * @param pixels The 'plain' format pixels to use.
 * @param [x=0] Rectangle left position.
 * @param [y=0] Rectangle top position.
 * @param [width=0] Rectangle width.
 * @param [height=0] Rectangle height.
 * @returns Returns a string if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxSetTexturePixels
 **/
declare function dxSetTexturePixels(texture: DxTexture, pixels: string, x?: number, y?: number, width?: number, height?: number): boolean;

/**
 * This function sets the pixels of a texture element.
 * It can be used with a standard texture, render target or screen source.
 * Only 'plain' format pixels please.
 * - Note: This function is slow and not something you want to be doing once a frame.
 * - It is very slow when setting pixels to a render target or screen source.
 * - And is very slow indeed if the texture format is not "argb".
 * @param [surfaceIndex=0] Desired slice to get if the texture is a volume texture, or desired face to get if the texture is a cube map. By default the pixels from the whole texture is returned.To get only a portion of the texture, define a rectangular area using all four of these optional arguments.
 * @param texture The texture element to set the pixels of.
 * @param pixels The 'plain' format pixels to use.
 * @param [x=0] Rectangle left position.
 * @param [y=0] Rectangle top position.
 * @param [width=0] Rectangle width.
 * @param [height=0] Rectangle height.
 * @returns Returns a string if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxSetTexturePixels
 **/
declare function dxSetTexturePixels(surfaceIndex: number, texture: DxTexture, pixels: string, x?: number, y?: number, width?: number, height?: number): boolean;

/**
 * This function updates the contents of a screen source texture with the screen output from GTA.
 * @param screenSource The screen source element whose pixels we want to fill with the screen capture.
 * @param [resampleNow=false] A bool to indicate if the screen should be captured immediately. The default is false which means the screen from the end of the previous frame is used (better for performance and consistency). Use true for layering fullscreen effects.
 * @returns Returns true if the screen was successfully captured, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxUpdateScreenSource
 **/
declare function dxUpdateScreenSource(screenSource: DxScreenSource, resampleNow?: boolean): boolean;
