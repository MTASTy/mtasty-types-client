/** @noSelfInFile */

/**
 * This function is used to call a function from another resource (which must be running).
 * The function which you wish to call must first be exported within the resource's meta.
 * You cannot call a server function from the client or vice versa. See triggerServerEvent and triggerClientEvent for possibilities to do that.
 * - Note: Calls may incur a performance overhead - they are not equivalent in performance to calling functions in the same resource.
 * - Important note: The sourceResource and sourceResourceRoot "hidden" variables are available even if you use exports.*:*
 * @param arguments Any arguments you may want to pass to the function when it is called.Any number of arguments of can be specified, each being passed to the designated function.
 * @returns Returns anything that the designated function has returned, if the function has no return, undefined is returned. If the function does not exist, is not exported, or the call was not successful it will return false.Returns anything that the designated function has returned, if the function has no return, undefined is returned. If the function does not exist, is not exported, or the call was not successful it will return false.
 * @see https://wiki.mtasa.com/wiki/Call
 **/
declare function call(...arguments: any[]): any;

interface FetchRemoteOptions {
  // Name of the queue to use. Any name can be used. If not set, the queue name is "default". Requests in the same queue are processed in order, one at a time.
  queueName?: string;

  // Number of times to retry if the remote host does not respond. (Defaults to 10)
  connectionAttempts?: number;

  // Number of milliseconds each connection attempt will take before timing out. (Defaults to 10000)
  connectTimeout?: number;

  // A string specifying any data you want to send to the remote HTTP server.
  postData?: string;

  // A boolean specifying if the data is text, or binary. (Defaults to false)
  postIsBinary?: boolean;

  // A string specifying the request method. (Defaults to GET or POST)
  method?: string;

  // An object containing HTTP request headers. e.g.{ Pragma="no-cache" }
  headers?: {[key: string]: string};

  // An integer limiting the number of HTTP redirections to automatically follow. (Defaults to 8)
  maxRedirects?: number;

  // A string specifying the username for protected pages.
  username?: string;

  // A string specifying the password for protected pages.
  password?: string;

  // An object containing form items to submit. e.g.{ name="bob", email="bob@example.com" }
  formFields: {[key: string]: string};
}

/**
 * This function allows you to post and receive data from HTTP servers.
 * The calls are asynchronous so you do not get an immediate result from the call, instead a callback function you specify is called when the download completes.
 * In the case when the call fails, a string containing "ERROR" followed by an integer containing the error reason will be passed to the callback function.
 * The reason for failure will be similar to errors found with websites - file not found, server not found and timeouts.
 * If you are using fetchRemote to connect to a PHP script, you can use file_get_contents("php://input") to read the postData sent from this function.
 * - Warning: function won't trigger inside another fetchRemote function.
 * @param URL A full URL in the format http://hostname/path/file.ext. A port can be specified with a colon followed by a port number appended to the hostname.
 * @param options An object containing any request options (queueName, connectionAttempts, connectTimeout, postData, postIsBinary, method, headers, maxRedirects, username, password, formFields).
 * @param callbackFunction This is the function that should receive the data returned from the remote server.
 * @param callbackArguments The arguments that were passed into fetchRemoteю
 * @returns Returns a request value which can be used with getRemoteRequestInfo or abortRemoteRequest (if the arguments are correct, false otherwise).
 * @see https://wiki.mtasa.com/wiki/FetchRemote
 **/
declare function fetchRemote(URL: string, options: FetchRemoteOptions, callbackFunction: SimpleHandler, callbackArguments?: any[]): Request | false;

/**
 * This function allows you to post and receive data from HTTP servers.
 * The calls are asynchronous so you do not get an immediate result from the call, instead a callback function you specify is called when the download completes.
 * In the case when the call fails, a string containing "ERROR" followed by an integer containing the error reason will be passed to the callback function.
 * The reason for failure will be similar to errors found with websites - file not found, server not found and timeouts.
 * If you are using fetchRemote to connect to a PHP script, you can use file_get_contents("php://input") to read the postData sent from this function.
 * - Warning: function won't trigger inside another fetchRemote function.
 * @param URL A full URL in the format http://hostname/path/file.ext. A port can be specified with a colon followed by a port number appended to the hostname.
 * @param callbackFunction This is the function that should receive the data returned from the remote server.
 * @param callbackArguments The arguments that were passed into fetchRemoteю
 * @returns Returns a request value which can be used with getRemoteRequestInfo or abortRemoteRequest (if the arguments are correct, false otherwise).
 * @see https://wiki.mtasa.com/wiki/FetchRemote
 **/
declare function fetchRemote(URL: string, callbackFunction: SimpleHandler, callbackArguments?: any[]): Request | false;

/**
 * This function is used to return the root node of a configuration file. Config files must be predefined in a resource's meta file. An alternative way to load XML files is to use xmlLoadFile.
 * @param filePath The filepath of the file in the following format: ":resourceName/path". 'resourceName' is the name of the resource the file is in, and 'path' is the path from the root directory of the resource to the file.
 * @returns Returns the root node of the specified configuration file. If the file is corrupted, not defined in the meta file or doesn't exist, returns false.
 * @see https://wiki.multitheftauto.com/wiki/GetResourceConfig
 **/
declare function getResourceConfig(filePath: string): XML | false;

/**
 * This function retrieves the dynamic element root of a specified resource.
 * The dynamic element root is the parent of elements that are created by scripts (e.g. with createObject) unless they specify a different parent.
 * @param theResource the resource of which dynamic element root we want.
 * @returns Returns an element of the resource's dynamic element root if the resource specified was valid and active (currently running), false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetResourceDynamicElementRoot
 **/
