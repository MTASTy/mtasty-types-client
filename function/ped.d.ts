/**
 * This function is used to set the current clothes on a ped.
 * - Note: This function only works with peds using CJ skin (ID 0).
 * @param thePed The ped whose clothes you want to change.
 * @param clothesTexture A string determining the clothes texture that will be added. See the clothes catalog.
 * @param clothesModel A string determining the clothes model that will be added. See the clothes catalog.
 * @param clothesType A integer representing the clothes slot/type the clothes should be added to.
 * @returns This function returns true if the clothes were successfully added to the ped, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AddPedClothes
 **/
declare function addPedClothes(thePed: Ped, clothesTexture: string, clothesModel: string, clothesType: number): boolean;

/**
 * This function checks if the given ped can fall off bikes.
 * @param thePed the ped you want to check.
 * @returns Returns true if the ped can be knocked off bikes, false if he cannot or an invalid element was passed.
 * @see https://wiki.mtasa.com/wiki/CanPedBeKnockedOffBike
 **/
declare function canPedBeKnockedOffBike(thePed: Ped): boolean;

/**
 * Creates a Ped in the GTA world.
 * @param modelid A whole integer specifying the GTASA skin ID.
 * @param x A number representing the X coordinate on the map.
 * @param y A number representing the Y coordinate on the map.
 * @param z A number representing the Z coordinate on the map.
 * @param [rot=0] A number representing the rotation in degrees.
 * @returns Returns a ped element if it was successfully created.
 * @see https://wiki.mtasa.com/wiki/CreatePed
 **/
declare function createPed(modelid: number, x: number, y: number, z: number, rot?: number): Ped | false;

/**
 * This function returns an integer that contains the ammo in a specified ped's weapon.
 * @param thePed The ped whose ammo you want to check.
 * @param [weaponSlot=current] an integer representing the weapon slot (set to the ped's currently selected slot if not specified).
 * @returns Returns an int containing the amount of ammo in the specified ped's currently selected or specified clip, or 0 if the ped specified is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPedAmmoInClip
 **/
declare function getPedAmmoInClip(thePed: Ped, weaponSlot?: number): number;

/**
 * This function retrieves the analog control state of a ped, as set by setPedAnalogControlState.
 * @param thePed The ped you wish to retrieve the control state of.
 * @param controlName The name of control.
 * @returns Returns a float between 0 (full release) and 1 (full push) indicating the amount the control is pushed.
 * @see https://wiki.mtasa.com/wiki/GetPedAnalogControlState
 **/
declare function getPedAnalogControlState(thePed: Ped, controlName: string): number;

/**
 * Gets the animation of a player or ped that was set using setPedAnimation.
 * - Note: Use getPedTask to monitor what movements the player is currently doing.
 * @param thePed the player or ped you want to get the animation of.
 * @returns Returns two strings: the first is the name of the block, the second is the name of the animation. Returns false if there was an error or if the ped is not doing an animation.
 * @see https://wiki.mtasa.com/wiki/GetPedAnimation
 * @tupleReturn
 **/
declare function getPedAnimation(thePed: Ped): [string, string] | [false];

/**
 * This function returns the current armor of the specified ped.
 * @param thePed The ped whose armor you want to check.
 * @returns A float with the armor, false if an invalid ped was given.
 * @see https://wiki.mtasa.com/wiki/GetPedArmor
 **/
declare function getPedArmor(thePed: Ped): number;

/**
 * Returns the 3D world coordinates of a specific bone of a given ped.
 * - Tip: If you want attach element to ped bone, use https://community.mtasa.com/index.php?p=resources&s=details&id=2540 bone_attach resource.
 * @param thePed the ped you want to inspect.
 * @param bone the number of the bone to get the position of.
 * @returns Returns the x, y, z world position of the bone.
 * @see https://wiki.mtasa.com/wiki/GetPedBonePosition
 * @tupleReturn
 **/
declare function getPedBonePosition(thePed: Ped, bone: number): [number, number, number] | [false];

/**
 * This function gets the current camera rotation of a ped.
 * - Note: The camera rotation angle returned by this function is 360º - α (where α is the actual camera rotation angle). See example to know how to deal with this.
 * @param thePed The ped to retrieve the camera rotation of.
 * @returns Returns the camera rotation of the ped in degrees if successful. Returns false if an invalid element was passed.
 * @see https://wiki.mtasa.com/wiki/GetPedCameraRotation
 **/
