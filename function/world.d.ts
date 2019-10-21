/**
 * Gets whether the traffic lights are currently locked or not.
 * If the lights are locked, it means they won't change unless you do setTrafficLightState.
 * @returns Returns true the traffic lights are currently locked, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AreTrafficLightsLocked
 **/
declare function areTrafficLightsLocked(): boolean;

/**
 * Creates a SWAT rope like that of the rope in single player used by SWAT Teams abseiling from the Police Maverick.
 * @param fx the world coordinates where the effect originates.
 * @param fy the world coordinates where the effect originates.
 * @param fZ the world coordinates where the effect originates.
 * @param duration the amount in miliseconds the rope will be there before falling to the ground.
 * @returns Return true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CreateSWATRope
 **/
declare function createSWATRope(fx: number, fy: number, fZ: number, duration: number): boolean;

/**
 * This function gets the maximum height at which aircraft can fly without their engines turning off.
 * @returns Returns a number containing the max aircraft height.
 * @see https://wiki.mtasa.com/wiki/GetAircraftMaxHeight
 **/
declare function getAircraftMaxHeight(): number | false;

/**
 * This function returns the maximum velocity at which aircrafts could fly.
 * @returns Returns a number being the max velocity that is currently set, depending on which side it is used.
 * @see https://wiki.mtasa.com/wiki/GetAircraftMaxVelocity
 **/
declare function getAircraftMaxVelocity(): number;

/**
 * This function will tell you if the birds are enabled or disabled.
 * @returns Returns true if the birds are enabled or false if the birds are disabled.
 * @see https://wiki.mtasa.com/wiki/GetBirdsEnabled
 **/
declare function getBirdsEnabled(): boolean;

/**
 * This function will tell you if clouds are enabled or disabled.
 * @returns Returns true if the clouds are enabled or false if clouds are disabled.
 * @see https://wiki.mtasa.com/wiki/GetCloudsEnabled
 **/
declare function getCloudsEnabled(): boolean;

/**
 * This function will tell you what is the current render distance.
 * - Note: The function will return false server-side if far clip distance has not been set before the function is called.
 * @returns Returns a number with the current render distance, false if the operation could not be completed.
 * @see https://wiki.mtasa.com/wiki/GetFarClipDistance
 **/
declare function getFarClipDistance(): number | false;

/**
 * This function will tell you what is the current fog render distance.
 * - Note: The function will return false server-side if fog distance has not been set before the function is called.
 * @returns Returns a float with the current fog render distance, false if the operation could not be completed.
 * @see https://wiki.mtasa.com/wiki/GetFogDistance
 **/
declare function getFogDistance(): number | false;

/**
 * This function gets the current game speed value.
 * @returns Returns a float representing the speed of the game.
 * @see https://wiki.mtasa.com/wiki/GetGameSpeed
 **/
declare function getGameSpeed(): number | false;

/**
 * This function outputs the bounding box of a garage.
 * @param garageID The garage ID that represents the garage door that is being checked.
 * @returns Returns four floats indicating the bounding box of the garage. Western X position, Eastern X position, Southern Y position, Northern Y position,, false when invalid garageID was provided.
 * @see https://wiki.mtasa.com/wiki/GetGarageBoundingBox
 * @tupleReturn
 **/
declare function getGarageBoundingBox(garageID: number): [number, number, number, number] | [false];

/**
 * This function outputs X, Y and Z position of given garage.
 * @param garageID The garage ID that represents the garage door that is being checked.
 * @returns Returns three floats indicating the position of the garage, x, y and z respectively, false when garageID was invalid.
 * @see https://wiki.mtasa.com/wiki/GetGaragePosition
 * @tupleReturn
 **/
declare function getGaragePosition(garageID: number): [number, number, number] | [false];

/**
 * This function outputs the size of garage.
 * @param garageID The garage ID that represents the garage door that is being checked.
 * @returns Returns three floats indicating the size of the garage, false if an invalid garageID has been provided
 * @see https://wiki.mtasa.com/wiki/GetGarageSize
 * @tupleReturn
 **/
declare function getGarageSize(garageID: number): [number, number, number] | [false];

/**
 * This function returns the current gravity level for the context in which it is called.
 * @returns Returns a number with the current server gravity level.
 * @see https://wiki.mtasa.com/wiki/GetGravity
 **/
declare function getGravity(): number | false;

/**
 * This function gets the Z level of the highest ground below a point.
 * It is required that the point is near enough to the local player so that it's within the area where collision data is loaded.
 * If this is not the case, an incorrect position will be returned.
 * @param x A floating point number representing the X world coordinate of the point.
 * @param y A floating point number representing the Y world coordinate of the point.
 * @param z A floating point number representing the Z world coordinate of the point.
 * @returns Returns a float with the highest ground-level Z coord if parameters are valid, 0 if the point you tried to test is outside the loaded world map, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetGroundPosition
 **/
declare function getGroundPosition(x: number, y: number, z: number): number | false;

