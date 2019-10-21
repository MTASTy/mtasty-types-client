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
 * @returns Returns the effect element if creation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CreateEffect
 **/
declare function createEffect(name: string, x: number, y: number, z: number, rX?: number, rY?: number, rZ?: number, drawDistance?: number, soundEnable?: boolean): Effect | false;

/**
 * Creates a blood splatter particle effect.
 * @param posX the world coordinates where the effect originates.
 * @param posY the world coordinates where the effect originates.
 * @param posZ the world coordinates where the effect originates.
 * @param dirX a direction vector indicating where the blood flies to.
 * @param dirY a direction vector indicating where the blood flies to.
 * @param dirZ a direction vector indicating where the blood flies to.
 * @param [count=1] the number of flying droplets to create.
 * @param [brightness=1] the brightness. Ranges from 0 (almost black) to 1 (normal color).
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddBlood
 **/
declare function fxAddBlood(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, count?: number, brightness?: number): boolean;

/**
 * Creates a bullet impact particle effect, consisting of a small smoke cloud and a number of sparks.
 * @param posX the world coordinates where the effect originates.
 * @param posY the world coordinates where the effect originates.
 * @param posZ the world coordinates where the effect originates.
 * @param dirX a vector indicating the direction of the effect.
 * @param dirY a vector indicating the direction of the effect.
 * @param dirZ a vector indicating the direction of the effect.
 * @param [smokeSize=1] the size of the smoke cloud.
 * @param [sparkCount=1] the number of sparks to create.
 * @param [smokeIntensity=1] the amount/transparency of smoke, ranges from 0 to 1.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddBulletImpact
 **/
declare function fxAddBulletImpact(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, smokeSize?: number, sparkCount?: number, smokeIntensity?: number): boolean;

/**
 * This function creates a bullet splash particle effect, normally created when shooting into water.
 * @param posX A number representing the x position of the splash.
 * @param posY A number representing the y position of the splash.
 * @param posZ A number representing the z position of the splash.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddBulletSplash
 **/
declare function fxAddBulletSplash(posX: number, posY: number, posZ: number): boolean;

/**
 * Creates a debris particle effect (e.g. bits that fly off a car when ramming a wall).
 * @param posX the world coordinates where the debris originates.
 * @param posY the world coordinates where the debris originates.
 * @param posZ the world coordinates where the debris originates.
 * @param [colorR=255] the color and alpha (transparency) of the debris effect.
 * @param [colorG=0] the color and alpha (transparency) of the debris effect.
 * @param [colorB=0] the color and alpha (transparency) of the debris effect.
 * @param [colorA=255] the color and alpha (transparency) of the debris effect.
 * @param [scale=1] the size of the chunks.
 * @param [count=1] the number of chunks to create.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddDebris
 **/
declare function fxAddDebris(posX: number, posY: number, posZ: number, colorR?: number, colorG?: number, colorB?: number, colorA?: number, scale?: number, count?: number): boolean;

/**
 * This function creates a foot splash particle effect, normally created when walking into water.
 * @param posX A number representing the x position of the splash.
 * @param posY A number representing the y position of the splash.
 * @param posZ A number representing the z position of the splash.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddFootSplash
 **/
declare function fxAddFootSplash(posX: number, posY: number, posZ: number): boolean;

/**
 * This function creates a glass particle effect.
 * @param posX A number representing the x position of the glass.
 * @param posY A number representing the y position of the glass.
 * @param posZ A number representing the z position of the glass.
 * @param [colorR=255] the color and alpha (transparency) of the glass effect.
 * @param [colorG=0] the color and alpha (transparency) of the glass effect.
 * @param [colorB=0] the color and alpha (transparency) of the glass effect.
 * @param [colorA=255] the color and alpha (transparency) of the glass effect.
 * @param [scale=1] A number representing the size of the particle effect, where 1 is the standard size.
 * @param [count=1] The density of the particle effect.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddGlass
 **/
declare function fxAddGlass(posX: number, posY: number, posZ: number, colorR?: number, colorG?: number, colorB?: number, colorA?: number, scale?: number, count?: number): boolean;

/**
 * This function creates a gunshot particle effect.
 * @param posX the world coordinates where the effect originates.
 * @param posY the world coordinates where the effect originates.
 * @param posZ the world coordinates where the effect originates.
 * @param dirX a direction vector indicating where the bullet is fired.
 * @param dirY a direction vector indicating where the bullet is fired.
 * @param dirZ a direction vector indicating where the bullet is fired.
 * @param [includeSparks=true] A bool representing whether the particle effect will generate sparks.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddGunshot
 **/
declare function fxAddGunshot(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, includeSparks?: boolean): boolean;

/**
 * Creates a punch impact particle effect (a small dust cloud).
 * @param posX the world coordinates where the effect originates.
 * @param posY the world coordinates where the effect originates.
 * @param posZ the world coordinates where the effect originates.
 * @param dirX a vector indicating the movement direction of the effect.
 * @param dirY a vector indicating the movement direction of the effect.
 * @param dirZ a vector indicating the movement direction of the effect.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddPunchImpact
 **/
declare function fxAddPunchImpact(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number): boolean;

