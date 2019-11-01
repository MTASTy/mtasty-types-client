declare class Effect extends BaseElement {
  speed: number;
  density: number;

  // static "addBlood", "fxAddBlood"
  // static "addBulletImpact", "fxAddBulletImpact"
  // static "addBulletSplash", "fxAddBulletSplash"
  // static "addDebris", "fxAddDebris"
  // static "addFootSplash", "fxAddFootSplash"
  // static "addGlass", "fxAddGlass"
  // static "addGunshot", "fxAddGunshot"
  // static "addPunchImpact", "fxAddPunchImpact"
  // static "addSparks", "fxAddSparks"
  // static "addTankFire", "fxAddTankFire"
  // static "addTyreBurst", "fxAddTyreBurst"
  // static "addWaterHydrant", "fxAddWaterHydrant"
  // static "addWaterSplash", "fxAddWaterSplash"
  // static "addWood", "fxAddWood"

  /**
   * Creates an effect on specified position.
   * - Note: Not all effects support rotation (e.g. the "fire" - effect doesn't).
   * - Note: All effects have their own duration.
   * @param name A string contains effect name.
   * @param x A number representing the X coordinate on the map.
   * @param y A number representing the Y coordinate on the map.
   * @param z A number representing the Z coordinate on the map.
   * @param rX A number representing the rotation about the X axis in degrees.
   * @param rY A number representing the rotation about the Y axis in degrees.
   * @param rZ A number representing the rotation about the Z axis in degrees.
   * @param [drawDistance=0] A number between 1 and 8191 which represents the draw distance of the effect, or 0 to use the default draw distance.
   * @param [soundEnable=false] to enable the sound of the effect.
   * @see https://wiki.mtasa.com/wiki/CreateEffect
   **/
  constructor(name: string, x: number, y: number, z: number, rX?: number, rY?: number, rZ?: number, drawDistance?: number, soundEnable?: boolean);

  /**
   * This function sets the density of a specified effect.
   * - Warning: Upper density limit of this function depends on client FX Quality setting.
   * The limit is 1 for Low, 1.5 for Medium, and 2 for High/Very high.
   * @param density The level of density (from 0 to 2).
   * @returns Returns true if the density was succesfully changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetEffectDensity
   **/
  setDensity(density: number): boolean;

  /**
   * This function sets the speed of a specified effect.
   * @param speed The speed to set.
   * @returns Returns true if the effect speed was succesfuly changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetEffectSpeed
   **/
  setSpeed(speed: number): boolean;

  /**
   * This function gets the density of certain effect.
   * @returns Return number of density.
   * @see https://wiki.mtasa.com/wiki/GetEffectDensity
   **/
  getDensity(): number;

  /**
   * This function gets the speed of a specified effect.
   * @returns Returns number containing the effect's speed.
   * @see https://wiki.mtasa.com/wiki/GetEffectSpeed
   **/
  getSpeed(): number;
}