declare function getPedCameraRotation(thePed: Ped): number | false;

/**
 * This function is used to get the current clothes texture and model of a certain type on a ped.
 * @param thePed The ped whose clothes you want to retrieve.
 * @param clothesType The type/slot of clothing you want to get.
 * @returns This function returns 2 strings, the clothes texture and model. The first return value will be false if this player's clothes type is empty or an invalid player was specified.
 * @see https://wiki.mtasa.com/wiki/GetPedClothes
 * @tupleReturn
 **/
declare function getPedClothes(thePed: Ped, clothesType: number): [string, string] | [false];

/**
 * This function detects the element a ped is standing on. This can be a vehicle or an object.
 * @param thePed The ped of which you want to get the element he is standing on.
 * @returns Returns an object or a vehicle if the ped is standing on one, false if he is touching none or an invalid element was passed.
 * @see https://wiki.mtasa.com/wiki/GetPedContactElement
 **/
declare function getPedContactElement(thePed: Ped): Vehicle | MapObject | false;

/**
 * Checks whether a ped or the localplayer has a certain control pressed.
 * @param thePed the ped you want to check.
 * @param control the control to get the status of.
 * @returns Returns true if the ped is pressing the specified control, false if not or an invalid argument was passed.
 * @see https://wiki.mtasa.com/wiki/GetPedControlState
 **/
declare function getPedControlState(thePed: Ped, control: string): boolean;

/**
 * Retrieves the fighting style a player/ped is currently using.
 * @param thePed the ped whose current fighting style ID you wish to retrieve.
 * @returns Returns the ped's current fighting style as an integer ID, false if it fails to retrieve a value.
 * @see https://wiki.mtasa.com/wiki/GetPedFightingStyle
 **/
declare function getPedFightingStyle(thePed: Ped): number | false;

/**
 * This function returns the current move state for the specified ped.
 * @param thePed The ped whose move state you want to know.
 * @returns Returns a string indicating the ped's move state, or false if the ped is not streamed in, the movement type is unknown, the ped is in a vehicle or the ped is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPedMoveState
 **/
declare function getPedMoveState(thePed: Ped): string | false;

/**
 * This function gets the vehicle that the ped is currently in or is trying to enter, if any.
 * @param thePed The ped whose vehicle you're looking up.
 * @returns Returns the vehicle that the specified ped is in, or false if the ped is not in a vehicle or is an invalid ped.
 * @see https://wiki.mtasa.com/wiki/GetPedOccupiedVehicle
 **/
declare function getPedOccupiedVehicle(thePed: Ped): Vehicle | false;

/**
 * This function gets the seat that a specific ped is sitting in in a vehicle.
 * @param thePed The ped whose vehicle seat you're looking up.
 * @returns Returns false if the ped is on foot, or the ped doesn't exist.
 * @see https://wiki.mtasa.com/wiki/GetPedOccupiedVehicleSeat
 **/
declare function getPedOccupiedVehicleSeat(thePed: Ped): number | false;

/**
 * This function returns the current oxygen level of the specified ped.
 * @param thePed The ped whose oxygen level you want to check.
 * @returns A float with the oxygen level, false if an invalid ped was given.
 * @see https://wiki.mtasa.com/wiki/GetPedOxygenLevel
 **/
declare function getPedOxygenLevel(thePed: Ped): number | false;

/**
 * This function is used to get the name of a specified ped's current simplest task.
 * - Note: See getPedTask to get a all tasks.
 * @param thePed The ped whose task you want to retrieve.
 * @returns Returns a string representing the name of the ped's simplest, active task.
 * @see https://wiki.mtasa.com/wiki/GetPedSimplestTask
 **/
declare function getPedSimplestTask(thePed: Ped): string | false;

/**
 * This function returns the value of the specified statistic of a specific ped.
 * @param thePed The ped whose stat you want to retrieve.
 * @param stat A whole number determining the stat ID.
 * @returns Returns the value of the requested statistic.
 * @see https://wiki.mtasa.com/wiki/GetPedStat
 **/
declare function getPedStat(thePed: Ped, stat: number): number | false;

