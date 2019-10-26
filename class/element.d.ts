/** @customConstructor Element */
declare class Element {
  callPropagationEnabled: boolean;
  readonly waitingForGroundToLoad: boolean;
  readonly onScreen: boolean;
  readonly streamedIn: boolean;
  streamable: boolean;
  readonly localElement: boolean;
  id: string;
  readonly type: string;
  readonly colShape: ColShape;
  readonly parent: Element | false;
  readonly attachedTo: Element | false;
  readonly attached: boolean;
  health: number;
  alpha: number;
  doubleSided: boolean;
  model: number;
  readonly syncedByLocalPlayer: boolean;
  collisions: boolean;
  frozen: boolean;
  readonly inWater: boolean;
  readonly lowLOD: Element | false;
  dimension: number;
  interior: number;
  readonly distanceFromCentreOfMassToBaseOfModel: number;
  readonly radius: number;
  readonly childrenCount: number;

  // TODO: Check it
  readonly boundingBox: [Vector3, Vector3];

  position: Vector3;
  rotation: Vector3;
  matrix: Matrix;
  velocity: Vector3;
  angularVelocity: Vector3;
  readonly isElement: boolean;

  // static getByID(id: string): Element | false;
  // static getAllByType(type: string): Element[];

  /**
   * This function is used to create a new dummy element in the element tree which do not necessarily represent an entity within the San Andreas world.
   * A common use for this function is for creating custom elements, such as a Flag or a Base.
   * Elements created using this function are placed in the element tree with their parent as the 'dynamic' map element.
   * @param elementType The type of element being created.
   * @param [elementID=undefined] The ID of the element being created.
   * @returns Returns the element if it was successfully created. Returns false if the arguments are wrong.
   * @see https://wiki.mtasa.com/wiki/CreateElement
   **/
  constructor(elementType: string, elementID?: string);

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
  attach(theAttachToElement: Element, xPosOffset?: number, yPosOffset?: number, zPosOffset?: number, xRotOffset?: number, yRotOffset?: number, zRotOffset?: number): boolean;

  /**
   * This function detaches attached elements from one another.
   * @param [theAttachToElement] The element you wish to detach from, will detach from the attached element if this isn't specified.
   * @returns Returns true if the detaching was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/DetachElements
   **/
  detach(theAttachToElement?: Element): boolean;

  /**
   * This function destroys an element and all elements within it in the hierarchy (its children, the children of those children etc).
   * Player elements cannot be destroyed using this function.
   * A player can only be removed from the hierarchy when they quit or are kicked.
   * The root element also cannot be destroyed, however, passing the root as an argument will wipe all elements from the server, except for the players and clients, which will become direct descendants of the root node, and other elements that cannot be destroyed, such as resource root elements.
   * Players are not the only elements that cannot be deleted.
   * This list also includes remote clients and console elements.
   * - Note: As element ids are eventually recycled, always make sure you undefined variables containing the element after calling this function
   * @returns Returns true if the element was destroyed successfully, false if either the element passed to it was invalid or it could not be destroyed for some other reason (for example, clientside destroyElement can't destroy serverside elements).
   * @see https://wiki.mtasa.com/wiki/DestroyElement
   **/
  destroy(): boolean;

  /**
   * This function indicates if a specific element is set to have collisions disabled.
   * An element without collisions does not interact with the physical environment and remains static.
   * @returns Returns true if the collisions are enabled, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetElementCollisionsEnabled
   **/
  getCollisionsEnabled(): boolean;

  /**
   * This function is used to determine if an element is within a collision shape.
   * Please note that for legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move.
   * Please also note that before 1.0.3, this did not function correctly when moving a colshape.
   * Please note that this function doesn't verify whether element is in the same dimension and interior, additional checks could be implemented manually if they are needed.
   * @param theShape The colshape you're checking
   * @returns Returns true if the element is within the colshape, false otherwise
   * @see https://wiki.mtasa.com/wiki/IsElementWithinColShape
   **/
  isWithinColShape(theShape: ColShape): boolean;

  /**
   * This function is used to determine if an element is within a marker.
   * @param theMarker The marker you're checking.
   * @returns Returns true if the element is within the marker, false otherwise
   * @see https://wiki.mtasa.com/wiki/IsElementWithinMarker
   **/
  isWithinMarker(theMarker: Marker): boolean;

  /**
   * This function checks whether an element is submerged in water.
   * @returns Returns true if the passed element is in water, false if it isn't, or if the element is invalid.
   * @see https://wiki.mtasa.com/wiki/IsElementInWater
   **/
  isInWater(): boolean;

  /**
   * This function checks if element has been frozen.
   * @returns Returns true if the element is frozen, false if it isn't or if invalid arguments were passed.
   * @see https://wiki.mtasa.com/wiki/IsElementFrozen
   **/
  isFrozen(): boolean;

