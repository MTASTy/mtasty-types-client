/** @customConstructor EngineDFF */
declare class EngineDFF extends BaseElement {
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
   * @see https://wiki.mtasa.com/wiki/EngineLoadDFF
   **/
  constructor(dffFileOrRawData: string);

  /**
   * This function replaces the given model ID with the model contained in a DFF file loaded by engineLoadDFF.
   * This function supports vehicles, objects, peds and players but not CJ clothing and body parts.
   * To replace weapon models you must use their object IDs, not weapon IDs.
   * There is a weapon model list available at weapons.
   * - Note: Please note the loading order that is used in the examples as other orders can cause collisions, textures or the DFF not to load due to technical limitations.
   * This function does not support ped and weapon models.
   * - Note: * Default GTA map objects behave inconsistently when using this function on them. If you want to replace models in the original GTA map, use one of the methods shown here.
   * @param modelID The model it to replace the model of.
   * @param [alphaTransparency=false] Set to true if model uses semi-transparent textures, e.g. windows.This will ensure other objects behind the semi-transparent textures are rendered correctly (can slightly impact performance, so only set when required).
   * @returns Returns true if the model was successfully replaced, false if it failed for some reason, ie. the DFF or the model ID is not valid.
   * @see https://wiki.mtasa.com/wiki/EngineReplaceModel
   **/
  replace(modelID: number, alphaTransparency?: boolean): boolean;
}
