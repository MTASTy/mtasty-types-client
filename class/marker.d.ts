/** @customConstructor Marker */
declare class Marker extends BaseElement {
  markerType: string;
  icon: string;
  size: number;
  target: Vector3 | false;

  /**
   * Returns the number of markers that currently exist in the world.
   * @returns Returns the number of markers that currently exist.
   * @see https://wiki.mtasa.com/wiki/GetMarkerCount
   **/
  static getCount(): number;

  /**
   * This function creates a marker.
   * A marker is a 3D model in the world that can highlight a particular point or area, often used to instruct players where to go to perform actions such as entering buildings.
   * There are various limits that govern the maximum number of each type that can be visible at once.
   * These are: Coronas: 32 / Checkpoints, Rings, Cylinders and Arrows combined: 32
   * You are able to create as many markers as you wish (memory and element limit permitting), but the player will only be able to see the nearest ones up to the limit.
   * @param x A floating point number representing the X coordinate on the map.
   * @param y A floating point number representing the Y coordinate on the map.
   * @param z A floating point number representing the Z coordinate on the map.
   * @param [theType=checkpoint] The visual type of the marker to be created. Possible values: "checkpoint", "ring", "cylinder", "arrow", "corona".
   * @param [size=4] The diameter of the marker to be created, in meters.
   * @param [r=0] An integer number representing the amount of red to use in the colouring of the marker (0 - 255).
   * @param [g=0] An integer number representing the amount of green to use in the colouring of the marker (0 - 255).
   * @param [b=255] An integer number representing the amount of blue to use in the colouring of the marker (0 - 255).
   * @param [a=255] An integer number representing the amount of alpha to use in the colouring of the marker (0 - 255 where 0 is transparent and 255 is opaque).
   * @see https://wiki.mtasa.com/wiki/CreateMarker
   **/
  constructor(x: number, y: number, z: number, theType?: "checkpoint" | "ring" | "cylinder" | "arrow" | "corona", size?: number, r?: number, g?: number, b?: number, a?: number);

  /**
   * This function returns a marker's type.
   * @returns Returns one of the following strings: "checkpoint", "ring", "cylinder", "arrow", "corona".
   * @see https://wiki.mtasa.com/wiki/GetMarkerType
   **/
  getMarkerType(): string;

  /**
   * This function returns the icon name for a marker.
   * @returns Returns a string containing one of the following: "none", "arrow", "finish".
   * @see https://wiki.mtasa.com/wiki/GetMarkerIcon
   **/
  getIcon(): string;

  /**
   * This function returns a float containing the size of the specified marker.
   * @returns Returns a number containing the size of the specified marker.
   * @see https://wiki.mtasa.com/wiki/GetMarkerSize
   **/
  getSize(): number;

  /**
   * This function returns the position of the specified marker's target, the position it points to. This only works for checkpoint markers and ring markers.
   * For checkpoints it returns the position the arrow is pointing to, for ring markers it returns the position the ring is facing.
   * You can set this target with setMarkerTarget.
   * @returns Vector3 if a target is set, or false in the first variable and undefined in the two others if the marker is invalid or no target is set.
   * @see https://wiki.mtasa.com/wiki/GetMarkerTarget
   **/
  getTarget(): Vector3 | false;

  /**
   * This function returns the color and transparency for a marker element.
   * Not all marker types support transparency.
   * @returns Returns four numbers corresponding to the amount of red, green, blue and alpha (respectively) of the marker.
   * @see https://wiki.mtasa.com/wiki/GetMarkerColor
   * @tupleReturn
   **/
  getColor(): [number, number, number, number];

  /**
   * This function changes a marker's type.
   * The type controls how the marker is displayed in the game.
   * It's important that you use marker types that users are used to from the single player game.
   * For example, checkpoints are used in races, rings are used for aircraft races, arrows are used for entering buildings etc.
   * @param markerType A string denoting the marker type. Valid values are: "checkpoint", "ring", "cylinder", "arrow", "corona".
   * @returns Returns true if the marker type was changed, false if it wasn't or marker values were invalid.
   * @see https://wiki.mtasa.com/wiki/SetMarkerType
   **/
  setType(markerType: "checkpoint" | "ring" | "cylinder" | "arrow" | "corona"): boolean;

  /**
   * This function allows changing the icon of a checkpoint marker.
   * @param icon A string referring to the type of icon, acceptable values are: "none", "arrow", "finish".
   * @returns Returns true if successful, false if invalid arguments were passed to the function.
   * @see https://wiki.mtasa.com/wiki/SetMarkerIcon
   **/
  setIcon(icon: "none" | "arrow" | "finish"): boolean;

  /**
   * This function sets the size of the specified marker.
   * Setting negative value will "flip" the marker, do nothing or make it invisible: cylinder or arrow - upside down, ring - inside out, checkpoint - disappear, corona - bigger.
   * @param size A number representing new size of the marker.
   * @returns Returns true if successful, false if failed.
   * @see https://wiki.mtasa.com/wiki/SetMarkerSize
   **/
  setSize(size: number): boolean;

  /**
   * This function sets the 'target' for a marker.
   * Only the checkpoint and ring marker types can have a target.
   * For checkpoint markers, the target is shown as an arrow aiming at the point specified.
   * For ring markers, the target is shown by rotating the whole ring so that it faces the point specified.
   * This function is most useful for setting up markers for races, where each marker points to the next one's position (This is mostly used in races!).
   * @param x The x axis of the coordinate to target the marker at.
   * @param y The y axis of the coordinate to target the marker at.
   * @param z The z axis of the coordinate to target the marker at.
   * @returns Returns true if target was set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetMarkerTarget
   **/
  setTarget(x: number, y: number, z: number): boolean;

  /**
   * This function sets the color of the specified marker by modifying the values for red, green and blue.
   * @param r The amount of red in the final color (0 to 255).
   * @param g The amount of green in the final color (0 to 255).
   * @param b The amount of blue in the final color (0 to 255).
   * @param a The amount of alpha in the final color (0 to 255).
   * @returns Returns true if successful, false if invalid arguments were passed to the function.
   * @see https://wiki.mtasa.com/wiki/SetMarkerColor
   **/
  setColor(r: number, g: number, b: number, a: number): boolean;
}
