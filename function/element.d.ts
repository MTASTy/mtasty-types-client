/** @noSelfInFile */

/**
 * This function attaches one element to another, so that the first one follows the second whenever it moves.
 * If an attempt is made to attach two elements that are already attached the opposite way (eg theElement becomes theAttachToElement and vice versa), the 1st attachment order is automatically detached in favor of the 2nd attachment order.
 * For example, if carA was attached to carB, now carB is attached to carA.
 * Also, an element cannot be attached to two separate elements at one time.
 * For example, two cars can be attached to one single car, but one single car cannot be attached to two separate cars.
 * If you attempt to do this, the existing attachment will automatically be dropped in favor of the new attachment.
 * For example, if carA is asked to attached to carB then carC, it is only attached to carC.
 * This is not compatible with all elements.
 * - Note: The offset coordinates reflect the object space, not the world space. This means that you cannot calculate the exact offsets between two objects by pre-positioning them in the map editor as a reference. Please see attachElementsOffsets for more details.
 * Due to a limitation in GTA, unexpected attach rotations may occur if all rotation offsets are non-zero. (i.e. Try to ensure at least one of 'xRotOffset', 'yRotOffset' or 'zRotOffset' is zero).
 * @param theElement The element to be attached.
 * @param theAttachToElement The element to attach the first to.
 * @param [xPosOffset=0] The x offset, if you want the elements to be a certain distance from one another (default 0).
 * @param [yPosOffset=0] The y offset (default 0).
 * @param [zPosOffset=0] The z offset (default 0).
 * @param [xRotOffset=0] The x rotation offset (default 0).
 * @param [yRotOffset=0] The y rotation offset (default 0).
 * @param [zRotOffset=0] The z rotation offset (default 0).
 * @returns Returns true if the attaching process was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AttachElements
 **/
declare function attachElements(theElement: BaseElement, theAttachToElement: BaseElement, xPosOffset?: number, yPosOffset?: number, zPosOffset?: number, xRotOffset?: number, yRotOffset?: number, zRotOffset?: number): boolean;

/**
 * This function is used to create a new dummy element in the element tree which do not necessarily represent an entity within the San Andreas world.
 * A common use for this function is for creating custom elements, such as a Flag or a Base.
 * Elements created using this function are placed in the element tree with their parent as the 'dynamic' map element.
 * @param elementType The type of element being created.
 * @param [elementID=undefined] The ID of the element being created.
 * @returns Returns the element if it was successfully created. Returns false if the arguments are wrong.
 * @see https://wiki.mtasa.com/wiki/CreateElement
 **/
declare function createElement(elementType: string, elementID?: string): BaseElement | false;

/**
 * This function destroys an element and all elements within it in the hierarchy (its children, the children of those children etc).
 * Player elements cannot be destroyed using this function.
 * A player can only be removed from the hierarchy when they quit or are kicked.
 * The root element also cannot be destroyed, however, passing the root as an argument will wipe all elements from the server, except for the players and clients, which will become direct descendants of the root node, and other elements that cannot be destroyed, such as resource root elements.
 * Players are not the only elements that cannot be deleted.
 * This list also includes remote clients and console elements.
 * - Note: As element ids are eventually recycled, always make sure you undefined variables containing the element after calling this function
 * @param elementToDestroy The element you wish to destroy.
 * @returns Returns true if the element was destroyed successfully, false if either the element passed to it was invalid or it could not be destroyed for some other reason (for example, clientside destroyElement can't destroy serverside elements).
 * @see https://wiki.mtasa.com/wiki/DestroyElement
 **/
declare function destroyElement(elementToDestroy: BaseElement): boolean;

/**
 * This function detaches attached elements from one another.
 * @param theElement The element to be detached (the "child")
 * @param [theAttachToElement] The element you wish to detach from, will detach from the attached element if this isn't specified.
 * @returns Returns true if the detaching was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DetachElements
 **/
declare function detachElements(theElement: BaseElement, theAttachToElement?: BaseElement): boolean;

/**
 * This function returns an array of all the elements attached to the specified element
 * @param theElement The element which you require the information from.
 * @returns Returns an array of all the elements attached to the specified element.
 * @see https://wiki.mtasa.com/wiki/GetAttachedElements
 **/
declare function getAttachedElements(theElement: BaseElement): BaseElement[] | false;

/**
 * This function returns the alpha (transparency) value for the specified element.
 * This can be a player, ped, object, vehicle or weapon.
 * @param theElement The element whose alpha you want to retrieve.
 * @returns Returns a number (0-255; 0 = transparent) indicating the element's alpha, or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetElementAlpha
 **/
declare function getElementAlpha(theElement: BaseElement): number | false;

/**
 * This function returns the offsets of an element that has been attached to another element using attachElements.
 * @param theElement The attached element.
 * @returns Returns 6 numbers, of which the first 3 indicate the position offset (x, y, z), and the last 3 indicate the rotation offset (x, y, z), if successful. false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetElementAttachedOffsets
 * @tupleReturn
 **/
