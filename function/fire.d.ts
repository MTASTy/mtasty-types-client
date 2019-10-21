/**
 * Creates a patch of fire that will spread a bit and die out after a while.
 * Because it's a client side only function, other players won't see it, so custom events or custom objects will be needed to make a fire visible to some players.
 * @param x the coordinates when the initial patch of fire will be created.
 * @param y the coordinates when the initial patch of fire will be created.
 * @param z the coordinates when the initial patch of fire will be created.
 * @param [size=1.8] a number value indicating the size of the initial patch of fire.It will also make the fire to stay alive more or less time.
 * @returns Returns true if successful, false if bad arguments were passed or the limit of active fires was reached. There can be a maximum of 60 active fires.
 * @see https://wiki.mtasa.com/wiki/CreateFire
 **/
declare function createFire(x: number, y: number, z: number, size?: number): boolean;

/**
 * This function is used to extinguish all spreading fire, or spreading fire at specified coordinates.
 * @param x the coordinates at which any fire will be extinguished.
 * @param y the coordinates at which any fire will be extinguished.
 * @param z the coordinates at which any fire will be extinguished.
 * @param [radius=1] a number value indicating the radius in which to extinguish fire.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ExtinguishFire
 **/
declare function extinguishFire(x: number, y: number, z: number, radius?: number): boolean;
