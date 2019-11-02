/** @customConstructor EngineCOL */
declare class EngineCOL extends BaseElement {
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
   * @see https://wiki.mtasa.com/wiki/EngineLoadCOL
   **/
  constructor(colFileOrRawData: string);

  /**
   * This function replaces the collision file of the given model id to the collision file passed.
   * Use engineLoadCOL to load the collision file first.
   * - Note: Please note the loading order that is used in the examples as other orders can cause collisions, textures or the DFF not to load due to technical limitations.
   * - Note: Collision libraries (.col files containing multiple collision models) are not supported. See COL for details. Object models are supported only (no vehicles or players).
   * @param modelID The model ID whose collision file you want to replace.
   * @returns Returns true if the collision was successfully replaced, false or nil if the collision could not be replaced for a reason.
   * @see https://wiki.mtasa.com/wiki/EngineReplaceCOL
   **/
  replace(modelID: number): boolean;
}
