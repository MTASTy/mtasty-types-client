/** @customConstructor Vehicle */
declare class Vehicle extends Element {
  locked: boolean;
  readonly controller: Player | false;
  readonly occupants: { [seat: number]: Ped } | false;
  readonly name: string;
  readonly blown: boolean;
  readonly vehicleType: string;
  readonly gear: number;
  readonly onGround: boolean;
  readonly damageProof: boolean;
  readonly helicopterRotorSpeed: number | false;
  heliBladeCollisionsEnabled: boolean;
  // TODO: Check it
  readonly sirenParams: SirenParams;
  sirensOn: boolean;
  readonly sirens: SirenData;
  readonly upgrades:  number[];
  readonly maxPassengers: number;
  paintjob: 0 | 1 | 2 | 3;
  readonly compatibleUpgrades: { [key: number]: number | string };
  adjustableProperty: number;
  plateText: string;
  fuelTankExplodable: boolean;
  engineState: boolean;
  landingGearDown: boolean | undefined;
  readonly lightsOn: boolean;
  overrideLights: 0 | 1 | 2;
  taxiLight: boolean;
  readonly handling: VehicleHandling;
  readonly components: { [key: number]: string };
  readonly towingVehicle: Vehicle | false;
  readonly towedByVehicle: Vehicle | false;
  /** Direction in which a train or tram drives over the rails (clockwise or counterclockwise). */
  direction: boolean;
  trainSpeed: number;
  trainPosition: number;
  derailable: boolean;
  derailed: boolean;
  readonly chainEngine: boolean;
  readonly nitroLevel: number | false;
  readonly nitroCount: number | false;
  nitroActivated: boolean;
  readonly nitroRecharging: boolean;
  // TODO: Check it
  gravity: Vector3;

  // static getModelFromName(name: string): number | false;
  // static getNameFromModel(model: number): string | false;
  // static getOriginalHandling(modelID: number): VehicleHandling;
  // static getUpgradeSlotName(slotOrUpgrade: number): string | false;
  // static getModelExhaustFumesPosition(modelID: number): Vector3 | [false];
  // static getVehicleModelDummyPosition(modelID: number, dummy: string): {[key: number]: number} | false;
  // static setModelExhaustFumesPosition(modelID: number, posX: number, posY: number, posZ: number): boolean;
  // static setVehicleModelDummyPosition(modelID: number, dummy: string, x: number, y: number, z: number): boolean;

  /**
   * This function creates a vehicle at the specified location.
   * Its worth nothing that the position of the vehicle is the center point of the vehicle, not its base.
   * As such, you need to ensure that the z value (vertical axis) is some height above the ground.
   * You can find the exact height using the client side function getElementDistanceFromCentreOfMassToBaseOfModel, or you can estimate it yourself and just spawn the vehicle so it drops to the ground.
   * @param model The vehicle ID of the vehicle being created.
   * @param x A floating point number representing the X coordinate on the map.
   * @param y A floating point number representing the Y coordinate on the map.
   * @param z A floating point number representing the Z coordinate on the map.
   * @param rx A floating point number representing the rotation about the X axis in degrees.
   * @param ry A floating point number representing the rotation about the Y axis in degrees.
   * @param rz A floating point number representing the rotation about the Z axis in degrees.
   * @param numberplate A string that will go on the number plate of the vehicle (max 8 characters).
   * @param bDirection Placeholder boolean which provides backward compatibility with some scripts. It never had any effect, but it is read by the code. It is recommended to ignore this argument, passing false or the variant1 argument in its place.
   * @param variant1 An number for the first vehicle variant.
   * @param variant2 An number for the second vehicle variant.
   * @see https://wiki.mtasa.com/wiki/CreateVehicle
   **/
  constructor(model: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number, numberplate?: string, bDirection?: boolean, variant1?: number, variant2?: number);

  /**
   * This function will blow up a vehicle.
   * This will cause an explosion and will kill the driver and any passengers inside it.
   * @returns Returns true if the vehicle was blown up, false if invalid arguments were passed to the function.
   * @see https://wiki.mtasa.com/wiki/BlowVehicle
   **/
  blow(): boolean;

  /**
   * This function will set a vehicle's health to full and fix its damage model.
   * If you wish to only change the vehicle's health, without affecting its damage model, use setElementHealth.
   * @returns Returns true if the vehicle was fixed, false if theVehicle is invalid.
   * @see https://wiki.mtasa.com/wiki/FixVehicle
   **/
  fix(): boolean;

  /**
   * This function checks if a vehicle is damage proof (set with setVehicleDamageProof).
   * @returns Returns true if the vehicle is damage proof, false if it isn't or if invalid arguments were passed.
   * @see https://wiki.mtasa.com/wiki/IsVehicleDamageProof
   **/
  isDamageProof(): boolean;

  /**
   * This will tell you if a vehicle is locked.
   * @returns Returns true if the vehicle specified is locked, false if is unlocked or the vehicle specified is invalid.
   * @see https://wiki.mtasa.com/wiki/IsVehicleLocked
   **/
  isLocked(): boolean;

  /**
   * Checks to see if a vehicle has contact with the ground.
   * @returns Returns true if vehicle is on the ground, false if it is not.
   * @see https://wiki.mtasa.com/wiki/IsVehicleOnGround
   **/
  isOnGround(): boolean;

  /**
   * This function allows you to determine whether a vehicle is blown or still intact.
   * @returns Returns true if the vehicle specified has blown up, false if it is still intact or the vehicle specified is invalid.
   * @see https://wiki.mtasa.com/wiki/IsVehicleBlown
   **/
  isBlown(): boolean;

  /**
   * This will tell you if a vehicle's petrol tank is explodable.
   * @returns Returns true if the specified vehicle is valid and its fuel tank is explodable, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsVehicleFuelTankExplodable
   **/
  isFuelTankExplodable(): boolean;

