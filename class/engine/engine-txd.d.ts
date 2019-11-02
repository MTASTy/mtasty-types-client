/** @customConstructor EngineTXD */
declare class EngineTXD extends BaseElement {
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
   * @see https://wiki.mtasa.com/wiki/EngineLoadTXD
   **/
  constructor(txdFileOrRawData: string, filteringEnabled?: boolean);

  /**
   * This function imports (adds) a loaded RenderWare Texture Dictionary into a specific model.
   * This is necessary in order for the DFF loader to find any new textures.
   * Please call this function before loading the DFF model file, in order to allow the DFF loading process to find the new textures.
   * This function can also replace default GTA textures, so that it becomes possible to e.g. put custom images on existing billboards.
   * Ped and weapon textures are also supported. See here for tips on reducing the size of TXD files.
   * - Note: Please note the loading order that is used in the examples as other orders can cause collisions, textures or the DFF not to load due to technical limitations.
   * @param modelID The model id to import the TXD into.
   * @returns Returns true if the function executed succesfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/EngineImportTXD
   **/
  import(modelID: number): boolean;
}
