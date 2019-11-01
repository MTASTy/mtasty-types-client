declare class Ped extends BaseElement {
  vehicle: Vehicle | false;
  readonly vehicleSeat: number | false;
  // canBeKnockedOffBike: boolean; // Use method
  readonly jetpack: boolean;
  armor: number;
  fightingStyle: number;
  cameraRotation: number;
  readonly contactElement: Vehicle | MapObject | false;
  moveState: string | false;
  oxygenLevel: number;
  readonly target: Player | Ped | Vehicle | MapObject | false;
  readonly simplestTask: string;
  readonly choking: boolean;
  doingGangDriveby: boolean;
  readonly ducked: boolean;
  headless: boolean;
  readonly inVehicle: boolean;
  onFire: boolean;
  readonly onGround: boolean;
  readonly dead: boolean;
  targetingMarker: boolean;
  // footBlood: boolean; // Change only
  readonly targetCollision: Vector3 | false;
  readonly targetStart: Vector3 | false;
  readonly targetEnd: Vector3 | false;
  weaponSlot: number;
  walkingStyle: number;
  readonly reloadingWeapon: boolean;

  /**
   * This function is used to get the name of a body part on a player.
   * @param bodyPartID An integer representing the body part ID you wish to retrieve the name of.
   * @returns This function returns a string containing the body part name if the ID is valid, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetBodyPartName
   **/
  static getBodyPartName(bodyPartID: number): string | false;

  /**
   * This function is used to get the name of a certain clothes type.
   * @param clothesType An integer determining the type of clothes you want to get the clothes of.
   * @returns This function returns a string (the name of the clothes type) if found, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetClothesTypeName
   **/
  static getClothesTypeName(clothesType: number): string | false;

  /**
   * This function returns all valid ped models.
   * @returns Returns an array with all valid ped models.
   * @see https://wiki.mtasa.com/wiki/GetValidPedModels
   **/
  static getValidModels(): number[];

  /**
   * This function returns all valid ped models.
   * @returns Returns an array with all valid ped models.
   * @see https://wiki.mtasa.com/wiki/GetValidPedModels
   **/
  static validModels(): number[];

  /**
   * This function is used to get the clothes type and index from the texture and model.
   * (Scans through the list of clothes for the specific type).
   * @param clothesTexture A string determining the clothes texture that you wish to retrieve the type and index from. See the clothes catalog.
   * @param clothesModel A string determining the corresponding clothes model that you wish to retrieve the type and index from. See the clothes catalog.
   * @returns This function returns two integers, type and index respectively, false if invalid arguments were passed to the function.
   * @see https://wiki.mtasa.com/wiki/GetTypeIndexFromClothes
   * @tupleReturn
   **/
  static getTypeIndexFromClothes(clothesTexture: string, clothesModel: string): [number, number] | [false];

  /**
   * This function is used to get the texture and model of clothes by the clothes type and index.
   * (Scans through the list of clothes for the specific type).
   * @param clothesType An integer representing the clothes slot/type to scan through.
   * @param clothesIndex An integer representing the index (0 based) set of clothes in the list you wish to retrieve.Each type has a different number of valid indexes.
   * @returns This function returns 2 strings, a texture and model respectively, false if invalid arguments were passed to the function.
   * @see https://wiki.mtasa.com/wiki/GetClothesByTypeIndex
   * @tupleReturn
   **/
  getClothesByTypeIndex(clothesType: number, clothesIndex: number): [string, string] | [false];

  /**
   * This function checks whether health target markers are drawn as set by setPedTargetingMarkerEnabled or not.
   * @returns Returns true if the health target markers are enabled, false if not.
   * @see https://wiki.mtasa.com/wiki/IsPedTargetingMarkerEnabled
   **/
  static isTargetingMarkerEnabled(): boolean;

  /**
   * This function is used to toggle the health target marker on top of all pedestrians.
   * @param enabled A boolean denoting whether we want to enable (true) or disable (false) the markers.
   * @returns Returns true if the markers were enabled, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedTargetingMarkerEnabled
   **/
  static setTargetingMarkerEnabled(enabled: boolean): boolean;

  /**
   * Creates a Ped in the GTA world.
   * @param modelid A whole integer specifying the GTASA skin ID.
   * @param x A number representing the X coordinate on the map.
   * @param y A number representing the Y coordinate on the map.
   * @param z A number representing the Z coordinate on the map.
   * @param [rot=0] A number representing the rotation in degrees.
   * @see https://wiki.mtasa.com/wiki/CreatePed
   **/
  constructor(modelid: number, x: number, y: number, z: number, rot?: number);

  /**
   * This function kills the specified ped.
   * Only works on client side peds.
   * @param [theKiller=undefined] The ped responsible for the kill.
   * @param [weapon=255] The ID of the weapon or Damage Types that should appear to have killed the ped (doesn't affect how they die).
   * @param [bodyPart=255] The ID of the body part that should appear to have been hit by the weapon (doesn't affect how they die).
   * @param [stealth=false] Boolean value, representing whether or not this a stealth kill.
   * @returns Returns true if the ped was killed, false if the ped specified could not be killed.
   * @see https://wiki.mtasa.com/wiki/KillPed
   **/
  kill(theKiller?: Ped, weapon?: number, bodyPart?: number, stealth?: boolean): boolean;

  /**
   * This function checks if the given ped can fall off bikes.
   * @returns Returns true if the ped can be knocked off bikes, false if he cannot.
   * @see https://wiki.mtasa.com/wiki/CanPedBeKnockedOffBike
   **/
  canBeKnockedOffBike(): boolean;

  /**
   * Checks whether or not a ped is currently wearing a jetpack.
   * @returns Returns true if the ped is carrying a jetpack, false if he is not.
   * @see https://wiki.mtasa.com/wiki/IsPedWearingJetpack
   **/
  isWearingJetpack(): boolean;

  /**
   * This function returns an integer that contains the ammo in a specified ped's weapon.
   * @param [weaponSlot=current] an integer representing the weapon slot (set to the ped's currently selected slot if not specified).
   * @returns Returns an int containing the amount of ammo in the specified ped's currently selected or specified clip, or 0.
   * @see https://wiki.mtasa.com/wiki/GetPedAmmoInClip
   **/
  getAmmoInClip(weaponSlot?: number): number;

  /**
   * This function retrieves the analog control state of a ped, as set by setPedAnalogControlState.
   * @param controlName The name of control.
   * @returns Returns a float between 0 (full release) and 1 (full push) indicating the amount the control is pushed.
   * @see https://wiki.mtasa.com/wiki/GetPedAnalogControlState
   **/
  getAnalogControlState(controlName: string): number;

  /**
   * Gets the animation of a player or ped that was set using setPedAnimation.
   * - Note: Use getPedTask to monitor what movements the player is currently doing.
   * @returns Returns two strings: the first is the name of the block, the second is the name of the animation. Returns false f the ped is not doing an animation.
   * @see https://wiki.mtasa.com/wiki/GetPedAnimation
   * @tupleReturn
   **/
  getAnimation(): [string, string] | [false];

  /**
   * This function returns the current armor of the specified ped.
   * @returns A float with the armor.
   * @see https://wiki.mtasa.com/wiki/GetPedArmor
   **/
  getArmor(): number;

  /**
   * Retrieves the fighting style a player/ped is currently using.
   * @returns Returns the ped's current fighting style as an integer ID.
   * @see https://wiki.mtasa.com/wiki/GetPedFightingStyle
   **/
  getFightingStyle(): number;

  /**
   * This function is used to get the current clothes texture and model of a certain type on a ped.
   * @param clothesType The type/slot of clothing you want to get.
   * @returns This function returns 2 strings, the clothes texture and model. The first return value will be false if this player's clothes type is empty.
   * @see https://wiki.mtasa.com/wiki/GetPedClothes
   * @tupleReturn
   **/
  getClothes(clothesType: number): [string, string] | [false];

  /**
   * This function is used to set the current clothes on a ped.
   * - Note: This function only works with peds using CJ skin (ID 0).
   * @param clothesTexture A string determining the clothes texture that will be added. See the clothes catalog.
   * @param clothesModel A string determining the clothes model that will be added. See the clothes catalog.
   * @param clothesType A integer representing the clothes slot/type the clothes should be added to.
   * @returns This function returns true if the clothes were successfully added to the ped, false otherwise.
   * @see https://wiki.mtasa.com/wiki/AddPedClothes
   **/
  addClothes(clothesTexture: string, clothesModel: string, clothesType: number): boolean;

  /**
   * This function is used to remove the current clothes of a certain type on a ped.
   * It will remove them if the clothesTexture and clothesModel aren't specified, or if they match the current clothes on that slot.
   * @param clothesType the clothes slot/type to remove.
   * @param clothesTexture (Server only) A string determining the clothes texture that will be removed.
   * @param clothesModel (Server only) A string determining the clothes model that will be removed.
   * @returns This function returns true if the clothes were successfully removed from the ped, false otherwise.
   * @see https://wiki.mtasa.com/wiki/RemovePedClothes
   **/
  removeClothes(clothesType: number, clothesTexture?: string, clothesModel?: string): boolean;

  /**
   * This function detects the element a ped is standing on. This can be a vehicle or an object.
   * @returns Returns an object or a vehicle if the ped is standing on one, false if he is touching none.
   * @see https://wiki.mtasa.com/wiki/GetPedContactElement
   **/
  getContactElement(): Vehicle | MapObject | false;

  /**
   * Checks whether a ped or the localplayer has a certain control pressed.
   * @param control the control to get the status of.
   * @returns Returns true if the ped is pressing the specified control, false if not.
   * @see https://wiki.mtasa.com/wiki/GetPedControlState
   **/
  getControlState(control: string): boolean;

  /**
   * This function returns the current move state for the specified ped.
   * @returns Returns a string indicating the ped's move state, or false if the ped is not streamed in, the movement type is unknown, the ped is in a vehicle.
   * @see https://wiki.mtasa.com/wiki/GetPedMoveState
   **/
  getMoveState(): string | false;

  /**
   * This function gets the vehicle that the ped is currently in or is trying to enter, if any.
   * @returns Returns the vehicle that the specified ped is in, or false if the ped is not in a vehicle.
   * @see https://wiki.mtasa.com/wiki/GetPedOccupiedVehicle
   **/
  getOccupiedVehicle(): Vehicle | false;

  /**
   * This function gets the seat that a specific ped is sitting in in a vehicle.
   * @returns Returns false if the ped is on foot.
   * @see https://wiki.mtasa.com/wiki/GetPedOccupiedVehicleSeat
   **/
  getOccupiedVehicleSeat(): number | false;

  /**
   * This function returns the current oxygen level of the specified ped.
   * @returns A float with the oxygen level.
   * @see https://wiki.mtasa.com/wiki/GetPedOxygenLevel
   **/
  getOxygenLevel(): number;

  /**
   * This function returns the value of the specified statistic of a specific ped.
   * @param stat A whole number determining the stat ID.
   * @returns Returns the value of the requested statistic.
   * @see https://wiki.mtasa.com/wiki/GetPedStat
   **/
  getStat(stat: number): number | false;

  /**
   * This function is used to get the element a ped is currently targeting.
   * @returns Returns the element that's being targeted, or false if there isn't one. This is only effective on physical GTA elements, namely: Players, Peds, Vehicles, Objects.
   * @see https://wiki.mtasa.com/wiki/GetPedTarget
   **/
  getTarget(): Player | Ped | Vehicle | MapObject | false;

  /**
   * This function allows retrieval of where a ped's target is blocked.
   * It will only be blocked if there is an obstacle within a ped's target range.
   * @returns Returns three floats, x,y,z, representing the position where the ped's target collides, or false if it was unsuccessful.
   * @see https://wiki.mtasa.com/wiki/GetPedTargetCollision
   * @tupleReturn
   **/
  getTargetCollision(): [number, number, number] | [false];

  /**
   * This function is used to get the name of a specified ped's current simplest task.
   * - Note: See getPedTask to get a all tasks.
   * @returns Returns a string representing the name of the ped's simplest, active task.
   * @see https://wiki.mtasa.com/wiki/GetPedSimplestTask
   **/
  getSimplestTask(): string;

  /**
   * This function is used to get any simple or complex task of a certain type for a ped.
   * It can provide feedback on all tasks relating to a ped.
   * For example, while jumping, getPedSimplestTask will return TASK_SIMPLE_IN_AIR.
   * If you wanted to know specifically if the player has jumped, you would use this function.
   * If you did you will discover that while jumping Primary task 3 is TASK_COMPLEX_JUMP.
   * @param priority A string determining which set of tasks you want to retrieve it from. This must be either "primary" or "secondary".
   * @param taskType An integer value representing the task type (or slot) you want to get the task from.
   * @returns Returns the name of the most complex task. See list of player tasks for valid strings. Returns false if invalid arguments are specified or if there is no task of the type specified.
   * @see https://wiki.mtasa.com/wiki/GetPedTask
   * @tupleReturn
   **/
  getTask(priority: "primary" | "secondary", taskType: number): [string, string, string, string] | [false];

  /**
   * This function returns an integer that contains the total ammo in a specified ped's weapon.
   * - Note: Clientside, this function will not return a correct value for remote player weapons that aren't in hand.
   * @param [weaponSlot=current] an integer representing the weapon slot (set to the ped's current slot if not given).
   * @returns Returns a number containing the total amount of ammo for the specified ped's weapon, or 0 if the ped specified is invalid.
   * @see https://wiki.mtasa.com/wiki/GetPedTotalAmmo
   **/
  getTotalAmmo(weaponSlot?: number): number;

  /**
   * Gets the current voice of a ped.
   * @returns If successul, returns the current voice type name and the voice name of the ped (see ped voices for possible names). Returns false in case of failure.
   * @see https://wiki.mtasa.com/wiki/GetPedVoice
   * @tupleReturn
   **/
  getVoice(): [string, string];

  /**
   * This function tells you which weapon type is in a certain weapon slot of a ped.
   * @param [weaponSlot=current] an integer representing the weapon slot (set to the ped's current slot if not given).
   * @returns Returns a number indicating the type of the weapon the ped has in the specified slot. If the slot is empty, it returns 0. It should be noted that if a ped runs out of ammo for a weapon, it will still return the ID of that weapon in the slot (even if it appears as if the ped does not have a weapon at all), though getPedTotalAmmo will return 0. Therefore, getPedTotalAmmo should be used in conjunction with getPedWeapon in order to check if a ped has a weapon.
   * @see https://wiki.mtasa.com/wiki/GetPedWeapon
   **/
  getWeapon(weaponSlot?: number): number;

  /**
   * This function checks if the specified ped is choking (coughing) or not.
   * This happens as a result of weapons that produce smoke - smoke grenades, fire extinguisher and the spray can.
   * @returns Returns true if the ped is choking, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPedChoking
   **/
  isChocking(): boolean;

  /**
   * This function checks if the ped is in the driveby state.
   * @returns Returns true if the driveby state is enabled, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPedDoingGangDriveby
   **/
  isDoingGangDriveby(): boolean;

  /**
   * This function checks if the specified ped is carrying out a certain task.
   * @param taskName A string containing the name of the task you're checking for.
   * @returns Returns true if the player is currently doing the task, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPedDoingTask
   **/
  isDoingTask(taskName: string): boolean;

  /**
   * This function checks if the specified ped is ducked (crouched) or not.
   * @returns Returns true if the ped is ducked, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPedDucked
   **/
  isDucked(): boolean;

  /**
   * With this function, you can check if a ped has a head or not.
   * @returns Returns true if the ped is headless, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPedHeadless
   **/
  isHeadless(): boolean;

  /**
   * Checks whether or not a given ped is currently in a vehicle.
   * This also returns true if they're trying to enter a vehicle.
   * @returns Returns true if the ped is in a vehicle, false if he is on foot.
   * @see https://wiki.mtasa.com/wiki/IsPedInVehicle
   **/
  isInVehicle(): boolean;

  /**
   * This function checks if the specified ped is on fire or not.
   * @returns Returns true if the ped is on fire, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPedOnFire
   **/
  isOnFire(): boolean;

  /**
   * This function is used to determine whether or not a ped is on the ground.
   * This is for on-foot usage only.
   * @returns Returns true if the ped is on foot and on the ground, false otherwise, even if he is in a car that stands still or ped outside world map.
   * @see https://wiki.mtasa.com/wiki/IsPedOnGround
   **/
  isOnGround(): boolean;

  /**
   * This function checks if the specified ped is dead or not.
   * @returns Returns true if the ped is choking, false otherwise.
   * @see https://wiki.multitheftauto.com/wiki/IsPedDead
   **/
  isDead(): boolean;

  /**
   * This function makes a players foot prints bloody.
   * @param enabled Boolean specifying whether or not to have bloody feet.
   * @returns Returns true if changing the players bloody feet status worked.
   * @see https://wiki.mtasa.com/wiki/SetPedFootBloodEnabled
   **/
  setFootBloodEnabled(enabled: boolean): boolean;

  /**
   * This function allows retrieval of the position where a ped's target range ends, when he is aiming with a weapon.
   * @returns Returns three floats, x,y,z, representing the position where the ped's target ends according to his range, or false if it was unsuccessful.
   * @see https://wiki.mtasa.com/wiki/GetPedTargetEnd
   * @tupleReturn
   **/
  getTargetEnd(): [number, number, number] | [false];

  /**
   * This function allows retrieval of the position a ped's target range begins, when he is aiming with a weapon.
   * @returns Returns three floats, x,y,z, representing the position where the ped's target starts, or false if it was unsuccessful.
   * @see https://wiki.mtasa.com/wiki/GetPedTargetStart
   * @tupleReturn
   **/
  getTargetStart(): [number, number, number] | [false];

  /**
   * Returns the world position of the muzzle of the weapon that a ped is currently carrying.
   * The weapon muzzle is the end of the gun barrel where the bullets/rockets/... come out.
   * The position may not be accurate if the ped is off screen.
   * @returns If successful, returns the x/y/z coordinates of the weapon muzzle. Returns false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetPedWeaponMuzzlePosition
   * @tupleReturn
   **/
  getWeaponMuzzlePosition(): [number, number, number] | [false];

  /**
   * Returns the 3D world coordinates of a specific bone of a given ped.
   * - Tip: If you want attach element to ped bone, use https://community.mtasa.com/index.php?p=resources&s=details&id=2540 bone_attach resource.
   * @param bone the number of the bone to get the position of.
   * @returns Returns the x, y, z world position of the bone.
   * @see https://wiki.mtasa.com/wiki/GetPedBonePosition
   **/
  getBonePosition(bone: number): Vector3 | false;

  /**
   * This function gets the current camera rotation of a ped.
   * - Note: The camera rotation angle returned by this function is 360º - α (where α is the actual camera rotation angle). See example to know how to deal with this.
   * @returns Returns the camera rotation of the ped in degrees if successful.
   * @see https://wiki.mtasa.com/wiki/GetPedCameraRotation
   **/
  getCameraRotation(): number;

  /**
   * This function gets a ped's selected weapon slot.
   * @returns Returns the selected weapon slot ID on success.
   * @see https://wiki.mtasa.com/wiki/GetPedWeaponSlot
   **/
  getWeaponSlot(): number;

  /**
   * Returns the walking style ID of a ped.
   * This ID determines the set of animations that is used for walking, running etc.
   * @returns Returns the walking style ID if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetPedWalkingStyle
   **/
  getWalkingStyle(): number;

  /**
   * This function controls if a ped can fall of his bike by accident - namely by banging into a wall.
   * @param canBeKnockedOffBike true or false.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedCanBeKnockedOffBike
   **/
  setCanBeKnockedOffBike(canBeKnockedOffBike: boolean): boolean;

  /**
   * Sets an analog state of a specified ped's control, as if they pressed or released it.
   * This function only works on peds, to change the analog control state for a player, please use setAnalogControlState.
   * @param control The control that you want to set the state of. See control names for a list of possible controls.
   * @param state A float between 0 and 1 indicating the amount the control is pressed.
   * @returns Returns true if the control state was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedAnalogControlState
   **/
  setCanBeKnockedOffBike(control: string, state: number): boolean;

  /**
   * Sets the current animation of a player or ped. Not specifying the type of animation will automatically cancel the current one.
   * - Note: Warning: The animation will be cancelled if you use setElementFrozen on the ped.
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
  setAnimation(block?: string, anim?: string, time?: number, loop?: boolean, updatePosition?: boolean, interruptable?: boolean, freezeLastFrame?: boolean, blendTime?: number, retainPedState?: boolean): boolean;

  /**
   * Sets the current animation progress of a player or ped.
   * @param anim the animation name currently applied to ped, if not supplied, the animation will stop.
   * @param progress current animation progress you want to apply, value from 0.0 to 1.0, if not supplied will default to 0.0.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedAnimationProgress
   **/
  setAnimationProgress(anim?: string, progress?: number): boolean;

  /**
   * Sets the speed of a currently running animation for a particular player or ped.
   * @param [anim=""] the animation name it will affect.
   * @param [speed=1] a float containing the speed between 0.0–1.0 you want to apply to the animation. This limitation may be adjusted in the future, so do not provide speeds outside this boundary.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedAnimationSpeed
   **/
  setAnimationSpeed(anim?: string, speed?: number): boolean;

  /**
   * This function sets the camera rotation of a ped, e.g. where its camera will look at. Don't confuse this with getCameraMatrix, because that function is designed for fixed (scripted) camera moves.
   * - Note: getPedCameraRotation may not return the value set by this function. Please refer to getPedCameraRotation for details.
   * @param cameraRotation The new direction that the ped will walk if you set their forwards control state. If the ped is the local player, it will also change where his camera is looking at if it isn't fixed (i.e. camera target is the local player).
   * @returns Returns true if the camera rotation was changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedCameraRotation
   **/
  setCameraRotation(cameraRotation: number): boolean;

  /**
   * This function makes a ped or player press or release a certain control.
   * - Note: You can't use enter_exit or enter_passenger on a ped.
   * @param control the name of the control of which to change the state. See control names for a list of valid names.
   * @param state the new control state. true means pressed, false is released.
   * @returns Returns true if successful, false if otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedControlState
   **/
  setControlState(control: string, state: boolean): boolean;

  /**
   * This function is used to warp or force a ped into a vehicle.
   * There are no animations involved when this happens.
   * Attention: If you used setElementPosition to spawn the ped/player, this function will not work and returns false.
   * - Warning: It will only work with client side vehicles and peds.
   * @param theVehicle The vehicle you wish to force the ped into.
   * @param [seat=0] An integer representing the seat ID.
   * @returns Returns true if the operation is successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/WarpPedIntoVehicle
   **/
  warpIntoVehicle(theVehicle: Vehicle, seat?: number): boolean;

  /**
   * This function allows you to set the oxygen level of a ped.
   * @param oxygen the amount of oxygen you want to set on the ped. Native values are from 0 to 1000. Each of the stamina (22) and underwater stamina (225) stat maximum adds a bonus of 1500. So the maximum oxygen level is 4000.
   * @returns Returns true if the oxygen level was changed succesfully. Returns false if an invalid oxygen level was specified.
   * @see https://wiki.mtasa.com/wiki/SetPedOxygenLevel
   **/
  setOxygenLevel(oxygen: number): boolean;

  /**
   * This function allows you to set the armor value of a ped.
   * @param armor the amount of armor you want to set on the ped. Valid values are from 0 to 100.
   * @returns Returns true if the armor was changed succesfully. Returns false if the armor value specified is out of acceptable range.
   * @see https://wiki.mtasa.com/wiki/SetPedArmor
   **/
  setArmor(armor: number): boolean;

  /**
   * This function changes the selected weapon slot of a ped.
   * @param weaponSlot the weapon slot to set.
   * @returns Returns true if successful in setting the ped's equipped weapon slot, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedWeaponSlot
   **/
  setWeaponSlot(weaponSlot: number): boolean;

  /**
   * This function sets the driveby state of a ped.
   * @param state A boolean value representing the drive-by state, true meaning enabled and false disabled.
   * @returns Returns true if the driveby state could be changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedDoingGangDriveby
   **/
  setDoingGangDriveby(state: boolean): boolean;

  /**
   * Changes a ped's fighting style.
   * Most styles only change the 'special attack' which is done using the Aim and Enter keys.
   * @param style The fighting style ID to apply.
   * @returns Returns true in case of success, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedFightingStyle
   **/
  setDoingGangDriveby(style: number): boolean;

  /**
   * With this function, you can set if a ped has a head or not.
   * @param headState head state, use true if you want the ped be headless, use false to give back the head.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedHeadless
   **/
  setHeadless(headState: boolean): boolean;

  /**
   * This function can be used to set a ped on fire or extinguish a fire on it.
   * @param isOnFire true to set the ped on fire, false to extinguish any fire on him.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedOnFire
   **/
  setOnFire(isOnFire: boolean): boolean;

  /**
   * Changes the voice of a ped.
   * - Note: A ped voice is one of the GTA built in voice character types. Not to be confused with a https://wiki.multitheftauto.com/wiki/Resource:Voice player voice.
   * @param voiceType the voice type.
   * @param voiceName the voice name within the specified type.
   * @returns Returns true when the voice was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedVoice
   **/
  setVoice(voiceType: string, voiceName: string): boolean;

  /**
   * This function removes a ped from a vehicle immediately.
   * This works for drivers and passengers.
   * Note that this removes the ped from the vehicle and puts him in the exact position where the command was initiated.
   * @returns Returns true if the operation was successful, false if ped isn't in a vehicle.
   * @see https://wiki.mtasa.com/wiki/RemovePedFromVehicle
   **/
  removeFromVehicle(): boolean;

  /**
   * This function allows you to set a ped's aim target to a specific point.
   * If a ped is within a certain range defined by getPedTargetStart and getPedTargetEnd he will be targeted and shot.
   * - Note: If you wish to make a ped shoot you must use this in conjunction with an equipped weapon and setPedControlState.
   * @param x The x coordinate of the aim target point.
   * @param y The y coordinate of the aim target point.
   * @param z The z coordinate of the aim target point.
   * @returns Returns true if the function was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedAimTarget
   **/
  setAimTarget(x: number, y: number, z: number): boolean;

  /**
   * Makes a ped turn his head and look at a specific world position or element.
   * - Note: Avoid calling setPedLookAt every frame as this can cause bugs like being invincible to burning.
   * - Note: For remote players, you have to use setPedAimTarget before setPedLookAt.
   * @param x the x coordinate of the world position to look at.
   * @param y the y coordinate of the world position to look at.
   * @param z the z coordinate of the world position to look at.
   * @param [time=3000] the time, in milliseconds, during which the ped will look at the target. Once this time has elapsed, he will look ahead again like before the function was applied. A time of 0 will immediately stop any lookat. A negative time will make the ped look at the target indefinitely.
   * @param [blend=1000] the time, in milliseconds, during which the look will blend.
   * @param [target=undefined] if this argument is specified, the position arguments will be ignored and the ped's gaze will follow the specified element instead. Can be a player, a vehicle, another ped etc.
   * @returns Returns true if the function was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedLookAt
   **/
  setLookAt(x: number, y: number, z: number, time?: number, blend?: number, target?: BaseElement): boolean;

  /**
   * Sets the walking style of a ped.
   * A walking style consists of a set of animations that are used for walking, running etc.
   * @param style the walking style to set.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedWalkingStyle
   **/
  setWalkingStyle(style: number): boolean;

  /**
   * This function allows you to set the value of a specific statistic for a ped.
   * Visual stats (FAT and BODY_MUSCLE) can only be used on the CJ skin, they have no effect on other skins.
   * When this function is used client side, it can only be used on client side created peds.
   * Needs checking: *Things like infinite run, fire proof CJ, 150 armor have special activation flags. They need a way to be triggered on/off.
   * @param stat the stat ID.
   * @param value the new value of the stat.It must be between 0 and 1000.
   * @returns Returns true if the statistic was changed succesfully. Returns false if the stat-id/value is out of acceptable range or if the FAT or BODY_MUSCLE stats are used on non-CJ players.
   * @see https://wiki.mtasa.com/wiki/SetPedStat
   **/
  setStat(stat: number, value: number): boolean;

  /**
   * This function gives the specified weapon to the specified ped.
   * This function can't be used on players, use giveWeapon for that.
   * This function is mainly useful for client side created peds however you can use it on a server side ped, though note that the weapon wouldn't be synced between clients unless your script gives the weapon to the ped on every client.
   * There is an optional argument to specify ammunition and whether to set as the current weapon.
   * If you don't specify an ammo value it will give 30 ammo by default and for a melee weapon you can specify just 1 or above.
   * - Note: *When setting ammo for weapons in slot 0,1,10,11 or 12 the maximum ammo is 1. When setting ammo for weapons in slot 3,4,5 the ammo is added. When setting ammo for weapons in slot 2,6,7,8,9 and the slot weapon is changing, the ammo is replaced.
   * @param weapon A whole number integer that refers to a Weapon ID. Click here for a list of possible weapon IDs.
   * @param [ammo=30] A whole number integer serving as the ammo amount for the given weapon. For weapons that do not require ammo, such as melee, this should be at least 1.
   * @param [setAsCurrent=false] A boolean value determining whether or not the weapon will be set as the peds currently selected weapon.
   * @returns Returns true if weapon was successfully given to the ped, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GivePedWeapon
   **/
  giveWeapon(weapon: number, ammo?: number, setAsCurrent?: boolean): boolean;

  /**
   * This function is used to determine whether or not a ped is currently reloading their weapon.
   * Useful to stop certain quick reload exploits.
   * @returns Returns true if the ped is currently reloading a weapon, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPedReloadingWeapon
   **/
  isReloadingWeapon(): boolean;
}