  /**
   * This function will check if a train or tram is derailed.
   * @returns Returns true if the train is derailed, false if the train is still on the rails.
   * @see https://wiki.mtasa.com/wiki/IsTrainDerailed
   **/
  isDerailed(): boolean;

  /**
   * This function checks if a train is a chain engine (moves the rest of the chain's carriages) or not.
   * @returns Returns true if a train was passed to the function and if it's a chain engine, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsTrainChainEngine
   **/
  isChainEngine(): boolean;

  // Both, isDerailable and setDeraible use setTrainDerailable.
  // lua_classfunction(luaVM, "isDerailable", "setTrainDerailable");
  // isDerailable(): boolean;

  /**
   * This function checks if nitro is recharging on the vehicle.
   * Warning: Only works if the vehicle is steamed in.
   * @returns Returns true if the nitro is currently recharging on the vehicle, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsVehicleNitroRecharging
   **/
  isNitroRecharging(): boolean;

  /**
   * This function checks if nitro is activated on the vehicle.
   * - Warning: Only works if the vehicle is steamed in.
   * @returns Returns true if the nitro is currently activated on the vehicle, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsVehicleNitroActivated
   **/
  isNitroActivated(): boolean;

  /**
   * This function gets the nitro count of the vehicle.
   * - Warning: Only works if the vehicle is streamed in, use isElementStreamedIn to check.
   * @returns Returns an integer determining the amount of nitro counts of the vehicle, false if there is no nitro in the vehicle.
   * @see https://wiki.mtasa.com/wiki/GetVehicleNitroCount
   **/
  getNitroCount(): number | false;

  /**
   * This function gets the nitro level of the vehicle.
   * - Warning: Only works if the vehicle is streamed in
   * @returns Returns a float determining the nitro level (ranges from 0.0001 to 1.0) of the vehicle, false if there is no nitro in the vehicle.
   * @see https://wiki.mtasa.com/wiki/GetVehicleNitroLevel
   **/
  getNitroLevel(): number | false;

  /**
   * Gets the direction in which a train is driving (clockwise or counterclockwise).
   * @returns Returns true if the train is driving clockwise on the train track, false if it is going counterclockwise or a failure occured.
   * @see https://wiki.mtasa.com/wiki/GetTrainDirection
   **/
  getDirection(): boolean;

  /**
   * Gets the speed at which a train is traveling on the rails.
   * @returns Returns the train's speed if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetTrainSpeed
   **/
  getTrainSpeed(): number | false;

  /**
   * Gets the position the train is currently on the track.
   * @returns Returns a number that represents how along the track it is, false if there is problem with train element.
   * @see https://wiki.mtasa.com/wiki/GetTrainPosition
   **/
  getTrainPosition(): number | false;

  /**
   * This function returns a string containing the name of the vehicle
   * @returns Returns a string containing the requested vehicle's name, or false if the vehicle passed to the function is invalid.
   * @see https://wiki.mtasa.com/wiki/GetVehicleName
   **/
  getName(): string;

  /**
   * This function retrieves the type of a vehicle (such as if it is a car or a boat).
   * @returns Returns a string with vehicle type or false if an invalid modelID has been supplied, or an empty string if the vehicle is blocked internally (some trailers).
   * @see https://wiki.mtasa.com/wiki/GetVehicleType
   **/
  getVehicleType(): string;

  /**
   * This function returns the maximum number of passengers that a specified vehicle can hold.
   * Only passenger seats are counted, the driver seat is excluded.
   * - Important note: Only passenger seats are counted, the driver seat is excluded.
   * @returns Returns an numberindicating the maximum number of passengers that can enter a vehicle.
   * @see https://wiki.mtasa.com/wiki/GetVehicleMaxPassengers
   **/
  getMaxPassengers(): number;

  /**
   * Gets the specified vehicle's current gear.
   * @returns Returns the gear if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetVehicleCurrentGear
   **/
  getGear(): number;

  /**
   * This function is used to get the player in control of the specified vehicle which includes somebody who is trying to enter the drivers seat.
   * @returns Returns a player element, if there isn't a driver, it will search the 'trailer chain' for the front driver, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetVehicleController
   **/
  getController(): Player | false;

  /**
   * This function is used to get the vehicle that is towing another.
   * @returns The vehicle that theVehicle is being towed by, false if it isn't being towed.
   * @see https://wiki.mtasa.com/wiki/GetVehicleTowingVehicle
   **/
  getTowingVehicle(): Vehicle | false;

  /**
   * This function is used to get the vehicle being towed by another.
   * @returns Returns the vehicle that theVehicle is towing, false if it isn't towing a vehicle.
   * @see https://wiki.mtasa.com/wiki/GetVehicleTowedByVehicle
   **/
  getTowedByVehicle(): Vehicle | false;

  /**
   * This function gets the player sitting/trying to enter the specified vehicle.
   * @param [seat=0] the seat where the player is sitting (0 for driver, 1+ for passengers).
   * @returns Returns the player sitting in the vehicle, or false if the seat is unoccupied or doesn't exist.
   * @see https://wiki.mtasa.com/wiki/GetVehicleOccupant
   **/
  getOccupant(seat?: number): Player | false;

  /**
   * This function is used to retrieve the text on the number plate of a specified vehicle.
   * @returns Returns a string that corresponds to the plate on the text, false if a bad argument was passed or if it is not a vehicle. Every vehicle (including planes, boats, etc.) has a numberplate, even if it's not visible.
   * @see https://wiki.mtasa.com/wiki/GetVehiclePlateText
   **/
  getPlateText(): string;