declare function getElementAttachedOffsets(theElement: BaseElement): [number, number, number, number, number, number] | [false];

/**
 * This function determines the element that the specified element is attached to.
 * @param theElement The element you require the information for.
 * @returns Returns the element that the chosen element is attached to, or false if the element isn't attached to another element.
 * @see https://wiki.mtasa.com/wiki/GetElementAttachedTo
 **/
declare function getElementAttachedTo(theElement: BaseElement): BaseElement | false;

/**
 * This function returns the minimum and maximum coordinates of an element's bounding box. It should be noted that the values returned are relative to the position of the element, and as such if you wish to get world coordinates for drawing, etc., you should retrieve the position of the element and add the returned values onto that.
 * - Note: Note: The element must be streamed in for this function to work.
 * @param theElement: the element whose bounding box we want to get.
 * @returns Returns min x, min y, min z, max x, max y, max z if the passed element is valid and streamed in, false otherwise.
 * @tupleReturn
 * @see https://wiki.mtasa.com/wiki/GetElementBoundingBox
 **/
declare function getElementBoundingBox(theElement: BaseElement): [number, number, number, number, number, number] | [false];

/**
 * This function returns an element from the specified ID. If more than one element with the same ID exists, only the first one in the order it appears in the XML tree will be returned by this function.
 * - Note: The ID in this context is the value of the 'id' data item of the element (the attribute in the .map file), NOT the model ID, weapon ID or similiar.
 * @param id The ID of the element as it appears in the XML file or as set by setElementID.
 * @param [index=0] If there are two or more elements of the same ID it will return the element with the specified index starting at 0.
 * @returns Returns the element with the given ID, or false if no such element exists.
 * @see https://wiki.mtasa.com/wiki/GetElementByID
 **/
declare function getElementByID(id: string, index?: number): BaseElement | false;

/**
 * This function returns one of the child elements of a given parent element.
 * The child element is selected by its index (0 for the first child, 1 for the second and so on).
 * @param parent the element above the one to be returned in the hierarchy.
 * @param index the element's index (0 for the first element, 1 for the second, etc).
 * @returns Returns the requested element if it exists, or false if it doesn't.
 * @see https://wiki.mtasa.com/wiki/GetElementChild
 **/
declare function getElementChild(parent: BaseElement, index: number): BaseElement | false;

/**
 * This function is used to retrieve a list of the child elements of a given parent element.
 * - Note that it will only return direct children and not elements that are further down the element tree.
 * @param parent Supply this argument with the parent of the children you want returned.
 * @param [theType=undefined] The type of element you want a list of. This is the same as the tag name in the .map file, so this can be used with a custom element type if desired. Built in types are
 * @returns This function returns an array that contains a list of elements that the parent has. If the element has no children, it will return an empty araay. It will return false if the parent element does not exist.
 * @see https://wiki.mtasa.com/wiki/GetElementChildren
 **/
declare function getElementChildren(parent: BaseElement, theType?: string): BaseElement[] | false;

/**
 * This function returns the number of children an element has.
 * - Note that only the direct children are counted and not elements that are further down the element tree.
 * @param parent the parent element.
 * @returns Returns a number with the number of child elements, or false if the parent element does not exist.
 * @see https://wiki.mtasa.com/wiki/GetElementChildrenCount
 **/
declare function getElementChildrenCount(parent: BaseElement): number | false;

/**
 * Some elements have an associated colshape, for example Marker and Pickup.
 * This function is used to get the associated colshape.
 * @param theElement The element you want to get the colshape of.
 * @returns Returns colshape of the element, false if not or an invalid argument was passed to the function.
 * @see https://wiki.mtasa.com/wiki/GetElementColShape
 **/
declare function getElementColShape(theElement: BaseElement): ColShape | false;

/**
 * This function indicates if a specific element is set to have collisions disabled.
 * An element without collisions does not interact with the physical environment and remains static.
 * @param theElement The element for which you want to check whether collisions are enabled.
 * @returns Returns true if the collisions are enabled, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetElementCollisionsEnabled
 **/
declare function getElementCollisionsEnabled(theElement: BaseElement): boolean;

/**
 * This function retrieves element data attached to an element under a certain key.
 * @param theElement This is the element with data you want to retrieve.
 * @param key The name of the element data entry you want to retrieve (maximum 31 characters).
 * @param [inherit=true] - toggles whether or not the function should go up the hierarchy to find the requested key in case the specified element doesn't have it.
 * @returns This function returns a variable containing the requested element data, or false if the element or the element data does not exist. When getting data corresponding to a XML attribute, this is always a string.
 * @see https://wiki.mtasa.com/wiki/GetElementData
 **/
declare function getElementData(theElement: BaseElement, key: string, inherit?: boolean): any | false;

/**
 * This function allows you to retrieve the dimension of any element.
 * The dimension determines what/who the element is visible to.
 * @param theElement The element in which you'd like to retrieve the dimension of.
 * @returns Returns a number for the dimension if theElement is valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetElementDimension
 **/
