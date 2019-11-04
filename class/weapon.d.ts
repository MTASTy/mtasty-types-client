/** @customConstructor Weapon */
declare class Weapon extends BaseElement {
  clipAmmo: number;
  ammo: number;
  state: "reloading" | "firing" | "ready";
  firingRate: number;
  readonly target: BaseElement | [number, number, number] | undefined;

  /**
   * This function sets the weapon property of the specified weapons specified weapon type. See lower down the page for documentation related to weapon creation.
   * @param weaponID The ID of the weapon you want to set a property of.
   * @param weaponSkill Either: "pro", "std" or "poor". The player must have this skill level set to have the effect.
   * @param property The property you want to set.
   * @param theValue The value to set the property to.
   * @returns Returns true if the weapon property was successfully set. Returns false if the weapon property was unable to be set.
   * @see https://wiki.mtasa.com/wiki/SetWeaponProperty
   **/
  static setProperty(weaponID: number, weaponSkill: "pro" | "std" | "poor", property: string, theValue: number): boolean;

  /**
   * This function sets the weapon property of the specified weapons specified weapon type. See lower down the page for documentation related to weapon creation.
   * @param weaponName The name of the weapon you want to set a property of.
   * @param weaponSkill Either: "pro", "std" or "poor". The player must have this skill level set to have the effect.
   * @param property The property you want to set.
   * @param theValue The value to set the property to.
   * @returns Returns true if the weapon property was successfully set. Returns false if the weapon property was unable to be set.
   * @see https://wiki.mtasa.com/wiki/SetWeaponProperty
   **/
  static setProperty(weaponName: string, weaponSkill: "pro" | "std" | "poor", property: string, theValue: number): boolean;

  /**
   * This function gets a weapon property of the specified custom weapon (clientside only) or specified player-held weapon (both client and server).
   * @param weaponID The ID of the weapon you want to get info of.
   * @param weaponSkill Either: "pro", "std" or "poor".
   * @param property The property you want to get.
   * @returns Returns number the weapon property or false if the passed arguments were invalid.
   * @see https://wiki.mtasa.com/wiki/GetWeaponProperty
   **/
  static getProperty(weaponID: number, weaponSkill: "pro" | "std" | "poor", property: string): number | false;

  /**
   * This function gets a weapon property of the specified custom weapon (clientside only) or specified player-held weapon (both client and server).
   * @param weaponName Name of the weapon you want to get info of.
   * @param weaponSkill Either: "pro", "std" or "poor".
   * @param property The property you want to get.
   * @returns Returns number the weapon property or false if the passed arguments were invalid.
   * @see https://wiki.mtasa.com/wiki/GetWeaponProperty
   **/
  static getProperty(weaponName: string, weaponSkill: "pro" | "std" | "poor", property: string): number | false;
  
  /**
   * Creates a custom weapon that can fire bullets.
   * Do not confuse this with player held weapons.
   * - Tip: Some weapons (such as the minigun) visually point to a slightly different direction to where they fire. To adjust this, use setWeaponProperty with 'fire_rotation'.
   * @param theType The weapon type.
   * @param x The x position to create the weapon.
   * @param y The y position to create the weapon.
   * @param z The z position to create the weapon.
   * @see https://wiki.mtasa.com/wiki/CreateWeapon
   **/
  constructor(theType: string, x: number, y: number, z: number);

  /**
   * Fires one shot from a custom weapon.
   * @returns Returns true if the shot was fired, false otherwise.
   * @see https://wiki.mtasa.com/wiki/FireWeapon
   **/
  fire(): boolean;

  /**
   * This function resets the firing rate of a custom weapon to the default one.
   * @returns Returns true on success, false otherwise.
   * @see https://wiki.mtasa.com/wiki/ResetWeaponFiringRate
   **/
  resetFiringRate(): boolean;

  /**
   * This function sets the target of a custom weapon. There are 3 different targeting modes, which are explained below.
   * Fires the weapon at a physical element.
   * @param theTarget The element to shoot at. It can be a player, ped, vehicle or object.
   * @param [theComponent=255] The component of the target to shoot at.
   * @returns Returns true on success, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetWeaponTarget
   **/
  setTarget(theTarget: BaseElement, theComponent?: number): boolean;

