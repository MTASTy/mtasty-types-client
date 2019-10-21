/**
 * This function applies a shader to one or more world textures.
 * - Tip: The resource shader_tex_names can help in finding the names of world textures. When replacing the texture for a ped using the CJ skin, set textureName to "CJ". The shader inherits the render states of the original when it is drawn, so texture stage 0 will already be set to the original texture. When using with a 'ped', ensure you have set 'ped' or 'all' in the elementTypes when calling dxCreateShader. CJ body parts textures can be replaced by using: "cj_ped_head", "cj_ped_hat", "cj_ped_torso", "cj_ped_legs", "cj_ped_feet", "cj_ped_glasses", "cj_ped_necklace", "cj_ped_watch" and "cj_ped_extra1". Latest version of shader_tex_names will show what is being used.
 * @param shader The shader which is to be applied
 * @param textureName The name of the world texture to apply the shader to. Wildcard matching e.g. "ro?ds*" can be used to apply to more than one texture at a time.
 * @param [targetElement=undefined] The element to restrict applying the shader to. If this is not set the shader will be applied to everything using the texture name. Valid element types for targetElement are vehicles, objects and peds.
 * @param [appendLayers=true] allows two or more layered shaders to be applied in the same texture.You may want to modify the DepthBias in the technique pass to avoid Z-fighting artifacts when using this.
 * @returns Returns true if the shader was successfully applied, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineApplyShaderToWorldTexture
 **/
declare function engineApplyShaderToWorldTexture(shader: DxShader, textureName: string, targetElement?: Vehicle | Ped | MapObject, appendLayers?: boolean): boolean;

/**
 * This function gets the model ID of an object model from object name. This function is the counterpart of engineGetModelNameFromID.
 * @param modelName The model name of the object.
 * @returns Returns a number with the ID of the object model, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineGetModelIDFromName
 **/
declare function engineGetModelIDFromName(modelName: string): number | false;

/**
 * This function gets the LOD distance for any object / model ID.
 * @param model The model / object ID number you want to get the LOD distance of.
 * @returns Returns a number representing the LOD distance of the model, or false if the model argument is incorrect.
 * @see https://wiki.mtasa.com/wiki/EngineGetModelLODDistance
 **/
declare function engineGetModelLODDistance(model: number): number | false;

/**
 * This function gets the model name of an object model from model ID. This function is the counterpart of engineGetModelIDFromName.
 * @param modelID The model ID of the object.
 * @returns Returns a string with the name of the object model, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineGetModelNameFromID
 **/
declare function engineGetModelNameFromID(modelID: number): string | false;

/**
 * This function is used to assign the next available model ID to a certain element type.
 * - Note: Currently only "ped" is supported.
 * @param elementType this must be "ped".
 * @returns Returns a number of the model ID that was available to be assigned to the element type, false if no free model ID available or invalid element type.
 * @see https://wiki.mtasa.com/wiki/EngineRequestModel
 **/
declare function engineRequestModel(elementType: "ped"): number | false;

/**
 * This function is used to un-assign the specified model ID from the engineRequestModel assignment.
 * @param modelID the model ID you want to have un-assigned.
 * @returns Returns true if the model was successfully freed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineFreeModel
 **/
declare function engineFreeModel(modelID: number): boolean;

// TODO: Fix type
/**
 * This function returns a table of the world textures which are applied to the specified model.
 * @param modelID You can either use the model id or the model name.
 * @returns Returns an object if this function succeeds, false if it fails for some reason.
 * @see https://wiki.mtasa.com/wiki/EngineGetModelTextureNames
 **/
declare function engineGetModelTextureNames(modelID: string): object | false;

// TODO: Fix type
/**
 * This function returns a list of the world textures which are being used to draw the current scene.
 * @param [nameFilter="*"] Only include textures that match the wildcard string.
 * @param [modelId=""] Only include textures that are used by the model id (or model name).
 * @returns Returns an object of texture names.
 * @see https://wiki.mtasa.com/wiki/EngineGetVisibleTextureNames
 **/
declare function engineGetVisibleTextureNames(nameFilter?: string, modelId?: string): object | false;