declare function getElementDimension(theElement: BaseElement): number | false;

/**
 * This function is used to retrieve the distance between a element's centre of mass to the base of the model. This can be used to calculate the position the element has to be set to, to have it on ground level.
 * @param theElement The element you want to retrieve the value of.
 * @returns Returns a number of the distance, or false if the element is invalid.
 * @see https://wiki.mtasa.com/wiki/GetElementDistanceFromCentreOfMassToBaseOfModel
 **/
declare function getElementDistanceFromCentreOfMassToBaseOfModel(theElement: BaseElement): number | false;

/**
 * This function returns the current health for the specified element.
 * This can be a player, a ped, a vehicle, or an object.
 * @param theElement The player or vehicle whose health you want to check.
 * @returns Returns a number indicating the element's health, or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetElementHealth
 **/
declare function getElementHealth(theElement: BaseElement): number | false;

/**
 * This function gets the ID of an element.
 * This is the "id" attribute of the element and is a string, NOT a number like a model ID, weapons ID or similar.
 * @param theElement the element from which to retrieve the ID.
 * @returns This returns a string containing the element ID. It will return an empty string if it has no ID. It will return false if the element is invalid.
 * @see https://wiki.mtasa.com/wiki/GetElementID
 **/
declare function getElementID(theElement: BaseElement): string | false;

/**
 * This function allows you to retrieve the interior of any element.
 * An interior is the current loaded place, 0 being outside.
 * @param theElement The element of which you'd like to retrieve the interior
 * @returns Returns a number for the interior if theElement is valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetElementInterior
 **/
declare function getElementInterior(theElement: BaseElement): number | false;

/**
 * This function gets an element's transform matrix.
 * This contains 16 number values that multiplied to a point will give you the point transformed.
 * It is most useful for matrix calculations such as calculating offsets.
 * For further information, please refer to a tutorial of matrices in computer graphics programming.
 * - Note: The matrix returned by this function is not setup correctly for some calculations unless the legacy argument is set to false.
 * - Tip: For matrix manipulation which goes beyond the basic examples given on this page, see the Lua matrix library. If you are using MTA: SA 1.4 or higher, using the built-in matrix class is also recommended.
 * @param theElement The element which you wish to retrieve the matrix for.
 * @param [legacy=true] Set to false to return correctly setup matrix (i.e. Last column in the first 3 rows set to zero).
 * @returns Returns a multi-dimensional object (which can be transformed into a proper matrix class using Matrix.create method) containing a 4x4 matrix. Returns false if the element is not streamed in, and not a vehicle, ped or object.
 * @see https://wiki.mtasa.com/wiki/GetElementMatrix
 **/
declare function getElementMatrix(theElement: BaseElement, legacy?: boolean): {[key: number]: number} | false;

/**
 * Returns the model ID of a given element.
 * This can be a player/ped skin, a pickup model, an object model or a vehicle model.
 * @param theElement the element to retrieve the model ID of.
 * @returns Returns the model ID if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetElementModel
 **/
declare function getElementModel(theElement: BaseElement): number | false;

/**
 * This function is used to determine the parent of an element.
 * @param theElement The child of the parent element you want returned.
 * @returns This returns the parent as an element. It returns false if theElement is invalid, or is the root node.
 * @see https://wiki.mtasa.com/wiki/GetElementParent
 **/
declare function getElementParent(theElement: BaseElement): BaseElement | false;

/**
 * The getElementPosition function allows you to retrieve the position coordinates of an element.
 * This can be any real world element, including:
 * @param theElement The element which you'd like to retrieve the location of
 * @returns Returns three numbers indicating the position of the element, x, y and z respectively.
 * @see https://wiki.mtasa.com/wiki/GetElementPosition
 * @tupleReturn
 **/
declare function getElementPosition(theElement: BaseElement): [number, number, number] | [false, undefined, undefined];

/**
 * This function gets the radius of an element.
 * Normally, sphere or circle-shaped elements tend to return a more accurate and expected radius than others with another shapes.
 * @param theElement The element to get the radius of.
 * @returns Returns a number containing the radius if the element is valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetElementRadius
 **/
declare function getElementRadius(theElement: BaseElement): number | false;

/**
 * Retrieve the rotation of elements.
 * @param theElement The element whose rotation will be retrieved.
 * @param [rotOrder=default] A string representing the rotation order desired when returning the euler angles. If omitted, default value is "default".
 * @returns rx, ry, rz: 3 numbers representing the Euler rotation angles on the axis X, Y and Z (with the rotation order depending on the rotOrder argument) if element exists and is a valid element, false if it's invalid.
 * @see https://wiki.mtasa.com/wiki/GetElementRotation
 * @tupleReturn
 **/
declare function getElementRotation(theElement: BaseElement, rotOrder?: string): [number, number, number] | [false, undefined, undefined];

/**
 * This function is used to retrieve the type of an element.
 * @param theElement The element you wish to get the type of.
 * @returns Returns a string containing the element type, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetElementType
 **/