/**
 * This function will return the current heat haze effect settings.
 * - Note: The server can only return the heat haze settings if it has actually been set by script.
 * @returns Returns 9 values, which are the same used as arguments in SetHeatHaze.
 * @see https://wiki.mtasa.com/wiki/GetHeatHaze
 * @tupleReturn
 **/
declare function getHeatHaze(): [number, number, number, number, number, number, number, number, boolean] | [false];

/**
 * This function will tell you if interior furniture are enabled or disabled in a specified room ID.
 * @param roomID Room identificator.
 * @returns Returns true if interior furniture is enabled or false if interior furniture is disabled.
 * @see https://wiki.mtasa.com/wiki/GetInteriorFurnitureEnabled
 **/
declare function getInteriorFurnitureEnabled(roomID: number): boolean;

/**
 * This function checks to see if the music played by default in clubs is disabled or not.
 * @returns Returns true if music is playing, returns false if music is not playing.
 * @see https://wiki.mtasa.com/wiki/GetInteriorSoundsEnabled
 **/
declare function getInteriorSoundsEnabled(): boolean;

/**
 * This function gets the maximum height at which your jetpack can fly without failing to go higher.
 * @returns Returns a float containing the max jetpack height.
 * @see https://wiki.mtasa.com/wiki/GetJetpackMaxHeight
 **/
declare function getJetpackMaxHeight(): number | false;

/**
 * Tells you how long an ingame minute takes in real-world milliseconds.
 * The default GTA value is 1000.
 * @returns Returns the number of real-world milliseconds that go in an ingame minute.
 * @see https://wiki.mtasa.com/wiki/GetMinuteDuration
 **/
declare function getMinuteDuration(): number | false;

/**
 * This function returns the moon size.
 * Using this function server-side will return the server-side value, not necessarily the same that is set client-side.
 * @returns Returns a number being the moon size that is currently set, depending on which side it is used.
 * @see https://wiki.mtasa.com/wiki/GetMoonSize
 **/
declare function getMoonSize(): number | false;

/**
 * This function gets the distance from the camera at which the world starts rendering.
 * For more information about this please refer to setNearClipDistance.
 * @returns This function returns a float containing the actual near clip distance.
 * @see https://wiki.mtasa.com/wiki/GetNearClipDistance
 **/
declare function getNearClipDistance(): number;

/**
 * This function is used to get "occlusions enabled" state.
 * - Note: Occlusions are used by GTA to enhance performance by hiding objects that are (normally) obscured by certain large buildings. However when removeWorldModel is used they may also have the undesired effect of making parts of the map disappear. Disabling occlusions will fix that.
 * @returns Returns true if occlusions are enabled, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetOcclusionsEnabled
 **/
declare function getOcclusionsEnabled(): number | false;

/**
 * This function gets the peds LOD distance.
 * @returns This function returns a float containing the peds LOD distance.
 * @see https://wiki.mtasa.com/wiki/GetPedsLODDistance
 **/
declare function getPedsLODDistance(): number;

/**
 * Resets the distance of peds LOD to default.
 * Default values depends on client setting.
 * If client has enabled high detail peds in video options, value will be reset to 500 - otherwise to 60.
 * @returns Returns true if the peds LOD distance was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetPedsLODDistance
 **/
declare function resetPedsLODDistance(): boolean;

/**
 * This function sets the peds LOD distance.
 * @param distance the new peds LOD distance. It must be between 0 and 500. (Default for high_detail_peds on is 500, when off, it is 60).
 * @returns This function returns true if the argument is valid. Returns false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedsLODDistance
 **/
declare function setPedsLODDistance(distance: number): boolean;

/**
 * This function allows you to check the current blur level of a specified player.
 * @returns Returns the local blur level.
 * @see https://wiki.mtasa.com/wiki/GetPlayerBlurLevel
 **/
declare function getPlayerBlurLevel(): number;

/**
 * This function is used to get the current rain level.
 * - Note: The server can only return the rain level if it has actually been set by script, otherwise it will return false.
 * @returns Returns the rain level as a number.
 * @see https://wiki.mtasa.com/wiki/GetRainLevel
 **/
declare function getRainLevel(): number | false;

/**
 * This function gets the screen position of a point in the world.
 * This is useful for attaching 2D gui elements to parts of the world (e.g. players) or detecting if a point is on the screen (though it does not check if it is actually visible, you should use processLineOfSight for that).
 * @param x A float value indicating the x position in the world.
 * @param y A float value indicating the y position in the world.
 * @param z A float value indicating the z position in the world.
 * @param [edgeTolerance=0] A float value indicating the distance the position can be off screen before the function returns false. Note: it's clamped down on both axies to the size of screen at the given axis* 10.
 * @param [relative=true] A boolean value that indicates if edgeTolerance is in pixels [false], or relative to the screen size [true].
 * @returns Returns two x, y floats indicating the screen position and float distance between screen and given position if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetScreenFromWorldPosition
 * @tupleReturn
 **/