  /*
    // Get functions
    lua_classfunction(luaVM, "isInWater", "isElementInWater");
    lua_classfunction(luaVM, "isFrozen", "isElementFrozen");
    lua_classfunction(luaVM, "isLowLOD", "isElementLowLOD");
    lua_classfunction(luaVM, "isDoubleSided", "isElementDoubleSided");
    lua_classfunction(luaVM, "isCollidableWith", "isElementCollidableWith");
    lua_classfunction(luaVM, "isAttached", "isElementAttached");
    lua_classfunction(luaVM, "isCallPropagationEnabled", "isElementCallPropagationEnabled");
    lua_classfunction(luaVM, "isWaitingForGroundToLoad", "isElementWaitingForGroundToLoad");
    lua_classfunction(luaVM, "isOnScreen", "isElementOnScreen");
    lua_classfunction(luaVM, "isStreamedIn", "isElementStreamedIn");
    lua_classfunction(luaVM, "isStreamable", "isElementStreamable");
    lua_classfunction(luaVM, "isLocal", "isElementLocal");
    lua_classfunction(luaVM, "isSyncer", "isElementSyncer");
    lua_classfunction(luaVM, "getChildren", "getElementChildren");
    lua_classfunction(luaVM, "getChild", "getElementChild");
    lua_classfunction(luaVM, "getChildrenCount", "getElementChildrenCount");
    lua_classfunction(luaVM, "getID", "getElementID");
    lua_classfunction(luaVM, "getParent", "getElementParent");
    lua_classfunction(luaVM, "getBoundingBox", OOP_GetElementBoundingBox);
    lua_classfunction(luaVM, "getPosition", OOP_GetElementPosition);
    lua_classfunction(luaVM, "getRotation", OOP_GetElementRotation);
    lua_classfunction(luaVM, "getMatrix", OOP_GetElementMatrix);
    lua_classfunction(luaVM, "getVelocity", OOP_GetElementVelocity);
    lua_classfunction(luaVM, "getAngularVelocity", OOP_GetElementTurnVelocity);
    lua_classfunction(luaVM, "getByType", "getElementsByType");
    lua_classfunction(luaVM, "getDistanceFromCentreOfMassToBaseOfModel", "getElementDistanceFromCentreOfMassToBaseOfModel");
    lua_classfunction(luaVM, "getRadius", "getElementRadius");
    lua_classfunction(luaVM, "getType", "getElementType");
    lua_classfunction(luaVM, "getInterior", "getElementInterior");
    lua_classfunction(luaVM, "getWithinColShape", "getElementsWithinColShape");
    lua_classfunction(luaVM, "getWithinRange", "getElementsWithinRange");
    lua_classfunction(luaVM, "getDimension", "getElementDimension");
    lua_classfunction(luaVM, "getColShape", "getElementColShape");
    lua_classfunction(luaVM, "getAlpha", "getElementAlpha");
    lua_classfunction(luaVM, "getHealth", "getElementHealth");
    lua_classfunction(luaVM, "getModel", "getElementModel");
    lua_classfunction(luaVM, "getLowLOD", "getLowLODElement");
    lua_classfunction(luaVM, "getAttachedElements", "getAttachedElements");
    lua_classfunction(luaVM, "getAttachedTo", "getElementAttachedTo");
    lua_classfunction(luaVM, "getAttachedOffsets", "getElementAttachedOffsets");
    lua_classfunction(luaVM, "getData", "getElementData");

    lua_classfunction(luaVM, "setAttachedOffsets", "setElementAttachedOffsets");
    lua_classfunction(luaVM, "setData", "setElementData");
    lua_classfunction(luaVM, "setID", "setElementID");
    lua_classfunction(luaVM, "setParent", "setElementParent");
    lua_classfunction(luaVM, "setPosition", "setElementPosition");
    lua_classfunction(luaVM, "setRotation", OOP_SetElementRotation);
    lua_classfunction(luaVM, "setMatrix", "setElementMatrix");
    lua_classfunction(luaVM, "setVelocity", "setElementVelocity");
    lua_classfunction(luaVM, "setAngularVelocity", "setElementAngularVelocity");
    lua_classfunction(luaVM, "setInterior", "setElementInterior");
    lua_classfunction(luaVM, "setDimension", "setElementDimension");
    lua_classfunction(luaVM, "setAlpha", "setElementAlpha");
    lua_classfunction(luaVM, "setDoubleSided", "setElementDoubleSided");
    lua_classfunction(luaVM, "setHealth", "setElementHealth");
    lua_classfunction(luaVM, "setModel", "setElementModel");
    lua_classfunction(luaVM, "setCollisionsEnabled", "setElementCollisionsEnabled");
    lua_classfunction(luaVM, "setCollidableWith", "setElementCollidableWith");
    lua_classfunction(luaVM, "setFrozen", "setElementFrozen");
    lua_classfunction(luaVM, "setLowLOD", "setLowLODElement");
    lua_classfunction(luaVM, "setCallPropagationEnabled", "setElementCallPropagationEnabled");
    lua_classfunction(luaVM, "setStreamable", "setElementStreamable");
   */
}