declare function getElementType(theElement: BaseElement): string | false;

/**
 * This function returns three numbers containing the velocity (movement speeds) along the X, Y, and Z axis respectively.
 * This means that velocity values can be positive and negative for each axis.
 * @param theElement The element you wish to retrieve the velocity of.
 * @returns If successful, returns three numbers that represent the element's current velocity along the x, y, and z axis respectively. This function can fail if the element is a player in a car. Use the vehicle element in this case. It will also fail if the element specified does not have a velocity, or does not exist. In case of failure, the first return value will be false. The returned values are expressed in GTA units per 1/50th of a second. A GTA Unit is equal to one metre.
 * @see https://wiki.mtasa.com/wiki/GetElementVelocity
 * @tupleReturn
 **/
declare function getElementVelocity(theElement: BaseElement): [number, number, number] | [false];

/**
 * This function is used to retrieve a list of all elements of the specified type. This can be useful, as it disregards where in the element tree it is. It can be used with either the built in types (listed below) or with any custom type used in a .map file. For example, if there is an element of type "flag" (e.g. <flag />) in the .map file, the using "flag" as the type argument would find it.
 * @param theType The type of element you want a list of. This is the same as the tag name in the .map file, so this can be used with a custom element type if desired.
 * @param [startat=getRootElement()] The element the search should start at. Children of this element are searched, siblings or parents will not be found. By default, this is the root element which should suit most uses.
 * @param [streamedIn=false] If true, function will only return elements that are streamed in.
 * @returns Returns an array containing all the elements of the specified type. Returns an empty an array if there are no elements of the specified type. Returns false if the string specified is invalid (or not a string).
 * @see https://wiki.multitheftauto.com/wiki/GetElementsByType
 **/
declare function getElementsByType(theType: string, startat?: BaseElement, streamedIn?: boolean): BaseElement[] | false;

/**
 * This function is used to retrieve a list of all elements in a colshape, of the specified type.
 * - Note: For legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move.
 * This function doesn't verify whether elements are in the same dimension and interior, additional checks could be implemented manually if they are needed.
 * @param theShape The colshape you want to get the elements from.
 * @param [elemType=undefined] The type of element you want a list of. This can be any element type, the common ones being.
 * @returns Returns an array containing all the elements inside the colshape, of the specified type. Returns an empty array if there are no elements inside. Returns false if the colshape is invalid.
 * @see https://wiki.mtasa.com/wiki/GetElementsWithinColShape
 **/
declare function getElementsWithinColShape(theShape: ColShape, elemType?: string): BaseElement[] | false;

/**
 * This function is used to retrieve a list of all elements of specified type within a range of 3D coordinates.
 * - Note: This function doesn't verify whether elements are in the same dimension and interior, additional checks could be implemented manually if they are needed. This function checks if elements are in a box, not in a circle. Z argument isn't in use currently, but make your scripts like it is for future compatibility reasons. This function doesn't work with elements which is created by createElement.
 * @param x the x coordinate at which to retrieve elements.
 * @param y the y coordinate at which to retrieve elements.
 * @param z the z coordinate at which to retrieve elements.
 * @param range the range at the coordinates in which to retrieve elements.
 * @param [elemType=""] The type of element you want a list of.
 * @returns Returns an array containing all the elements of the specified type within range. Returns an empty array if there are no elements within range. Returns false if the arguments are invalid.
 * @see https://wiki.mtasa.com/wiki/GetElementsWithinRange
 **/
declare function getElementsWithinRange(x: number, y: number, z: number, range: number, elemType?: string): BaseElement[] | false;

/**
 * This function return the low LOD element that an element is associated with.
 * @param theElement The element whose low LOD version we want to get.
 * @returns Returns a low LOD element if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetLowLODElement
 **/
declare function getLowLODElement(theElement: BaseElement): BaseElement | false;

// TODO: Fix types
/**
 * This function returns the root node of the element tree, called root.
 * This node contains every other element: all resource root elements, players and remote clients.
 * It is never destroyed and cannot be destroyed using destroyElement.
 * It is often used to attach handler functions to events triggered for any element, or also to make a scripting function affect all elements.
 * - Note: All resources have a predefined global variable called root that has the root element as value. The variable exists server side as well as client side.
 * @returns Returns the root element.
 * @see https://wiki.mtasa.com/wiki/GetRootElement
 **/
declare function getRootElement(): BaseElement;

/**
 * This function checks if a value is an element or not.
 * - Note: This function is not reliable as element ids are eventually recycled. Always make sure you undefined variables containing an element after calling destroyElement or handle onElementDestroy for players and elements that might be destroyed by another resource
 * @param theValue The value that we want to check.
 * @returns Returns true if the passed value is an element, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsElement
 **/
declare function isElement(theValue: any): boolean;

/**
 * This functions checks whether or not an element is attached to another element.
 * @param theElement The element to check for attachment.
 * @returns Returns true if the specified element is attached to another element, false if it is not attached or undefined if an improper argument was passed.
 * @see https://wiki.mtasa.com/wiki/IsElementAttached
 **/
