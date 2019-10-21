/**
 * This function will attach a scripting function (handler) to a console command, so that whenever a player or administrator uses the command the function is called.
 * Multiple command handlers can be attached to a single command, and they will be called in the order that the handlers were attached.
 * Equally, multiple commands can be handled by a single function, and the commandName parameter used to decide the course of action.
 * This can be triggered from the player's console or directly from the chat box by prefixing the message with a forward slash (/). For server side handlers, the server admin is also able to trigger these directly from the server's console in the same way as they are triggered from a player's console.
 * - Important note: Do NOT use the same name for your handler function as the command name, as this can lead to confusion if multiple handler functions are used. Use a name that describes your handler's purpose more specifically.
 * - Note: You cannot use "check", "list" or "test" as a command name.
 * @param commandName This is the name of the command you wish to attach a handler to. This is what must be typed into the console to trigger the function.
 * @param handlerFunction This is the function that you want the command to trigger, which has to be defined before you add the handler. This function can take commandName parameter, followed by as many parameters as you expect after your command (see below). These are all optional.
 * @param [caseSensitive=true] Specifies if the command handler will ignore the case for this command name.
 * @returns Returns true if the command handler was added successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AddCommandHandler
 **/
declare function addCommandHandler(commandName: string, handlerFunction: (commandName: string, ...args: any[]) => void, caseSensitive?: boolean): boolean;

/**
 * Binds a player's key to a handler function or command, which will be called when the key is pressed.
 * @param key The key or control you wish to bind to the command. See key names for a list of possible keys: https://wiki.mtasa.com/wiki/Key_names and control names for a list of possible controls: https://wiki.mtasa.com/wiki/Control_names.
 * @param keyState A string that has one of the following values: "up", "down" or "both".
 * @param handlerFunction The function that will be triggered when the player's key is pressed.
 * @param arguments Any arguments you may want to pass to the function when the key is pressed by the user.Any number of arguments of can be specified, each being passed to the designated function.You may not pass functions.
 * @returns Returns true if the key was bound, false otherwise.
 * @see https://wiki.mtasa.com/wiki/BindKey
 **/
declare function bindKey(key: string, keyState: "up" | "down" | "both", handlerFunction: (name: string, keyState: string, ...args: any[]) => void, ...arguments: any[]): boolean;

/**
 * Binds a player's key to a handler function or command, which will be called when the key is pressed.
 * @param key The key or control you wish to bind to the command. See key names for a list of possible keys: https://wiki.mtasa.com/wiki/Key_names and control names for a list of possible controls: https://wiki.mtasa.com/wiki/Control_names.
 * @param keyState A string that has one of the following values: "up", "down" or "both".
 * @param commandName The name of the command that the key should be binded to.
 * @param arguments Any arguments you may want to pass to the function when the key is pressed by the user.Any number of arguments of can be specified, each being passed to the designated function.You may not pass functions.
 * @returns Returns true if the key was bound, false otherwise.
 * @see https://wiki.mtasa.com/wiki/BindKey
 **/
declare function bindKey(key: string, keyState: "up" | "down" | "both", commandName: string, ...arguments: any[]): boolean;

/**
 * This function will call all the attached functions of an existing console command, for a specified player.
 * - Note: You can only execute commands created with addCommandHandler. You cannot execute MTA harcoded commands due to security reasons.
 * @param commandName The name of the command you wish to execute. This is what must be typed into the console to trigger the function.
 * @param args Additional parameters that will be passed to the handler function(s) of the command that is called, separated by spaces.
 * @returns Returns true if the command handler was called successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ExecuteCommandHandler
 **/
declare function executeCommandHandler(commandName: string, ...args: any[]): boolean;

/**
 * This retrieves the analog control state of a control.
 * This is useful for detecting sensitive controls, such as those used on a joypad.
 * To get the analog control state for a ped, please use getPedAnalogControlState.
 * @param control The control that you want to get the state of. See control names for a list of possible controls.
 * @returns Returns a number between 0 and 1 indicating the amount the control is pressed.
 * @see https://wiki.mtasa.com/wiki/GetAnalogControlState
 **/
declare function getAnalogControlState(control: string): number | false;

// TODO: Fix types
/**
 * Returns a list of key names that are bound to the specified game control or console command.
 * @param commandOrControl the name of a game control or a console command.
 * @returns If one or more keys are bound to the specified control or console command, a table is returned indexed by the names of the keys and containing key states as values. If no keys are bound or an invalid name was passed, returns false.
 * @see https://wiki.mtasa.com/wiki/GetBoundKeys
 **/
declare function getBoundKeys(commandOrControl: string): object | false;

// TODO: Fix types
/**
 * This function is used to retrieve a list of all the registered command handlers of a given resource (or of all resources).
 * @param theResource The resource from which you wish to retrieve all command handlers.Or leave it empty to retrieve command handlers of all resources.
 * @returns Returns a table containing all the commands of the given resource or a table with subtables containing the command and theResource pointer ( { "command", theResource } ).
 * @see https://wiki.mtasa.com/wiki/GetCommandHandlers
 **/