/**
 * Creates a number of sparks originating from a point or along a line.
 * @param posX the world coordinates where the sparks originate.
 * @param posY the world coordinates where the sparks originate.
 * @param posZ the world coordinates where the sparks originate.
 * @param dirX a direction vector indicating where the sparks fly to. The longer this vector is, the faster the sparks fly.
 * @param dirY a direction vector indicating where the sparks fly to. The longer this vector is, the faster the sparks fly.
 * @param dirZ a direction vector indicating where the sparks fly to. The longer this vector is, the faster the sparks fly.
 * @param [force=1] speed factor.
 * @param [count=1] the number of effects to create.
 * @param [acrossLineX=0] a vector starting at the pos coordinates. If specified, the sparks will be created along a line going from pos to pos - acrossLine. If not specified, all sparks originate from the point at pos.
 * @param [acrossLineY=0] a vector starting at the pos coordinates. If specified, the sparks will be created along a line going from pos to pos - acrossLine. If not specified, all sparks originate from the point at pos.
 * @param [acrossLineZ=0] a vector starting at the pos coordinates. If specified, the sparks will be created along a line going from pos to pos - acrossLine. If not specified, all sparks originate from the point at pos.
 * @param [blur=false] if false, creates standard bullet impact-like sparks. If true, adds motion blur to the sparks.
 * @param [spread=1] determines how strongly the particles deviate from each other. With low values the particles will stay quite close together, high values will make them fly in all directions. Also affects their speed.
 * @param [life=1] the higher this value, the longer the sparks survive before they disappear.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddSparks
 **/
declare function fxAddSparks(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, force?: number, count?: number, acrossLineX?: number, acrossLineY?: number, acrossLineZ?: number, blur?: boolean, spread?: number, life?: number): boolean;

/**
 * This function creates a tank firing particle effect.
 * @param posX the world coordinates where the effect originates.
 * @param posY the world coordinates where the effect originates.
 * @param posZ the world coordinates where the effect originates.
 * @param dirX a direction vector indicating where the tank fire is directed to.
 * @param dirY a direction vector indicating where the tank fire is directed to.
 * @param dirZ a direction vector indicating where the tank fire is directed to.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddTankFire
 **/
declare function fxAddTankFire(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number): boolean;

/**
 * Creates a tyre burst particle effect (a small white smoke puff).
 * @param posX the world coordinates where the puff originates.
 * @param posY the world coordinates where the puff originates.
 * @param posZ the world coordinates where the puff originates.
 * @param dirX a vector indicating the movement direction of the effect.
 * @param dirY a vector indicating the movement direction of the effect.
 * @param dirZ a vector indicating the movement direction of the effect.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddTyreBurst
 **/
declare function fxAddTyreBurst(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number): boolean;

/**
 * This function creates a water hydrant particle effect.
 * @param posX A number representing the x position of the hydrant.
 * @param posY A number representing the y position of the hydrant.
 * @param posZ A number representing the z position of the hydrant.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddWaterHydrant
 **/
declare function fxAddWaterHydrant(posX: number, posY: number, posZ: number): boolean;

/**
 * This function creates a water splash particle effect.
 * @param posX A number representing the x position of the splash.
 * @param posY A number representing the y position of the splash.
 * @param posZ A number representing the z position of the splash.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddWaterSplash
 **/
declare function fxAddWaterSplash(posX: number, posY: number, posZ: number): boolean;

/**
 * Creates a wood splinter particle effect.
 * @param posX the world coordinates where the effect originates.
 * @param posY the world coordinates where the effect originates.
 * @param posZ the world coordinates where the effect originates.
 * @param dirX a direction vector indicating where the wood splinters fly to.
 * @param dirY a direction vector indicating where the wood splinters fly to.
 * @param dirZ a direction vector indicating where the wood splinters fly to.
 * @param [count=1] the number of splinters to create.
 * @param [brightness=1] the brightness. Ranges from 0 (black) to 1 (normal color).
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddWood
 **/
declare function fxAddWood(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, count?: number, brightness?: number): boolean;

/**
 * This function gets the density of certain effect.
 * @param theEffect The effect to get density of.
 * @returns Return number of density, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/GetEffectDensity
 **/
declare function getEffectDensity(theEffect: Effect): number | false;

/**
 * This function gets the speed of a specified effect.
 * @param theEffect The effect to get the speed of.
 * @returns Returns number containing the effect's speed, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/GetEffectSpeed
 **/
declare function getEffectSpeed(theEffect: Effect): number | false;

/**
 * This function sets the density of a specified effect.
 * - Warning: Upper density limit of this function depends on client FX Quality setting.
 * The limit is 1 for Low, 1.5 for Medium, and 2 for High/Very high.
 * @param theEffect The effect to change the speed of.
 * @param density The level of density (from 0 to 2).
 * @returns Returns true if the density was succesfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetEffectDensity
 **/
declare function setEffectDensity(theEffect: Effect, density: number): boolean;

/**
 * This function sets the speed of a specified effect.
 * @param theEffect The effect to change the speed of.
 * @param speed The speed to set.
 * @returns Returns true if the effect speed was succesfuly changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetEffectSpeed
 **/
declare function setEffectSpeed(theEffect: Effect, speed: number): boolean;