declare function isElementAttached(theElement: BaseElement): boolean | undefined;

/**
 * This functions checks if certain element has call propagation enabled.
 * @param theElement The element to check.
 * @returns Returns true if the propagation is enabled, false if disabled or invalid arguments have been passed.
 * @see https://wiki.mtasa.com/wiki/IsElementCallPropagationEnabled
 **/
declare function isElementCallPropagationEnabled(theElement: BaseElement): boolean;

/**
 * This function can be used to check whether specified element is collidable with another element.
 * - Note: You can only use this function with the element types listed below.
 * @param theElement The element which colliding you want to get.
 * @param withElement The other element which colliding with the first entity you want to get
 * @returns Returns true if the elements collide with eachother, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsElementCollidableWith
 **/
declare function isElementCollidableWith(theElement: BaseElement, withElement: BaseElement): boolean;

/**
 * This function checks whether an element is double-sided as set by setElementDoubleSided or not.
 * @param theElement The element in which you'd like to check the double-sidedness of.
 * @returns Returns true if the theElement is double-sided, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsElementDoubleSided
 **/
declare function isElementDoubleSided(theElement: BaseElement): boolean;

/**
 * This function checks if element has been frozen.
 * @param theElement the element whose freeze status we want to check.
 * @returns Returns true if the element is frozen, false if it isn't or if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/IsElementFrozen
 **/
declare function isElementFrozen(theElement: BaseElement): boolean;

/**
 * This function checks whether an element is submerged in water.
 * @param theElement The element to check.
 * @returns Returns true if the passed element is in water, false if it isn't, or if the element is invalid.
 * @see https://wiki.mtasa.com/wiki/IsElementInWater
 **/
declare function isElementInWater(theElement: BaseElement): boolean;

/**
 * This function checks whether a clientside element is local to the client (doesn't exist in the server) or not.
 * @param theElement The element that we want to check.
 * @returns Returns true if the passed element is local, false if not or if invalid parameters are passed.
 * @see https://wiki.mtasa.com/wiki/IsElementLocal
 **/
declare function isElementLocal(theElement: BaseElement): boolean;

/**
 * This function reveals if an element is low LOD.
 * @param theElement The element whose low LOD status we want to get.
 * @returns Returns true if the element is low LOD, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsElementLowLOD
 **/
declare function isElementLowLOD(theElement: BaseElement): boolean;

/**
 * This function will check if an element is on the screen.
 * Elements behind objects but still in the camera view count as being on screen.
 * This function is particularly useful for detecting if dynamic objects are in "destroyed" state.
 * Destroyed objects will return false.
 * @param theElement The element of which you wish to check wether it's being rendered on screen.
 * @returns Returns true if element is on screen, false if not.
 * @see https://wiki.mtasa.com/wiki/IsElementOnScreen
 **/
declare function isElementOnScreen(theElement: BaseElement): boolean;

/**
 * This function checks whether an element is streamable as set by setElementStreamable or not.
 * @param theElement The element to check the streamability of.
 * @returns Returns true if the passed element is streamable like normal, false if this element must always be streamed in.
 * @see https://wiki.mtasa.com/wiki/IsElementStreamable
 **/
declare function isElementStreamable(theElement: BaseElement): boolean;

/**
 * This function checks whether an element is currently streamed in (not virtualized) and are actual GTA objects in the world.
 * You can force an element to be streamed in using setElementStreamable.
 * @param theElement The element to check whether is streamed in or not.
 * @returns Returns true if the passed element is currently streamed in, false if it is virtualized.
 * @see https://wiki.mtasa.com/wiki/IsElementStreamedIn
 **/
declare function isElementStreamedIn(theElement: BaseElement): boolean;

/**
 * This function checks whether an element is synced by the local player or not.
 * Accepted elements are peds and vehicles.
 * @param theElement The element to check.
 * @returns Returns true if the passed element is synced by the local player, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsElementSyncer
 **/
declare function isElementSyncer(theElement: BaseElement): boolean;

/**
 * This function checks whether MTA has frozen an element because it is above map objects which are still loading or not.
 * - Note: When vehicles are frozen waiting for collisions to load they do not overwrite the frozen status set by setElementFrozen.
 * @param theElement the element to check its frozen waiting for custom map objects to load status. It can be a vehicle, ped or player.
 * @returns Returns true if the specified element is frozen waiting for collisions of custom map objects to load. Returns false if it's not or if the specified element is invalid.
 * @see https://wiki.mtasa.com/wiki/IsElementWaitingForGroundToLoad
 **/
declare function isElementWaitingForGroundToLoad(theElement: BaseElement): boolean;

/**
 * This function is used to determine if an element is within a collision shape.
 * Please note that for legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move.
 * Please also note that before 1.0.3, this did not function correctly when moving a colshape.
 * Please note that this function doesn't verify whether element is in the same dimension and interior, additional checks could be implemented manually if they are needed.
 * @param theElement The element you're checking.
 * @param theShape The colshape you're checking
 * @returns Returns true if the element is within the colshape, false otherwise
 * @see https://wiki.mtasa.com/wiki/IsElementWithinColShape
 **/
