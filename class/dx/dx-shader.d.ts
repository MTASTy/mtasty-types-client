declare class DxShader extends DxMaterial {
  // tessellation: Vector2; // Change only

  /**
   * This function creates a shader element that can be used in the dxDraw functions.
   * Successful shader creation is not guaranteed unless the Effect File contains a fallback technique which will work on every PC in the universe.
   * It is highly recommended that dxSetTestMode is used when writing and testing scripts using dxCreateShader.
   * @param filepathOrRawdata The filepath of the shader Effect File (.fx) file or whole data buffer of the shader file.
   * @param [priority=0] If more than one shader is matched to a world texture, the shader with the highest priority will be used. If there is more than one shader with the same highest priority, the most recently created shader is used.
   * @param [maxDistance=0] If non-zero, the shader will be applied to textures nearer than maxDistance only. This can speed up rendering, but (to look good) may require the shader to fade out it's own effect as the texture reaches maxDistance.
   * @param [layered=false] When set to true, the shader will be drawn in a separate render pass. Several layered shaders can be drawn on the same world texture (to avoid Z fighting artifacts, you may have to add DepthBias -0.0002; to the technique pass, but this might cause visual artifacts when applied on vehicles).
   * @param [elementTypes="world"] A comma seperated list of element types to restrict this shader to. Valid element types are: "world", "ped", "vehicle", "object", 'other", "all".
   * @see https://wiki.mtasa.com/wiki/DxCreateShader
   * @tupleReturn
   **/
  constructor(filepathOrRawdata: string, priority?: number, maxDistance?: number, layered?: boolean, elementTypes?: "world" | "ped" | "vehicle" | "object" | "other" | "all");

  /**
   * This function applies a shader to one or more world textures.
   * - Tip: The resource shader_tex_names can help in finding the names of world textures. When replacing the texture for a ped using the CJ skin, set textureName to "CJ". The shader inherits the render states of the original when it is drawn, so texture stage 0 will already be set to the original texture. When using with a 'ped', ensure you have set 'ped' or 'all' in the elementTypes when calling dxCreateShader. CJ body parts textures can be replaced by using: "cj_ped_head", "cj_ped_hat", "cj_ped_torso", "cj_ped_legs", "cj_ped_feet", "cj_ped_glasses", "cj_ped_necklace", "cj_ped_watch" and "cj_ped_extra1". Latest version of shader_tex_names will show what is being used.
   * @param textureName The name of the world texture to apply the shader to. Wildcard matching e.g. "ro?ds*" can be used to apply to more than one texture at a time.
   * @param [targetElement=undefined] The element to restrict applying the shader to. If this is not set the shader will be applied to everything using the texture name. Valid element types for targetElement are vehicles, objects and peds.
   * @param [appendLayers=true] allows two or more layered shaders to be applied in the same texture.You may want to modify the DepthBias in the technique pass to avoid Z-fighting artifacts when using this.
   * @returns Returns true if the shader was successfully applied, false otherwise.
   * @see https://wiki.mtasa.com/wiki/EngineApplyShaderToWorldTexture
   **/
  applyToWorldTexture(textureName: string, targetElement?: Vehicle | Ped | MapObject, appendLayers?: boolean): boolean;

  /**
   * This function removes a shader from one or more world textures.
   * @param textureName The name of the world texture to remove the shader from. It should be exactly the same string as used with engineApplyShaderToWorldTexture when the shader was initially applied.
   * @param [targetElement=undefined] The element to remove the shader from.It should be the same element as used with engineApplyShaderToWorldTexture when the shader was initially applied.
   * @returns Returns true if the shader was successfully removed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/EngineRemoveShaderFromWorldTexture
   **/
  removeFromWorldTexture(textureName: string, targetElement?: Element): boolean;

  /**
   * This sets a named parameter for a shader element.
   * - Important note: It's enough to set the texture only once if it's a render target.
   * @param parameterName The name of parameter.
   * @param value The value to set, which can be a texture, a boolean, a number or a list of numbers(max 16 numbers).
   * @returns Returns true if the shader element's parameter was successfully changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/DxSetShaderValue
   **/
  setValue(parameterName: string, value: any): boolean;

  /**
   * This function sets the amount of geometric sub-division to use when drawing a shader element with dxDrawImage.
   * Using tessellation allows a shader to manipulate the shape of the rendered image at each sub-division boundary.
   * Needs checking: The example should depict better how does this function actually work with a texture.
   * @param tessellationX The number of sub-division points along the X axis. Range is 1 to 500.
   * @param tessellationY The number of sub-division points along the Y axis. Range is 1 to 500.
   * @returns Returns true if the shader element's tessellation was successfully changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/DxSetShaderTessellation
   **/
  setTessellation(tessellationX: number, tessellationY: number): boolean;

  /**
   * This function applies a 3D transformation to a shader element when it is drawn with dxDrawImage.
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
  setTransform(rotationX: number, rotationY: number, rotationZ: number, rotationCenterOffsetX?: number, rotationCenterOffsetY?: number, rotationCenterOffsetZ?: number, bRotationCenterOffsetOriginIsScreen?: boolean, perspectiveCenterOffsetX?: number, perspectiveCenterOffsetY?: number, bPerspectiveCenterOffsetOriginIsScreen?: boolean): boolean;
}