/**
 * This function is used to get the element a ped is currently targeting.
 * @param thePed The ped whose target you want to retrieve.
 * @returns Returns the element that's being targeted, or false if there isn't one. This is only effective on physical GTA elements, namely: Players, Peds, Vehicles, Objects.
 * @see https://wiki.mtasa.com/wiki/GetPedTarget
 **/
declare function getPedTarget(thePed: Ped): Element | false;

/**
 * This function allows retrieval of where a ped's target is blocked.
 * It will only be blocked if there is an obstacle within a ped's target range.
 * @param targetingPed This is the ped whose target collision you wish to retrieve.
 * @returns Returns three floats, x,y,z, representing the position where the ped's target collides, or false if it was unsuccessful.
 * @see https://wiki.mtasa.com/wiki/GetPedTargetCollision
 * @tupleReturn
 **/
declare function getPedTargetCollision(targetingPed: Ped): [number, number, number] | [false];

/**
 * This function allows retrieval of the position where a ped's target range ends, when he is aiming with a weapon.
 * @param targetingPed the ped who is targeting whose target end you wish to retrieve.
 * @returns Returns three floats, x,y,z, representing the position where the ped's target ends according to his range, or false if it was unsuccessful.
 * @see https://wiki.mtasa.com/wiki/GetPedTargetEnd
 * @tupleReturn
 **/
declare function getPedTargetEnd(targetingPed: Ped): [number, number, number] | [false];

/**
 * This function allows retrieval of the position a ped's target range begins, when he is aiming with a weapon.
 * @param targetingPed The ped whose target start you wish to retrieve.
 * @returns Returns three floats, x,y,z, representing the position where the ped's target starts, or false if it was unsuccessful.
 * @see https://wiki.mtasa.com/wiki/GetPedTargetStart
 * @tupleReturn
 **/
declare function getPedTargetStart(targetingPed: Ped): [number, number, number] | [false];

/**
 * This function is used to get any simple or complex task of a certain type for a ped.
 * It can provide feedback on all tasks relating to a ped.
 * For example, while jumping, getPedSimplestTask will return TASK_SIMPLE_IN_AIR.
 * If you wanted to know specifically if the player has jumped, you would use this function.
 * If you did you will discover that while jumping Primary task 3 is TASK_COMPLEX_JUMP.
 * @param thePed The ped whose task you want to retrieve.
 * @param priority A string determining which set of tasks you want to retrieve it from. This must be either "primary" or "secondary".
 * @param taskType An integer value representing the task type (or slot) you want to get the task from.
 * @returns Returns the name of the most complex task. See list of player tasks for valid strings. Returns false if invalid arguments are specified or if there is no task of the type specified.
 * @see https://wiki.mtasa.com/wiki/GetPedTask
 * @tupleReturn
 **/
declare function getPedTask(thePed: Ped, priority: "primary" | "secondary", taskType: number): [string, string, string, string] | [false];

/**
 * This function returns an integer that contains the total ammo in a specified ped's weapon.
 * - Note: Clientside, this function will not return a correct value for remote player weapons that aren't in hand.
 * @param thePed The ped whose ammo you want to check.
 * @param [weaponSlot=current] an integer representing the weapon slot (set to the ped's current slot if not given).
 * @returns Returns a number containing the total amount of ammo for the specified ped's weapon, or 0 if the ped specified is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPedTotalAmmo
 **/
declare function getPedTotalAmmo(thePed: Ped, weaponSlot?: number): number | false;

/**
 * Gets the current voice of a ped.
 * @param thePed the ped to get the voice of.
 * @returns If successul, returns the current voice type name and the voice name of the ped (see ped voices for possible names). Returns false in case of failure.
 * @see https://wiki.mtasa.com/wiki/GetPedVoice
 * @tupleReturn
 **/
declare function getPedVoice(thePed: Ped): [string, string] | [false];

/**
 * Returns the walking style ID of a ped.
 * This ID determines the set of animations that is used for walking, running etc.
 * @param thePed the ped whose walking style to retrieve.
 * @returns Returns the walking style ID if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetPedWalkingStyle
 **/
declare function getPedWalkingStyle(thePed: Ped): number | false;

