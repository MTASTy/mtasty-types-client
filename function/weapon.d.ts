/**
 * This function gets the original weapon property of the specified weapons specified weapon type.
 * @param weaponID The ID of the weapon you want to get info of.
 * @param weaponSkill Either: "pro", "std" or "poor".
 * @param property The property you want to get.
 * @returns Returns number the weapon property or false if the passed arguments were invalid.
 * @see https://wiki.mtasa.com/wiki/GetOriginalWeaponProperty
 **/
declare function getOriginalWeaponProperty(weaponID: number, weaponSkill: "pro" | "std" | "poor", property: string): number | false;

/**
 * This function gets the original weapon property of the specified weapons specified weapon type.
 * @param weaponName Name of the weapon you want to get info of.
 * @param weaponSkill Either: "pro", "std" or "poor".
 * @param property The property you want to get.
 * @returns Returns number the weapon property or false if the passed arguments were invalid.
 * @see https://wiki.mtasa.com/wiki/GetOriginalWeaponProperty
 **/
declare function getOriginalWeaponProperty(weaponName: string, weaponSkill: "pro" | "std" | "poor", property: string): number | false;

/**
 * This function allows you to identify the weapon slot that a weapon belongs to.
 * @param weaponID Weapon id to find the weapon slot of.
 * @returns Returns a number representing the given weapon ID's associated weapon slot, false if the ID was invalid.
 * @see https://wiki.mtasa.com/wiki/GetSlotFromWeapon
 **/
declare function getSlotFromWeapon(weaponID: number): number | false;

/**
 * This function will obtain the ID of a particular weapon from its name.
 * @param name A string containing the name of the weapon.
 * @returns Returns a number if the name matches that of a weapon, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetWeaponIDFromName
 **/
declare function getWeaponIDFromName(name: string): number | false;

/**
 * This function allows you to retrieve the name of a weapon from an ID.
 * - Note: You can also retrieve the name of other methods of death, such as Fall and Rammed.
 * @param id The ID you wish to retrieve the name of.
 * @returns Returns a string of the name of the weapon, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetWeaponNameFromID
 **/
declare function getWeaponNameFromID(id: number): string | false;

/**
 * This function gets a weapon property of the specified custom weapon (clientside only) or specified player-held weapon (both client and server).
 * @param weaponID The ID of the weapon you want to get info of.
 * @param weaponSkill Either: "pro", "std" or "poor".
 * @param property The property you want to get.
 * @returns Returns number the weapon property or false if the passed arguments were invalid.
 * @see https://wiki.mtasa.com/wiki/GetWeaponProperty
 **/
declare function getWeaponProperty(weaponID: number, weaponSkill: "pro" | "std" | "poor", property: string): number | false;

/**
 * This function gets a weapon property of the specified custom weapon (clientside only) or specified player-held weapon (both client and server).
 * @param weaponName Name of the weapon you want to get info of.
 * @param weaponSkill Either: "pro", "std" or "poor".
 * @param property The property you want to get.
 * @returns Returns number the weapon property or false if the passed arguments were invalid.
 * @see https://wiki.mtasa.com/wiki/GetWeaponProperty
 **/
declare function getWeaponProperty(weaponName: string, weaponSkill: "pro" | "std" | "poor", property: string): number | false;