declare function getScreenFromWorldPosition(x: number, y: number, z: number, edgeTolerance?: number, relative?: boolean): [number, number] | [false];

/**
 * This function is used to get the color of the sun.
 * @returns Returns the color of the sun as six numbers, false if its default.
 * @see https://wiki.mtasa.com/wiki/GetSunColor
 * @tupleReturn
 **/
declare function getSunColor(): [number, number, number, number, number, number] | [false];

/**
 * This function is used to get the size of the sun.
 * @returns Returns the size of the sun as a number, false if the size of the sun is at its default.
 * @see https://wiki.mtasa.com/wiki/GetSunSize
 **/
declare function getSunSize(): number | false;

/**
 * This function is used to get the current time in the game.
 * If you want to get the real server time, use getRealTime.
 * @returns Returns two numbers that represent hours and minutes.
 * @see https://wiki.mtasa.com/wiki/GetTime
 * @tupleReturn
 **/
declare function getTime(): [number, number];

/**
 * Gets the current traffic light state.
 * This state controls the traffic light colors.
 * For instance, state 1 will cause the north and south traffic lights to be amber, and the ones left and east will turn red.
 * @returns Returns the current state of the traffic lights.
 * @see https://wiki.mtasa.com/wiki/GetTrafficLightState
 **/
declare function getTrafficLightState(): number;

/**
 * This function returns the current Weather ID.
 * @returns Returns two numbers indicating the weather type that is currently active. The first number says what weather is currently considered to be active. The second number is the weather id that is being blended into if any, otherwise it is undefined.
 * @see https://wiki.mtasa.com/wiki/GetWeather
 * @tupleReturn
 **/
declare function getWeather(): [number, number | undefined];

/**
 * Returns the distance of vehicles LOD.
 * @returns First number: general distance used for most vehicles. Second number: distance used for trains and planes.
 * @see https://wiki.mtasa.com/wiki/GetVehiclesLODDistance
 * @tupleReturn
 **/
declare function getVehiclesLODDistance(): [number, number];

/**
 * This function gets the wind velocity in San Andreas.
 * @returns Returns three numbers containing wind velocity.
 * @see https://wiki.mtasa.com/wiki/GetWindVelocity
 * @tupleReturn
 **/
declare function getWindVelocity(): [number, number, number];

/**
 * This function allows you to retrieve the world position corresponding to a 2D position on the screen, at a certain depth.
 * If you want to detect what element is at a particular point on the screen, use processLineOfSight between the camera position and the position returned from this function when passed a high depth value (100 or so, depending how far away you want to detect elements at).
 * As expected, setting 0 as the distance will cause the point retrived to be within the camera itself.
 * That means that drawing any 3D thing in that point would result in it not being visible.
 * Depending on the camera near clip distance, however, the minimum distance to be able to view it can vary.
 * @param x A float value indicating the x position on the screen, in pixels.
 * @param y A float value indicating the y position on the screen, in pixels.
 * @param depth A float value indicating the distance from the camera of the point whose coordinates we are retrieving, in units.
 * @returns Returns three x, y, z floats indicating the world position if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetWorldFromScreenPosition
 * @tupleReturn
 **/
declare function getWorldFromScreenPosition(x: number, y: number, depth: number): [number, number, number] | [false];

/**
 * This function allows you to retrieve the zone name of a certain location.
 * @param x The X axis position.
 * @param y The Y axis position.
 * @param z The Z axis position.
 * @param [citiesonly=false] An optional argument to choose if you want to return the city name (eg Las Venturas).
 * @returns Returns the string of the zone name.
 * @see https://wiki.mtasa.com/wiki/GetZoneName
 **/
declare function getZoneName(x: number, y: number, z: number, citiesonly?: boolean): string | false;

/**
 * This function checks whether or not a specific garage door is open.
 * @param garageID The garage ID that represents the garage door that is being checked.
 * @returns Returns true if the garage is open, false if it is closed or an invalid garage ID was given.
 * @see https://wiki.mtasa.com/wiki/IsGarageOpen
 **/
declare function isGarageOpen(garageID: number): boolean;

/**
 * This function allows you to check if some background sound effects are enabled.
 * @param theType The type of ambient sound to test. Can be either "gunfire" or "general".
 * @returns Returns true if the ambient sound is enabled, false if it is disabled or invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/IsAmbientSoundEnabled
 **/
declare function isAmbientSoundEnabled(theType: "gunfire" | "general"): boolean;