declare function getCommandHandlers(theResource: Resource): object;

// TODO: Fix types
/**
 * Gets the commands bound to a key.
 * @param theKey See key names for a list of possible keys.
 * @param keyState A string that has one of the following values: "up", "down" or "both".
 * @returns Returns a table of the commands bound on that key.
 * @see https://wiki.mtasa.com/wiki/GetCommandsBoundToKey
 **/
declare function getCommandsBoundToKey(theKey: string, keyState: "up" | "down" | "both"): object | false;

/**
 * Gets the functions bound to a key.
 * To bind a function to a key use the bindKey function
 * @param theKey The key you wish to check the functions from.
 * @param keyState A string that has one of the following values: "up", "down" or "both".
 * @returns Returns a table of the key function(s).
 * @see https://wiki.mtasa.com/wiki/GetFunctionsBoundToKey
 **/
declare function getFunctionsBoundToKey(theKey: string, keyState: "up" | "down" | "both"): object | false;

/**
 * This function allow you get first key bound to command.
 * @param command command what you need check.
 * @returns Returns a string of first key binded to current command.
 * @see https://wiki.mtasa.com/wiki/GetKeyBoundToCommand
 **/
declare function getKeyBoundToCommand(command: string): string | false;

/**
 * getKeyBoundToFunction allows retrieval of the first key bound to a function.
 * @param theFunction The function in which you would like to check the bound key.
 * @returns Returns a string of the first key the function was bound to. Returns a string of the first key the function was bound to.
 * @see https://wiki.mtasa.com/wiki/GetKeyBoundToFunction
 **/
declare function getKeyBoundToFunction(theFunction: SimpleHandler): string | false;

/**
 * This function determines if a certain key is pressed or not.
 * - Note: 'ralt' may trigger both 'ralt' and 'lctrl', this is due to AltGr.
 * @param keyName The name of the key you're checking state of.
 * @returns Returns true if the specified key is pressed, false if it isn't or if an invalid key name is passed.
 * @see https://wiki.mtasa.com/wiki/GetKeyState
 **/
declare function getKeyState(keyName: string): boolean;

/**
 * Checks whether a GTA control is enabled or disabled for a certain player.
 * @param control The control you wish to check.See control names for a list of possible controls.
 * @returns Returns true if control is enabled, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsControlEnabled
 **/
declare function isControlEnabled(control: string): boolean;

/**
 * This function removes a command handler, that is one that has been added using addCommandHandler.
 * This function can only remove command handlers that were added by the resource that it is called in.
 * @param commandName the name of the command you wish to remove.
 * @returns Returns true if the command handler was removed successfully, false if the command doesn't exist.
 * @see https://wiki.mtasa.com/wiki/RemoveCommandHandler
 **/
declare function removeCommandHandler(commandName: string): boolean;

/**
 * Enables or disables the use of all GTA controls for a specified player.
 * @param enabled A boolean value representing whether or not the controls will be usable.
 * @param [gtaControls=true] A boolean deciding whether the enabled parameter will affect GTA's internal controls.
 * @param [mtaControls=true] A boolean deciding whether the enabled parameter will affect MTA's own controls., e.g. chatbox.
 * @returns This function returns true if controls were toggled successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ToggleAllControls
 **/
declare function toggleAllControls(enabled: boolean, gtaControls?: boolean, mtaControls?: boolean): boolean;

/**
 * Enables or disables the use of a GTA control for a specific player.
 * @param control The control that you want to toggle the ability of.
 * @param enabled A boolean value representing whether or not the key will be usable or not.
 * @returns This function true if the control was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ToggleControl
 **/
declare function toggleControl(control: string, enabled: boolean): boolean;

/**
 * Removes an existing key bind from the specified player.
 * - Note: unbindKey will only work on binds that were added by the same resource.
 * @param key The key you wish to unbind. See Key names for a list of valid key names.
 * @param keyState A string that has one of the following values: "up", "down" or "both".
 * @param command The command you wish to unbind.
 * @returns Returns true if the key was unbound, false if it was not previously bound or invalid arguments were passed to the function. Returns true if the key was unbound, false if it was not previously bound or invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/UnbindKey
 **/
declare function unbindKey(key: string, keyState: "up" | "down" | "both", command: string): boolean;

/**
 * Removes an existing key bind from the specified player.
 * - Note: unbindKey will only work on binds that were added by the same resource.
 * @param key The key you wish to unbind. See Key names for a list of valid key names.
 * @param keyState A string that has one of the following values: "up", "down" or "both".
 * @param handler The function you wish to unbind.
 * @returns Returns true if the key was unbound, false if it was not previously bound or invalid arguments were passed to the function. Returns true if the key was unbound, false if it was not previously bound or invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/UnbindKey
 **/
declare function unbindKey(key: string, keyState?: "up" | "down" | "both", handler?: SimpleHandler): boolean;
