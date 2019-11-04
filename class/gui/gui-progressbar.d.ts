/** @customConstructor GuiProgressBar */
declare class GuiProgressBar extends BaseGuiElement {
  progress: number;

  /**
   * This function creates a progress bar.
   * @param x A number of the 2D x position of the progress bar on a player's screen. This is affected by the relative argument.
   * @param y A number of the 2D y position of the progress bar on a player's screen. This is affected by the relative argument.
   * @param width A number of the width of the progress bar. This is affected by the relative argument.
   * @param height A number of the height of the progress bar. This is affected by the relative argument.
   * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing measures relative to the parent.
   * @param [parent=undefined] This is the parent that the progress bar is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parent's origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
   * @see https://wiki.mtasa.com/wiki/GuiCreateProgressBar
   **/
  constructor(x: number, y: number, width: number, height: number, relative: boolean, parent?: BaseGuiElement);

  /**
   * This function gets the progress of a progress bar as a percentage.
   * @returns Returns a number ranging between 0 and 100.
   * @see https://wiki.mtasa.com/wiki/GuiProgressBarGetProgress
   **/
  getProgress(): number;

  /**
   * This function is used to set the progress of a progressbar as a percentage.
   * @param progress a number ranging from 0 - 100.
   * @returns Returns true if the progress was set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GuiProgressBarGetProgress
   **/
  setProgress(progress: number): boolean;
}