/**
 * This function tells you which weapon type is in a certain weapon slot of a ped.
 * @param thePed the ped you want to get the weapon type from.
 * @param [weaponSlot=current] an integer representing the weapon slot (set to the ped's current slot if not given).
 * @returns Returns a number indicating the type of the weapon the ped has in the specified slot. If the slot is empty, it returns 0. It should be noted that if a ped runs out of ammo for a weapon, it will still return the ID of that weapon in the slot (even if it appears as if the ped does not have a weapon at all), though getPedTotalAmmo will return 0. Therefore, getPedTotalAmmo should be used in conjunction with getPedWeapon in order to check if a ped has a weapon.
 * @see https://wiki.mtasa.com/wiki/GetPedWeapon
 **/
declare function getPedWeapon(thePed: Ped, weaponSlot?: number): number | false;

/**
 * This function gets a ped's selected weapon slot.
 * @param thePed the ped to get the current weapon slot of.
 * @returns Returns the selected weapon slot ID on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetPedWeaponSlot
 **/
declare function getPedWeaponSlot(thePed: Ped): number | false;

/**
 * Returns the world position of the muzzle of the weapon that a ped is currently carrying.
 * The weapon muzzle is the end of the gun barrel where the bullets/rockets/... come out.
 * The position may not be accurate if the ped is off screen.
 * @param thePed the ped whose weapon muzzle position to retrieve.
 * @returns If successful, returns the x/y/z coordinates of the weapon muzzle. Returns false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetPedWeaponMuzzlePosition
 * @tupleReturn
 **/
declare function getPedWeaponMuzzlePosition(thePed: Ped): [number, number, number] | [false];

// TODO: Fix types
/**
 * This function returns all valid ped models.
 * @returns Returns a table with all valid ped models.
 * @see https://wiki.mtasa.com/wiki/GetValidPedModels
 **/
declare function getValidPedModels(): object[];

/**
 * This function gives the specified weapon to the specified ped.
 * This function can't be used on players, use giveWeapon for that.
 * This function is mainly useful for client side created peds however you can use it on a server side ped, though note that the weapon wouldn't be synced between clients unless your script gives the weapon to the ped on every client.
 * There is an optional argument to specify ammunition and whether to set as the current weapon.
 * If you don't specify an ammo value it will give 30 ammo by default and for a melee weapon you can specify just 1 or above.
 * - Note: *When setting ammo for weapons in slot 0,1,10,11 or 12 the maximum ammo is 1. When setting ammo for weapons in slot 3,4,5 the ammo is added. When setting ammo for weapons in slot 2,6,7,8,9 and the slot weapon is changing, the ammo is replaced.
 * @param thePed A ped element.
 * @param weapon A whole number integer that refers to a Weapon ID. Click here for a list of possible weapon IDs.
 * @param [ammo=30] A whole number integer serving as the ammo amount for the given weapon. For weapons that do not require ammo, such as melee, this should be at least 1.
 * @param [setAsCurrent=false] A boolean value determining whether or not the weapon will be set as the peds currently selected weapon.
 * @returns Returns true if weapon was successfully given to the ped, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GivePedWeapon
 **/
declare function givePedWeapon(thePed: Ped, weapon: number, ammo?: number, setAsCurrent?: boolean): boolean;

/**
 * This function checks if the specified ped is choking (coughing) or not.
 * This happens as a result of weapons that produce smoke - smoke grenades, fire extinguisher and the spray can.
 * @param thePed The ped you wish to check.
 * @returns Returns true if the ped is choking, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedChoking
 **/
declare function isPedChoking(thePed: Ped): boolean;

/**
 * This function checks if the specified ped is dead or not.
 * @param thePed: the ped you want to check up on.
 * @returns Returns true if the ped is choking, false otherwise.
 * @see https://wiki.multitheftauto.com/wiki/IsPedDead
 **/
declare function isPedDead(thePed: Ped): boolean;

/**
 * This function checks if the ped is in the driveby state.
 * @param thePed The ped element whose state is to be checked.
 * @returns Returns true if the driveby state is enabled, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedDoingGangDriveby
 **/
declare function isPedDoingGangDriveby(thePed: Ped): boolean;

/**
 * This function checks if the specified ped is carrying out a certain task.
 * @param thePed The ped you want to check.
 * @param taskName A string containing the name of the task you're checking for.
 * @returns Returns true if the player is currently doing the task, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedDoingTask
 **/
declare function isPedDoingTask(thePed: Ped, taskName: string): boolean;