/**
 * This function imports (adds) a loaded RenderWare Texture Dictionary into a specific model.
 * This is necessary in order for the DFF loader to find any new textures.
 * Please call this function before loading the DFF model file, in order to allow the DFF loading process to find the new textures.
 * This function can also replace default GTA textures, so that it becomes possible to e.g. put custom images on existing billboards.
 * Ped and weapon textures are also supported. See here for tips on reducing the size of TXD files.
 * - Note: Please note the loading order that is used in the examples as other orders can cause collisions, textures or the DFF not to load due to technical limitations.
 * @param texture The TXD that was loaded with engineLoadTXD.
 * @param modelID The model id to import the TXD into.
 * @returns Returns true if the function executed succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineImportTXD
 **/
declare function engineImportTXD(texture: EngineTXD, modelID: number): boolean;

/**
 * This function loads a RenderWare Collision (COL 1/2/3) file into GTA.
 * The collisions can then be used to provide collisions for in-game objects.
 * For vehicles, please omit this function by embedding your COL file into your DFF file.
 * This way, you can be sure that the COL file is correctly (and automatically) loaded when calling engineLoadDFF.
 * This is a client side function.
 * Be sure to transfer your COL file by including it in the meta file.
 * - Note: Please note the loading order that is used in the examples as other orders can cause collisions, textures or the DFF not to load due to technical limitations.
 * - Note: Collision libraries (.col files containing multiple collision models) are not supported.
 * @param colFileOrRawData The filepath to the COL file you want to load or whole data buffer of the COL file.
 * @returns Returns a COL if the file was loaded, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineLoadCOL
 **/
declare function engineLoadCOL(colFileOrRawData: string): EngineCOL | false;

/**
 * This function loads a RenderWare Model (DFF) file into GTA.
 * To successfully load your model with textures, be sure to use engineLoadTXD and engineImportTXD before calling this function.
 * If some error occurs while loading the DFF, MTA will output a message - check out DFF error messages to know what they mean.
 * This is a client side function.
 * Be sure to transfer your DFF file by including it in the meta file.
 * The returned DFF element is an element in the element tree, just like vehicles and objects.
 * When the dff is destroyed, ie on resource unload or using destroyElement, any elements that use the DFF, such as vehicles or objects will be reset.
 * - Note: Please note the loading order that is used in the examples as other orders can cause collisions, textures or the DFF not to load due to technical limitations.
 * @param dffFileOrRawData The filepath to the DFF file you want to load or whole data buffer of the DFF file.
 * @returns Returns a DFF element if the dff file loaded, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineLoadDFF
 **/
declare function engineLoadDFF(dffFileOrRawData: string): EngineDFF | false;

/**
 * This function loads an animation library (IFP) file into GTA with a custom block name. All three IFP formats are supported ANPK, ANP2, and ANP3. Unfortunately, GTA 3 animations are not supported, however, you can load GTA:VC IFP files using this function. You don't have to replace any animation to play a custom one, to play a custom animation, load the IFP file using this function, then use setPedAnimation. If you wish to replace a GTA internal animation with a custom one, you can use engineReplaceAnimation. To unload the IFP file, use destroyElement, restarting or stopping the resource can also unload the IFP file automatically.
 * @param ifpFileOrRawData The filepath to the IFP file you want to load or whole data buffer of the IFP file.
 * @param customBlockName the new block name for the IFP file. You cannot use the GTA default internal block names. You should namespace this name using a string like resource.blockname.
 * @returns Returns an IFP element if the IFP file loaded, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineLoadIFP
 **/
declare function engineLoadIFP(ifpFileOrRawData: string, customBlockName: string): EngineIFP | false;

/**
 * This function loads a RenderWare Texture Dictionary (TXD) file into GTA.
 * The texture dictionary can then be used to provide textures.
 * This is a client side function.
 * Be sure to transfer your TXD file by including it in the meta file.
 * - Note: Please note the loading order that is used in the examples as other orders can cause collisions, textures or the DFF not to load due to technical limitations.
 * - Tip: Do your TXD files take megabytes of disk space? You can read some tips on reducing the size of TXD files to compress them without ruining texture quality.
 * @param txdFileOrRawData The filepath to the TXD file you want to load or whole data buffer of the TXD file.
 * @param filteringEnabled: Whether to enable texture filtering.
 * @param [filteringEnabled=true] Whether to enable texture filtering.
 * @returns Returns a TXD if the file was loaded, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineLoadTXD
 **/
declare function engineLoadTXD(txdFileOrRawData: string, filteringEnabled?: boolean): EngineTXD | false;

