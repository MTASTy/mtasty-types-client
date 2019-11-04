/** @customConstructor GuiStaticImage */
declare class GuiStaticImage extends BaseGuiElement {
  /**
   * This function creates a static image using a .png image in the resource.
   * @param x A number of the 2D x position of the image on a player's screen. This is affected by the relative argument.
   * @param y A number of the 2D y position of the image on a player's screen. This is affected by the relative argument.
   * @param width A number of the width of the image. This is affected by the relative argument.
   * @param height A number of the height of the image. This is affected by the relative argument.
   * @param path The filepath of the image file that is being loaded.
   * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing measures relative to the parent.
   * @param [parent=undefined] This is the parent that the image is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
   * @see https://wiki.mtasa.com/wiki/GuiCreateStaticImage
   **/
  constructor(x: number, y: number, width: number, height: number, path: string, relative: boolean, parent?: BaseGuiElement);

  /**
   * This function allows you to change the image in GUI static image element to another one.
   * - Tip: If you set other images as children you will have to use setElementCallPropagationEnabled to only affect the parent image.
   * @param filename A string specifying the filepath of the image file being loaded in current resource.
   * @returns Returns true if the the image in the static image element was successfully changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiStaticImageLoadImage
   **/
  loadImage(filename: string): boolean;

  /**
   * This function gets the native size of image.
   * That means the original size in pixels of the image file.
   * @returns Returns two numbers where first is the width and second the height of the image in pixels.
   * @see https://wiki.mtasa.com/wiki/GuiStaticImageGetNativeSize
   * @tupleReturn
   **/
  getNativeSize(): [number, number];
}