declare function getResourceDynamicElementRoot(theResource: Resource): Element | false;

/**
 * Returns an array containing the names of the functions that a resource exports.
 * It will return the exports of the current resource if there is no argument passed in.
 * @param [theResource=currentResource] the resource of which you want to know the exported functions.
 * @returns Returns an array of function names if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetResourceExportedFunctions
 **/
declare function getResourceExportedFunctions(theResource?: Resource): string[] | false;

/**
 * This function is used to retrieve a resource from its name.
 * A resource's name is the same as its folder or file archive name on the server (without the extension).
 * @param resourceName the name of the resource you wish to get.
 * @returns Returns the resource with the specified name, or false if no resource of that name exists.
 * @see https://wiki.mtasa.com/wiki/GetResourceFromName
 **/
declare function getResourceFromName(resourceName: string): Resource | false;

/**
 * This function retrieves a resource's GUI element.
 * The resource's GUI element is the element in the element tree which is the default parent of all GUI elements that belong to a particular resource.
 * It has a predefined variable called guiRoot, and each resource has one of these.
 * You can attach event handlers to this element to easily capture events that originate from your resource (and global events that originate from the root element).
 * @param [theResource=getThisResource()] the resource whose GUI element we are getting.If not specified, assumes the current resource.
 * @returns Returns the root GUI element that contains all the other GUI elements.
 * @see https://wiki.mtasa.com/wiki/GetResourceGUIElement
 **/
declare function getResourceGUIElement(theResource?: Resource): GuiElement | false;

/**
 * This function gets the name of the specified resource.
 * @param theResource The resource you wish to get the name of.
 * @returns Returns a string with the resource name in it, or false if the resource does not exist.
 * @see https://wiki.mtasa.com/wiki/GetResourceName
 **/
declare function getResourceName(theResource: Resource): string | false;

/**
 * This function retrieves a resource's root element.
 * The resource's root element is the element in the element tree which is the parent of all elements that belong to a particular resource (except for elements specifically created elsewhere).
 * You can attach event handlers to this element to easily capture events that originate from your resource (and global events that originate from the root element).
 * - Note: every resource has a predefined global variable called resourceRoot whose value is the root element of that resource.
 * @param [theResource=currentResource] the resource whose root element we are getting. If not specified, assumes the current resource.
 * @returns Returns an element representing the resource's root, false if the specified resource doesn't exist.
 * @see https://wiki.mtasa.com/wiki/GetResourceRootElement
 **/
declare function getResourceRootElement(theResource?: Resource): Element | false;

/**
 * This function returns the state of a given resource.
 * @param theResource The resource you wish to get the state of.
 * @returns If successful returns a string with the resource state in it, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetResourceState
 **/
declare function getResourceState(theResource: Resource): string | false;

/**
 * This function retrieves the resource from which the function call was made.
 * - Note: Every resource has a predefined global variable called resource that contains the resource pointer for that resource, in other words, the value that this function returns.
 * @returns Returns the resource in which the current script is.
 * @see https://wiki.mtasa.com/wiki/GetThisResource
 **/
declare function getThisResource(): Resource;

/**
 * Gets all fetchRemote and callRemote requests currently running.
 * @param [theResource=undefined] the resource to get all requests from.
 * @returns Returns an array with all requests, false if an invalid resource was provided.
 * @see https://wiki.mtasa.com/wiki/GetRemoteRequests
 **/
declare function getRemoteRequests(theResource?: Resource): Request[] | false;

interface RemoteRequestInfo {
  // A number specifying the amount of data received so far. Zero means the download is queued
  bytesReceived: number;

  // A number specifying the final download size. Will be zero if the remote HTTP server has not set the 'Content-Length' header
  bytesTotal: number;

  // A number specifying the current connection attempt
  currentAttempt: number;

  // A string specifying either "fetch" or "call"
  type: "fetch" | "call";

  // A string specifying the URL
  url: string;

  // The resource which started the request, or false if the resource has since been stopped/restarted
  resource: Resource | false;

  // A string specifying the queue name
  queue: string;

  //  A string specifying the HTTP method. e.g. "GET" or "POST"
  method: "GET" | "POST";

  // A number specifying max number connection attempts as declared in the fetchRemote call
  connectionAttempts: number;

  // A number specifying connection attempt timeout as declared in the fetchRemote call
  connectionTimeout: number;

  // A string containing the request post data as declared in the fetchRemote call
  postData: string;

  // An object containing the request HTTP headers as declared in the fetchRemote call
  headers: {[key: string]: string};
}

/**
 * Gets informations of an fetchRemote or callRemote request info.
 * @param theRequest returned from fetchRemote, callRemote or getRemoteRequests.
 * @param [postDataLength=0] post data length.
 * @param [includeHeaders=false] include headers.
 * @returns Returns an object when valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetRemoteRequestInfo
 **/
declare function getRemoteRequestInfo(theRequest: Request, postDataLength?: number, includeHeaders?: boolean): RemoteRequestInfo | false;

/**
 * Aborts a fetchRemote or callRemote request.
 * @param theRequest returned from fetchRemote, callRemote or getRemoteRequests.
 * @returns Returns true on success, false when invalid request was provided.
 * @see https://wiki.mtasa.com/wiki/AbortRemoteRequest
 **/
declare function abortRemoteRequest(theRequest: Request): boolean;