  /**
   * This function gets all players sitting in the specified vehicle.
   * @returns Returns an object with seat ID as an index and the occupant as an element. Returns false if an invalid vehicle was passed or if the vehicle has no seats (like a trailer).
   * @see https://wiki.mtasa.com/wiki/GetVehicleOccupants
   **/
  getOccupants(): { [seat: number]: Ped } | false;

  /**
   * Retrieves the speed at which the rotor of a helicopter rotates.
   * @returns Returns the rotor speed if successful. This is 0 when the helicopter is parked, and about 0.2 when it is fully spun up. It can be negative if the rotor rotates counter-clockwise. Returns false in case of failure (an invalid element or a vehicle element that is not a helicopter was passed).
   * @see https://wiki.mtasa.com/wiki/GetHelicopterRotorSpeed
   **/
  getHelicopterRotorSpeed(): number | false;

  /**
   * This function gets the state of the helicopter blades collisions on the specified vehicle.
   * @returns Returns true if the collisions are enabled for specified vehicle, false if the collisions aren't enabled for the specified vehicle, if the vehicle is not a helicopter or if invalid arguments are specified.
   * @see https://wiki.mtasa.com/wiki/GetHeliBladeCollisionsEnabled
   **/
  areHeliBladeCollisionsEnabled(): boolean;

  /**
   * This function gets the current paintjob on the specified vehicle.
   * @returns Returns an number representing the current paintjob on the vehicle.
   * @see https://wiki.mtasa.com/wiki/GetVehiclePaintjob
   **/
  getPaintjob(): 0 | 1 | 2 | 3;

  /**
   * This function gets the position of a vehicle's turret, if it has one.
   * Vehicles with turrets include firetrucks and tanks.
   * @returns Returns two floats for the X (horizontal) and Y (vertical) axis rotation respectively. These values are in radians. The function will return 0, 0 if the vehicle is not a vehicle with a turret.
   * @see https://wiki.mtasa.com/wiki/GetVehicleTurretPosition
   * @tupleReturn
   **/
  getTurretPosition(): [number, number];

  /**
   * This function returns the current states of all the wheels on the vehicle.
   * No vehicles have more than 4 wheels, if they appear to they will be duplicating other wheels.
   * @returns Returns 4 numbers indicating the states of the wheels (front left, rear left, front right, rear right).
   * @see https://wiki.mtasa.com/wiki/GetVehicleWheelStates
   * @tupleReturn
   **/
  getVehicleWheelStates(): [number, number, number, number];

  /**
   * This function returns a boolean whether the vehicle's wheel is on ground (true) or in air (false).
   * - Note: In vehicles with 3 wheels, the wheels are combined 2 in 1, in motorbikes only the left - and.
   * @param wheel The wheel name or number, see list below: "front_left"" or 0, "rear_left" or 1, "front_right" or 2, "rear_right" or 3.
   * @returns Returns true if the vehicle wheel is on ground/collided, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsVehicleWheelOnGround
   **/
  isWheelOnGround(wheel: "front_left" | 0 | "rear_left" | 1 | "front_right" | 2 | "rear_right" | 3): boolean;

  /**
   * This function tells you how open a door is (the 'open ratio').
   * Doors include boots/trunks and bonnets on vehicles that have them.
   * @param door A whole number, 0 (hood), 1 (trunk), 2 (front left), 3 (front right), 4 (rear left), 5 (rear right).
   * @returns Returns a number between 0 and 1 that indicates how open the door is. 0 is closed, and 1 is fully open. Returns false if invalid arguments are passed.
   * @see https://wiki.mtasa.com/wiki/GetVehicleDoorOpenRatio
   **/
  getDoorOpenRatio(door: 0 | 1 | 2 | 3 | 4 | 5): number;

  /**
   * This function gets the variant of a specified vehicle.
   * In GTA SA some vehicles are different for example the labelling on trucks or the contents of a pick-up truck and the varying types of a motor bike.
   * Variants list: https://wiki.mtasa.com/wiki/Vehicle_variants
   * @returns Two numbers of vehicle variant or false because the specified vehicle didn't exist.
   * @see https://wiki.mtasa.com/wiki/GetVehicleVariant
   * @tupleReturn
   **/
  getVariant(): [number, number] | [false];

  /**
   * This function returns an object of the current vehicle handling data.
   * @returns Returns an object containing all the handling data, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetVehicleHandling
   **/
  getHandling(): VehicleHandling;

  /**
   * This function returns the current state of the specifed door on the vehicle.
   * @param door a whole number representing which door to get the status of. Valid values are: 0 (hood), 1 (trunk), 2 (front left), 3 (front right), 4 (rear left), 5 (rear right).
   * @returns If successful, one of the following numbers will be returned: 0, 1, 2, 3, 4.
   * @see https://wiki.mtasa.com/wiki/GetVehicleDoorState
   **/
  getDoorState(door: 0 | 1 | 2 | 3 | 4 | 5): number | false;

  /**
   * This function is used to check whether a vehicle's landing gear is down or not.
   * - Note: Only planes can be used with this function.
   * @returns Returns true if landing gear is down, false if the landing gear is up. Returns undefined if the vehicle has no landing gear, or is invalid.
   * @see https://wiki.mtasa.com/wiki/GetVehicleLandingGearDown
   **/
  getLandingGearDown(): boolean | undefined;

  /**
   * This function returns a vehicle's engine state (on or off).
   * @returns Returns true if the vehicle's engine is started, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetVehicleEngineState
   **/
  getEngineState(): boolean;

  /**
   * This function returns the current state of the specified light on the vehicle.
   * @param light A whole number determining the individual light.
   * @returns Returns 0 (working) or 1 (broken), false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetVehicleLightState
   **/
  getLightState(light: number): number | false;