/**
 * This function checks if there are obstacles between two points of the game world, optionally ignoring certain kinds of elements.
 * Use processLineOfSight if you want more information about what the ray hits.
 * @param startX The first point's world X coordinate.
 * @param startY The first point's world Y coordinate.
 * @param startZ The first point's world Z coordinate.
 * @param endX The second point's world X coordinate.
 * @param endY The second point's world Y coordinate.
 * @param endZ The second point's world Z coordinate.
 * @param [checkBuildings=true] Allow the line of sight to be blocked by GTA's internally placed buildings, i.e. the world map.
 * @param [checkVehicles=true] Allow the line of sight to be blocked by vehicles.
 * @param [checkPeds=true] Allow the line of sight to be blocked by peds, i.e. players.
 * @param [checkObjects=true] Allow the line of sight to be blocked by objects.
 * @param [checkDummies=true] Allow the line of sight to be blocked by GTA's internal dummies. These are not used in the current MTA version so this argument can be set to false.
 * @param [seeThroughStuff=false] Allow the line of sight to be blocked by translucent game objects, e.g. glass.
 * @param [ignoreSomeObjectsForCamera=false] Allow the line of sight to pass through objects that have (K) property enabled in "object.dat" data file. (i.e. Most dynamic objects like boxes or barrels)
 * @param [ignoredElement=undefined] Allow the line of sight to pass through a certain specified element.
 * @returns Returns true if the line between the specified points is clear, false if there's an obstacle or if invalid parameters are passed.
 * @see https://wiki.mtasa.com/wiki/IsLineOfSightClear
 **/
declare function isLineOfSightClear(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, checkBuildings?: boolean, checkVehicles?: boolean, checkPeds?: boolean, checkObjects?: boolean, checkDummies?: boolean, seeThroughStuff?: boolean, ignoreSomeObjectsForCamera?: boolean, ignoredElement?: Element): boolean;

/**
 * This function allows you to check if certain world sound effects have not been disabled by setWorldSoundEnabled.
 * @param group An integer representing the world sound group.
 * @param [index=-1] An integer representing an individual sound within the group.
 * @returns Returns true if the world sounds are enabled, false if they are disabled or invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/IsWorldSoundEnabled
 **/
declare function isWorldSoundEnabled(group: number, index?: number): boolean;

/**
 * Checks if a special world property (cheat) is enabled or not.
 * @param propname the name of the property to retrieve.Possible values are listed on SetWorldSpecialPropertyEnabled.
 * @returns Returns true if the property is enabled, false if it is disabled or the specified property name is invalid.
 * @see https://wiki.mtasa.com/wiki/IsWorldSpecialPropertyEnabled
 **/
declare function isWorldSpecialPropertyEnabled(propname: string): boolean;

/**
 * This function casts a ray between two points in the world, and tells you information about the point that was hit, if any.
 * The two positions must be within the local player's draw distance as the collision data is not loaded outside this area, and the call will just fail as if the ray didn't hit.
 * This function is relatively expensive to call, so over use of this in scripts may have a detrimental effect on performance.
 * This function is useful for checking for collisions and for editor-style scripts.
 * If you wish to find what element is positioned at a particular point on the screen, use this function combined with getWorldFromScreenPosition.
 * If you wish to just know if something is hit, and don't care about what or where was hit, use isLineOfSightClear.
 * @param startX The start x position.
 * @param startY The start y position.
 * @param startZ The start z position.
 * @param endX The end x position.
 * @param endY The end y position.
 * @param endZ The end z position.
 * @param [checkBuildings=true] Allow the line of sight to be blocked by GTA's internally placed buildings, i.e. the world map.
 * @param [checkVehicles=true] Allow the line of sight to be blocked by vehicles.
 * @param [checkPlayers=true] Allow the line of sight to be blocked by players.
 * @param [checkObjects=true] Allow the line of sight to be blocked by objects.
 * @param [checkDummies=true] Allow the line of sight to be blocked by GTA's internal dummies. These are not used in the current MTA version so this argument can be set to false.
 * @param [seeThroughStuff=false] Allow the line of sight to be blocked by translucent game objects, e.g. glass.
 * @param [ignoreSomeObjectsForCamera=false] Allow the line of sight to pass through objects that have (K) property enabled in "object.dat" data file. (i.e. Most dynamic objects like boxes or barrels).
 * @param [shootThroughStuff=false] Allow the line of sight to be blocked by things that can be shot through.
 * @param [ignoredElement=undefined] Allow the line of sight to pass through a certain specified element. This is usually set to the object you are tracing from so it does not interfere with the results.
 * @param [includeWorldModelInformation=false] Include the results of hitting a world model.
 * @param bIncludeCarTyres Includes car tyre hits.
 * @returns Return values labelled for ease of reference.
 * @see https://wiki.mtasa.com/wiki/ProcessLineOfSight
 * @tupleReturn
 **/
declare function processLineOfSight(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, checkBuildings?: boolean, checkVehicles?: boolean, checkPlayers?: boolean, checkObjects?: boolean, checkDummies?: boolean, seeThroughStuff?: boolean, ignoreSomeObjectsForCamera?: boolean, shootThroughStuff?: boolean, ignoredElement?: Element, includeWorldModelInformation?: boolean, bIncludeCarTyres?: boolean): [boolean] | [boolean, number, number, number, Element, number, number, number, number, number, number, number, number, number, number, number, number, number, number];

