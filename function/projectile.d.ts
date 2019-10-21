/**
 * This function creates a projectile of the specified type on the specified coordinates.
 * - Note: Model argument is not synchronized between clients. Clients differs from local player see always standard projectile model. Target argument can only be defined as a player or another projectile.
 * @param creator The element representing creator of the projectile. In case you want the projectile to be synced for everybody creator must be the local player or his vehicle.
 * @param weaponType int representing the projectile weaponType (characteristics). Valid IDs are
 * @param posX float starting coordinates for the projectile. They are coordinates of creator by default.
 * @param posY float starting coordinates for the projectile. They are coordinates of creator by default.
 * @param posZ float starting coordinates for the projectile. They are coordinates of creator by default.
 * @param [force=1] float representing the starting force for throwable projectiles.
 * @param [target=undefined] element target used for heat seeking rockets.
 * @param rotX float starting rotation for the projectile.
 * @param rotY float starting rotation for the projectile.
 * @param rotZ float starting rotation for the projectile.
 * @param velX float starting velocity for the projectile.
 * @param velY float starting velocity for the projectile.
 * @param velZ float starting velocity for the projectile.
 * @param model Integer representing the projectile's model, uses default model for weaponType if not specified.
 * @returns Returns a projectile element if projectile creation was successful. Returns false if unable to create a projectile (wrong weapon ID or projectiles limit was reached).
 * @see https://wiki.mtasa.com/wiki/CreateProjectile
 **/
declare function createProjectile(creator: Element, weaponType: number, posX?: number, posY?: number, posZ?: number, force?: number, target?: Element, rotX?: number, rotY?: number, rotZ?: number, velX?: number, velY?: number, velZ?: number, model?: number): Projectile | false;

/**
 * This function can be used to detonate a players satchels.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DetonateSatchels
 **/
declare function detonateSatchels(): boolean;

/**
 * Get the time left before a projectile detonates.
 * @param projectile the projectile to get the timer of.
 * @returns Returns the the time in milliseconds to detonation which depending on the projectile type will do different things.
 * @see https://wiki.mtasa.com/wiki/GetProjectileCounter
 **/
declare function getProjectileCounter(projectile: Projectile): number | false;

/**
 * This function returns the creator of the specified projectile.
 * @param theProjectile The projectile element which creator you want to retrieve.
 * @returns Returns the element which created the projectile if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetProjectileCreator
 **/
declare function getProjectileCreator(theProjectile: Projectile): Element | false;

/**
 * This function returns the force of the specified projectile.
 * @param theProjectile The projectile element which force you want to retrieve.
 * @returns Returns a float if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetProjectileForce
 **/
declare function getProjectileForce(theProjectile: Projectile): number | false;

/**
 * This function returns the target of the specified projectile.
 * @param theProjectile The projectile element which target you want to retrieve.
 * @returns Returns the element which is the projectile's target if the projectile is valid and can have a target (like a heat-seeking rocket), false otherwise. If the projectile is a satchel charge, returns the element at which it is glued to (or undefined if it isn't glued to any).
 * @see https://wiki.mtasa.com/wiki/GetProjectileTarget
 **/
declare function getProjectileTarget(theProjectile: Projectile): Element | false | undefined;

/**
 * This function returns the type of the specified projectile.
 * @param theProjectile The projectile element which type you want to retrieve.
 * @returns Returns an integer over the type of the projectile or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetProjectileType
 **/
declare function getProjectileType(theProjectile: Projectile): number | false;

/**
 * Will change the projectile counter timer which depending on the projectile type will do different things.
 * @param projectile The projectile to edit the timer of.
 * @param timeToDetonate The time in milliseconds to detonation.
 * @returns Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetProjectileCounter
 **/
declare function setProjectileCounter(projectile: Projectile, timeToDetonate: number): boolean;
