declare class Sound3D extends Sound {
  minDistance: number;
  maxDistance: number;

  /**
   * Creates a sound element in the GTA world and plays it immediately after creation for the local player.
   * setElementPosition can be used to move the sound element around after it has been created.
   * Remember to use setElementDimension after creating the sound to play it outside of dimension 0.
   * - Note: The only supported audio formats are MP3, WAV, OGG, RIFF, MOD, XM, IT and S3M. For performance reasons, when using playSound3D for effects that will be played lots (i.e. weapon fire), it is recommend that you convert your audio file to a one channel (mono) WAV with sample rate of 22050 Hz or less. Also consider adding a limit on how often the effect can be played e.g. once every 50ms.
   * @param soundURL the URL.
   * @param x a number representing the X coordinate on the map.
   * @param y a number representing the Y coordinate on the map.
   * @param z a number representing the Z coordinate on the map.
   * @param [looped=false] a boolean representing whether the sound will be looped.To loop the sound, use true.
   * @param [throttled=true] a boolean representing whether the sound will be throttled (i.e. given reduced download bandwidth). To throttle the sound, use true.
   * @see https://wiki.mtasa.com/wiki/PlaySound3D
   **/
  constructor(soundURL: string, x: number, y: number, z: number, looped?: boolean, throttled?: boolean);

  /**
   * Gets a custom sound max distance at which the sound stops.
   * @returns Returns a number of the max distance.
   * @see https://wiki.mtasa.com/wiki/GetSoundMaxDistance
   **/
  getMaxDistance(): number;

  /**
   * Gets a custom sound Minimum distance at which the sound stops getting louder.
   * @returns Returns a number of the minimum distance.
   * @see https://wiki.mtasa.com/wiki/GetSoundMinDistance
   **/
  getMinDistance(): number;

  /**
   * Sets a custom sound max distance at which the sound stops.
   * @param distance the default value for this is 20.
   * @returns Returns a true if the max distance was set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetSoundMaxDistance
   **/
  setMaxDistance(distance: number): boolean;

  /**
   * Sets a custom sound Minimum distance at which the sound stops getting louder.
   * @param distance an integer representing the distance the sound stops getting louder. the default value for this is 5.
   * @returns Returns a true if the minimum distance was set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetSoundMinDistance
   **/
  setMinDistance(distance: number): boolean;
}