declare function isElementWithinColShape(theElement: BaseElement, theShape: ColShape): boolean;

/**
 * This function sets the alpha (transparency) value for the specified element.
 * This can be a player, ped, object, vehicle or weapon.
 * @param theElement The element whose alpha you want to set.
 * @param alpha The alpha value to set. Values are 0-255, where 255 is fully opaque and 0 is fully transparent.
 * @returns Returns true or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetElementAlpha
 **/
declare function setElementAlpha(theElement: BaseElement, alpha: number): boolean;

/**
 * Sets the angular velocity of a specified, supported element (Applies a spin to it).
 * @param theElement The element to apply the spin to. Can be either a player, ped, object, vehicle or a custom weapon.
 * @param rx velocity around the X axis.
 * @param ry velocity around the Y axis.
 * @param rz velocity around the Z axis.
 * @returns Returns true if it was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementAngularVelocity
 **/
declare function setElementAngularVelocity(theElement: BaseElement, rx: number, ry: number, rz: number): boolean;

/**
 * Gets the current angular velocity of a specified, supported element.
 * @param theElement The element to retrieve the angular velocity from. Can be either a player, ped, object, vehicle or a custom weapon.
 * @returns Returns three numbers describing the x, y and z rotation.
 * @see https://wiki.mtasa.com/wiki/GetElementAngularVelocity
 * @tupleReturn
 **/
declare function getElementAngularVelocity(theElement: Player | Ped | MapObject | Vehicle | Weapon): [number, number, number] | [false];

/**
 * This function updates the offsets of an element that has been attached to another element using attachElements.
 * @param theElement The attached element.
 * @param [xPosOffset=0] The x offset, if you want the elements to be a certain distance from one another (default 0).
 * @param [yPosOffset=0] The y offset (default 0).
 * @param [zPosOffset=0] The z offset (default 0).
 * @param [xRotOffset=0] The x rotation offset (default 0).
 * @param [yRotOffset=0] The y rotation offset (default 0).
 * @param [zRotOffset=0] The z rotation offset (default 0).
 * @returns Returns true if the attaching process was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementAttachedOffsets
 **/
declare function setElementAttachedOffsets(theElement: BaseElement, xPosOffset?: number, yPosOffset?: number, zPosOffset?: number, xRotOffset?: number, yRotOffset?: number, zRotOffset?: number): boolean;

/**
 * This function enables/disables call propagation on a certain element. Look at the example for a practical application.
 * @param theElement The element whose propagation behaviour you'd like to change.
 * @param enabled Whether propagation should be enabled or not.
 * @returns Returns true, if the propagation behaviour has been changed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementCallPropagationEnabled
 **/
declare function setElementCallPropagationEnabled(theElement: BaseElement, enabled: boolean): boolean;

/**
 * This function can be used to set an element to collide with another element.
 * An element with collisions disabled does not interact physically with the other element.
 * - Note: You can only use this function with the element types: Player, Ped, Vehicle, MapObject.
 * @param theElement The element which colliding you want to change.
 * @param withElement The other element you wish the first entity to collide with.
 * @param enabled A boolean to indicate whether elements should be able to collide with eachother (true) or not (false).
 * @returns Returns true if the collisions were set succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementCollidableWith
 **/
declare function setElementCollidableWith(theElement: Player | Ped | Vehicle | MapObject, withElement: Player | Ped | Vehicle | MapObject, enabled: boolean): boolean;

/**
 * This function can disable or enable an element's collisions.
 * An element without collisions does not interact with the physical environment and remains static.
 * - Note: Vehicles that are collisionless and have a driver will cause bugs.
 * - Note: Enabling a players collisions when they're inside a vehicle will cause bugs.
 * - Note: Disabling a peds collisions will cause some problems, such as it being unable to move.
 * @param theElement The element you wish to set the collisions of
 * @param enabled A boolean to indicate whether collisions are enabled (true) or disabled (false)
 * @returns Returns true if the collisions were set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementCollisionsEnabled
 **/
declare function setElementCollisionsEnabled(theElement: BaseElement, enabled: boolean): boolean;

/**
 * This function stores element data under a certain key, attached to an element.
 * BaseElement data set using this is then synced with all clients and the server.
 * The data can contain server created elements, but you should avoid passing data that is not able to be synced such as xmlnodes, acls, aclgroups etc.
 * As element data is synced to all clients, it can generate a lot of network traffic and be heavy on performance.
 * Events are much more efficient for sending data from a client to the server only, or from the server to a specific client.
 * Usage of element data should be discouraged where your goal can be achieved with events like above, and tables for storing and retrieving data.
 * - Tip: A simple and efficient way to make a variable known to the server and clients is to use setElementData on the root element.
 * - Note: See Script security for tips on preventing cheaters when using events and element data
 * - Note: For performance reasons, never use setElementData in events that fire often (like onClientRender) without further optimization or conditions.
 * @param theElement The element you wish to attach the data to.
 * @param key The key you wish to store the data under. (Maximum 31 characters.)
 * @param value The value you wish to store. See element data for a list of acceptable data types.
 * @param [synchronize=true] Determines whether or not the data will be synchronized with the clients(server-side variation) or server(client-side variation).
 * @returns Returns true if the data was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementData
 **/
