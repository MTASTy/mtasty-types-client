/** @customConstructor Browser */
declare class Browser extends DxTexture {
  url: string;
  readonly loading: boolean;
  readonly title: string;
  // renderingPaused: boolean; // Change only
  volume: number; // From 0.0 to 1.0
  // devTools: boolean; // Change only

  /**
   * This function opens a request window in order to accept the requested remote URLs.
   * - Note: You must use this function prior to calling loadBrowserURL because every domain is blocked by default.
   * @param pages An array containing all domains.
   * @param [parseAsURL=false] true if the passed addresses should be converted from URLs, false otherwise.
   * @param callback A callback function that is called as soon as the result is available.
   * @returns Returns true, if the string was successfully read, false otherwise.
   * @see https://wiki.mtasa.com/wiki/RequestBrowserDomains
   **/
  static requestDomains(pages: string[], parseAsURL?: boolean, callback?: SimpleHandler): boolean;

  /**
   * This function checks if the specified URL is blocked from being loaded.
   * @param address A website URL.
   * @param [isURL=false] true if address should be parsed as URL, false otherwise.
   * @returns Returns false if the URL is able to be loaded, true if it is blocked and undefined if an invalid domain/URL was passed.
   * @see https://wiki.mtasa.com/wiki/IsBrowserDomainBlocked
   **/
  static isDomainBlocked(address: string, isURL?: boolean): boolean | undefined;

  /**
   * This function creates a new web browser element.
   * - Note: You can also enable CEF development tools using toggleBrowserDevTools.
   * @param width The browser's native width. This should be greater than or equal to 1.
   * @param height The browser's native height. This should be greater than or equal to 1.
   * @param isLocal Sets whether the browser can only show local content or content from the internet (see examples for more information).
   * @param [transparent=false] true if you want the browser transparent, false for opaque.
   * @see https://wiki.mtasa.com/wiki/CreateBrowser
   **/
  constructor(width: number, height: number, isLocal: boolean, transparent?: boolean);

  /**
   * This function loads the specified URL.
   * - Note: You should use requestBrowserDomains first to request permission to load the url on the client.
   * @param url The url you want to load. It can either contain a remote website ("http://" prefix) or a website stored within a local resource.
   * @param [postData=""] The post data passed to the website. Its content type can be any type (e.g. JSON) if urlEncoded is set to false.
   * @param [urlEncoded=true] If set to true, it will be available f.e. in PHP's $_POST variable (the content type is: application/x-www-form-urlencoded).
   * @returns Returns true if the URL was successfully loaded.
   * @see https://wiki.mtasa.com/wiki/LoadBrowserURL
   **/
  loadURL(url: string, postData?: string, urlEncoded?: boolean): boolean;

  /**
   * This function checks if a browser is currently loading a website.
   * @returns Returns true if the browser is loading a website, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsBrowserLoading
   **/
  isLoading(): boolean;

  /**
   * This function injects a mouse movement.
   * @param posX Absolute X screen coordinate.
   * @param posY Absolute Y screen coordinate.
   * @returns Returns true if the movement was injected successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/InjectBrowserMouseMove
   **/
  injectMouseMove(posX: number, posY: number): boolean;

  /**
   * This function injects a mouse click (state: down).
   * @param mouseButton The mouse button. Possible values: "left", "middle", "right".
   * @returns Returns true if the click was successfully injected, false otherwise.
   * @see https://wiki.mtasa.com/wiki/InjectBrowserMouseDown
   **/
  injectMouseDown(mouseButton: "left" | "middle" | "right"): boolean;

  /**
   * This function injects a mouse click (state: up).
   * @param mouseButton The mouse button. Possible values: "left", "middle", "right".
   * @returns Returns true if the click was successfully injected, false otherwise.
   * @see https://wiki.mtasa.com/wiki/InjectBrowserMouseUp
   **/
  injectMouseUp(mouseButton: "left" | "middle" | "right"): boolean;

  /**
   * This function injects mouse wheel events.
   * @param verticalScroll Amount of units you want the browser to scroll along the Y-axe.
   * @param horizontalScroll Amount of units you want the browser to scroll along the X-axe.
   * @returns Returns true if the mouse action was successfully injected, false otherwise.
   * @see https://wiki.mtasa.com/wiki/InjectBrowserMouseWheel
   **/
  injectMouseWheel(verticalScroll: number, horizontalScroll: number): boolean;

  /**
   * This function returns the title of the passed browser.
   * @returns Returns the title as a string.
   * @see https://wiki.mtasa.com/wiki/GetBrowserTitle
   **/
  getTitle(): string;

  /**
   * This function returns the URL of the specified browser.
   * @returns Returns the web browser URL.
   * @see https://wiki.mtasa.com/wiki/GetBrowserURL
   **/
  getURL(): string;

  /**
   * This function sets the rendering state of a browser.
   * @param paused true to pause rendering, false to continue.
   * @returns Returns true if the state was successfully changed.
   * @see https://wiki.mtasa.com/wiki/SetBrowserRenderingPaused
   **/
  setRenderingPaused(paused: boolean): boolean;