  /**
   * Use this to get the value of a vehicles adjustable property.
   * This property relates to movable parts of a model, for example hydra jets or dump truck tray.
   * @returns Returns a value from 0 upwards representing adjustment. 0 is default position. Maximum varies per vehicle, for example hydra horizontal flight is 5000, while dump truck tray max tilt is 2500. Or returns false if the vehicle passed to the function is invalid.
   * @see https://wiki.mtasa.com/wiki/GetVehicleAdjustableProperty
   **/
  getAdjustableProperty(): number | false;

  /**
   * This function is used to find out whether the lights of the vehicle are on.
   * - Note: This is different to getVehicleOverrideLights because this function will return true if the lights were turned on by natural causes. Unless setVehicleOverrideLights is used, vehicles always automatically disable their lights between 06:00 and 07:00 and enable them between 20:00 and 21:00.
   * @returns Returns true if the lights are on, false otherwise.
   * @see https://wiki.mtasa.com/wiki/AreVehicleLightsOn
   **/
  areLightsOn(): boolean;

  /**
   * This function is used to find out the current state of the override-lights setting of a vehicle.
   * @returns Returns an number value: 0 (No override), 1 (Force off) or 2 (Force on).
   * @see https://wiki.mtasa.com/wiki/GetVehicleOverrideLights
   **/
  getOverrideLights(): 0 | 1 | 2;

  /**
   * This function returns the current state of a specifed panel on the vehicle.
   * A vehicle can have up to 7 panels.
   * @param panel an number specifying the panel you want to know the state of. Not every vehicle has every panel. Possible values from 0 to 6.
   * @returns Returns an number indicating the state of the specified the panel. This is a value between 0 and 3, with 0 indicating the panel is undamaged and 3 indicating it is very damaged.
   * @see https://wiki.mtasa.com/wiki/GetVehiclePanelState
   **/
  getPanelState(panel: number): number | false;

  // TODO: Add function https://wiki.multitheftauto.com/wiki/GetVehicleTurnVelocity.
  // TODO: JSDoc
  getTurnVelocity(): Vector3;

  /**
   * This function will get the taxi light state of a taxi (vehicle IDs 420 and 438).
   * @returns Returns true if the light is on, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsVehicleTaxiLightOn
   **/
  isTaxiLightOn(): boolean;

  /**
   * This function gets an object of the components currently on a vehicle.
   * @returns Returns an object containing the name of the component as the key and visibility flag of that component as the value.
   * @see https://wiki.mtasa.com/wiki/GetVehicleComponents
   **/
  getComponents(): { [key: number]: string };

  /**
   * This function will get the headlight color of a vehicle.
   * @returns Returns three numbers for the red, green and blue of the headlight color for the specified vehicle, false if an invalid vehicle was specified.
   * @see https://wiki.mtasa.com/wiki/GetVehicleHeadLightColor
   * @tupleReturn
   **/
  getHeadLightColor(): [number, number, number];

  /**
   * This function returns the color of the specified vehicle.
   * A vehicle can have up to four colors.
   * @param bRGB A boolean specifying whether to return RGB values. A setting of false will result in the function returning color ids instead.
   * @returns Returns 12 numbers (if bRGB is true) indicating the red, green and blue components of each of the 4 vehicle colors. Returns 4 numbers (if bRGB is false) indicating the color ids of each of the 4 vehicle colors. Returns false if the vehicle doesn't exist.
   * @see https://wiki.mtasa.com/wiki/GetVehicleColor
   * @tupleReturn
   **/
  getColor(bRGB: boolean): [number, number, number, number, number, number, number, number, number, number, number, number];

  /**
   * Retrieves the current gravity vector of a vehicle.
   * This is the direction in which the vehicle falls, also the cameras of any passengers will be rotated to match it.
   * @returns Returns the gravity vector if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetVehicleGravity
   * @tupleReturn
   **/
  getGravity(): Vector3;

  /**
   * This function get the parameters of a vehicles siren.
   * @returns Returns an object. False otherwise.
   * @see https://wiki.mtasa.com/wiki/GetVehicleSirenParams
   **/
  getSirenParams(): SirenParams | false;

  /**
   * This function gets the properties of a vehicle's sirens.
   * @returns If the vehicle is invalid, it returns false. Otherwise, returns an object.
   * @see https://wiki.mtasa.com/wiki/GetVehicleSirens
   **/
  getSirens(): SirenData;

  /**
   * This function returns whether the sirens are turned on for the specified vehicle.
   * @returns Returns true if the sirens are turned on for the specified vehicle, false if the sirens are turned off for the specified vehicle, if the vehicle doesn't have sirens or if invalid arguments are specified.
   * @see https://wiki.mtasa.com/wiki/GetVehicleSirensOn
   **/
  getSirensOn(): boolean;

  /**
   * This function gets the component position of a vehicle.
   * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify).
   * @param [base="root"] A string representing what the returned position is relative to. It can be one of the following values: "parent", "root", "world".
   * @returns Returns three floats indicating the position of the component, x, y and z respectively.
   * @see https://wiki.mtasa.com/wiki/GetVehicleComponentPosition
   * @tupleReturn
   **/
  getComponentPosition(theComponent: string, base?: "parent" | "root" | "world"): Vector3 | [false];

  /**
   * This function get component visibility for vehicle.
   * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify).
   * @returns Returns a bool indicating the visible state of the component.
   * @see https://wiki.mtasa.com/wiki/GetVehicleComponentVisible
   **/
  getComponentVisible(theComponent: string): boolean;

  /**
   * This function gets the component rotation of a vehicle.
   * - Note: Before r6974 the component rotations went the wrong way (i.e. opposite to the vehicle rotations). This has been corrected, so you'll have to modify any scripts written before r6974 that use this function.
   * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify).
   * @param [base="parent"] A string representing what the returned rotation is relative to. It can be one of the following values: "parent", "root", "world".
   * @returns Returns three floats indicating the rotation of the component, x, y and z respectively.
   * @see https://wiki.mtasa.com/wiki/GetVehicleComponentRotation
   * @tupleReturn
   **/
  getComponentRotation(theComponent: string, base?: "parent" | "root" | "world"): Vector3 | [false];