/**
 * This function checks if the specified ped is ducked (crouched) or not.
 * @param thePed The ped to check.
 * @returns Returns true if the ped is ducked, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedDucked
 **/
declare function isPedDucked(thePed: Ped): boolean;

/**
 * With this function, you can check if a ped has a head or not.
 * @param thePed The ped to check.
 * @returns Returns true if the ped is headless, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedHeadless
 **/
declare function isPedHeadless(thePed: Ped): boolean;

/**
 * Checks whether or not a given ped is currently in a vehicle.
 * This also returns true if they're trying to enter a vehicle.
 * @param thePed the ped you want to check.
 * @returns Returns true if the ped is in a vehicle, false if he is on foot or an invalid element was passed.
 * @see https://wiki.mtasa.com/wiki/IsPedInVehicle
 **/
declare function isPedInVehicle(thePed: Ped): boolean;

/**
 * This function checks if the specified ped is on fire or not.
 * @param thePed The ped to check.
 * @returns Returns true if the ped is on fire, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedOnFire
 **/
declare function isPedOnFire(thePed: Ped): boolean;

/**
 * This function is used to determine whether or not a ped is on the ground.
 * This is for on-foot usage only.
 * @param thePed The ped you are checking.
 * @returns Returns true if the ped is on foot and on the ground, false otherwise, even if he is in a car that stands still or on object outside world map.
 * @see https://wiki.mtasa.com/wiki/IsPedOnGround
 **/
declare function isPedOnGround(thePed: Ped): boolean;

/**
 * This function is used to determine whether or not a ped is currently reloading their weapon.
 * Useful to stop certain quick reload exploits.
 * @param thePed The ped you are checking.
 * @returns Returns true if the ped is currently reloading a weapon, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedReloadingWeapon
 **/
declare function isPedReloadingWeapon(thePed: Ped): boolean;

/**
 * This function checks whether health target markers are drawn as set by setPedTargetingMarkerEnabled or not.
 * @returns Returns true if the health target markers are enabled, false if not.
 * @see https://wiki.mtasa.com/wiki/IsPedTargetingMarkerEnabled
 **/
declare function isPedTargetingMarkerEnabled(): boolean;

/**
 * Checks whether or not a ped is currently wearing a jetpack.
 * @param thePed the ped you want to check.
 * @returns Returns true if the ped is carrying a jetpack, false if he is not or an invalid element was passed.
 * @see https://wiki.mtasa.com/wiki/IsPedWearingJetpack
 **/
declare function isPedWearingJetpack(thePed: Ped): boolean;

/**
 * This function kills the specified ped.
 * Only works on client side peds.
 * @param thePed The ped to kill.
 * @param [theKiller=undefined] The ped responsible for the kill.
 * @param [weapon=255] The ID of the weapon or Damage Types that should appear to have killed the ped (doesn't affect how they die).
 * @param [bodyPart=255] The ID of the body part that should appear to have been hit by the weapon (doesn't affect how they die).
 * @param [stealth=false] Boolean value, representing whether or not this a stealth kill.
 * @returns Returns true if the ped was killed, false if the ped specified could not be killed or is invalid.
 * @see https://wiki.mtasa.com/wiki/KillPed
 **/
declare function killPed(thePed: Ped, theKiller?: Ped, weapon?: number, bodyPart?: number, stealth?: boolean): boolean;

/**
 * This function is used to remove the current clothes of a certain type on a ped.
 * It will remove them if the clothesTexture and clothesModel aren't specified, or if they match the current clothes on that slot.
 * @param thePed The ped you want to remove clothes from.
 * @param clothesType the clothes slot/type to remove.
 * @param clothesTexture (Server only) A string determining the clothes texture that will be removed.
 * @param clothesModel (Server only) A string determining the clothes model that will be removed.
 * @returns This function returns true if the clothes were successfully removed from the ped, false otherwise.
 * @see https://wiki.mtasa.com/wiki/RemovePedClothes
 **/
declare function removePedClothes(thePed: Ped, clothesType: number, clothesTexture?: string, clothesModel?: string): boolean;

/**
 * This function removes a ped from a vehicle immediately.
 * This works for drivers and passengers.
 * Note that this removes the ped from the vehicle and puts him in the exact position where the command was initiated.
 * @param thePed The ped you wish to remove from a vehicle.
 * @returns Returns true if the operation was successful, false if the specified ped is not valid or if it isn't in a vehicle.
 * @see https://wiki.mtasa.com/wiki/RemovePedFromVehicle
 **/
