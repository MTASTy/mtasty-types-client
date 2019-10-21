type SimpleHandler = () => void;

/**
 * This function checks if the browser can return to the previous page.
 * @param webBrowser The browser you want to check for a previous page.
 * @returns Returns true if the browser can navigate back, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CanBrowserNavigateBack
 **/
declare function canBrowserNavigateBack(webBrowser: Browser): boolean;

/**
 * This function checks if the browser can go to the next page.
 * @param webBrowser The browser you want check for a next page.
 * @returns Returns true if the browser can go to the next page, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CanBrowserNavigateForward
 **/
declare function canBrowserNavigateForward(webBrowser: Browser): boolean;

/**
 * This function creates a new web browser element.
 * - Note: You can also enable CEF development tools using toggleBrowserDevTools.
 * @param width The browser's native width. This should be greater than or equal to 1.
 * @param height The browser's native height. This should be greater than or equal to 1.
 * @param isLocal Sets whether the browser can only show local content or content from the internet (see examples for more information).
 * @param [transparent=false] true if you want the browser transparent, false for opaque.
 * @returns Returns a texture of the browser if it was created successfully, false otherwise. Returns also false, if the user disabled remote pages and isLocal was set to false.
 * @see https://wiki.mtasa.com/wiki/CreateBrowser
 **/
declare function createBrowser(width: number, height: number, isLocal: boolean, transparent?: boolean): Browser | false;

/**
 * This function executes a Javascript string to the specified browser. Works only with local browsers.
 * @param webBrowser The web browser which will execute the Javascript code.
 * @param jsCode The Javascript code string.
 * @returns Returns true if executing Javascript is allowed in the current context, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ExecuteBrowserJavascript
 **/
declare function executeBrowserJavascript(webBrowser: Browser, jsCode: string): boolean;

/**
 * This function will attempt to focus the browser or unfocus all browsers. The browser that is focused will retrieve keyboard input.
 * @param webBrowser The web browser to be focused.
 * @returns Returns true if the browser was focused or if undefined was passed, false if it failed to focus or the browser does not exist.
 * @see https://wiki.mtasa.com/wiki/FocusBrowser
 **/
declare function focusBrowser(webBrowser: Browser): boolean | undefined;

/**
 * This function gets a given property of a specified browser.
 * @param theBrowser browser element to get the property value of.
 * @param key The browser property key. It can be "mobile" (surfing the web as mobile).
 * @returns Returns the value if the property was successfully found, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetBrowserProperty
 **/
declare function getBrowserProperty(theBrowser: Browser, key: string): any;

// TODO: Fix types
/**
 * This function returns a table containing the browser settings.
 * @returns A object.
 * @see https://wiki.mtasa.com/wiki/GetBrowserSettings
 **/
declare function getBrowserSettings(): object;

/**
 * This function can be used to retrieve the source code of a website (asynchronously).
 * The size of the source code is limited to 2 MiB (remaining bytes are cut).
 * @param webBrowser The browser element you want to get the source of.
 * @param callback a callback function.
 * @returns Returns true if valid arguments have been passed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetBrowserSource
 **/
declare function getBrowserSource(webBrowser: Browser, callback: SimpleHandler): boolean;

/**
 * This function returns the title of the passed browser.
 * @param webBrowser The browser
 * @returns Returns the title as a string. Returns false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetBrowserTitle
 **/
declare function getBrowserTitle(webBrowser: Browser): string | false;

/**
 * This function returns the URL of the specified browser.
 * @param webBrowser The browser.
 * @returns Returns the web browser URL.
 * @see https://wiki.mtasa.com/wiki/GetBrowserURL
 **/
declare function getBrowserURL(webBrowser: Browser): string | false;

/**
 * This function injects a mouse click (state: down).
 * @param webBrowser The web browser.
 * @param mouseButton The mouse button. Possible values: "left", "middle", "right".
 * @returns Returns true if the click was successfully injected, false otherwise.
 * @see https://wiki.mtasa.com/wiki/InjectBrowserMouseDown
 **/
declare function injectBrowserMouseDown(webBrowser: Browser, mouseButton: "left" | "middle" | "right"): boolean;