/**
 * This function is used to remove a world object.
 * @param modelID A whole number specifying the GTASA object model ID.
 * @param radius A floating point number representing the radius that will be eliminated.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param [interior=0] The interior ID to apply the removal to (some objects in interior 13 show in all interiors so if you want to remove everything in interior 0 also remove everything in interior 13).
 * @returns Returns true if the object was removed, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/RemoveWorldModel
 **/
declare function removeWorldModel(modelID: number, radius: number, x: number, y: number, z: number, interior?: number): boolean;

/**
 * This function is used to reset the background sounds to the default setting.
 * @returns Returns true if the ambient sounds were reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetAmbientSounds
 **/
declare function resetAmbientSounds(): boolean;

/**
 * This function resets the far clip distance to its default state.
 * - Note: The function will not reset far clip distance client-side, unless it is relying on a value set by the server.
 * - Note: The function will reset the far clip distance to false server-side, as there is no default value to begin with.
 * @returns Returns true if operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetFarClipDistance
 **/
declare function resetFarClipDistance(): boolean;

/**
 * This function resets the fog render distance to its default state.
 * - Note: The function will reset the fog render distance to false server-side, as there is no default value to begin with.
 * @returns Returns true if operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetFogDistance
 **/
declare function resetFogDistance(): boolean;

/**
 * This function restores the default heat haze.
 * @returns Returns true if the heat haze was reset correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetHeatHaze
 **/
declare function resetHeatHaze(): boolean;

/**
 * This function is used to reset the size of the moon to its normal size.
 * @returns Returns true if the size of the moon was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetMoonSize
 **/
declare function resetMoonSize(): boolean;

/**
 * This function resets the rain level of the current weather to its default.
 * @returns Returns true if the rain level was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetRainLevel
 **/
declare function resetRainLevel(): boolean;

/**
 * This function allows restoring of a changed sky gradient as a result of setSkyGradient.
 * @returns Returns true if sky color was reset correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetSkyGradient
 **/
declare function resetSkyGradient(): boolean;

/**
 * This function is used to reset the color of the sun to its normal color.
 * @returns Returns true if the color of the sun was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetSunColor
 **/
declare function resetSunColor(): boolean;

/**
 * This function is used to reset the size of the sun to its normal size.
 * @returns Returns true if the size of the sun was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetSunSize
 **/
declare function resetSunSize(): boolean;

/**
 * Resets the distance of vehicles LOD to default.
 * Default values depends on client setting.
 * If client has enabled high detail vehicles in video options, value will be reset to (500, 500) - otherwise to (70, 150).
 * You can check value of this option using dxGetStatus (SettingHighDetailVehicles).
 * @returns Returns true if the vehicles LOD distance was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetVehiclesLODDistance
 **/
declare function resetVehiclesLODDistance(): boolean;

/**
 * This function is used to reset the world sounds to the default setting.
 * @returns Returns true if the world sounds were reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetWorldSounds
 **/
declare function resetWorldSounds(): boolean;

/**
 * This function resets the wind velocity in San Andreas to its default state.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetWindVelocity
 **/
declare function resetWindVelocity(): boolean;

/**
 * This function allows restoring of all world objects,which were removed with RemoveWorldModel.
 * @returns Returns true if the world objects were restored, false otherwise.
 * @see https://wiki.mtasa.com/wiki/RestoreAllWorldModels
 **/
declare function restoreAllWorldModels(): boolean;

/**
 * This function allows restoring of world object,which was removed with RemoveWorldModel.
 * @param modelID A whole number specifying the GTASA object model ID.
 * @param radius A fnumber representing the radius that will be eliminated.
 * @param x A number representing the X coordinate on the map.
 * @param y A number representing the Y coordinate on the map.
 * @param z A number representing the Z coordinate on the map.
 * @param [interior=1] Interior.
 * @returns Returns true if the world object was restored, false otherwise.
 * @see https://wiki.mtasa.com/wiki/RestoreWorldModel
 **/
declare function restoreWorldModel(modelID: number, radius: number, x: number, y: number, z: number, interior?: number): boolean;

/**
 * This function changes the maximum flying height of aircraft.
 * @param height The height you want aircraft to be able to go.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetAircraftMaxHeight
 **/
declare function setAircraftMaxHeight(height: number): boolean;

/**
 * This function sets the maximum velocity at which aircrafts could fly.
 * Using this function server-side will overwrite the value that was previously set client-side.
 * @param velocity The max velocity, can be 0 or any positive value. Default is 1.5.
 * @returns Returns true if the max velocity was set correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetAircraftMaxVelocity
 **/
declare function setAircraftMaxVelocity(velocity: number): boolean;

/**
 * This function allows you to disable some background sound effects.
 * @param theType The type of ambient sound to toggle. Can be either "gunfire" or "general".
 * @param enable Set false to turn off, true to turn on
 * @returns Returns true if the ambient sound was set correctly, false if invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/SetAmbientSoundEnabled
 **/
declare function setAmbientSoundEnabled(theType: "gunfire" | "general", enable: boolean): boolean;