declare function removePedFromVehicle(thePed: Ped): boolean;

/**
 * This sets the analog control state of a control for the local player.
 * To change the analog controls for a ped, please use setPedAnalogControlState.
 * @param control The control that you want to set the state of. See control names for a list of possible controls.
 * @param state A float between 0 and 1 indicating the amount the control is pressed. If no value is provided, the analog control is removed.
 * @returns Returns true if the control state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetAnalogControlState
 **/
declare function setAnalogControlState(control: string, state?: number): boolean;

/**
 * This function allows you to set a ped's aim target to a specific point.
 * If a ped is within a certain range defined by getPedTargetStart and getPedTargetEnd he will be targeted and shot.
 * - Note: If you wish to make a ped shoot you must use this in conjunction with an equipped weapon and setPedControlState.
 * @param thePed The ped whose target you want to set. Only peds and remote players will work; this function has no effect on the local player.
 * @param x The x coordinate of the aim target point.
 * @param y The y coordinate of the aim target point.
 * @param z The z coordinate of the aim target point.
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedAimTarget
 **/
declare function setPedAimTarget(thePed: Ped, x: number, y: number, z: number): boolean;

/**
 * Sets an analog state of a specified ped's control, as if they pressed or released it.
 * This function only works on peds, to change the analog control state for a player, please use setAnalogControlState.
 * @param thePed The ped you wish to set the control state of.
 * @param control The control that you want to set the state of. See control names for a list of possible controls.
 * @param state A float between 0 and 1 indicating the amount the control is pressed.
 * @returns Returns true if the control state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedAnalogControlState
 **/
declare function setPedAnalogControlState(thePed: Ped, control: string, state: number): boolean;

/**
 * Sets the current animation of a player or ped. Not specifying the type of animation will automatically cancel the current one.
 * - Note: Warning: The animation will be cancelled if you use setElementFrozen on the ped.
 * @param thePed the player or ped you want to apply an animation to.
 * @param [block=undefined] the animation block's name.
 * @param [anim=undefined] the name of the animation within the block.
 * @param [time=-1] how long the animation will run for in milliseconds.
 * @param [loop=true] indicates whether or not the animation will loop.
 * @param [updatePosition=true] will change the actual coordinates of the ped according to the animation. Use this for e.g. walking animations.
 * @param [interruptable=true] if set to false other tasks wont be able to interupt the animation. Setting this to 'false' also gives this function more power to override other animations that are running. For example, squatting after a jump can be terminated.
 * @param [freezeLastFrame=true] if set to true after animation the last frame will be frozen, otherwise the animation will end and controls will return.
 * @param [blendTime=250] how long the animation will mixed with the previous one in milliseconds.
 * @param [retainPedState=false] will restore the task which was playing before calling this function. Useful for restoring the crouch task after animation ends. This may be extended in the future to support other states/tasks.
 * @see https://wiki.mtasa.com/wiki/SetPedAnimation
 **/
declare function setPedAnimation(thePed: Ped, block?: string, anim?: string, time?: number, loop?: boolean, updatePosition?: boolean, interruptable?: boolean, freezeLastFrame?: boolean, blendTime?: number, retainPedState?: boolean): boolean;

/**
 * Sets the current animation progress of a player or ped.
 * @param thePed the player or ped you want to change animation progress.
 * @param anim the animation name currently applied to ped, if not supplied, the animation will stop.
 * @param progress current animation progress you want to apply, value from 0.0 to 1.0, if not supplied will default to 0.0.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedAnimationProgress
 **/
declare function setPedAnimationProgress(thePed: Ped, anim?: string, progress?: number): boolean;

/**
 * Sets the speed of a currently running animation for a particular player or ped.
 * @param thePed the player or ped you want to change animation speed of.
 * @param [anim=""] the animation name it will affect.
 * @param [speed=1] a float containing the speed between 0.0–1.0 you want to apply to the animation. This limitation may be adjusted in the future, so do not provide speeds outside this boundary.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedAnimationSpeed
 **/
declare function setPedAnimationSpeed(thePed: Ped, anim?: string, speed?: number): boolean;