/**
 * This function injects a mouse movement.
 * @param webBrowser The browser which will retrieve the mouse movement.
 * @param posX Absolute X screen coordinate.
 * @param posY Absolute Y screen coordinate.
 * @returns Returns true if the movement was injected successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/InjectBrowserMouseMove
 **/
declare function injectBrowserMouseMove(webBrowser: Browser, posX: number, posY: number): boolean;

/**
 * This function injects a mouse click (state: up).
 * @param webBrowser The web browser.
 * @param mouseButton The mouse button. Possible values: "left", "middle", "right".
 * @returns Returns true if the click was successfully injected, false otherwise.
 * @see https://wiki.mtasa.com/wiki/InjectBrowserMouseUp
 **/
declare function injectBrowserMouseUp(webBrowser: Browser, mouseButton: "left" | "middle" | "right"): boolean;

/**
 * This function injects mouse wheel events.
 * @param webBrowser The web browser.
 * @param verticalScroll Amount of units you want the browser to scroll along the Y-axe.
 * @param horizontalScroll Amount of units you want the browser to scroll along the X-axe.
 * @returns Returns true if the mouse action was successfully injected, false otherwise.
 * @see https://wiki.mtasa.com/wiki/InjectBrowserMouseWheel
 **/
declare function injectBrowserMouseWheel(webBrowser: Browser, verticalScroll: number, horizontalScroll: number): boolean;

/**
 * This function checks if the specified URL is blocked from being loaded.
 * @param address A website URL.
 * @param [isURL=false] true if address should be parsed as URL, false otherwise.
 * @returns Returns false if the URL is able to be loaded, true if it is blocked and undefined if an invalid domain/URL was passed.
 * @see https://wiki.mtasa.com/wiki/IsBrowserDomainBlocked
 **/
declare function isBrowserDomainBlocked(address: string, isURL?: boolean): boolean | undefined;

/**
 * This function checks if a browser is focused.
 * @param webBrowser The browser.
 * @returns Returns true if the browser is focused, false otherwise and undefined if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/IsBrowserFocused
 **/
declare function isBrowserFocused(webBrowser: Browser): boolean | undefined;

/**
 * This function checks if a browser is currently loading a website.
 * @param webBrowser The browser.
 * @returns Returns true if the browser is loading a website, false otherwise and undefined if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/IsBrowserLoading
 **/
declare function isBrowserLoading(webBrowser: Browser): boolean | undefined;

/**
 * This function loads the specified URL.
 * - Note: You should use requestBrowserDomains first to request permission to load the url on the client.
 * @param webBrowser The browser element which will load the URL.
 * @param url The url you want to load. It can either contain a remote website ("http://" prefix) or a website stored within a local resource.
 * @param [postData=""] The post data passed to the website. Its content type can be any type (e.g. JSON) if urlEncoded is set to false.
 * @param [urlEncoded=true] If set to true, it will be available f.e. in PHP's $_POST variable (the content type is: application/x-www-form-urlencoded).
 * @returns Returns true if the URL was successfully loaded.
 * @see https://wiki.mtasa.com/wiki/LoadBrowserURL
 **/
declare function loadBrowserURL(webBrowser: Browser, url: string, postData?: string, urlEncoded?: boolean): boolean;

/**
 * Returns the browser to the previous page.
 * @param webBrowser The browser that you want return to the previous page.
 * @returns Returns true if the browser has returned to the previous page, false otherwise.
 * @see https://wiki.mtasa.com/wiki/NavigateBrowserBack
 **/
declare function navigateBrowserBack(webBrowser: Browser): boolean;

/**
 * This function takes the browser to the next page.
 * @param webBrowser The browser that you want to take to the next page.
 * @returns Returns true if the browser has gone to the next page, false otherwise.
 * @see https://wiki.mtasa.com/wiki/NavigateBrowserForward
 **/
declare function navigateBrowserForward(webBrowser: Browser): boolean;

/**
 * This function reloads the current browser's page.
 * @param webBrowser The browser that you want to reload.
 * @returns Returns true if the browser has reloaded, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ReloadBrowserPage
 **/
