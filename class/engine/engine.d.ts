declare class Engine {
  /**
   * This function restores the original collision model of the given model ID. Reverses the effect of engineReplaceCOL.
   * @param modelID The ID of the model to restore the model of.
   * @returns Returns true if this function succeeds, false or undefined if it fails for some reason.
   * @see https://wiki.mtasa.com/wiki/EngineRestoreCOL
   **/
  static restoreCOL(modelID: number): boolean | undefined;

  /**
   * This function restores the visual DFF model of the given model ID. This restores the result of engineReplaceModel.
   * @param modelID The model ID to restore the visuals of.
   * @returns Returns true if the model was successfully restored, false or nil if it failed for some reason.
   * @see https://wiki.mtasa.com/wiki/EngineRestoreModel
   **/
  static restoreModel(modelID: number): boolean | undefined;

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
  static setAsynchronousLoading(enable: boolean, force: boolean): boolean;

  /**
   * This function sets a custom LOD distance for any object / model ID. This is the distance at which objects of that model ID are switched to their LOD model, or (if there is no LOD model) become invisible.
   * - Note: The actual draw distance used is modified by the draw distance slider in the settings 'Video' tab of the MTA client.
   * However, there is a general draw distance limit of 300 units. So engineSetModelLODDistance(1337,400) will mean model 1337 will be visible up to a distance of 300 units no matter what the 'Video' tab says. Therefore, unless it's really important, engineSetModelLODDistance should not be set to anything greater than 170. 170 will still give the maximum draw distance (of 300 units) on clients that have a 'Video' tab draw distance setting of 100%, and it will help reduce lag for players who chose a lower draw distance in their settings. For low LOD elements, engineSetModelLODDistance still has a limit of 300 units, but the actual draw distance used is 5 times the setting value. Also, low LOD elements ignore the 'Video' tab draw distance slider. So a setting of 200 will mean a low LOD element will always have a draw distance of 1000 units.
   * @param model The model / object ID number you want to change the LOD distance of.
   * @param distance New LOD distance value in San Andreas units.
   * @returns Returns true if the function executed succesfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/EngineSetModelLODDistance
   **/
  static setModelLODDistance(model: number, distance: number): boolean;

  /**
   * This function returns a list of the world textures which are being used to draw the current scene.
   * @param [nameFilter="*"] Only include textures that match the wildcard string.
   * @param [modelId=""] Only include textures that are used by the model id (or model name).
   * @returns Returns an array of texture names.
   * @see https://wiki.mtasa.com/wiki/EngineGetVisibleTextureNames
   **/
  static getVisibleTextureNames(nameFilter?: string, modelId?: string): string[] | false;

  /**
   * This function gets the LOD distance for any object / model ID.
   * @param model The model / object ID number you want to get the LOD distance of.
   * @returns Returns a number representing the LOD distance of the model, or false if the model argument is incorrect.
   * @see https://wiki.mtasa.com/wiki/EngineGetModelLODDistance
   **/
  static getModelLODDistance(model: number): number | false;

  /**
   * This function returns an array of the world textures which are applied to the specified model.
   * @param modelID You can either use the model id or the model name.
   * @returns Returns an array if this function succeeds, false if it fails for some reason.
   * @see https://wiki.mtasa.com/wiki/EngineGetModelTextureNames
   **/
  static getModelTextureNames(modelID: string): string[] | false;

  /**
   * This function gets the model ID of an object model from object name. This function is the counterpart of engineGetModelNameFromID.
   * @param modelName The model name of the object.
   * @returns Returns a number with the ID of the object model, false otherwise.
   * @see https://wiki.mtasa.com/wiki/EngineGetModelIDFromName
   **/
  static getModelIDFromName(modelName: string): number | false;

  /**
   * This function gets the model name of an object model from model ID. This function is the counterpart of engineGetModelIDFromName.
   * @param modelID The model ID of the object.
   * @returns Returns a string with the name of the object model, false otherwise.
   * @see https://wiki.mtasa.com/wiki/EngineGetModelNameFromID
   **/
  static getModelNameFromID(modelID: number): string | false;

  protected constructor();
}
