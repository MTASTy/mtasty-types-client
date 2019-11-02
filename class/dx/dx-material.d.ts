declare class DxMaterial extends BaseElement {
  protected constructor();

  /**
   * This gets the dimensions of the supplied material element.
   * @returns Returns two numbers representing the width and height in pixels of the material. If the material is a volume texture, this function will return three numbers representing the width, height and depth.
   * @see https://wiki.mtasa.com/wiki/DxGetMaterialSize
   * @tupleReturn
   **/
  getSize(): [number, number, number];
}
