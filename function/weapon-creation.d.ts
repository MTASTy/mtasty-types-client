/**
 * Creates a custom weapon that can fire bullets.
 * Do not confuse this with player held weapons.
 * - Tip: Some weapons (such as the minigun) visually point to a slightly different direction to where they fire. To adjust this, use setWeaponProperty with 'fire_rotation'.
 * @param theType The weapon type.
 * @param x The x position to create the weapon.
 * @param y The y position to create the weapon.
 * @param z The z position to create the weapon.
 * @returns Returns a custom weapon element, which represents a weapon floating at that position.
 * @see https://wiki.mtasa.com/wiki/CreateWeapon
 **/
declare function createWeapon(theType: string, x: number, y: number, z: number): Weapon | false;

/**
 * Fires one shot from a custom weapon.
 * @param theWeapon The weapon to be fired.
 * @returns Returns true if the shot weapon is valid and therefore the shot was fired, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FireWeapon
 **/
declare function fireWeapon(theWeapon: Weapon): boolean;

/**
 * This function gets the total ammo a custom weapon has.
 * @param theWeapon The weapon to get the ammo of.
 * @returns Returns an integer containing how many ammo left has the weapon. Returns false if an error occured.
 * @see https://wiki.mtasa.com/wiki/GetWeaponAmmo
 **/
declare function getWeaponAmmo(theWeapon: Weapon): number | false;

/**
 * This function gets the amount of ammo left in a custom weapon's magazine/clip.
 * @param theWeapon the weapon to get the clip ammo of.
 * @returns Returns the amount of ammo in the custom weapon's clip, false if an error occured.
 * @see https://wiki.mtasa.com/wiki/GetWeaponClipAmmo
 **/
declare function getWeaponClipAmmo(theWeapon: Weapon): number | false;

/**
 * This gets the firing rate to be used when a custom weapon opens fire.
 * @param theWeapon The weapon to modify the firing rate of.
 * @returns Returns an integer with the firing rate of the custom weapon, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetWeaponFiringRate
 **/
declare function getWeaponFiringRate(theWeapon: Weapon): number | false;

/**
 * This function gets the flags of a custom weapon.
 * @param theWeapon the weapon to get the flag of.
 * @param theFlag the weapon flag to get.
 * @returns Returns the true or false on success (flags flag returns 8 values) if the flag is enabled or not. Returns false if the weapon element isn't valid or an error occured.
 * @see https://wiki.mtasa.com/wiki/GetWeaponFlags
 **/
declare function getWeaponFlags(theWeapon: Weapon, theFlag: string): boolean;

/**
 * This function gets the owner of a custom weapon.
 * Weapon ownership system was, however, disabled, so this function always returns false.
 * Please refer to setWeaponOwner for details.
 * @param theWeapon The weapon to get the owner of.
 * @returns This function was intended to return the player which owns the custom weapon, and false if an error occured. However, at the moment it always returns false.
 * @see https://wiki.mtasa.com/wiki/GetWeaponOwner
 **/
declare function getWeaponOwner(theWeapon: Weapon): boolean;

/**
 * This function gets the state of a custom weapon.
 * @param theWeapon the weapon to get the state of.
 * @returns A string if the weapon is valid, indicating the weapon state or false if an error occured or the weapon is invalid.
 * @see https://wiki.mtasa.com/wiki/GetWeaponState
 **/
declare function getWeaponState(theWeapon: Weapon): string | false;

/**
 * This functions gets the target of a custom weapon.
 * @param theWeapon The weapon to get the target of.
 * @returns Returns the target of the custom weapon, which can be: undefined if the weapon is in rotation based targeting, 3 floats if the weapon is firing at a fixed point, an element if the weapon is firing an entity. Returns false if the weapon element is not valid.
 * @see https://wiki.mtasa.com/wiki/GetWeaponTarget
 * @tupleReturn
 **/
declare function getWeaponTarget(theWeapon: Weapon): [number, number, number] | [undefined] | [Element] | [false];

/**
 * This function resets the firing rate of a custom weapon to the default one.
 * @param theWeapon the weapon to reset the firing rate of.
 * @returns Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetWeaponFiringRate
 **/
declare function resetWeaponFiringRate(theWeapon: Weapon): boolean;

/**
 * Sets the ammo to a certain amount for a specified weapon (if they already have it), regardless of current ammo.
 * @param theWeapon The weapon to set the ammo of.
 * @param totalAmmo The total ammo amount for the given weapon (including ammo in clip).
 * @returns Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWeaponAmmo
 **/