  /**
   * This function gets the component scale of a vehicle.
   * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify).
   * @param [base="root"] A string representing what the returned scale is relative to. It can be one of the following values: "parent", "root", "world".
   * @returns Returns three floats indicating the scale of the component, x, y and z respectively.
   * @see https://wiki.mtasa.com/wiki/GetVehicleComponentScale
   * @tupleReturn
   **/
  getComponentScale(theComponent: string, base?: "parent" | "root" | "world"): Vector3 | [false];

  /**
   * This function returns an array of all the upgrades on a specifed vehicle.
   * @param theVehicle The vehicle you wish to retrieve the upgrades of.
   * @returns Returns an array of all the upgrades on each slot of a vehicle, which may be empty, or false if a valid vehicle is not passed.
   * @see https://wiki.mtasa.com/wiki/GetVehicleUpgrades
   **/
  getUpgrades(theVehicle: Vehicle): number[];

  /**
   * This function returns an object of all the compatible upgrades (or all for a specified slot, optionally) for a specified vehicle.
   * @param slot the upgrade slot number for which you're getting the list (from 0 to 16). Compatible upgrades for all slots are listed if this is not specified.
   * @returns Returns an object with all the compatible upgrades, or false if invalid arguments are passed.
   * @see https://wiki.mtasa.com/wiki/GetVehicleCompatibleUpgrades
   **/
  getCompatibleUpgrades(slot?: number): { [key: number]: number | string } | false;

  /**
   * This function returns the current upgrade id on the specified vehicle's 'upgrade slot'.
   * An upgrade slot is a certain type of upgrade (eg: exhaust, spoiler), there are 17 slots (0 to 16).
   * @param slot The slot id of the upgrade.
   * @returns Returns a number with the upgrade on the slot if correct arguments were passed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetVehicleUpgradeOnSlot
   **/
  getUpgradeOnSlot(slot: number): number | false;

  /**
   * This function sets component visibility for vehicle.
   * @param theComponent A vehicle component (this is the component's frame name (also called 'dummy') from the vehicle model's DFF file of which you want to manipulate components).
   * @param visible a bool which determines if the component should be visible.
   * @returns Returns a bool indicating if the visiblity was changed successfully.
   * @see https://wiki.mtasa.com/wiki/SetVehicleComponentVisible
   **/
  setComponentVisible(theComponent: string, visible: boolean): boolean;

  /**
   * This function changes the state of the sirens on the specified vehicle.
   * @param sirensOn The state to set the sirens to.
   * @returns Returns true if the sirens are set for the specified vehicle, false if the sirens can't be set for the specified vehicle, if the vehicle doesn't have sirens or if invalid arguments are specified.
   * @see https://wiki.mtasa.com/wiki/SetVehicleSirensOn
   **/
  setSirensOn(sirensOn: boolean): boolean;

  /**
   * This function changes the properties of a vehicles siren point.
   * - Note: Although you may be able to add sirens to any vehice, this function may not work. This function fails on the Buffalo for example.
   * @param sirenPoint The siren point to modify.
   * @param posX The x position of this siren point from the center of the vehicle.
   * @param posY The y position of this siren point from the center of the vehicle.
   * @param posZ The z position of this siren point from the center of the vehicle.
   * @param red The amount of red from 0 to 255.
   * @param green The amount of green from 0 to 255.
   * @param blue The amount of blue from 0 to 255.
   * @param [alpha=255] The alpha of the siren from 0 to 255.
   * @param [minAlpha=0] The minimum alpha of the light during day time.
   * @returns Returns true if the siren point was successfully changed on the vehicle, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleSirens
   **/
  setSirens(sirenPoint: number, posX: number, posY: number, posZ: number, red: number, green: number, blue: number, alpha?: number, minAlpha?: number): boolean;

  /**
   * This function sets the component position of a vehicle.
   * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify).
   * @param posX The new x position of this component.
   * @param posY The new y position of this component.
   * @param posZ The new z position of this component.
   * @param [base="root"] A string representing what the supplied position (posX, posY, posZ) is relative to. It can be one of the following values: "parent", "root", "world".
   * @returns Returns true if component position was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleComponentPosition
   **/
  setComponentPosition(theComponent: string, posX: number, posY: number, posZ: number, base?: "parent" | "root" | "world"): boolean;

  /**
   * This function sets the component rotation of a vehicle.
   * - Note: Before r6974 the component rotations went the wrong way (i.e. opposite to the vehicle rotations). This has been corrected, so you'll have to modify any scripts written before r6974 that use this function.
   * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify).
   * @param rotX The component's rotation around the x axis in degrees.
   * @param rotY The component's rotation around the y axis in degrees.
   * @param rotZ The component's rotation around the z axis in degrees.
   * @param [base=parent] A string representing what the supplied rotation (rotX, rotY, rotZ) is relative to. It can be one of the following values: "parent", "root", "world".
   * @returns Returns true if the component rotation was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleComponentRotation
   **/
  setComponentRotation(theComponent: string, rotX: number, rotY: number, rotZ: number, base?: "parent" | "root" | "world"): boolean;

  /**
   * This function sets the component scale of a vehicle.
   * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify).
   * @param scaleX The new x scale of this component.
   * @param scaleY The new y scale of this component.
   * @param scaleZ The new z scale of this component.
   * @param [base=root] A string representing what the supplied scale (scaleX, scaleY, scaleZ) is relative to. It can be one of the following values: "parent", "root", "world".
   * @returns Returns true if component scale was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleComponentScale
   **/
  setComponentScale(theComponent: string, scaleX: number, scaleY: number, scaleZ: number, base?: "parent" | "root" | "world"): boolean;