/**
 * This function allows you to disable the flying birds.
 * @param enable A boolean value determining if birds should be shown. Use true to show the birds and false to hide them.
 * @returns Returns true if the birds state was changed succesfully, false if an invalid argument was specified.
 * @see https://wiki.mtasa.com/wiki/SetBirdsEnabled
 **/
declare function setBirdsEnabled(enable: boolean): boolean;

/**
 * This function will enable or disable clouds.
 * This is useful for race maps which are placed high up as clouds can cause low FPS.
 * @param enabled A boolean value determining if clouds should be shown.Use true to show clouds and false to hide them.
 * @returns Returns true if the cloud state was changed succesfully, false if an invalid argument was specified.
 * @see https://wiki.mtasa.com/wiki/SetCloudsEnabled
 **/
declare function setCloudsEnabled(enabled: boolean): boolean;

/**
 * This function is used to set the distance of render.
 * Areas beyond the specified distance will not be rendered.
 * @param distance A number specifying the distance of render. Setting this less than 5 will cause problems to the client.
 * @returns Returns true if the distance was set correctly, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetFarClipDistance
 **/
declare function setFarClipDistance(distance: number): boolean;

/**
 * This function changes the distance at which fog appears.
 * Keep in mind that this function doesn't change the distance of render.
 * @returns Returns true if the distance changed successfully, false if bad arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetFogDistance
 **/
declare function setFogDistance(distance: number): boolean;

/**
 * This function sets the game speed to the given value.
 * @param value The number value of the game speed (range 0 - 10).
 * @returns Returns true if the gamespeed was set successfully, false otherwise. The normal game speed is '1'.
 * @see https://wiki.mtasa.com/wiki/SetGameSpeed
 **/
declare function setGameSpeed(value: number): boolean;

/**
 * This function opens or closes the specified garage door in the world.
 * - Note: setGarageOpen does not work with ID 32 (Pay 'n' Spray near Royal Casino). This garage doesn't work in SP too. You can remove this gate by removeWorldModel and recreate them for later using with moveObject.
 * @param garageID The garage ID that represents the garage door being opened or closed.
 * @param isOpen A boolean indicating whether or not to open the door.
 * @returns Returns true if successful, false if an invalid garage id was given.
 * @see https://wiki.mtasa.com/wiki/SetGarageOpen
 **/
declare function setGarageOpen(garageID: number, isOpen: boolean): boolean;

/**
 * This function sets the server's gravity level.
 * - Note: This does not effect peds/players; to set ped/player gravity use setPedGravity.
 * - Note: Setting the gravity level to different values on clients can cause animation bugs (players floating across ground because players see different fall animation).
 * @param level The level of gravity (default is 0.008).
 * @returns Returns true if gravity was changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetGravity
 **/
declare function setGravity(level: number): boolean;

/**
 * This function changes the heat haze effect.
 * @param intensity The intensity of the effect, from 0 to 255.
 * @param [randomShift=0] Sets a random jitter, from 0 to 255.
 * @param [speedMin=12] The slowest effect speed, from 0 to 1000.
 * @param [speedMax=18] The fastest effect speed, from 0 to 1000.
 * @param [scanSizeX=75] The X size in pixels of the chunk grabbed from the screen, from -1000 to 1000.
 * @param [scanSizeY=80] The Y size in pixels of the chunk grabbed from the screen, from -1000 to 1000.
 * @param [renderSizeX=80] The X size in pixels the chunk will be when rendered back to the screen, from 0 to 1000.
 * @param [renderSizeY=85] The Y size in pixels the chunk will be when rendered back to the screen, from 0 to 1000.
 * @param [bShowInside=false] Set to true to enable the heat haze effect when inside a building.
 * @returns Returns true if the heat haze effect was set correctly, false if invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/SetHeatHaze
 **/
declare function setHeatHaze(intensity: number, randomShift?: number, speedMin?: number, speedMax?: number, scanSizeX?: number, scanSizeY?: number, renderSizeX?: number, renderSizeY?: number, bShowInside?: boolean): boolean;

/**
 * This function disables or enables the ambient sounds played by GTA in most interiors, like restaurants, casinos, clubs, houses, etc.
 * @param enabled set to true to enable the interior ambient sounds, false to disable them. By default they're enabled.
 * @returns If a boolean was passed to the function, it always succeeds and returns true.
 * @see https://wiki.mtasa.com/wiki/SetInteriorSoundsEnabled
 **/
declare function setInteriorSoundsEnabled(enabled: boolean): boolean;

/**
 * This function changes the maximum flying height of jetpack.
 * @param height The max height starting at approximately -20.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetJetpackMaxHeight
 **/
declare function setJetpackMaxHeight(height: number): boolean;

/**
 * Sets the real-world duration of an ingame minute.
 * The GTA default is 1000.
 * @param milliseconds the new duration of an ingame minute, accepted values 0 - 4294967296.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetMinuteDuration
 **/
declare function setMinuteDuration(milliseconds: number): boolean;

