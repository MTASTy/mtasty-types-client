/** @customConstructor Resource */
declare class Resource {
  readonly rootElement: BaseElement;
  readonly name: string;
  readonly state: ResourceState;
  readonly guiElement: BaseGuiElement;
  readonly exportedFunctions: string[];
  readonly dynamicElementRoot: BaseElement | false;
  readonly config: XML | false;

  /**
   * This function is used to retrieve a resource from its name.
   * A resource's name is the same as its folder or file archive name on the server (without the extension).
   * @param resourceName the name of the resource you wish to get.
   * @returns Returns the resource with the specified name, or false if no resource of that name exists.
   * @see https://wiki.mtasa.com/wiki/GetResourceFromName
   **/
  static getFromName(resourceName: string): Resource | false;

  /**
   * This function retrieves the resource from which the function call was made.
   * - Note: Every resource has a predefined global variable called resource that contains the resource pointer for that resource, in other words, the value that this function returns.
   * @returns Returns the resource in which the current script is.
   * @see https://wiki.mtasa.com/wiki/GetThisResource
   **/
  static getThis(): Resource;

  /**
   * This function is used to return the root node of a configuration file. Config files must be predefined in a resource's meta file. An alternative way to load XML files is to use xmlLoadFile.
   * @param filePath The filepath of the file in the following format: ":resourceName/path". 'resourceName' is the name of the resource the file is in, and 'path' is the path from the root directory of the resource to the file.
   * @returns Returns the root node of the specified configuration file. If the file is corrupted, not defined in the meta file or doesn't exist, returns false.
   * @see https://wiki.multitheftauto.com/wiki/GetResourceConfig
   **/
  static getConfig(filePath: string): XML | false;

  protected constructor();

  /**
   * This function retrieves a resource's GUI element.
   * The resource's GUI element is the element in the element tree which is the default parent of all GUI elements that belong to a particular resource.
   * It has a predefined variable called guiRoot, and each resource has one of these.
   * You can attach event handlers to this element to easily capture events that originate from your resource (and global events that originate from the root element).
   * @returns Returns the root GUI element that contains all the other GUI elements.
   * @see https://wiki.mtasa.com/wiki/GetResourceGUIElement
   **/
  getGuiElement(): BaseGuiElement;

  /**
   * This function retrieves a resource's root element.
   * The resource's root element is the element in the element tree which is the parent of all elements that belong to a particular resource (except for elements specifically created elsewhere).
   * You can attach event handlers to this element to easily capture events that originate from your resource (and global events that originate from the root element).
   * - Note: every resource has a predefined global variable called resourceRoot whose value is the root element of that resource.
   * @returns Returns an element representing the resource's root.
   * @see https://wiki.mtasa.com/wiki/GetResourceRootElement
   **/
  getRootElement(): BaseElement;

  /**
   * This function gets the name of the specified resource.
   * @returns Returns a string with the resource name in it.
   * @see https://wiki.mtasa.com/wiki/GetResourceName
   **/
  getName(): string;

  /**
   * This function retrieves the dynamic element root of a specified resource.
   * The dynamic element root is the parent of elements that are created by scripts (e.g. with createObject) unless they specify a different parent.
   * @returns Returns an element of the resource's dynamic element root if the resource specified was valid and active (currently running), false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetResourceDynamicElementRoot
   **/
  getDynamicElementRoot(): BaseElement | false;

  /**
   * Returns an array containing the names of the functions that a resource exports.
   * It will return the exports of the current resource if there is no argument passed in.
   * @returns Returns an array of function names.
   * @see https://wiki.mtasa.com/wiki/GetResourceExportedFunctions
   **/
  getExportedFunctions(): string[];

  /**
   * This function returns the state of a given resource.
   * @returns If successful returns a string with the resource state in it.
   * @see https://wiki.mtasa.com/wiki/GetResourceState
   **/
  getState(): ResourceState;
}