  /**
   * This function can be used to set a vehicle to be locked or unlocked.
   * Locking a vehicle restricts access to all doors of a vehicle.
   * @param locked Boolean for the status you wish to set. Set true to lock, false to unlock.
   * @returns Returns true if the operation was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleLocked
   **/
  setVehicleLocked(locked: boolean): boolean;

  /**
   * This functions makes a vehicle damage proof, so it won't take damage from bullets, hits, explosions or fire.
   * A damage proof's vehicle health can still be changed via script.
   * @param damageProof true is damage proof, false is damageable.
   * @returns Returns true if the vehicle was set damage proof succesfully, false if the arguments are invalid or it failed.
   * @see https://wiki.mtasa.com/wiki/SetVehicleDamageProof
   **/
  setDamageProof(damageProof: boolean): boolean;

  /**
   * Sets the rotor speed of a helicopter.
   * - Note: Setting higher values will cause problems to the client.
   * @param speed the new rotor speed. Usual values are 0 if the helicopter stands still, or 0.2 if the rotor is fully spun up. Higher values than normal will not affect the helicopter's handling. Negative values are allowed and will make the rotor spin in the opposite direction (pushing the helicopter down).
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetHelicopterRotorSpeed
   **/
  setHelicopterRotorSpeed(speed: number): boolean;

  /**
   * This function changes the state of the helicopter blades collisions on the specified vehicle.
   * @param collisions The state of the helicopter blades collisions.
   * @returns Returns true if the collisions are set for the specified vehicle, false if the collisions can't be set for the specified vehicle, if the vehicle is not a helicopter or if invalid arguments are specified.
   * @see https://wiki.mtasa.com/wiki/SetHeliBladeCollisionsEnabled
   **/
  setHeliBladeCollisionsEnabled(collisions: boolean): boolean;

  /**
   * This function changes the paintjob on the specified vehicle.
   * See paintjob for list of supported vehicles.
   * @param value A whole number representing the new paintjob id. Ranges from 0 up to 3.
   * @returns Returns true if the vehicle's paintjob was changed. Otherwise false.
   * @see https://wiki.mtasa.com/wiki/SetVehiclePaintjob
   **/
  setPaintjob(value: 0 | 1 | 2 | 3): boolean;

  /**
   * This function sets the position of a vehicle's turret, if it has one.
   * This can be used to influence the turret's rotation, so it doesn't follow the camera.
   * Vehicles with turrets include firetrucks and tanks.
   * @param positionX The horizontal position of the turret. In radians.
   * @param positionY The vertical position of the turret. In radians.
   * @returns Returns a true if a valid vehicle element and valid positions were passed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleTurretPosition
   **/
  setTurretPosition(positionX: number, positionY: number): boolean;

  /**
   * This function sets the state of wheels on the vehicle.
   * Internally, no vehicles have more than 4 wheels.
   * If they appear to, they will be duplicating other wheels.
   * @param frontLeft A whole number representing the wheel state (-1 for no change).
   * @param [rearLeft=-1] A whole number representing the wheel state (-1 for no change).
   * @param [frontRight=-1] A whole number representing the wheel state (-1 for no change).
   * @param [rearRight=-1] A whole number representing the wheel state (-1 for no change).
   * @returns Returns a boolean value true or false that tells you if it was successful or not.
   * @see https://wiki.mtasa.com/wiki/SetVehicleWheelStates
   **/
  setWheelStates(frontLeft: number, rearLeft?: number, frontRight?: number, rearRight?: number): boolean;

  /**
   * This function sets how much a vehicle's door is open.
   * Doors include the boot/trunk and the bonnet of the vehicle.
   * @param door A whole number, 0 (hood), 1 (trunk), 2 (front left), 3 (front right), 4 (rear left), 5 (rear right).
   * @param ratio The ratio value, ranging from 0 (fully closed) to 1 (fully open).
   * @param [time=0] The number of milliseconds the door should take to reach the value you have specified.A value of 0 will change the door open ratio instantly.
   * @returns Returns true if the door open ratio was successfully set, false if invalid arguments are passed.
   * @see https://wiki.mtasa.com/wiki/SetVehicleDoorOpenRatio
   **/
  setDoorOpenRatio(door: 0 | 1 | 2 | 3 | 4 | 5, ratio: 0 | 1, time?: number): boolean;

  /**
   * This function makes a vehicle's doors undamageable, so they won't fall off when they're hit.
   * Note that the vehicle has to be locked using setVehicleLocked for this setting to have any effect.
   * @param state A boolean denoting whether the vehicle's doors are undamageable (true) or damageable (false).
   * @returns Returns true if the damageability state was successfully changed, false if invalid arguments were passed.
   * @see https://wiki.mtasa.com/wiki/SetVehicleDoorsUndamageable
   **/
  setDoorsUndamageable(state: boolean): boolean;

  /**
   * This function is used to change the handling data of a vehicle.
   * @param property The property you wish to set the handling of the vehicle to.
   * @param value The value of the property you wish to set the handling of the vehicle to. Use undefined to reset handling.
   * @param reset If false: Reset one property to model handling value. If true: Reset one property to GTA default value.
   * @returns Returns true if the handling was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleHandling
   **/
  setHandling(property: string, value: any, reset: boolean): boolean;

  /**
   * This function is used to change the handling data of a vehicle.
   * @param reset If false: reset all properties to model handling value. If true: Reset all properties to GTA default value.
   * @returns Returns true if the handling was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleHandling
   **/
  setHandling(reset: boolean): boolean;