  /**
   * This function executes a Javascript string to the specified browser. Works only with local browsers.
   * @param jsCode The Javascript code string.
   * @returns Returns true if executing Javascript is allowed in the current context, false otherwise.
   * @see https://wiki.mtasa.com/wiki/ExecuteBrowserJavascript
   **/
  executeJavascript(jsCode: string): boolean;

  /**
   * This function returns a specific browser's volume.
   * @returns Returns a specific browser's volume, or false if the browser element passed to the function is invalid.
   * @see https://wiki.multitheftauto.com/wiki/GetBrowserVolume
   **/
  getVolume(): number;

  /**
   * This function sets either a specific browser's volume, or the overall volume for browsers.
   * @param volume A number representing the desired volume level. Range is from 0.0 to 1.0.
   * @returns Returns true if the state was successfully changed.
   * @see https://wiki.mtasa.com/wiki/SetBrowserVolume
   **/
  setVolume(volume: number): boolean;

  /**
   * This function will attempt to focus the browser or unfocus all browsers. The browser that is focused will retrieve keyboard input.
   * @returns Returns true if the browser was focused, false if it failed to focus.
   * @see https://wiki.mtasa.com/wiki/FocusBrowser
   **/
  focus(): boolean;

  /**
   * This function checks if a browser is focused.
   * @returns Returns true if the browser is focused, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsBrowserFocused
   **/
  isFocused(): boolean;

  /**
   * This function sets a given property of a specified browser.
   * @param key The browser property key. It can be "mobile".
   * @param value A value indicating whether to enable ("1") the property or not ("0").
   * @returns Returns true if the property was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetBrowserProperty
   **/
  setProperty(key: "mobile", value: "1" | "0"): boolean;

  /**
   * This function gets a given property of a specified browser.
   * @param key The browser property key. It can be "mobile" (surfing the web as mobile).
   * @returns Returns the value if the property was successfully found, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetBrowserProperty
   **/
  getProperty(key: string): any;

  /**
   * This function can be used to retrieve the source code of a website (asynchronously).
   * The size of the source code is limited to 2 MiB (remaining bytes are cut).
   * @param callback a callback function.
   * @returns Returns true if valid arguments have been passed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetBrowserSource
   **/
  getSource(callback: SimpleHandler): boolean;

  /**
   * This function provides a requestable ajax resource communication for a browser.
   * - Warning: Do not use the same path as an existing file as url parameter. Ajax handlers have a higher priority than regular files, which will lead to inaccesibility of the original file if an ajax handler is attached to the same path.
   * @param url The URL endpoint to handle.
   * @param handler The function to call if the webBrowser attempts to open the ajax endpoint. If this parameter is omitted, the ajax handler for the url will be deleted.
   * @returns Returns true if the ajax handler could be created/removed.
   * @see https://wiki.mtasa.com/wiki/SetBrowserAjaxHandler
   **/
  setAjaxHandler(url: string, handler?: SimpleHandler): boolean;

  /**
   * This function checks if the browser can return to the previous page.
   * @returns Returns true if the browser can navigate back, false otherwise.
   * @see https://wiki.mtasa.com/wiki/CanBrowserNavigateBack
   **/
  canNavigateBack(): boolean;

  /**
   * This function checks if the browser can go to the next page.
   * @returns Returns true if the browser can go to the next page, false otherwise.
   * @see https://wiki.mtasa.com/wiki/CanBrowserNavigateForward
   **/
  canNavigateForward(): boolean;

  /**
   * Returns the browser to the previous page.
   * @returns Returns true if the browser has returned to the previous page, false otherwise.
   * @see https://wiki.mtasa.com/wiki/NavigateBrowserBack
   **/
  navigateBack(): boolean;

  /**
   * This function takes the browser to the next page.
   * @returns Returns true if the browser has gone to the next page, false otherwise.
   * @see https://wiki.mtasa.com/wiki/NavigateBrowserForward
   **/
  navigateForward(): boolean;

  /**
   * This function reloads the current browser's page.
   * @returns Returns true if the browser has reloaded, false otherwise.
   * @see https://wiki.mtasa.com/wiki/ReloadBrowserPage
   **/
  reloadPage(): boolean;

  /**
   * This function toggles the visibility of the developer tools pane.
   * - Note: You should do a 'setDevelopmentMode(true, true)' before using this function.
   * @param visible true to show the tools, false to hide.
   * @returns Returns true if the visibility was successfully toggled, false if an error occurred.
   * @see https://wiki.mtasa.com/wiki/ToggleBrowserDevTools
   **/
  toggleDevTools(visible: boolean): boolean;

  /**
   * Allows resizing of CEF browsers at runtime.
   * - Warning: Do not use this function with onClientRender as it re-creates the underlying texture internally (which is an expensive operation).
   * @param width The new width of the browser.
   * @param height The new height of the browser.
   * @returns Returns true if the browser is resized successfully, false if there's something wrong.
   * @see https://wiki.mtasa.com/wiki/ResizeBrowser
   **/
  resize(width: number, height: number): boolean;
}