declare function setElementData(theElement: BaseElement, key: string, value: any, synchronize?: boolean): boolean;

/**
 * This function allows you to set the dimension of any element.
 * The dimension determines what/who the element is visible to.
 * @param theElement The element in which you'd like to set the dimension of.
 * @param dimension A number representing the dimension ID. You can also use -1 to make the element visible in all dimensions (only valid to objects). Valid values are 0 to 65535.
 * @returns Returns true if theElement and dimension are valid, false otherwise. Also returns false if theElement is a player and it's not alive.
 * @see https://wiki.mtasa.com/wiki/SetElementDimension
 **/
declare function setElementDimension(theElement: BaseElement, dimension: number): boolean;

/**
 * This function allows you to set the double-sidedness of an element's model.
 * When an element's model is double-sided, it's back facing triangles become visible.
 * Possible uses of double-sidedness are: Elimination of invisible walls, using buildings as enclosures, using inverted landmasses as large pits or to make cave networks.
 * It can also remove the need to add extra triangles to custom models when trying to make them appear solid from all directions.
 * @param theElement The element in which you'd like to set the double-sidedness of.
 * @param enable Set to true/false to enable/disable double-sidedness.
 * @returns Returns true if theElement is valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementDoubleSided
 **/
declare function setElementDoubleSided(theElement: BaseElement, enable: boolean): boolean;

/**
 * This function freezes an element (stops it in its position and disables movement) or unfreezes it.
 * - Warning: This function cancels any animation set by setPedAnimation if you freeze the ped.
 * @param theElement The element whose freeze status we want to change.
 * @param freezeStatus A boolean denoting whether we want to freeze (true) or unfreeze (false) it.
 * @returns Returns true if the element was frozen, false if it wasn't or if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/SetElementFrozen
 **/
declare function setElementFrozen(theElement: BaseElement, freezeStatus: boolean): boolean;

/**
 * This function sets the health for the specified element.
 * This can be a ped, object or a vehicle.
 * - Note: In the case of the vehicle element, the following effects appear, depending on the health value:
 * 650: white steam 0%, black smoke 0%.
 * 450: white steam 100%, black smoke 50%.
 * 250: white steam 0%, black smoke 100%.
 * 249: fire with big black smoke.
 * @param theElement The ped, vehicle or object whose health you want to set.
 * @param newHealth A number indicating the new health to set for the element.
 * @returns Returns true if the new health was set successfully, or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetElementHealth
 **/
declare function setElementHealth(theElement: BaseElement, newHealth: number): boolean;

/**
 * This function sets the ID of an element to a string.
 * This can be anything from an identifying number, to a name.
 * You can only change the ID of an element clientside if that element has been created clientside as well.
 * @param theElement The element you want to set the ID of.
 * @param name The new ID for theElement.
 * @returns This returns true if successful. It will return false if theElement is invalid, or does not exist, or if name is invalid, or is not a string.
 * @see https://wiki.mtasa.com/wiki/SetElementID
 **/
declare function setElementID(theElement: BaseElement, name: string): boolean;

/**
 * This function allows you to set the interior of any element.
 * An interior is the current loaded place, 0 being outside.
 * - Note: If passing the same interior as the element is in, the call will be ignored and position (optional arguments) will not be set either. Use setElementPosition separately to be sure the position will be set.
 * @param theElement The element in which you'd like to set the interior of.
 * @param interior The interior you want to set the element to. Valid values are 0 to 255.
 * @param [x] A number representing the X coordinate on the map.
 * @param [y] A number representing the Y coordinate on the map.
 * @param [z] A number representing the Z coordinate on the map.
 * @returns Returns true if theElement and interior are valid arguments, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementInterior
 **/
declare function setElementInterior(theElement: BaseElement, interior: number, x?: number, y?: number, z?: number): boolean;

/**
 * This function sets matrix to element.
 * @param theElement The element which you set matrix.
 * @param theMatrix The matrix.
 * @returns Returns true if the matrix was set succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementMatrix
 **/
declare function setElementMatrix(theElement: BaseElement, theMatrix: number[]): boolean;

/**
 * Sets the model of a given element.
 * This allows you to change the model of a player (or ped), a vehicle or an object.
 * @param theElement the element you want to change.
 * @param model the model ID to set.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementModel
 **/
declare function setElementModel(theElement: BaseElement, model: number): boolean;