  /**
   * This function sets the state of the specified door on a vehicle.
   * @param door a number representing which door to set the state of.
   * @param state a number representing the state to set the door to.
   * @returns Returns true if the door state was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleDoorState
   **/
  setDoorState(door: 0 | 1 | 2 | 3 | 4 | 5, state: 0 | 1 | 2 | 3 | 4): boolean;

  /**
   * This function is used to set the landing gear state of certain vehicles.
   * @param gearState A bool representing the state of the landing gear. true represents a collapsed landing gear, while false represents a disabled landing gear.
   * @returns Returns true if the landing gear was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleLandingGearDown
   **/
  setLandingGearDown(gearState: boolean): boolean;

  /**
   * This function turns a vehicle's engine on or off.
   * Note that the engine will always be turned on when someone enters the driver seat, unless you override that behaviour with scripts.
   * @param engineState A boolean value representing whether the engine will be turned on (true) or off (false).
   * @returns Returns true if the vehicle's engine state was successfully changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleEngineState
   **/
  setEngineState(engineState: boolean): boolean;

  /**
   * This function sets the state of the light on the vehicle.
   * @param light A whole number determining the individual light.
   * @param state A whole number determining the new state of the light. 0 represents normal lights, and 1 represents broken lights.
   * @returns Returns true if the light state was set successfully, false if invalid arguments were passed to the function.
   * @see https://wiki.mtasa.com/wiki/SetVehicleLightState
   **/
  setLightState(light: 0 | 1 | 2 | 3, state: 0 | 1): boolean;

  /**
   * This function changes the 'explodable state' of a vehicle's fuel tank, which toggles the ability to blow the vehicle up by shooting the tank.
   * This function will have no effect on vehicles with tanks that cannot be shot in single player.
   * @param explodable A boolean value representing whether or not the fuel tank will be explodable.
   * @returns Returns true if the vehicle's fuel tank explodable state was successfully changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleFuelTankExplodable
   **/
  setFuelTankExplodable(explodable: boolean): boolean;

  // TODO: lua_classfunction(luaVM, "setDirtLevel", "setVehicleDirtLevel");

  /**
   * This function is used for adjusting the movable parts of a model, for example hydra jets or dump truck tray. This function only works on vehicles with adjustable properties.
   * @param value A value from 0 between ? (Set the adjustable value between 0 and N. 0 is the default value. It is possible to force the setting beyond default maximum, for example setting above 5000 on the dump truck (normal max 2500) will cause the tray to be fully vertical).
   * @returns Returns true if the adjustable property was set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleAdjustableProperty
   **/
  setAdjustableProperty(value: number): boolean;

  /**
   * This function changes the light overriding setting on a vehicle.
   * @param value A whole number representing the state of the lights.
   * @returns Returns true if the vehicle's lights setting was changed. Otherwise false.
   * @see https://wiki.mtasa.com/wiki/SetVehicleOverrideLights
   **/
  setOverrideLights(value: 0 | 1 | 2): boolean;

  /**
   * This function will set the taxi light on in a taxi (vehicle ID's 420 and 438)
   * @param LightState whether the light is on. True for on, False for off.
   * @returns Returns true if the state was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleTaxiLightOn
   **/
  setTaxiLightOn(LightState: boolean): boolean;

  /**
   * This function allows you to change the state of one of the six panels vehicle's can have.
   * @param panelID An ID specifying the part of the vehicle. Possible values from 0 up to 6.
   * @param state How damaged the part is on the scale of 0 to 3, with 0 being undamaged and 3 being very damaged. How this is manifested depends on the panel and the vehicle.
   * @returns Returns true if the panel state has been updated, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehiclePanelState
   **/
  setPanelState(panelID: 0 | 1 | 2 | 3 | 4 | 5 | 6, state: 0 | 1 | 2 | 3): boolean;

  /**
   * This function activates or deactivates the nitro on the specified vehicle, like if a player pressed the button for activating nitro.
   * - Warning: Only works if the vehicle is steamed in.
   * @param state true if you want to activate the nitro, false if you want to disable it.
   * @returns Returns true if the nitro activation state was modified successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleNitroActivated
   **/
  setNitroActivated(state: boolean): boolean;

  /**
   * This function sets how many times a player can activate the nitro on a specified vehicle.
   * - Warning: Only works if the vehicle is streamed in.
   * @param count how many times should the player be able to use the nitro of this vehicle (from 0-100 times; 0 means that it can't be used and 101 means that it can be used infinite times).
   * @returns Returns true if the nitro count was set successfully to the vehicle, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleNitroCount
   **/
  setNitroCount(count: number): boolean;

  /**
   * This function sets the nitro level of the vehicle.
   * - Warning: Only works if the vehicle is steamed in.
   * @param level Nitro level you want to set (ranges from 0.0001 to 1.0).
   * @returns Returns true if the nitro level was set successfully to the vehicle, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleNitroLevel
   **/
  setNitroLevel(level: number): boolean;

  /**
   * Sets the direction in which a train or tram drives over the rails (clockwise or counterclockwise).
   * @param clockwise if true, will make the train go clockwise. If false, makes it go counterclockwise.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetTrainDirection
   **/
  setDirection(clockwise: boolean): boolean;

  /**
   * Sets the on-track speed of a train.
   * @param speed the new on-track speed of the train. A positive value will make it go clockwise, a negative value counter clockwise.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetTrainSpeed
   **/
  setTrainSpeed(speed: number): boolean;

  /**
   * Sets the position the train is currently on the track.
   * @param position the position along the track (0 - 18107 a complete way round).
   * @returns Returns true if the train position was set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetTrainPosition
   **/
  setTrainPosition(position: number): boolean;