/**
 * This function allows you to set the armor value of a ped.
 * @param thePed the ped whose armor you want to modify.
 * @param armor the amount of armor you want to set on the ped. Valid values are from 0 to 100.
 * @returns Returns true if the armor was changed succesfully. Returns false if an invalid ped was specified, or the armor value specified is out of acceptable range.
 * @see https://wiki.mtasa.com/wiki/SetPedArmor
 **/
declare function setPedArmor(thePed: Ped, armor: number): boolean;

/**
 * This function sets the camera rotation of a ped, e.g. where its camera will look at. Don't confuse this with getCameraMatrix, because that function is designed for fixed (scripted) camera moves.
 * - Note: getPedCameraRotation may not return the value set by this function. Please refer to getPedCameraRotation for details.
 * @param thePed The ped whose camera rotation is to be changed.
 * @param cameraRotation The new direction that the ped will walk if you set their forwards control state. If the ped is the local player, it will also change where his camera is looking at if it isn't fixed (i.e. camera target is the local player).
 * @returns Returns true if the camera rotation was changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedCameraRotation
 **/
declare function setPedCameraRotation(thePed: Ped, cameraRotation: number): boolean;

/**
 * This function controls if a ped can fall of his bike by accident - namely by banging into a wall.
 * @param thePed the ped whose knockoffstatus is being changed.
 * @param canBeKnockedOffBike true or false.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedCanBeKnockedOffBike
 **/
declare function setPedCanBeKnockedOffBike(thePed: Ped, canBeKnockedOffBike: boolean): boolean;

/**
 * This function makes a ped or player press or release a certain control.
 * - Note: You can't use enter_exit or enter_passenger on a ped.
 * @param thePed the ped you want to press or release a control.
 * @param control the name of the control of which to change the state. See control names for a list of valid names.
 * @param state the new control state. true means pressed, false is released.
 * @returns Returns true if successful, false if otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedControlState
 **/
declare function setPedControlState(thePed: Ped, control: string, state: boolean): boolean;

/**
 * This function sets the driveby state of a ped.
 * @param thePed The ped element whose state is to be changed.
 * @param state A boolean value representing the drive-by state, true meaning enabled and false disabled.
 * @returns Returns true if the driveby state could be changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedDoingGangDriveby
 **/
declare function setPedDoingGangDriveby(thePed: Ped, state: boolean): boolean;

/**
 * Changes a ped's fighting style.
 * Most styles only change the 'special attack' which is done using the Aim and Enter keys.
 * @param thePed The ped whose fighting style to change.
 * @param style The fighting style ID to apply.
 * @returns Returns true in case of success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedFightingStyle
 **/
declare function setPedFightingStyle(thePed: Ped, style: number): boolean;

/**
 * This function makes a players foot prints bloody.
 * @param thePlayer The player to give bloody foot prints to.
 * @param enabled Boolean specifying whether or not to have bloody feet.
 * @returns Returns true if changing the players bloody feet status worked.
 * @see https://wiki.mtasa.com/wiki/SetPedFootBloodEnabled
 **/
declare function setPedFootBloodEnabled(thePlayer: Ped, enabled: boolean): boolean;

/**
 * With this function, you can set if a ped has a head or not.
 * @param thePed The ped to check.
 * @param headState head state, use true if you want the ped be headless, use false to give back the head.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedHeadless
 **/
declare function setPedHeadless(thePed: Ped, headState: boolean): boolean;

/**
 * Makes a ped turn his head and look at a specific world position or element.
 * - Note: Avoid calling setPedLookAt every frame as this can cause bugs like being invincible to burning.
 * - Note: For remote players, you have to use setPedAimTarget before setPedLookAt.
 * @param thePed the ped to change the lookat of.
 * @param x the x coordinate of the world position to look at.
 * @param y the y coordinate of the world position to look at.
 * @param z the z coordinate of the world position to look at.
 * @param [time=3000] the time, in milliseconds, during which the ped will look at the target. Once this time has elapsed, he will look ahead again like before the function was applied. A time of 0 will immediately stop any lookat. A negative time will make the ped look at the target indefinitely.
 * @param [blend=1000] the time, in milliseconds, during which the look will blend.
 * @param [target=undefined] if this argument is specified, the position arguments will be ignored and the ped's gaze will follow the specified element instead. Can be a player, a vehicle, another ped etc.
 * @returns
 * @see https://wiki.mtasa.com/wiki/SetPedLookAt
 **/