declare function setWeaponAmmo(theWeapon: Weapon, totalAmmo: number): boolean;

/**
 * This function sets the ammo left in a custom weapon's magazine/clip.
 * @param theWeapon The weapon to set the clip ammo of.
 * @param clipAmmo The amount of ammo in the clip.
 * @returns This function returns true if the arguments are valid and the weapon clip ammo could be changed; false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWeaponClipAmmo
 **/
declare function setWeaponClipAmmo(theWeapon: Weapon, clipAmmo: number): boolean;

/**
 * This function sets the firing rate to be used when a custom weapon is in firing state.
 * @param theWeapon The weapon to modify the firing rate of.
 * @param firingRate The weapon firing rate. It seems to be a kind of frecuency value, so the lower the quicker the custom weapon will shoot.
 * @returns Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWeaponFiringRate
 **/
declare function setWeaponFiringRate(theWeapon: Weapon, firingRate: number): boolean;

/**
 * This function sets a custom weapon flags, used to change how it behaves or finds a possible target to shoot.
 * - Note: Do not confuse this function with setWeaponProperty. Although setWeaponProperty works with player-held weapons and custom weapons (in a limited extent), this function does not work with player-held weapons.
 * @param theWeapon the weapon element to set the flag of.
 * @param theFlag the weapon flag to change (all of them can be true or false).
 * @param enable whether to enable or disable the specified flag.
 * @returns Returns true if all arguments are valid and the flags where changed; false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWeaponFlags
 **/
declare function setWeaponFlags(theWeapon: Weapon, theFlag: string, enable: boolean): boolean;

/**
 * This function sets the weapon property of the specified weapons specified weapon type. See lower down the page for documentation related to weapon creation.
 * @param weaponID The ID of the weapon you want to set a property of.
 * @param weaponSkill Either: "pro", "std" or "poor". The player must have this skill level set to have the effect.
 * @param property The property you want to set.
 * @param theValue The value to set the property to.
 * @returns Returns true if the weapon property was successfully set. Returns false if the weapon property was unable to be set.
 * @see https://wiki.mtasa.com/wiki/SetWeaponProperty
 **/
declare function setWeaponProperty(weaponID: number, weaponSkill: "pro" | "std" | "poor", property: string, theValue: number): boolean;

/**
 * This function sets the weapon property of the specified weapons specified weapon type. See lower down the page for documentation related to weapon creation.
 * @param weaponName The name of the weapon you want to set a property of.
 * @param weaponSkill Either: "pro", "std" or "poor". The player must have this skill level set to have the effect.
 * @param property The property you want to set.
 * @param theValue The value to set the property to.
 * @returns Returns true if the weapon property was successfully set. Returns false if the weapon property was unable to be set.
 * @see https://wiki.mtasa.com/wiki/SetWeaponProperty
 **/
declare function setWeaponProperty(weaponName: string, weaponSkill: "pro" | "std" | "poor", property: string, theValue: number): boolean;

/**
 * This function sets a custom weapon's state.
 * @param theWeapon the weapon you wish to set the state of.
 * @param theState the state you wish to set.
 * @returns Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWeaponState
 **/
declare function setWeaponState(theWeapon: Weapon, theState: string): boolean;

/**
 * This function sets the target of a custom weapon. There are 3 different targeting modes, which are explained below.
 * Fires the weapon at a physical element.
 * @param theWeapon The weapon to set the target of.
 * @param theTarget The element to shoot at. It can be a player, ped, vehicle or object.
 * @param [theComponent=255] The component of the target to shoot at.
 * @returns Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWeaponTarget
 **/
declare function setWeaponTarget(theWeapon: Weapon, theTarget: Element, theComponent?: number): boolean;

/**
 * This function sets the target of a custom weapon. There are 3 different targeting modes, which are explained below.
 * Fires the weapon at the specified position.
 * @param theWeapon The weapon to set the target of.
 * @param targetX The target X.
 * @param targetY The target Y.
 * @param targetZ The target Z.
 * @returns Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWeaponTarget
 **/
declare function setWeaponTarget(theWeapon: Weapon, targetX: number, targetY: number, targetZ: number): boolean;

/**
 * This function sets the target of a custom weapon. There are 3 different targeting modes, which are explained below.
 * Sets the weapon back to rotation based targeting. It will fire to its front.
 * @param theWeapon The weapon to set the target of.
 * @returns Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWeaponTarget
 **/
declare function setWeaponTarget(theWeapon: Weapon): boolean;