/**
 * This function removes a shader from one or more world textures.
 * @param shader The shader which is to be removed.
 * @param textureName The name of the world texture to remove the shader from. It should be exactly the same string as used with engineApplyShaderToWorldTexture when the shader was initially applied.
 * @param [targetElement=undefined] The element to remove the shader from.It should be the same element as used with engineApplyShaderToWorldTexture when the shader was initially applied.
 * @returns Returns true if the shader was successfully removed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineRemoveShaderFromWorldTexture
 **/
declare function engineRemoveShaderFromWorldTexture(shader: DxShader, textureName: string, targetElement?: Element): boolean;

/**
 * This function replaces a specific internal (default) animation with a custom one that has been loaded using engineLoadIFP function. This function only affects a specific player or ped, the internal animation is not replaced for everyone, for instance, different players and peds are able to have completely different crouching, walking, and fighting etc., animations running simultaneously at the same time. Also, it's not synchronized, you'll need to execute this function on every client to synchronize it. Internal animations replaced using this function can still be played with setPedAnimation. You can restore replaced animations back with engineRestoreAnimation. It should be noted that partial animations are not supported, you can still replace them, but they won't work as intended, for example, "FightA_block" animation from "ped" block is a partial animation, you can't replace it properly, only a few animations are partial, rest of them are not, so it shouldn't be a problem.
 * @param thePed the player or ped you want to replace an animation for.
 * @param InternalBlockName the internal block name.
 * @param InternalAnimName the internal animation name inside InternalBlockName.
 * @param CustomBlockName the custom block name of the loaded IFP file that you passed to engineLoadIFP as second parameter.
 * @param CustomAnimName the custom animation name inside the loaded IFP file with CustomBlockName.
 * @returns Returns true on success, false in case of failure.
 * @see https://wiki.mtasa.com/wiki/EngineReplaceAnimation
 **/
declare function engineReplaceAnimation(thePed: Ped, InternalBlockName: string, InternalAnimName: string, CustomBlockName: string, CustomAnimName: string): boolean;

/**
 * This function replaces the collision file of the given model id to the collision file passed.
 * Use engineLoadCOL to load the collision file first.
 * - Note: Please note the loading order that is used in the examples as other orders can cause collisions, textures or the DFF not to load due to technical limitations.
 * - Note: Collision libraries (.col files containing multiple collision models) are not supported. See COL for details. Object models are supported only (no vehicles or players).
 * @param theCol The collision file to replace with.
 * @param modelID The model ID whose collision file you want to replace.
 * @returns Returns true if the collision was successfully replaced, false or nil if the collision could not be replaced for a reason.
 * @see https://wiki.mtasa.com/wiki/EngineReplaceCOL
 **/
declare function engineReplaceCOL(theCol: EngineCOL, modelID: number): boolean;

/**
 * This function replaces the given model ID with the model contained in a DFF file loaded by engineLoadDFF.
 * This function supports vehicles, objects, peds and players but not CJ clothing and body parts.
 * To replace weapon models you must use their object IDs, not weapon IDs.
 * There is a weapon model list available at weapons.
 * - Note: Please note the loading order that is used in the examples as other orders can cause collisions, textures or the DFF not to load due to technical limitations.
 * This function does not support ped and weapon models.
 * - Note: * Default GTA map objects behave inconsistently when using this function on them. If you want to replace models in the original GTA map, use one of the methods shown here.
 * @param theModel The model to replace the given model ID with.
 * @param modelID The model it to replace the model of.
 * @param [alphaTransparency=false] Set to true if model uses semi-transparent textures, e.g. windows.This will ensure other objects behind the semi-transparent textures are rendered correctly (can slightly impact performance, so only set when required).
 * @returns Returns true if the model was successfully replaced, false if it failed for some reason, ie. the DFF or the model ID is not valid.
 * @see https://wiki.mtasa.com/wiki/EngineReplaceModel
 **/
declare function engineReplaceModel(theModel: EngineDFF, modelID: number, alphaTransparency?: boolean): boolean;