/**
 * This function sets the moon size.
 * Using this function server-side will overwrite the value that was previously set client-side.
 * @param size The size, can be 0 or any positive value. Default is 3.
 * @returns Returns true if the moon size was set correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetMoonSize
 **/
declare function setMoonSize(size: number): boolean;

/**
 * This function sets the distance from the camera at which the world starts rendering.
 * Do not use this function unless you have a specific reason to do so, as any values can cause artifacts and flickering problems.
 * It can be used in many ways, including: reducing Z-fighting, creating more sophisticated first person views, allowing the camera to fly closer to the ground without passing through it, etcetera.
 * - Note: setNearClipDistance should only be used when the camera orientation is controlled by setCameraMatrix, because GTA automatically adjusts this value for the optimum setting when the camera is attached to a player. Therefore ensure resetNearClipDistance is called when returning camera control back to GTA.
 * @param distance the new near clip distance. It must be between 0.1 and 20 for the function to do any effect. Default value is 0.3.
 * @returns This function returns true if the argument is valid. Returns false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetNearClipDistance
 **/
declare function setNearClipDistance(distance: number): boolean;

/**
 * Sets the motion blur level on the clients screen.
 * Accepts a value between 0 and 255.
 * @param level The level to set the blur to (default: 36).
 * @returns Return true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPlayerBlurLevel
 **/
declare function setPlayerBlurLevel(level: number): boolean;

/**
 * This function is used to enable or disable occlusions.
 * Occlusions are used by GTA to enhance performance by hiding objects that are (normally) obscured by certain large buildings.
 * However when removeWorldModel is used they may also have the undesired effect of making parts of the map disappear.
 * Disabling occlusions will fix that.
 * @param enabled A bool specifying if GTA occlusions should be enabled.
 * @returns Returns true if the setting was set correctly, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetOcclusionsEnabled
 **/
declare function setOcclusionsEnabled(enabled: boolean): boolean;

/**
 * This function sets the rain level to any weather available in GTA.
 * Use resetRainLevel to undo the changes.
 * @param level A floating point number representing the rain level. 1 represents the maximum rain level usually available in GTA, but higher values are accepted.
 * @returns Returns true if the rain level was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetRainLevel
 **/
declare function setRainLevel(level: number): boolean;

/**
 * This function changes the sky color to a two-color gradient.
 * @param [topRed=0] The red value of the upper part of the sky, from 0 to 255.
 * @param [topGreen=0] The green value of the upper part of the sky, from 0 to 255.
 * @param [topBlue=0] The blue value of the upper part of the sky, from 0 to 255.
 * @param [bottomRed=0] The red value of the lower part of the sky, from 0 to 255.
 * @param [bottomGreen=0] The green value of the lower part of the sky, from 0 to 255.
 * @param [bottomBlue=0] The blue value of the lower part of the sky, from 0 to 255.
 * @returns Returns true if sky color was set correctly, false if invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/SetSkyGradient
 **/
declare function setSkyGradient(topRed?: number, topGreen?: number, topBlue?: number, bottomRed?: number, bottomGreen?: number, bottomBlue?: number): boolean;

/**
 * This function is used to set the color of the sun.
 * @param aRed The amount of red (0-255) you want the sun to be.
 * @param aGreen The amount of green (0-255) you want the sun to be.
 * @param aBlue The amount of blue (0-255) you want the sun to be.
 * @param bRed The amount of red (0-255) you want the sun to be.
 * @param bGreen The amount of green (0-255) you want the sun to be.
 * @param bBlue The amount of blue (0-255) you want the sun to be.
 * @returns Returns true if the color of the sun was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetSunColor
 **/
declare function setSunColor(aRed: number, aGreen: number, aBlue: number, bRed: number, bGreen: number, bBlue: number): boolean;

/**
 * This function is used to set the size of the sun.
 * @param size The size you want the sun to be in the sky.
 * @returns Returns true if the size of the sun was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetSunSize
 **/
declare function setSunSize(size: number): boolean;

/**
 * This function sets the current GTA time to the given time.
 * @param hour The hour of the new time (range 0-23).
 * @param minute The minute of the new time (range 0-59).
 * @returns Returns true if the new time was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTime
 **/
declare function setTime(hour: number, minute: number): boolean;

/**
 * Sets the current traffic light state.
 * This state controls the traffic light colors.
 * For instance, state 1 will cause the north and south traffic lights to be amber, and the ones left and east will turn red.
 * @param colorNS Valid colors are: "green", "yellow", "red".
 * @param colorEW Valid colors are: "green", "yellow", "red".
 * @returns Returns true if the state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrafficLightState
 **/
declare function setTrafficLightState(colorNS: "green" | "yellow" | "red", colorEW: "green" | "yellow" | "red"): boolean;

/**
 * Sets the current traffic light state.
 * This state controls the traffic light colors.
 * For instance, state 1 will cause the north and south traffic lights to be amber, and the ones left and east will turn red.
 * @param state If an number is provided, the state you wish to use (possible values: 0-9).
 * @returns Returns true if the state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrafficLightState
 **/