  /**
   * This function sets the target of a custom weapon. There are 3 different targeting modes, which are explained below.
   * Fires the weapon at the specified position.
   * @param targetX The target X.
   * @param targetY The target Y.
   * @param targetZ The target Z.
   * @returns Returns true on success, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetWeaponTarget
   **/
  setTarget(targetX: number, targetY: number, targetZ: number): boolean;

  /**
   * This function sets the target of a custom weapon. There are 3 different targeting modes, which are explained below.
   * Sets the weapon back to rotation based targeting. It will fire to its front.
   * @returns Returns true on success, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetWeaponTarget
   **/
  setTarget(): boolean;

  /**
   * This function sets the firing rate to be used when a custom weapon is in firing state.
   * @param firingRate The weapon firing rate. It seems to be a kind of frecuency value, so the lower the quicker the custom weapon will shoot.
   * @returns Returns true on success, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetWeaponFiringRate
   **/
  setFiringRate(firingRate: number): boolean;

  /**
   * This function sets a custom weapon's state.
   * @param theState the state you wish to set.
   * @returns Returns true on success, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetWeaponState
   **/
  setState(theState: "reloading" | "firing" | "ready"): boolean;

  /**
   * This function sets a custom weapon flags, used to change how it behaves or finds a possible target to shoot.
   * - Note: Do not confuse this function with setWeaponProperty. Although setWeaponProperty works with player-held weapons and custom weapons (in a limited extent), this function does not work with player-held weapons.
   * @param theFlag the weapon flag to change (all of them can be true or false).
   * @param enable whether to enable or disable the specified flag.
   * @returns Returns true if all arguments are valid and the flags where changed; false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetWeaponFlags
   **/
  setFlags(theFlag: string, enable: boolean): boolean;

  /**
   * Sets the ammo to a certain amount for a specified weapon (if they already have it), regardless of current ammo.
   * @param totalAmmo The total ammo amount for the given weapon (including ammo in clip).
   * @returns Returns true on success, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetWeaponAmmo
   **/
  setAmmo(totalAmmo: number): boolean;

  /**
   * This function sets the ammo left in a custom weapon's magazine/clip.
   * @param clipAmmo The amount of ammo in the clip.
   * @returns This function returns true if the arguments are valid and the weapon clip ammo could be changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetWeaponClipAmmo
   **/
  setClipAmmo(clipAmmo: number): boolean;

  /**
   * This function gets the owner of a custom weapon.
   * Weapon ownership system was, however, disabled, so this function always returns false.
   * Please refer to setWeaponOwner for details.
   * @returns This function was intended to return the player which owns the custom weapon, and false if an error occured. However, at the moment it always returns false.
   * @see https://wiki.mtasa.com/wiki/GetWeaponOwner
   **/
  getOwner(): Player | false;

  /**
   * This functions gets the target of a custom weapon.
   * @returns Returns the target of the custom weapon, which can be: undefined if the weapon is in rotation based targeting, 3 floats if the weapon is firing at a fixed point, an element if the weapon is firing an entity.
   * @see https://wiki.mtasa.com/wiki/GetWeaponTarget
   * @tupleReturn
   **/
  getTarget(): [number, number, number] | [undefined] | [BaseElement];

  /**
   * This gets the firing rate to be used when a custom weapon opens fire.
   * @returns Returns an integer with the firing rate of the custom weapon.
   * @see https://wiki.mtasa.com/wiki/GetWeaponFiringRate
   **/
  getFiringRate(): number;

  /**
   * This function gets the state of a custom weapon.
   * @returns A string if the weapon is valid, indicating the weapon state.
   * @see https://wiki.mtasa.com/wiki/GetWeaponState
   **/
  getState(): "reloading" | "firing" | "ready";

  /**
   * This function gets the flags of a custom weapon.
   * @param theFlag the weapon flag to get.
   * @returns Returns the true or false on success (flags flag returns 8 values) if the flag is enabled or not.
   * @see https://wiki.mtasa.com/wiki/GetWeaponFlags
   **/
  getFlags(theFlag: string): boolean;

  /**
   * This function gets the total ammo a custom weapon has.
   * @returns Returns an integer containing how many ammo left has the weapon.
   * @see https://wiki.mtasa.com/wiki/GetWeaponAmmo
   **/
  getAmmo(): number;

  /**
   * This function gets the amount of ammo left in a custom weapon's magazine/clip.
   * @returns Returns the amount of ammo in the custom weapon's clip.
   * @see https://wiki.mtasa.com/wiki/GetWeaponClipAmmo
   **/
  getClipAmmo(): number;
}