/**
 * This function restores internal (default) animations that were replaced using engineReplaceAnimation function. This function only affects a specific player or ped just like engineReplaceAnimation. If only 1st parameter (ped) is provided to this function, all replaced animations are restored. If block name is also provided for 2nd parameter, then replaced animations within that block are restored. If 3rd parameter (animation name) is provided, then only that specific animation within that specific block is restored.
 * @param thePed the player or ped you want to restore an animation(s) for.
 * @param InternalBlockName the internal block name.
 * @param InternalAnimName the internal animation name inside InternalBlockName.
 * @returns Returns true on success, false in case of failure.
 * @see https://wiki.mtasa.com/wiki/EngineRestoreAnimation
 **/
declare function engineRestoreAnimation(thePed: Ped, InternalBlockName?: string, InternalAnimName?: string): boolean;

/**
 * This function restores the original collision model of the given model ID. Reverses the effect of engineReplaceCOL.
 * @param modelID The ID of the model to restore the model of.
 * @returns Returns true if this function succeeds, false or undefined if it fails for some reason.
 * @see https://wiki.mtasa.com/wiki/EngineRestoreCOL
 **/
declare function engineRestoreCOL(modelID: number): boolean | undefined;

/**
 * This function restores the visual DFF model of the given model ID. This restores the result of engineReplaceModel.
 * @param modelID The model ID to restore the visuals of.
 * @returns Returns true if the model was successfully restored, false or nil if it failed for some reason.
 * @see https://wiki.mtasa.com/wiki/EngineRestoreModel
 **/
declare function engineRestoreModel(modelID: number): boolean | undefined;

/**
 * This function enables or disables asynchronous model loading.
 * Enabling asynchronous model loading may reduce the small pauses that occur when a new model is displayed for the first time.
 * However, it can cause the new models to appear slightly later than they might have otherwise.
 * - Warning: Using this function with a large amounts of engineReplace* at the same time may cause loading times to be exponentially slower.
 * @param enable Set to true/false to enable/disable asynchronous loading. Only works if the client's preferences has 'Asynchronous Loading' set to 'Auto'.
 * @param force If set to true, ignores the client's preferences.
 * @returns Returns true if the function executed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineSetAsynchronousLoading
 **/
declare function engineSetAsynchronousLoading(enable: boolean, force: boolean): boolean;

/**
 * This function sets a custom LOD distance for any object / model ID. This is the distance at which objects of that model ID are switched to their LOD model, or (if there is no LOD model) become invisible.
 * - Note: The actual draw distance used is modified by the draw distance slider in the settings 'Video' tab of the MTA client.
 * However, there is a general draw distance limit of 300 units. So engineSetModelLODDistance(1337,400) will mean model 1337 will be visible up to a distance of 300 units no matter what the 'Video' tab says. Therefore, unless it's really important, engineSetModelLODDistance should not be set to anything greater than 170. 170 will still give the maximum draw distance (of 300 units) on clients that have a 'Video' tab draw distance setting of 100%, and it will help reduce lag for players who chose a lower draw distance in their settings. For low LOD elements, engineSetModelLODDistance still has a limit of 300 units, but the actual draw distance used is 5 times the setting value. Also, low LOD elements ignore the 'Video' tab draw distance slider. So a setting of 200 will mean a low LOD element will always have a draw distance of 1000 units.
 * @param model The model / object ID number you want to change the LOD distance of.
 * @param distance New LOD distance value in San Andreas units.
 * @returns Returns true if the function executed succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineSetModelLODDistance
 **/
declare function engineSetModelLODDistance(model: number, distance: number): boolean;

/**
 * This function changes a property of a surface.
 * @param surfaceID Material ID from 0 to 178.
 * @param property Property name.
 * @param value New value from table below.
 * @returns Returns true if the function executed succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineSetSurfaceProperties
 **/
declare function engineSetSurfaceProperties(surfaceID: number, property: string, value: any): boolean;

/**
 * This function retrieves the value of a surface property.
 * @param surfaceID Material ID from 0 to 178.
 * @param property Property name.
 * @returns Returns the current property value.
 * @see https://wiki.mtasa.com/wiki/EngineGetSurfaceProperties
 **/
declare function engineGetSurfaceProperties(surfaceID: number, property: string): any;

/**
 * This function resets a surface property to its default value.
 * If no ID is provided, it will reset all surfaces' properties to their original values.
 * @param surfaceID Material ID from 0 to 178.
 * @returns Returns true if the function executed succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineResetSurfaceProperties
 **/
declare function engineResetSurfaceProperties(surfaceID: number): boolean;