declare function setTrafficLightState(state: number): boolean;

/**
 * Sets the current traffic light state.
 * This state controls the traffic light colors.
 * For instance, state 1 will cause the north and south traffic lights to be amber, and the ones left and east will turn red.
 * @param state One of the following strings: "auto", "disabled".
 * @returns Returns true if the state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrafficLightState
 **/
declare function setTrafficLightState(state: "auto" | "disabled"): boolean;

/**
 * Toggles whether you want the traffic lights to be locked.
 * If the lights are locked, it means they won't change unless you do setTrafficLightState.
 * @param toggle A bool indicating whether you want the traffic lights to change automatically, or not.
 * @returns Returns true if the successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrafficLightsLocked
 **/
declare function setTrafficLightsLocked(toggle: boolean): boolean;

/**
 * This function sets the current weather to the given valid value.
 * To change the weather gradually, see setWeatherBlended.
 * @param weatherID The ID of new weather. Valid values are 0 to 255 inclusive.
 * @returns Returns true if the weather was set succesfully, false if an invalid weatherID was specified.
 * @see https://wiki.mtasa.com/wiki/SetWeather
 **/
declare function setWeather(weatherID: number): boolean;

/**
 * This function will change the current weather to another in a smooth manner, over the period of 1-2 in-game hours (unlike setWeather, which sets a new weather instantly).
 * To ensure this transition performs as expected, you should not call this function until getWeather indicates that no transition is already being done.
 * @param weatherID The ID of the weather state you wish to set.Valid values are 0 to 255 inclusive.
 * @returns Returns true if successful, false if an invalid weatherID is passed.
 * @see https://wiki.mtasa.com/wiki/SetWeatherBlended
 **/
declare function setWeatherBlended(weatherID: number): boolean;

/**
 * This function changes the wind velocity.
 * The wind shakes the vegetation and makes particles fly in a direction.
 * The intensity and direction of the effect deppends of the wind velocity in each axis.
 * @param velocityX The velocity of the wind along the x axis.
 * @param velocityY The velocity of the wind along the y axis.
 * @param velocityZ The velocity of the wind along the z axis.
 * @returns Returns true if successful, false if bad arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetWindVelocity
 **/
declare function setWindVelocity(velocityX: number, velocityY: number, velocityZ: number): boolean;

/**
 * This function allows you to disable world sounds.
 * A world sound is a sound effect which has not been caused by playSound or playSound3D.
 * - Note: The values for group and index can be determined by using the client command showsound in conjunction with setDevelopmentMode. This function does not affect sounds which are already playing, such as the wind sound that can only be stopped by entering an interior.
 * @param group An integer representing the world sound group.
 * @param [index=-1] An integer representing an individual sound within the group.
 * @param enable Set to false to disable, true to enable.
 * @param [immediate=false] A boolean if set to true will cancel the sound if it's already playing.This parameter only works for stopping the sound.
 * @returns Returns true if the world sound was correctly enabled/disabled, false if invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/SetWorldSoundEnabled
 **/
declare function setWorldSoundEnabled(group: number, index: number, enable: boolean, immediate?: boolean): boolean;

/**
 * This function allows you to disable world sounds.
 * A world sound is a sound effect which has not been caused by playSound or playSound3D.
 * - Note: The values for group and index can be determined by using the client command showsound in conjunction with setDevelopmentMode. This function does not affect sounds which are already playing, such as the wind sound that can only be stopped by entering an interior.
 * @param group An integer representing the world sound group.
 * @param enable Set to false to disable, true to enable.
 * @param [immediate=false] A boolean if set to true will cancel the sound if it's already playing.This parameter only works for stopping the sound.
 * @returns Returns true if the world sound was correctly enabled/disabled, false if invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/SetWorldSoundEnabled
 **/
declare function setWorldSoundEnabled(group: number, enable: boolean, immediate?: boolean): boolean;

/**
 * Enables or disables a special world property.
 * @param propname the name of the property to set.
 * @param enable whether or not to enable the property.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWorldSpecialPropertyEnabled
 **/
declare function setWorldSpecialPropertyEnabled(propname: string, enable: boolean): boolean;

/**
 * This function checks to see if a line between two points collides with the water.
 * This is similar to processLineOfSight, but only collides with water.
 * Waves are taken into account when testing the line.
 * @param startX the position of the starting point of the line.
 * @param startY the position of the starting point of the line.
 * @param startZ the position of the starting point of the line.
 * @param endX the position of the end point of the line.
 * @param endY the position of the end point of the line.
 * @param endZ the position of the end point of the line.
 * @returns Returns true and the position of the intersection point of the line and the water surface if there is a collision, or false if there is no collision.
 * @see https://wiki.mtasa.com/wiki/TestLineAgainstWater
 * @tupleReturn
 **/
declare function testLineAgainstWater(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): [true, number, number, number] | [false];