  /**
   * This function will set a train or tram as derailable.
   * This is, if it can derail when it goes above the maximum speed.
   * @param derailable whether the train or tram is derailable: true as derailable, false as non-derailable.
   * @returns Returns true if the state was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetTrainDerailable
   **/
  setDerailable(derailable: boolean): boolean;

  /**
   * This function will set a train or tram as derailed.
   * @param derailed whether the train is derailed.
   * @returns Returns true if the state was successfully set.
   * @see https://wiki.mtasa.com/wiki/SetTrainDerailed
   **/
  setDerailed(derailed: boolean): boolean;

  /**
   * This function will set the headlight color of a vehicle.
   * Valid Red Green and Blue arguments range from 0-255.
   * @param red a number indicating the amount of red for the vehicle's headlights.
   * @param green a number indicating the amount of green for the vehicle's headlights.
   * @param blue a number indicating the amount of blue for the vehicle's headlights.
   * @returns Returns true if vehicle's headlight color was set, false if an invalid vehicle or invalid color ranges were specified for red, green or blue.
   * @see https://wiki.mtasa.com/wiki/SetVehicleHeadLightColor
   **/
  setHeadLightColor(red: number, green: number, blue: number): boolean;

  /**
   * This function will set the color of a vehicle.
   * Colors are in RGB format, vehicles can have up to 4 colors.
   * Most vehicles have 2 colors only.
   * @param r1 Red color.
   * @param g1 Green color.
   * @param b1 Blue color.
   * @param r2 Red color.
   * @param g2 Green color.
   * @param b2 Blue color.
   * @param r3 Red color.
   * @param g3 Green color.
   * @param b3 Blue color.
   * @param r4 Red color.
   * @param g4 Green color.
   * @param b4 Blue color.
   * @returns Returns true if vehicle's color was set, false if an invalid vehicle or invalid colors were specified.
   * @see https://wiki.mtasa.com/wiki/SetVehicleColor
   **/
  setColor(r1: number, g1: number, b1: number, r2?: number, g2?: number, b2?: number, r3?: number, g3?: number, b3?: number, r4?: number, g4?: number, b4?: number): boolean;

  /**
   * This function can be used to set the numberplate text of a car.
   * It now also changes the numberplate text of any vehicle that has visual numberplates.
   * @param numberplate a string that will go on the number plate of the car (max 8 characters).
   * @returns Returns true if the numberplate was changed successfully, or false if invalid arguments were passed.
   * @see https://wiki.mtasa.com/wiki/SetVehiclePlateText
   **/
  setPlateText(numberplate: string): boolean;

  /**
   * Sets the gravity vector of a vehicle.
   * The vehicle will fall in this direction, and the camera of any occupants will also be rotated to match it. Can be used for e.g. driving on walls or upside down on ceilings.
   * @param x the components of the new gravity vector. If this vector has length 1, the strength of the gravity will be same as the global gravity for other entities. If it is 2, it will be twice as strong, etc.
   * @param y the components of the new gravity vector. If this vector has length 1, the strength of the gravity will be same as the global gravity for other entities. If it is 2, it will be twice as strong, etc.
   * @param z the components of the new gravity vector. If this vector has length 1, the strength of the gravity will be same as the global gravity for other entities. If it is 2, it will be twice as strong, etc.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetVehicleGravity
   **/
  setGravity(x: number, y: number, z: number): boolean;

  /**
   * This function reset to default component position for vehicle.
   * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify).
   * @returns Returns true if the position of the component was reset, false otherwise.
   * @see https://wiki.mtasa.com/wiki/ResetVehicleComponentPosition
   **/
  resetComponentPosition(theComponent: string): boolean;

  /**
   * This function reset to default component rotation for vehicle.
   * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify).
   * @returns Returns true if the rotation of the component was reset, false otherwise.
   * @see https://wiki.mtasa.com/wiki/ResetVehicleComponentRotation
   **/
  resetComponentRotation(theComponent: string): boolean;

  /**
   * This function reset to default component scale for vehicle.
   * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify).
   * @returns Returns true if the scale of the component was reset, false otherwise.
   * @see https://wiki.mtasa.com/wiki/ResetVehicleComponentScale
   **/
  resetComponentScale(theComponent: string): boolean;

  /**
   * This function attaches a trailer type vehicle to a trailer-towing-type vehicle.
   * @param theTrailer the trailer you wish to be attached.
   * @returns Returns true if the vehicle's were successfully attached, false otherwise.
   * @see https://wiki.mtasa.com/wiki/AttachTrailerToVehicle
   **/
  attachTrailer(theTrailer: Vehicle): boolean;

  /**
   * This function detaches an already attached trailer from a vehicle.
   * @param [theTrailer=undefined] The trailer you wish to be detached.
   * @returns Returns 'true' if the vehicle's were successfully detached, 'false' otherwise.
   * @see https://wiki.mtasa.com/wiki/DetachTrailerFromVehicle
   **/
  detachTrailer(theTrailer?: Vehicle): boolean;

  /**
   * This function adds an upgrade to a vehicle, e.g. nitrous, hydraulics.
   * @param upgrade The id of the upgrade you wish to add (1000 to 1193).
   * @returns Returns true if the upgrade was successfully added to the vehicle, otherwise false.
   * @see https://wiki.mtasa.com/wiki/AddVehicleUpgrade
   **/
  addUpgrade(upgrade: number): boolean;

  /**
   * This function removes an already existing upgrade from the specified vehicle, eg: nos, hydraulics. Defined in San Andreas\data\maps\veh_mods\veh_mods.ide.
   * @param upgrade The ID of the upgrade you wish to remove.
   * @returns Returns true if the upgrade was successfully removed from the vehicle, otherwise false.
   * @see https://wiki.mtasa.com/wiki/RemoveVehicleUpgrade
   **/
  removeUpgrade(upgrade: number): boolean;
}