/**
 * This function is used for setting an element as the parent of another element.
 * - Important note: The client-side version of this function can only be used on client-created elements. It cannot be used to modify the parent of server side elements.
 * - Note: This function does not change when an element will be destroyed - Elements are always destroyed when the resource that created them is stopped.
 * - Note: When an element is destroyed, its parent becomes the new parent of its children.
 * - Note: setElementParent only works if new parent is the root element, map root, or ancestor of map root
 * - Tip: This function does not affect the child elements position. To attach elements use the function attachElements.
 * @param theElement The element that you wish to set the parent of.
 * @param parent The element you wish to be the parent of theElement.
 * @returns Returns true if both elements are valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementParent
 **/
declare function setElementParent(theElement: BaseElement, parent: BaseElement): boolean;

/**
 * This function sets the position of an element to the specified coordinates.
 * - Warning: Do not use this function to spawn a player. It will cause problems with other functions like warpPedIntoVehicle. Use spawnPlayer instead.
 * @param theElement A valid element to be moved.
 * @param x The x coordinate of the destination.
 * @param y The y coordinate of the destination.
 * @param z The z coordinate of the destination.
 * @param [warp=true] teleports players, resetting any animations they were doing. Setting this to false preserves the current animation.
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementPosition
 **/
declare function setElementPosition(theElement: BaseElement, x: number, y: number, z: number, warp?: boolean): boolean;

/**
 * Sets the rotation of elements according to the world (does not work with players that are on the ground).
 * - Tip: New scripts should set conformPedRotation to true when using this function on peds. This will prevent quirky old behaviour.
 * @param theElement The element whose rotation will be set.
 * @param rotX The element's rotation around the x axis in degrees.
 * @param rotY The element's rotation around the y axis in degrees.
 * @param rotZ The element's rotation around the z axis in degrees.
 * @param [rotOrder="default"] A string representing the rotation order desired when interpreting the provided euler angles. If omitted, default value is "default". Allowed values are: "default": default MTA behavior prior to 1.1, where rotation order depends on element type, "ZXY": rotation about the Z axis (up), then about the resulting X axis (right), and finally about the resulting Y axis (front). This is the default rotation order for objects, "ZYX": rotation about the Z axis (up), then about the resulting Y axis (front), and finally about the resulting X axis (right). This is the default rotation order for vehicles.
 * @param [conformPedRotation=false] Relevant only for peds and will be ignored for other element types. A bool which should be set to true to ensure the ped rotation is correctly set in all circumstances. Failing to set this argument may result in the ped rotation being inverted whilst it is in the air and other inconsistencies.The default value of false is for backward compatibility with scripts which may depend upon the incorrect behaviour.
 * @returns Returns true if the element rotation was successfully set and false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementRotation
 **/
declare function setElementRotation(theElement: BaseElement, rotX: number, rotY: number, rotZ: number, rotOrder?: "default" | "ZXY" | "ZYX", conformPedRotation?: boolean): boolean;

/**
 * This function can be used to disable streaming for an element.
 * This will make sure the element is not virtualized (streamed out from GTA) when the player moves far away from it. This function only works in elements with a physical representation in the world (entities), such as players, peds, vehicles and objects.
 * - Tip: Always use this function with caution. Not doing so can cause the following problems: There is a limit of elements that can be streamed in safely for every GTA entity type. If you bypass said limit by using this function, the client can experience problems of disappearing objects and unstability when trying to stream in new elements of that type. In general, if you disable too many elements (of the same type or not) to stream out, GTA will always try to render them, so it can cause a noticeable FPS drop.
 * @param theElement The element you wish to set the streaming of.
 * @param streamable true if this element should stream in/out like normal, false if it should always be streamed in.
 * @returns Returns whether the element could be set to be streamable.
 * @see https://wiki.mtasa.com/wiki/SetElementStreamable
 **/
declare function setElementStreamable(theElement: BaseElement, streamable: boolean): boolean;

/**
 * This function sets the velocity (movement speeds) along each axis, for an element.
 * This is not compatible with all elements.
 * @param theElement The element you wish to set the velocity of.
 * @param speedX A number point value determining the speed along the X axis.
 * @param speedY A number point value determining the speed along the Y axis.
 * @param speedZ A number point value determining the speed along the Z axis.
 * @returns Returns true if the speed was set successfully, false if a bad element was specified or other bad arguments.
 * @see https://wiki.mtasa.com/wiki/SetElementVelocity
 **/
declare function setElementVelocity(theElement: Ped | Vehicle | MapObject | Projectile, speedX: number, speedY: number, speedZ: number): boolean;

/**
 * This function assigns a low LOD element to an element.
 * The low LOD element is displayed when its associated element is not fully visible.
 * If a low LOD element is assigned to several elements, it will be displayed when any of these elements are not fully visible.
 * @param theElement The element whose low LOD version we want to change.
 * @param lowLODElement A low LOD element to display when the first element is not fully visible.
 * @returns Returns true if the assignment was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetLowLODElement
 **/
declare function setLowLODElement(theElement: BaseElement, lowLODElement: BaseElement): boolean;