declare function reloadBrowserPage(webBrowser: Browser): boolean;

// TODO: Fix types
/**
 * This function opens a request window in order to accept the requested remote URLs.
 * - Note: You must use this function prior to calling loadBrowserURL because every domain is blocked by default.
 * @param pages A object containing all domains.
 * @param [parseAsURL=false] true if the passed addresses should be converted from URLs, false otherwise.
 * @param callback A callback function that is called as soon as the result is available.
 * @returns Returns true, if the string was successfully read, false otherwise.
 * @see https://wiki.mtasa.com/wiki/RequestBrowserDomains
 **/
declare function requestBrowserDomains(pages: object, parseAsURL?: boolean, callback?: SimpleHandler): boolean;

/**
 * Allows resizing of CEF browsers at runtime.
 * - Warning: Do not use this function with onClientRender as it re-creates the underlying texture internally (which is an expensive operation).
 * @param webBrowser The browser you want to resize.
 * @param width The new width of the browser.
 * @param height The new height of the browser.
 * @returns Returns true if the browser is resized successfully, false if there's something wrong.
 * @see https://wiki.mtasa.com/wiki/ResizeBrowser
 **/
declare function resizeBrowser(webBrowser: Browser, width: number, height: number): boolean;

/**
 * This function provides a requestable ajax resource communication for a browser.
 * - Warning: Do not use the same path as an existing file as url parameter. Ajax handlers have a higher priority than regular files, which will lead to inaccesibility of the original file if an ajax handler is attached to the same path.
 * @param webBrowser The web browser which will execute the Javascript code.
 * @param url The URL endpoint to handle.
 * @param handler The function to call if the webBrowser attempts to open the ajax endpoint. If this parameter is omitted, the ajax handler for the url will be deleted.
 * @returns Returns true if the ajax handler could be created/removed.
 * @see https://wiki.mtasa.com/wiki/SetBrowserAjaxHandler
 **/
declare function setBrowserAjaxHandler(webBrowser: Browser, url: string, handler?: SimpleHandler): boolean;

/**
 * This function sets a given property of a specified browser.
 * @param theBrowser The browser element you want to set a property of.
 * @param key The browser property key. It can be "mobile".
 * @param value A value indicating whether to enable ("1") the property or not ("0").
 * @returns Returns true if the property was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetBrowserProperty
 **/
declare function setBrowserProperty(theBrowser: Browser, key: "mobile", value: "1" | "0"): boolean;

/**
 * This function sets the rendering state of a browser.
 * @param webBrowser The browser.
 * @param paused true to pause rendering, false to continue.
 * @returns Returns true if the state was successfully changed.
 * @see https://wiki.mtasa.com/wiki/SetBrowserRenderingPaused
 **/
declare function setBrowserRenderingPaused(webBrowser: Browser, paused: boolean): boolean;

/**
 * This function sets either a specific browser's volume, or the overall volume for browsers.
 * @param webBrowser A browser element.
 * @param volume A number representing the desired volume level. Range is from 0.0 to 1.0.
 * @returns Returns true if the state was successfully changed.
 * @see https://wiki.mtasa.com/wiki/SetBrowserVolume
 **/
declare function setBrowserVolume(webBrowser: Browser, volume: number): boolean;

/**
 * This function sets either a specific browser's volume, or the overall volume for browsers.
 * @param volume A number representing the desired volume level. Range is from 0.0 to 1.0.
 * @returns Returns true if the state was successfully changed.
 * @see https://wiki.mtasa.com/wiki/SetBrowserVolume
 **/
declare function setBrowserVolume(volume: number): boolean;

/**
 * This function toggles the visibility of the developer tools pane.
 * - Note: You should do a 'setDevelopmentMode(true, true)' before using this function.
 * @param webBrowser The browser.
 * @param visible true to show the tools, false to hide.
 * @returns Returns true if the visibility was successfully toggled, false if an error occurred.
 * @see https://wiki.mtasa.com/wiki/ToggleBrowserDevTools
 **/
declare function toggleBrowserDevTools(webBrowser: Browser, visible: boolean): boolean;