declare function setPedLookAt(thePed: Ped, x: number, y: number, z: number, time?: number, blend?: number, target?: Element): boolean;

/**
 * This function can be used to set a ped on fire or extinguish a fire on it.
 * @param thePed The ped that we want to set/unset.
 * @param isOnFire true to set the ped on fire, false to extinguish any fire on him.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedOnFire
 **/
declare function setPedOnFire(thePed: Ped, isOnFire: boolean): boolean;

/**
 * This function allows you to set the oxygen level of a ped.
 * @param thePed the ped whose oxygen level you want to modify.
 * @param oxygen the amount of oxygen you want to set on the ped. Native values are from 0 to 1000. Each of the stamina (22) and underwater stamina (225) stat maximum adds a bonus of 1500. So the maximum oxygen level is 4000.
 * @returns Returns true if the oxygen level was changed succesfully. Returns false if an invalid ped and/or oxygen level was specified.
 * @see https://wiki.mtasa.com/wiki/SetPedOxygenLevel
 **/
declare function setPedOxygenLevel(thePed: Ped, oxygen: number): boolean;

/**
 * This function allows you to set the value of a specific statistic for a ped.
 * Visual stats (FAT and BODY_MUSCLE) can only be used on the CJ skin, they have no effect on other skins.
 * When this function is used client side, it can only be used on client side created peds.
 * Needs checking: *Things like infinite run, fire proof CJ, 150 armor have special activation flags. They need a way to be triggered on/off.
 * @param thePed the ped whose statistic you want to modify.
 * @param stat the stat ID.
 * @param value the new value of the stat.It must be between 0 and 1000.
 * @returns Returns true if the statistic was changed succesfully. Returns false if an invalid player is specified, if the stat-id/value is out of acceptable range or if the FAT or BODY_MUSCLE stats are used on non-CJ players.
 * @see https://wiki.mtasa.com/wiki/SetPedStat
 **/
declare function setPedStat(thePed: Ped, stat: number, value: number): boolean;

/**
 * This function is used to toggle the health target marker on top of all pedestrians.
 * @param enabled A boolean denoting whether we want to enable (true) or disable (false) the markers.
 * @returns Returns true if the markers were enabled, false if weren't or if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/SetPedTargetingMarkerEnabled
 **/
declare function setPedTargetingMarkerEnabled(enabled: boolean): boolean;

/**
 * Changes the voice of a ped.
 * - Note: A ped voice is one of the GTA built in voice character types. Not to be confused with a https://wiki.multitheftauto.com/wiki/Resource:Voice player voice.
 * @param thePed the ped whose voice to change.
 * @param voiceType the voice type.
 * @param voiceName the voice name within the specified type.
 * @returns Returns true when the voice was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedVoice
 **/
declare function setPedVoice(thePed: Ped, voiceType: string, voiceName: string): boolean;

/**
 * Sets the walking style of a ped.
 * A walking style consists of a set of animations that are used for walking, running etc.
 * @param thePed the ped whose walking style to change.
 * @param style the walking style to set.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedWalkingStyle
 **/
declare function setPedWalkingStyle(thePed: Ped, style: number): boolean;

/**
 * This function changes the selected weapon slot of a ped.
 * @param thePed the ped whose weapon slot you want to set. In a clientside script, this cannot be used on remote players.
 * @param weaponSlot the weapon slot to set.
 * @returns Returns true if successful in setting the ped's equipped weapon slot, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedWeaponSlot
 **/
declare function setPedWeaponSlot(thePed: Ped, weaponSlot: number): boolean;

/**
 * This function is used to warp or force a ped into a vehicle.
 * There are no animations involved when this happens.
 * Attention: If you used setElementPosition to spawn the ped/player, this function will not work and returns false.
 * - Warning: It will only work with client side vehicles and peds.
 * @param thePed The ped which you wish to force inside the vehicle.
 * @param theVehicle The vehicle you wish to force the ped into.
 * @param [seat=0] An integer representing the seat ID.
 * @returns Returns true if the operation is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/WarpPedIntoVehicle
 **/
declare function warpPedIntoVehicle(thePed: Ped, theVehicle: Vehicle, seat?: number): boolean;
