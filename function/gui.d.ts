/**
 * This function brings a GUI element on top of others.
 * - Note: If property "AlwaysOnTop" sets to "True", this function will return false.
 * @param guiElement the GUI element that you want to move to the front.
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiBringToFront
 **/
declare function guiBringToFront(guiElement: GuiElement): boolean;

// TODO: Fix types
/**
 * Returns information about how the chatbox looks.
 * These values come from the file called: Chatboxpresets.xml but it depends on what type of preset you currently have, which is chosen from your settings in the 'Interface' tab.
 * @param CVar the name of the property you want returned.
 * @returns Returns 4 numbers if the CVar contains "color" or 2 numbers if chat_scale was entered or 1 number if any other CVar was specified or a table of all CVar values, if CVar was not specified or false if an invalid CVar was specified.
 * @see https://wiki.mtasa.com/wiki/GetChatboxLayout
 * @tupleReturn
 **/
declare function getChatboxLayout(CVar: string): [number, number, number, number] | [number, number] | [number] | [object] | [false];

/**
 * This function creates a GUI font element that can be used in guiSetFont.
 * Successful font creation is not guaranteed, and may fail due to hardware or memory limitations.
 * To see if creation is likely to fail, use dxGetStatus (when VideoMemoryFreeForMTA is zero, failure is guaranteed).
 * @param filepath the name of the file containing the font.
 * @param [size=9] size of the font.
 * @returns Returns a GUI font element if successful, false if invalid arguments were passed to the function, or there is insufficient resources available. You should always check to see if this function has returned false.
 * @see https://wiki.mtasa.com/wiki/GuiCreateFont
 **/
declare function guiCreateFont(filepath: string, size?: number): GuiFont | false;

/**
 * This function defocuses a focused GUI element.
 * Used primarily for edit fields and memos.
 * @param guiElement the GUI element that you want to defocus.
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiBlur
 **/
declare function guiBlur(guiElement: GuiElement): boolean;

/**
 * This function focuses a defocused GUI element.
 * Used primarily for edit fields and memos.
 * @param guiElement the GUI element that you want to focus.
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiFocus
 **/
declare function guiFocus(guiElement: GuiElement): boolean;

/**
 * Alpha represents the transparency of a gui element.
 * This function allows retrieval of a gui element's current alpha.
 * @param guiElement The gui element in which you want to retrieve the alpha of.
 * @returns This function returns a positive number in between 0 and 1 of the gui element's current alpha, or false if it could not be retrieved.
 * @see https://wiki.mtasa.com/wiki/GuiGetAlpha
 **/
declare function guiGetAlpha(guiElement: GuiElement): number | false;

/**
 * This function is used to get the type of the current cursor image.
 * @returns Returns a string containing the cursor type.
 * @see https://wiki.mtasa.com/wiki/GuiGetCursorType
 **/
declare function guiGetCursorType(): string;

/**
 * This function determines if a GUI element is enabled.
 * @param guiElement the GUI element to be checked.
 * @returns Returns true if the element is enabled, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGetEnabled
 **/
declare function guiGetEnabled(guiElement: GuiElement): boolean;

/**
 * This function is used to get the current font that is used to draw text in GUI elements.
 * @param guiElement element you wish to get the font of.
 * @returns A string containing the name of the element's current font, or false if the gui element passed to the function is invalid or the custom GUI font that is used, or undefined otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGetFont
 **/
declare function guiGetFont(guiElement: GuiElement): string | GuiFont | undefined | false;

/**
 * This function checks whether user input is focused on the GUI or the game.
 * @returns Returns true if input is focused on GUI, false if it's focused on the game.
 * @see https://wiki.mtasa.com/wiki/GuiGetInputEnabled
 **/
declare function guiGetInputEnabled(): boolean;

/**
 * This function returns the current input mode as set by guiSetInputMode.
 * Default mode is "allow_binds".
 * @returns Returns a string defining the current input mode.
 * @see https://wiki.mtasa.com/wiki/GuiGetInputMode
 **/
declare function guiGetInputMode(): string;

/**
 * This function allows retrieval of a GUI element's current position, relative to its parent.
 * @param guiElement The gui element of which you wish to retrieve the position.
 * @param relative A boolean representing whether the position should be relative to the element's parent width, or the number of offset pixels from the parent's origin.
 * @returns Returns numbers representing the x and y position of the element, or false if the position could not be retrieved.
 * @tupleReturn
 * @see https://wiki.mtasa.com/wiki/GuiGetPosition
 **/
declare function guiGetPosition(guiElement: GuiElement, relative: boolean): [number, number] | [false];

// TODO: Fix types
/**
 * This function gets a list of the CEGUI property names and values of a GUI element.
 * To find out what the different properties mean, check out the CEGUI properties page.
 * @param guiElement the GUI element you wish to get the properties of.
 * @returns If the function succeeds, the return value is a table. Its keys are property names, the corresponding values are the values of the properties (both names and values are always strings). If the function fails, it returns false.
 * @see https://wiki.mtasa.com/wiki/GuiGetProperties
 **/
declare function guiGetProperties(guiElement: GuiElement): object | false;

/**
 * This function gets the value of a specific CEGUI property of a GUI element.
 * For a list of properties and their meaning, see the CEGUI properties page.
 * @param guiElement the GUI element you wish to get a property of.
 * @param property the name of of property you want the value of.
 * @returns If the function succeeds, it returns a string with the value of the property. If it fails, it returns false.
 * @see https://wiki.mtasa.com/wiki/GuiGetProperty
 **/
declare function guiGetProperty(guiElement: GuiElement, property: string): string | false;

/**
 * This function retrieves the local screen size according to the resolution they are using.
 * @returns This returns two numbers representing the player's screen resolution, width and height.
 * @see https://wiki.mtasa.com/wiki/GuiGetScreenSize
 * @tupleReturn
 **/
declare function guiGetScreenSize(): [number, number];

/**
 * This function gets the size of a GUI element.
 * @param theElement The GUI element to get size of.
 * @param relative A boolean representing whether the size should be relative to the element's parent width, or an absolute size in pixels.
 * @returns Returns the GUI element size x and y if the function has been successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGetSize
 * @tupleReturn
 **/
declare function guiGetSize(theElement: GuiElement, relative: boolean): [number, number] | [false];

/**
 * This function is used to get the text of GUI elements like edit boxes, labels, buttons etc.
 * @param guiElement element you wish to get text of.
 * @returns Returns a string containing the requested element's text, or false if the gui element passed to the function is invalid.
 * @see https://wiki.mtasa.com/wiki/GuiGetText
 **/
declare function guiGetText(guiElement: GuiElement): string | false;

/**
 * This function determines if a GUI element is visible.
 * @param guiElement the GUI element to be checked.
 * @returns Returns true if the element is visible, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGetVisible
 **/
declare function guiGetVisible(guiElement: GuiElement): boolean;

/**
 * This function moves a GUI element to the very back of all other GUI elements.
 * @param guiElement the GUI element that you want to move to the back
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiMoveToBack
 **/
declare function guiMoveToBack(guiElement: GuiElement): boolean;

/**
 * This changes the alpha level (the visibleness/transparency) of a GUI element.
 * @param guiElement the GUI element whose visibility is to be changed.
 * @param alpha The visibility/transparency of the GUI element. Ranges from 0 (fully transparent) to 1 (fully opaque). Default value is 0.80.
 * @returns Returns true if the gui element's alpha was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiSetAlpha
 **/
declare function guiSetAlpha(guiElement: GuiElement, alpha: number): boolean;

/**
 * This function enables/disables a GUI element.
 * A disabled GUI element can't be used, gets a gray aspect and doesn't receive any events.
 * @param guiElement the GUI element you wish to enable or disable.
 * @param enabled the new state.
 * @returns If the function succeeds it returns true, if it fails it returns false.
 * @see https://wiki.mtasa.com/wiki/GuiSetEnabled
 **/
declare function guiSetEnabled(guiElement: GuiElement, enabled: boolean): boolean;

/**
 * This function sets the font of a GUI element to be used when drawing text.
 * @param guiElement The GUI element you wish to change the font of.
 * @param font Either a custom GUI font element or the name of a built-in GUI font.
 * @returns Returns true if the font has been successfully set on the gui element, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiSetFont
 **/
declare function guiSetFont(guiElement: GuiElement, font: GuiFont | string): boolean;

/**
 * This function enables or disables input focus for the GUI.
 * This means that any keybinds or MTA binds are overidden so that text can be input into an editbox, for example.
 * In other words, keys such as t and y which activate the chatbox are disabled.
 * guiSetInputMode can be used as an extended version of guiSetInputEnabled since it provides the same functionality with one added feature.
 * @param enabled true if input should go to GUI, false if it should go to the game.
 * @returns Returns true if input mode could be changed, false if invalid parameters are passed.
 * @see https://wiki.mtasa.com/wiki/GuiSetInputEnabled
 **/
declare function guiSetInputEnabled(enabled: boolean): boolean;

/**
 * This function controls the input mode to define whether or not (and when) keybinds or MTA binds are overridden (disabled) so that text can be input into an editbox.
 * @param mode a string representing the desired input mode.
 * @returns Returns true if input mode could be changed, false if invalid parameters are passed.
 * @see https://wiki.mtasa.com/wiki/GuiSetInputMode
 **/
declare function guiSetInputMode(mode: "allow_binds" | "no_binds" | "no_binds_when_editing"): boolean;

/**
 * This function sets the position of a GUI element.
 * @param guiElement The GUI element to change position for.
 * @param x Position over the X axis.
 * @param y Position over the Y axis.
 * @param relative Bool that indicates if the x/y positions are relative to the elements parent element.
 * @returns Returns true if the position has been successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiSetPosition
 **/
declare function guiSetPosition(guiElement: GuiElement, x: number, y: number, relative: boolean): boolean;

/**
 * This function sets the value of a specific CEGUI property of a GUI element.
 * For a list of properties and their meaning, see the CEGUI properties page.
 * @param guiElement the GUI element you wish to get a property of.
 * @param property the name of of property you want the value of.
 * @param value the new value for the property.
 * @returns If the function succeeds it returns true, if it fails it returns false.
 * @see https://wiki.mtasa.com/wiki/GuiSetProperty
 **/
declare function guiSetProperty(guiElement: GuiElement, property: string, value: string): boolean;

/**
 * This function sets the dimensions (size) of a GUI element.
 * It refers to the bounding box size for GUI elements.
 * It does not make GUI elements smaller or larger in appearance.
 * @param guiElement the GUI element whose visibility is to be changed.
 * @param width The desired width setting for the gui element.
 * @param height The desired height setting for the gui element.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing sizes relative to the parent.
 * @returns Returns true if the gui element's size was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiSetSize
 **/
declare function guiSetSize(guiElement: GuiElement, width: number, height: number, relative: boolean): boolean;

/**
 * This function sets the text of a GUI element.
 * @param guiElement The GUI element you wish to change the text of.
 * @param text The new text.
 * @returns Returns true if text has been successfully set on the gui element, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiSetText
 **/
declare function guiSetText(guiElement: GuiElement, text: string): boolean;

/**
 * This function changes the visibility state of a GUI element.
 * @param guiElement the GUI element whose visibility is to be changed.
 * @param state the new visibility state.
 * @returns Returns true if the element's visibility could be changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiSetVisible
 **/
declare function guiSetVisible(guiElement: GuiElement, state: boolean): boolean;

/**
 * This function returns whether the ingame chatbox is being used (accepting chatbox input) or not.
 * @returns Returns true if the chatbox is receiving input, false if not active.
 * @see https://wiki.mtasa.com/wiki/IsChatBoxInputActive
 **/
declare function isChatBoxInputActive(): boolean;

/**
 * This function returns whether the ingame console window is visible or not.
 * @returns Returns true if the console is visible, false if not.
 * @see https://wiki.mtasa.com/wiki/IsConsoleActive
 **/
declare function isConsoleActive(): boolean;

/**
 * This function returns whether the ingame debug window is visible or not. This is the debugwindow visible using the "debugscript <level>" command.
 * @returns Returns true if the debug view is visible, false if not.
 * @see https://wiki.mtasa.com/wiki/IsDebugViewActive
 **/
declare function isDebugViewActive(): boolean;

/**
 * This function returns whether the user is in the mainmenu or not.
 * @returns Returns true if the mainmenu is visible, false if not.
 * @see https://wiki.mtasa.com/wiki/IsMainMenuActive
 **/
declare function isMainMenuActive(): boolean;

/**
 * This function returns whether any system windows that take focus are active. This includes: Chatbox input, Console window, Main menu, Transferbox.
 * To get the status of the debug view, see isDebugViewActive.
 * @returns Returns true if the focus is on the MTA window, false if it isn't.
 * @see https://wiki.mtasa.com/wiki/IsMTAWindowActive
 **/
declare function isMTAWindowActive(): boolean;

/**
 * This function returns whether the file downloading dialog box is active or not.
 * This appears when a resource is started and the client doesn't have all the files that resource requires the client to have.
 * It's important to note that resources aren't started on the client until they're completely downloaded, so a resource cannot use this function to detect if it's own files are downloaded.
 * A client-side resource triggers the onClientResourceStart event when the files it requires are downloaded.
 * @returns Returns true if the file transfer box is visible, false if not.
 * @see https://wiki.mtasa.com/wiki/IsTransferBoxActive
 **/
declare function isTransferBoxActive(): boolean;

/**
 * This function enables or disables the debug window.
 * @param enabled true if debug window should be visible, false otherwise.
 * @returns Returns true, false if invalid parameters are passed.
 * @see https://wiki.mtasa.com/wiki/SetDebugViewActive
 **/
declare function setDebugViewActive(enabled: boolean): boolean;

/**
 * This function creates a new CEGUI web browser element.
 * @param x A number of the 2D x position of the browser on a player's screen. This is affected by the relative argument.
 * @param y A number of the 2D y position of the browser on a player's screen. This is affected by the relative argument.
 * @param width The browser's native width. This should be greater than or equal to 1.
 * @param height The browser's native height. This should be greater than or equal to 1.
 * @param isLocal Sets whether the browser can only show local content or content from the internet.
 * @param isTransparent true if you want the browser to support transparency, false otherwise.
 * @param isRelative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing sizes/positions as a fraction of the screen size. If false, then the size and co-ordinates are based on client's resolution, accessible using guiGetScreenSize.
 * @param [parent=undefined] This is the parent that the radio button is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns a gui-browser element if it was created successfully, false otherwise. Returns also false, if the user disabled remote pages and isLocal was set to false.
 * @see https://wiki.mtasa.com/wiki/GuiCreateBrowser
 **/
declare function guiCreateBrowser(x: number, y: number, width: number, height: number, isLocal: boolean, isTransparent: boolean, isRelative: boolean, parent?: GuiElement): GuiBrowser | false;

/**
 * This function creates gets the browser element behind a gui-browser (a browser that has been created via guiCreateBrowser).
 * @param browser The gui-browser.
 * @returns Returns the Browser element if a correct gui-browser has been passed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGetBrowser
 **/
declare function guiGetBrowser(browser: GuiBrowser): Browser | false;

/**
 * This function allows creation of a GUI Button, which is a clickable item as part of GUI.
 * @param x A number of the 2D x position of the GUI button on a player's screen. This is affected by the relative argument.
 * @param y A number of the 2D y position of the GUI button on a player's screen. This is affected by the relative argument.
 * @param width A number of the width of the GUI button. This is affected by the relative argument.
 * @param height A number of the height of the GUI button. This is affected by the relative argument.
 * @param text A string of the text that will be displayed as a label on the button.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x, y, width and height numbers must be between 0 and 1, representing sizes relative to the parent.
 * @param [parent=undefined] This is the parent that the gui button is attached to.If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns an element of the created button if it was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateButton
 **/
declare function guiCreateButton(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: GuiElement): GuiButton | false;

/**
 * This function gets a checkbox's selection state.
 * @param theCheckbox The checkbox you wish to retrieve the selection state of.
 * @returns Returns true if the checkbox is selected, false if it is not.
 * @see https://wiki.mtasa.com/wiki/GuiCheckBoxGetSelected
 **/
declare function guiCheckBoxGetSelected(theCheckbox: GuiCheckBox): boolean;

/**
 * This function selects (ticks) or unselects a checkbox.
 * @param theCheckbox The GUI element in which you wish to change the selection state of.
 * @param state The state of the checkbox, where true indicates selected, and false indicates unselected.
 * @returns Returns true if the checkbox's selection state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCheckBoxSetSelected
 **/
declare function guiCheckBoxSetSelected(theCheckbox: GuiCheckBox, state: boolean): boolean;

/**
 * This function creates a checkbox.
 * @param x A number of the 2D x position of the checkbox on a player's screen. This is affected by the relative argument.
 * @param y A number of the 2D y position of the checkbox on a player's screen. This is affected by the relative argument.
 * @param width A number of the width of the text field next to the checkbox. This is affected by the relative argument.
 * @param height A number of the height of the text field next to the checkbox. This is affected by the relative argument.
 * @param text The text to be displayed next to the checkbox.
 * @param selected A boolean representing whether the checkbox created should be selected by default.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing measures relative to the parent.
 * @param [parent=undefined] This is the parent that the checkbox is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns element of the checkbox if it was created succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateCheckBox
 **/
declare function guiCreateCheckBox(x: number, y: number, width: number, height: number, text: string, selected: boolean, relative: boolean, parent?: GuiElement): GuiCheckBox | false;

/**
 * This function creates a combobox GUI element, which you can compare to a gridlist with a dropdown feature.
 * - Note: The height of a combobox must be enough to fit the drop down menu, else the drop down won't appear. See guiComboBoxAdjustHeight to give your combobox the correct height.
 * @param x A number of the 2D x position of the GUI combobox on a player's screen. This is affected by the relative argument.
 * @param y A number of the 2D y position of the GUI combobox on a player's screen. This is affected by the relative argument.
 * @param width A number of the width of the GUI combobox. This is affected by the relative argument.
 * @param height A number of the height of the GUI combobox. This is affected by the relative argument.
 * @param caption A string for what the title of your combobox will be. This will be shown if no item is selected.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing sizes relative to the parent.
 * @param [parent=undefined] This is the parent that the GUI combobox is attached to.If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns an element of the created combobox if it was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateComboBox
 **/
declare function guiCreateComboBox(x: number, y: number, width: number, height: number, caption: string, relative: boolean, parent?: GuiElement): GuiComboBox | false;

/**
 * Adds an item to a combobox.
 * @param comboBox The combobox you want to add a row to.
 * @param value The text that the item will contain.
 * @returns Returns the item ID if it has been created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxAddItem
 **/
declare function guiComboBoxAddItem(comboBox: GuiComboBox, value: string): number | false;

/**
 * This function removes all the items from a combobox.
 * @param comboBox The combobox element to be cleared.
 * @returns Returns true if the combobox element is valid and has been cleared successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxClear
 **/
declare function guiComboBoxClear(comboBox: GuiComboBox): boolean;

/**
 * This function returns the number of items in a combo box.
 * @param comboBox The combo box to get the number of items from.
 * @returns Returns the number of items if the function is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxGetItemCount
 **/
declare function guiComboBoxGetItemCount(comboBox: GuiComboBox): number | false;

/**
 * This function retrieves the text from a specific combobox item.
 * @param comboBox The combobox containing the item you're interested in.
 * @param itemId The index of the item.
 * @returns Returns the text of the item if the arguments are right, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxGetItemText
 **/
declare function guiComboBoxGetItemText(comboBox: GuiComboBox, itemId: number): string | false;

/**
 * This function returns the index of the selected combobox item.
 * @param comboBox the combobox you want to know the selected item index of.
 * @returns Returns the index of the selected item if the specified combobox is valid and has a selected item, -1 if no item is selected, undefined otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxGetSelected
 **/
declare function guiComboBoxGetSelected(comboBox: GuiComboBox): number | undefined;

/**
 * This function returns the state of combobox.
 * @param comboBox The combo box to get the state.
 * @returns Returns true if combobox is opened, false if combobox is closed, undefined otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxIsOpen
 **/
declare function guiComboBoxIsOpen(comboBox: GuiComboBox): boolean | undefined;

/**
 * This function removes an item from a combobox.
 * @param comboBox The combobox containing the item you're interested in.
 * @param itemId The index of the item to remove.
 * @returns Returns true if the item was removes successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxRemoveItem
 **/
declare function guiComboBoxRemoveItem(comboBox: GuiComboBox, itemId: number): boolean;

/**
 * This function changes the text of a combobox item.
 * @param comboBox The combobox containing the item you're interested in.
 * @param itemId The index of the item.
 * @param text The text you want to put in (does NOT accept numbers, use tostring for that).
 * @returns Returns true if the text was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxSetItemText
 **/
declare function guiComboBoxSetItemText(comboBox: GuiComboBox, itemId: number, text: string): boolean;

/**
 * This function set combo box state as open or close.
 * @param comboBox The combobox to be opened or closed.
 * @param state The state of combobox. true, if the combobox is to be opened. false if the combobox is to be closed.
 * @returns Returns true if is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxSetOpen
 **/
declare function guiComboBoxSetOpen(comboBox: GuiComboBox, state: boolean): boolean;

/**
 * This function sets the selected item from a combobox.
 * @param comboBox the combobox you want to select an item from.
 * @param itemIndex the item you want to select (item 0 is the first item). If -1 is specified, then the combo box text is set to it's caption.
 * @returns Returns true if the selected item has been changed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxSetSelected
 **/
declare function guiComboBoxSetSelected(comboBox: GuiComboBox, itemIndex: number): boolean;

/**
 * This function is for creating a new GUI edit box.
 * This is a text box in which the user can input text.
 * Edit boxes only allow a single line of text.
 * If you want to allow multiple lines of text create a memo box using guiCreateMemo.
 * @param x A number of the 2D x position of the GUI edit box on a player's screen. This is affected by the relative argument.
 * @param y A number of the 2D y position of the GUI edit box on a player's screen. This is affected by the relative argument.
 * @param width A number of the width of the GUI edit box. This is affected by the relative argument.
 * @param height A number of the height of the GUI edit box. This is affected by the relative argument.
 * @param text A string of the text that will be displayed by default in the edit box.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing measures relative to the parent.
 * @param [parent=undefined] This is the parent that the GUI edit box is attached to.If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns a gui-edit element of the created edit box if it was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateEdit
 **/
declare function guiCreateEdit(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: GuiElement): GuiEdit | false;

/**
 * This function returns the caret (the text cursor) position within the editbox.
 * @param guiElement The edit box you want to get the caret position from,
 * @returns Returns the caret index on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiEditGetCaretIndex
 **/
declare function guiEditGetCaretIndex(guiElement: GuiEdit): number | false;

/**
 * This function returns the maximum text length that can be typed within an edit box.
 * @param guiElement The edit box you want to get the maximum text length of.
 * @returns Returns the maximum text length on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiEditGetMaxLength
 **/
declare function guiEditGetMaxLength(guiElement: GuiEdit): number | false;

/**
 * This function checks if an edit box is masked.
 * @param guiElement: the edit box to check masked flag of.
 * @returns Returns true if the edit box is masked, false if not, undefined if an invalid edit box was provided.
 * @see https://wiki.mtasa.com/wiki/GuiEditIsMasked
 **/
declare function guiEditIsMasked(guiElement: GuiEdit): boolean | undefined;

/**
 * This function checks if an edit box is read-only.
 * @param guiElement The edit box to check read-only status of.
 * @returns Returns true if the edit box is read-only, false if not, undefined if an invalid edit box was provided.
 * @see https://wiki.mtasa.com/wiki/GuiEditIsReadOnly
 **/
declare function guiEditIsReadOnly(guiElement: GuiEdit): boolean | undefined;

/**
 * This function sets the current position of the caret (the text cursor) within the edit box.
 * @param guiElement The edit box to be changed.
 * @param index A number referring to the desired position within the box.
 * @returns Returns true if the index was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiEditSetCaretIndex
 **/
declare function guiEditSetCaretIndex(guiElement: GuiEdit, index: number): boolean;

/**
 * This function sets or removes masking (covering up the text being typed) for password text fields.
 * @param guiElement The edit box to be changed.
 * @param status A boolean value indicating whether masking is to be enabled or disabled.
 * @returns Returns true if the index was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiEditSetMasked
 **/
declare function guiEditSetMasked(guiElement: GuiEdit, status: boolean): boolean;

/**
 * This function sets the maximum text length that can be typed into an edit box.
 * @param guiElement The edit box to be changed.
 * @param length A number indicating the maximum number of characters that can be typed into the box.
 * @returns Returns true if the max length was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiEditSetMaxLength
 **/
declare function guiEditSetMaxLength(guiElement: GuiEdit, length: number): boolean;

/**
 * This function allows you to set or remove read-only status for an edit box.
 * If read-only is set to true, the box is not editable.
 * @param guiElement The element of the edit field to be modified.
 * @param status A boolean value indicating whether read-only is to be enabled or disabled.
 * @returns Returns true if edit field's read-only status was changed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiEditSetReadOnly
 **/
declare function guiEditSetReadOnly(guiElement: GuiEdit, status: boolean): boolean;

/**
 * This function creates a grid list GUI element.
 * These are menu's which are designed in lists and can have multiple columns.
 * A good example of a gridlist element can be found in MTA's settings box, under Controls.
 * @param x A number of the 2D x position of the GUI gridlist on a player's screen. This is affected by the relative argument.
 * @param y A number of the 2D y position of the GUI gridlist on a player's screen. This is affected by the relative argument.
 * @param width A number of the width of the GUI gridlist. This is affected by the relative argument.
 * @param height A number of the height of the GUI gridlist. This is affected by the relative argument.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing sizes relative to the parent.
 * @param [parent=undefined] This is the parent that the gui gridlist is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns an element of the created gridlist if it was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateGridList
 **/
declare function guiCreateGridList(x: number, y: number, width: number, height: number, relative: boolean, parent?: GuiElement): GuiGridList | false;

/**
 * This function is used to create columns in grid lists.
 * @param gridList The grid list you want to add a column to.
 * @param title Title of the column.
 * @param width Column width, relative to the grid list width.
 * @returns Returns the column id if it was created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListAddColumn
 **/
declare function guiGridListAddColumn(gridList: GuiGridList, title: string, width: number): number | false;

/**
 * Adds a row to a grid list, and optionally add simple text items with your rows.
 * Use guiGridListSetItemText to add row headers.
 * @param gridList The grid list you want to add a row to
 * @param itemText The text for the column item in the row. Either a string or a number can be passed (use numbers for sorting purposes).
 * @returns Returns the row id if it has been created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListAddRow
 **/
declare function guiGridListAddRow(gridList: GuiGridList, ...itemText: string[] | number[]): number | false;

/**
 * This allows you to automatically size a column to display everything in it correctly, with the most minimal width.
 * @param gridList The grid list element where the column is located.
 * @param columnIndex The ID of the column you want to be auto-sized.
 * @returns Returns true if the column was auto-sized, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListAutoSizeColumn
 **/
declare function guiGridListAutoSizeColumn(gridList: GuiGridList, columnIndex: number): boolean;

/**
 * This function clears all the data from a grid list.
 * @param gridList The grid list element to be cleared.
 * @returns Returns true if the grid list element is valid and has been cleared successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListClear
 **/
declare function guiGridListClear(gridList: GuiGridList): boolean;

/**
 * This allows you to get the count of existing columns in a gridlist.
 * @param gridList The grid list you want to add a column to.
 * @returns Returns a number with the amount of columns in the gridlist, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetColumnCount
 **/
declare function guiGridListGetColumnCount(gridList: GuiGridList): number | false;

/**
 * This function is used to get the column title of a gridlist column.
 * @param gridList The grid list you want to get the column title from.
 * @param columnIndex Column ID.
 * @returns Returns a string containing the column title, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetColumnTitle
 **/
declare function guiGridListGetColumnTitle(gridList: GuiGridList, columnIndex: number): string | false;

/**
 * This allows you to get the width of an existing column in a gridlist.
 * @param gridList The grid list you want to add a column to.
 * @param columnIndex Column ID of the Get size.
 * @param relative A boolean defining whether width measurements will be relative to the Gridlist size, or absolute pixels.
 * @returns Returns the width of the gridlist column, false if bad arguments were given.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetColumnWidth
 **/
declare function guiGridListGetColumnWidth(gridList: GuiGridList, columnIndex: number, relative: boolean): number | false;

/**
 * This function is used to get the horizontal scroll position from a grid list.
 * @param gridList The grid list you want to get the horizontal scroll position from.
 * @returns Returns a number between 0 and 100 indicating the horizontal scroll position, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetHorizontalScrollPosition
 **/
declare function guiGridListGetHorizontalScrollPosition(gridList: GuiGridList): number | false;

/**
 * This function gets the color of a gridlist item.
 * @param gridList The grid list element.
 * @param rowIndex Row ID.
 * @param columnIndex Column ID.
 * @returns Returns four numbers values, representing the amount of red, green, blue and alpha if successful. false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetItemColor
 * @tupleReturn
 **/
declare function guiGridListGetItemColor(gridList: GuiGridList, rowIndex: number, columnIndex: number): [number, number, number, number] | [false];

/**
 * With this function you can retrieve the string data associated with an item in a grid list.
 * This is not the text that is displayed on the item, but an internal string that you can use to hold extra information about the item.
 * - Note: This function will only work after you set the item's text using guiGridListSetItemText!
 * @param gridList the grid list containing the item you're interested in.
 * @param rowIndex the row index of the item.
 * @param columnIndex the column index of the item.
 * @returns Returns the item data of the specified item if succesful, false if one of the arguments was invalid.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetItemData
 **/
declare function guiGridListGetItemData(gridList: GuiGridList, rowIndex: number, columnIndex: number): any;

/**
 * This function retrieves the text from a specific grid list item.
 * @param gridList the gridlist containing the item you're interested in.
 * @param rowIndex row id of the item.
 * @param columnIndex column id of the item.
 * @returns Returns the text of the item if the arguments are right, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetItemText
 **/
declare function guiGridListGetItemText(gridList: GuiGridList, rowIndex: number, columnIndex: number): string | false;

/**
 * This function returns the number of rows in a grid list.
 * @param gridList The grid list to get the number of rows from.
 * @returns Returns the number of rows if the function is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetRowCount
 **/
declare function guiGridListGetRowCount(gridList: GuiGridList): number | false;

/**
 * This function returns the amount of options selected in the specified grid list.
 * @param gridList The grid list which amount of selected items you want to retrieve.
 * @returns Returns a number representing the amount of selected options if everything was successful or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetSelectedCount
 **/
declare function guiGridListGetSelectedCount(gridList: GuiGridList): number | false;

/**
 * This function returns the row and column indexes of the selected item in a grid list.
 * @param gridList the grid list you want to know the selected row index of.
 * @returns Returns the row and column indexes of the selected item if the specified grid list is valid and has a selected item, (-1, -1) if no item is selected, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetSelectedItem
 * @tupleReturn
 **/
declare function guiGridListGetSelectedItem(gridList: GuiGridList): [number, number] | [false];

// TODO: Fix types
/**
 * This function returns the items selected in the specified grid list.
 * Note that for some reason the column ID is 1 lower than it should be, for example 0 is returned but if you try and get the text for column 0 there is nothing, but column 1 has what you clicked on.
 * @param gridList The grid list which selected items you want to retrieve.
 * @returns Returns a table over the selected items in the grid list in this format: if everything was successful or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetSelectedItems
 **/
declare function guiGridListGetSelectedItems(gridList: GuiGridList): object | false;

/**
 * This function retrieves the current selection mode of a gui gridlist.
 * @param gridList The gridlist you want to get the selection mode of.
 * @returns Returns the ID of the current gridlist's selection mode  or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetSelectionMode
 **/
declare function guiGridListGetSelectionMode(gridList: GuiGridList): number | false;

/**
 * This function checks whether the gridlist sorting is enabled or disabled.
 * @param gridList The GUI gridlist you wish to check if sorting is enabled or not.
 * @returns Returns true if sorting is enabled, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListIsSortingEnabled
 **/
declare function guiGridListIsSortingEnabled(gridList: GuiGridList): boolean;

/**
 * This function is used to get the vertical scroll position from a grid list.
 * @param gridList The grid list you want to get the vertical scroll position from.
 * @returns Returns a number between 0 and 100 indicating the vertical scroll position, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetVerticalScrollPosition
 **/
declare function guiGridListIsSortingEnabled(gridList: GuiGridList): number | false;

/**
 * This allows you to insert a new row after a specified row, and simultaneously set text.
 * Good for inserting new rows in the middle of existing rows.
 * To insert at the top use -1 as row index.
 * @param gridList The grid list you want to add a row to.
 * @param rowIndex Row ID of the row you want to insert the new row after.
 * @param itemText The text for the column item in the row. Either a string or a number can be passed (use numbers for sorting purposes).
 * @returns Returns true if the row was successfully added, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListInsertRowAfter
 **/
declare function guiGridListInsertRowAfter(gridList: GuiGridList, rowIndex?: number, ...itemText: string[] | number[]): number | false;

/**
 * This allows you to delete columns that exist in grid lists.
 * @param gridList The grid list you want to remove a column from.
 * @param columnIndex Column ID.
 * @returns Returns true if the grid list column was successfully removed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListRemoveColumn
 **/
declare function guiGridListRemoveColumn(gridList: GuiGridList, columnIndex: number): boolean;

/**
 * This function is used to change the column title of a gridlist column.
 * @param gridList The grid list you want to change the column title from.
 * @param columnIndex Column ID.
 * @param title The title of the column.
 * @returns Returns true if the new title was set, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetColumnTitle
 **/
declare function guiGridListSetColumnTitle(gridList: GuiGridList, columnIndex: number, title: string): boolean;

/**
 * This allows you to set the width of an existing column in a gridlist.
 * @param gridList The grid list you want to add a column to.
 * @param columnIndex Column ID of the size you want to change.
 * @param width A number or number of the width of the column depending on the relative argument.
 * @param relative A boolean defining whether width measurements will be relative to the Gridlist size, or absolute pixels.
 * @returns Returns true if the gridlist column width was successfully set, false if bad arguments were given.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetColumnWidth
 **/
declare function guiGridListSetColumnWidth(gridList: GuiGridList, columnIndex: number, width: number, relative: boolean): boolean;

/**
 * This function is used to set the horizontal scroll position from a grid list.
 * @param gridList The grid list you want to set the horizontal scroll position from.
 * @param fPosition A number representing the horizontal scroll position (0-100).
 * @returns Returns true if the horizontal scroll position was set, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetHorizontalScrollPosition
 **/
declare function guiGridListSetHorizontalScrollPosition(gridList: GuiGridList, fPosition: number): boolean;

/**
 * This function changes the color of a gridlist item.
 * @param gridList The grid list element.
 * @param rowIndex Row ID.
 * @param columnIndex Column ID.
 * @param red The amount of red in the color (0-255).
 * @param green The amount of green in the color (0-255).
 * @param blue The amount of blue in the color (0-255).
 * @param [alpha=255] The amount of alpha in the color (0-255).
 * @returns Returns true if the item color was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetItemColor
 **/
declare function guiGridListSetItemColor(gridList: GuiGridList, rowIndex: number, columnIndex: number, red: number, green: number, blue: number, alpha?: number): boolean;

/**
 * This function sets a Item Data associated to a grid list item.
 * - Note: This function will only work after you set the item's text using guiGridListSetItemText!
 * @param gridList A gridlist element of the data you wish to set to.
 * @param rowIndex The row of the item you wish to set to.
 * @param columnIndex The column of the item you wish to set to.
 * @param data The data you wish to set to the item.
 * @returns Returns true if the data was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetItemData
 **/
declare function guiGridListSetItemData(gridList: GuiGridList, rowIndex: number, columnIndex: number, data: any): boolean;

/**
 * This function changes the text of a gridlist item.
 * Notice: This function doesn't work well with Sorting.
 * If you are using sorting, please use the optional arguments of guiGridListAddRow as much as possible.
 * @param gridList The grid list element.
 * @param rowIndex Row ID.
 * @param columnIndex Column ID.
 * @param text The text you want to put in (does NOT accept numbers, use tostring for that).
 * @param section Determines if the item is a section.
 * @param number Tells whether the text item is a number value or not (used for sorting).
 * @returns Returns true if the item text was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetItemText
 **/
declare function guiGridListSetItemText(gridList: GuiGridList, rowIndex: number, columnIndex: number, text: string, section: boolean, number: boolean): boolean;

/**
 * This function allows a gridlist's scrollbar to be forced on, or returned to default.
 * @param gridList The GUI gridlist you wish to change the state of scrollbars.
 * @param horizontalBar A bool where true forces the horizontal scrollbar on, and false returns them to default.
 * @param verticalBar A bool where true forces the verical scrollbar on, and false returns them to default.
 * @returns Returns true if the scrollbars were successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetScrollBars
 **/
declare function guiGridListSetScrollBars(gridList: GuiGridList, horizontalBar: boolean, verticalBar: boolean): boolean;

/**
 * This function selects an item from a gridlist.
 * If you wish to deselect whatever item is selected, pass 0 as both the rowIndex and columnIndex arguments.
 * @param gridList the grid list you want to select an item from.
 * @param rowIndex the row you want to select (index 0 is the first row).
 * @param columnIndex the column you want to select (index 1 is the first column).
 * @param [bReset=true] set to false for multiple selections.
 * @returns Returns true if the passed arguments are correct and the item has been selected, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetSelectedItem
 **/
declare function guiGridListSetSelectedItem(gridList: GuiGridList, rowIndex: number, columnIndex: number, bReset?: boolean): boolean;

/**
 * This function sets the selection mode of a gui gridlist.
 * For example, the MTA server browser selects a whole row, while the Controls dialog selects a single cell.
 * To select multiple items you must be holding down 'ctrl'.
 * @param gridList The gridlist in which you wish to set the selection mode.
 * @param mode The mode of the selection. Can be the following values: 0 - 9.
 * @returns Returns true if the selection mode was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetSelectionMode
 **/
declare function guiGridListSetSelectionMode(gridList: GuiGridList, mode: number): boolean;

/**
 * This function allows the disabling or enabling of sorting within a gridlist.
 * Sorting is achieved by clicking a column header.
 * Gridlist items will be sorted according to the clicked column.
 * By default, gridlists have sorting enabled.
 * This function will allow you to toggle this.
 * @param gridList The GUI gridlist you wish to toggle the sorting of.
 * @param enabled A boolean representing whether the sorting is enabled, or disabled.
 * @returns Returns true if sorting was successfully toggled., false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetSortingEnabled
 **/
declare function guiGridListSetSortingEnabled(gridList: GuiGridList, enabled: boolean): boolean;

/**
 * This function is used to set the vertical scroll position from a grid list.
 * @param gridList The grid list you want to set the vertical scroll position from.
 * @param fPosition A number representing the vertical scroll position (0-100).
 * @returns Returns true if the vertical scroll position was set, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetVerticalScrollPosition
 **/
declare function guiGridListSetSortingEnabled(gridList: GuiGridList, fPosition: number): boolean;

/**
 * This function creates a new GUI memo.
 * This is a multiline edit box in which the user can input text.
 * @param x A number of the 2D x position of the GUI memo on a player's screen. This is affected by the relative argument.
 * @param y A number of the 2D y position of the GUI memo on a player's screen. This is affected by the relative argument.
 * @param width A number of the width of the GUI memo. This is affected by the relative argument.
 * @param height A number of the height of the GUI memo. This is affected by the relative argument.
 * @param text A string of the text that will be displayed by default in the memo.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing measures relative to the parent.
 * @param [parent=undefined] This is the parent that the GUI memo is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns a gui-memo element of the created memo if it was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateMemo
 **/
declare function guiCreateMemo(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: GuiElement): GuiMemo | false;

/**
 * This function returns the caret (the text cursor) position within the memo box.
 * @param theMemo The memo box you want to get the caret position from.
 * @returns Returns the caret index on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiMemoGetCaretIndex
 **/
declare function guiMemoGetCaretIndex(theMemo: GuiMemo): number | false;

/**
 * This function is used to get the vertical scroll position of a memo as a percentage.
 * @param theMemo the memo you want to know the vertical scroll position of.
 * @returns Returns a number ranging between 0 and 100, or false otherwise.
 * @see https://wiki.multitheftauto.com/wiki/GuiMemoGetVerticalScrollPosition
 **/
declare function guiMemoGetVerticalScrollPosition(theMemo: GuiMemo): number | false;

/**
 * This function is used to set the vertical scroll position of a memo as a percentage.
 * @param theMemo the memo you want to change the vertical scroll position of.
 * @param position a number ranging between 0 and 100.
 * @returns Returns true if the position was set, false otherwise.
 * @see https://wiki.multitheftauto.com/wiki/GuiMemoSetVerticalScrollPosition
 **/
declare function guiMemoSetVerticalScrollPosition(theMemo: GuiMemo, position: number): number | false;

/**
 * This function checking if memo is read only or no.
 * @param theMemo The memo to check read-only status of.
 * @returns Returns true if the memo is read only, false if the memo isn't read only, undefined otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiMemoIsReadOnly
 **/
declare function guiMemoIsReadOnly(theMemo: GuiMemo): boolean | undefined;

/**
 * This function sets the current position of the caret (the text cursor) within the memo.
 * @param theMemo The memo edit box where the caret position is to be changed.
 * @param index A number referring to the desired character position within the box. 0 would be before the first character in the box, 1 before the second, etc.
 * @returns Returns true if the caret was successfully moved, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiMemoSetCaretIndex
 **/
declare function guiMemoSetCaretIndex(theMemo: GuiMemo, index: number): boolean;

/**
 * This function allows you to set or remove read-only status for a GUI memo.
 * If read-only is set to true, the contents are not editable.
 * @param theMemo The memo to change read-only status of.
 * @param status A boolean value indicating whether read-only is to be enabled or disabled.
 * @returns Returns true if the status was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiMemoSetReadOnly
 **/
declare function guiMemoSetReadOnly(theMemo: GuiMemo, status: boolean): boolean;

/**
 * This function creates a progress bar.
 * @param x A number of the 2D x position of the progress bar on a player's screen. This is affected by the relative argument.
 * @param y A number of the 2D y position of the progress bar on a player's screen. This is affected by the relative argument.
 * @param width A number of the width of the progress bar. This is affected by the relative argument.
 * @param height A number of the height of the progress bar. This is affected by the relative argument.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing measures relative to the parent.
 * @param [parent=undefined] This is the parent that the progress bar is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parent's origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns element of the progress bar if it was created succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateProgressBar
 **/
declare function guiCreateProgressBar(x: number, y: number, width: number, height: number, relative: boolean, parent?: GuiElement): GuiProgressBar | false;

/**
 * This function gets the progress of a progress bar as a percentage.
 * @param theProgressbar The progressbar you want to check.
 * @returns Returns a number ranging between 0 and 100.
 * @see https://wiki.mtasa.com/wiki/GuiProgressBarGetProgress
 **/
declare function guiProgressBarGetProgress(theProgressbar: GuiProgressBar): number | false;

/**
 * This function is used to set the progress of a progressbar as a percentage.
 * @param theProgressbar The progressbar you want to change the progress of.
 * @param progress a number ranging from 0 - 100.
 * @returns Returns true if the progress was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiProgressBarGetProgress
 **/
declare function guiProgressBarSetProgress(theProgressbar: GuiProgressBar, progress: number): boolean;

/**
 * This function creates a radio button.
 * @param x A number of the 2D x position of the radio button on a player's screen. This is affected by the relative argument.
 * @param y A number of the 2D y position of the radio button on a player's screen. This is affected by the relative argument.
 * @param width A number of the width of the text field next to the radio button. This is affected by the relative argument.
 * @param height A number of the height of the text field next to the radio button. This is affected by the relative argument.
 * @param text The text to be displayed next to the radio button.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing measures relative to the parent.
 * @param [parent=undefined] This is the parent that the radio button is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parent's origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.NOTE: All radio buttons become grouped together with their parent item.Only ONE radio button per group/parent will be able to be selected at the same time.
 * @returns Returns element of the radio button if it was created succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateRadioButton
 **/
declare function guiCreateRadioButton(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: GuiElement): GuiRadioButton | false;

/**
 * This function gets a radio button's selection state.
 * @param guiRadioButton The radio button you wish to retrieve the selection state of.
 * @returns Returns true if the radio button is selected, false if it is not.
 * @see https://wiki.mtasa.com/wiki/GuiRadioButtonGetSelected
 **/
declare function guiRadioButtonGetSelected(guiRadioButton: GuiRadioButton): boolean;

/**
 * This function selects or unselects a radio button.
 * @param guiRadioButton The GUI radio button in which you wish to change the selection state of.
 * @param state The state of the radio button, where true indicates selected, and false indicates unselected.
 * @returns Returns true if the radio button's selection state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiRadioButtonSetSelected
 **/
declare function guiRadioButtonSetSelected(guiRadioButton: GuiRadioButton, state: boolean): boolean;

/**
 * This function creates a GUI scrollbar.
 * You can use the functions guiScrollPaneSetHorizontalScrollPosition, guiScrollPaneSetVerticalScrollPosition, guiScrollPaneGetHorizontalScrollPosition and guiScrollPaneGetVerticalScrollPosition to read and modify the scrollbar's scroll.
 * @param x the 2D x offset of the GUI scrollbar from its parent. This is affected by the relative argument.
 * @param y the 2D y offset of the GUI scrollbar from its parent. This is affected by the relative argument.
 * @param width the width of the GUI scrollbar. This is affected by the relative argument.
 * @param height the height of the GUI scrollbar. This is affected by the relative argument.
 * @param horizontal whether this scrollbar is horizontal (true) or vertical (false).
 * @param relative whether sizes and positions are relative to their parent's. If this is true, then all measures must be between 0 and 1, representing sizes/positions as a fraction of the parent widget's size.
 * @param parent the gui-element this scrollbar is attached to. By default, it is undefined, meaning the widget is attached to the background.
 * @returns Returns a gui-scrollbar if it was created successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateScrollBar
 **/
declare function guiCreateScrollBar(x: number, y: number, width: number, height: number, horizontal: boolean, relative: boolean, parent?: GuiElement): GuiScrollBar | false;

/**
 * This function gets the scroll amount of a scrollbar as a percentage.
 * @param theScrollBar The scrollbar you want to check.
 * @returns Returns a number ranging between 0 and 100, representing the amount the scrollbar has been scrolled.
 * @see https://wiki.mtasa.com/wiki/GuiScrollBarGetScrollPosition
 **/
declare function guiScrollBarGetScrollPosition(theScrollBar: GuiScrollBar): number | false;

/**
 * This function is used to set the scroll amount of a scrollbar as a percentage.
 * @param theScrollBar The scrollbar you want to change the progress of.
 * @param amount a number ranging from 0 - 100 representing the amount you wish to set the scroll bar.
 * @returns Returns true if the scroll position was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiScrollBarSetScrollPosition
 **/
declare function guiScrollBarSetScrollPosition(theScrollBar: GuiScrollBar, amount: number): boolean;

/**
 * This creates a GUI scroll pane.
 * @param x the 2D x offset of the GUI scrollpane from its parent. This is affected by the relative argument.
 * @param y the 2D y offset of the GUI scrollpane from its parent. This is affected by the relative argument.
 * @param width the width of the GUI scrollpane. This is affected by the relative argument.
 * @param height the height of the GUI scrollpane. This is affected by the relative argument.
 * @param relative whether sizes and positions are relative to their parent's. If this is true, then all measures must be between 0 and 1, representing sizes/positions as a fraction of the parent widget's size.
 * @param parent the gui-element this scrollpane is attached to. By default, it is undefined, meaning the widget is attached to the background.
 * @returns The gui-element if created, otherwise false.
 * @see https://wiki.mtasa.com/wiki/GuiCreateScrollPane
 **/
declare function guiCreateScrollPane(x: number, y: number, width: number, height: number, relative: boolean, parent?: GuiElement): GuiScrollPane | false;

/**
 * This function is used to get the position of a horizontal scroll pane as a percentage.
 * @param horizontalScrollPane The scroll pane you want to know the position of.
 * @returns Returns a number ranging between 0 and 100, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiScrollPaneGetHorizontalScrollPosition
 **/
declare function guiScrollBarSetScrollPosition(horizontalScrollPane: GuiScrollPane): number | false;

/**
 * This function is used to get the position of a vertical scroll pane as a percentage.
 * @param verticalScrollPane The scroll pane you want to know the position of.
 * @returns Returns a number ranging between 0 and 100, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiScrollPaneGetVerticalScrollPosition
 **/
declare function guiScrollPaneGetVerticalScrollPosition(verticalScrollPane: GuiScrollPane): number | false;

/**
 * This function is used to set the position of a horizontal scroll pane as a percentage.
 * @param horizontalScrollPane The scroll pane you want to change the position of.
 * @param position a number ranging from 0 - 100.
 * @returns Returns true if the position was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiScrollPaneSetHorizontalScrollPosition
 **/
declare function guiScrollPaneSetHorizontalScrollPosition(horizontalScrollPane: GuiScrollPane, position: number): boolean;

/**
 * This function allows a scrollpane's scrollbars to be forced on, or returned to default.
 * @param scrollPane the GUI scrollpane element you want to set the scrollbars of.
 * @param horizontal A bool where true forces the horizontal scrollbar on, and false returns them to default.
 * @param vertical A bool where true forces the vertical scrollbar on, and false returns them to default.
 * @returns Returns true if the call was successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiScrollPaneSetScrollBars
 **/
declare function guiScrollPaneSetScrollBars(scrollPane: GuiScrollPane, horizontal: boolean, vertical: boolean): boolean;

/**
 * This function is used to set the position of a vertical scroll pane as a percentage..
 * @param verticalScrollPane The scroll pane you want to change the position of.
 * @param position a number ranging from 0 - 100.
 * @returns Returns true if the position was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiScrollPaneSetVerticalScrollPosition
 **/
declare function guiScrollPaneSetVerticalScrollPosition(verticalScrollPane: GuiScrollPane, position: number): boolean;

/**
 * This function creates a static image using a .png image in the resource.
 * @param x A number of the 2D x position of the image on a player's screen. This is affected by the relative argument.
 * @param y A number of the 2D y position of the image on a player's screen. This is affected by the relative argument.
 * @param width A number of the width of the image. This is affected by the relative argument.
 * @param height A number of the height of the image. This is affected by the relative argument.
 * @param path The filepath of the image file that is being loaded.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing measures relative to the parent.
 * @param [parent=undefined] This is the parent that the image is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns element if image was created successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateStaticImage
 **/
declare function guiCreateStaticImage(x: number, y: number, width: number, height: number, path: string, relative: boolean, parent?: GuiElement): GuiStaticImage | false;

/**
 * This function gets the native size of image.
 * That means the original size in pixels of the image file.
 * @param theImage The static image element to get the original size of.
 * @returns Returns two numbers where first is the width and second the height of the image in pixels, false if the image element was invalid.
 * @see https://wiki.mtasa.com/wiki/GuiStaticImageGetNativeSize
 * @tupleReturn
 **/
declare function guiStaticImageGetNativeSize(theImage: GuiStaticImage): [number, number] | [false];

/**
 * This function allows you to change the image in GUI static image element to another one.
 * - Tip: If you set other images as children you will have to use setElementCallPropagationEnabled to only affect the parent image.
 * @param theElement The static image element to be changed.
 * @param filename A string specifying the filepath of the image file being loaded in current resource.
 * @returns Returns true if the the image in the static image element was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiStaticImageLoadImage
 **/
declare function guiStaticImageLoadImage(theElement: GuiStaticImage, filename: string): boolean;

/**
 * This function creates a Tab Panel, which acts as a template to create Tabs upon.
 * @param x A number of the 2D x position of the GUI tab panel on a player's screen. This is affected by the relative argument.
 * @param y A number of the 2D y position of the GUI tab panel on a player's screen. This is affected by the relative argument.
 * @param width A number of the width of the GUI tab panel. This is affected by the relative argument.
 * @param height A number of the height of the GUI tab panel. This is affected by the relative argument.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing sizes relative to the parent.
 * @param [parent=undefined] This is the parent that the tab panel is attached to.If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parent's origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns a GUI tab panel element if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateTabPanel
 **/
declare function guiCreateTabPanel(x: number, y: number, width: number, height: number, relative: boolean, parent?: GuiElement): GuiTabPanel | false;

/**
 * This function returns the currently selected tab in the specified tab panel.
 * @param tabPanel The tab panel which current tab you want to retrieve.
 * @returns Returns an element of the tab if a tab was selected or undefined if no tab was selected. If passed arguments were invalid or something went wrong, the function will return false.
 * @see https://wiki.mtasa.com/wiki/GuiGetSelectedTab
 **/
declare function guiGetSelectedTab(tabPanel: GuiTabPanel): GuiTab | false | undefined;

/**guiCreateStaticImage
 * This function is used to change the currently selected tab in a tab panel.
 * @param tabPanel The tab panel which current tab you want to change.
 * @param theTab The tab which will be the new active tab.
 * @returns Returns true if the selected tab was changed to a new one successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiSetSelectedTab
 **/
declare function guiSetSelectedTab(tabPanel: GuiTabPanel, theTab: GuiTab): boolean;

/**
 * This function creates a tab on a pre-existing tab panel.
 * A tab is a button as well as a 'dimension' that can be used to switch between information by clicking on the tabs.
 * Tabs are sorted on a tab panel in the order that they are created.
 * @param text The caption for the tab.
 * @param parent The parent tab panel, as a tab panel element type.
 * @returns Returns a tab element if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateTab
 **/
declare function guiCreateTab(text: string, parent: GuiElement): GuiTab | false;

/**
 * This function deletes a tab from a tab panel.
 * @param tabToDelete This is an element representing the tab that you want to delete.
 * @param tabPanel This is the tab panel parent that the tab is attached to.
 * @returns Returns true the tab was successfully deleted, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiDeleteTab
 **/
declare function guiDeleteTab(tabToDelete: GuiTab, tabPanel: GuiTabPanel): boolean;

/**
 * This function is for creating a new GUI label. A label is simply a piece of text that cannot be edited by the user. If you would like to have a bigger text you'd have to change its font because font size is not supported.
 * @param x A number of the 2D x position of the GUI label on a player's screen. This is affected by the relative argument.
 * @param y A number of the 2D y position of the GUI label on a player's screen. This is affected by the relative argument.
 * @param width A number of the width of the GUI label. This is affected by the relative argument.
 * @param height A number of the height of the GUI label. This is affected by the relative argument.
 * @param text A string of the text that will be displayed by the label.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing sizes relative to the parent.
 * @param [parent=undefined] This is the parent that the gui label is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns an element of the created label if it was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateLabel
 **/
declare function guiCreateLabel(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: GuiElement): GuiLabel | false;

/**
 * This function gets the color of a label.
 * @param theLabel The label to get color.
 * @returns Returns three numbers values, representing the amount of red, green, blue if successful. false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiLabelGetColor
 * @tupleReturn
 **/
declare function guiLabelGetColor(theLabel: GuiLabel): [number, number, number] | [false];

/**
 * This function returns the height of the font currently used in a GUI text label.
 * @param theLabel The text label to get the font height from.
 * @returns Returns the absolute height of the font currently used in the text label if the function is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiLabelGetFontHeight
 **/
declare function guiLabelGetFontHeight(theLabel: GuiLabel): number | false;

/**
 * This function returns the extent, or width, of the current text inside a GUI text label.
 * @param theLabel The text label to get the text extent from.
 * @returns Returns the absolute width of the current text inside the text label if the function is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiLabelGetTextExtent
 **/
declare function guiLabelGetTextExtent(theLabel: GuiLabel): number | false;

/**
 * This function allows you to set the color of a GUI label.
 * @param theElement The label to be changed.
 * @param red A number specifying the amount of red (0 to 255).
 * @param green A number specifying the amount of green (0 to 255).
 * @param blue A number specifying the amount of blue (0 to 255).
 * @returns Returns true if the the color of the gui label was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiLabelSetColor
 **/
declare function guiLabelSetColor(theElement: GuiLabel, red: number, green: number, blue: number): boolean;

/**
 * This function sets the horizontal alignment of a text label.
 * @param theLabel The text label to set the horizontal alignment on.
 * @param align The alignment type. Valid type strings are: "left", "center", "right".
 * @param [wordwrap=false] Whether or not to enable wordwrap for the gui-label.
 * @returns Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiLabelSetHorizontalAlign
 **/
declare function guiLabelSetHorizontalAlign(theLabel: GuiLabel, align: "left" | "center" | "right", wordwrap?: boolean): boolean;

/**
 * This function sets the vertical alignment of a text label.
 * @param theLabel The text label to set the vertical alignment on.
 * @param align The alignment type. Valid type strings are: "top", "bottom", "center".
 * @returns Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiLabelSetVerticalAlign
 **/
declare function guiLabelSetVerticalAlign(theLabel: GuiLabel, align: "top" | "bottom" | "center"): boolean;

/**
 * This function is for creating a new GUI window.
 * This provides a base for other gui elements to be created within.
 * However, windows do not have a parent and cannot be created in any GUI elements.
 * @param x A number of the 2D x position of the GUI window on a player's screen. This is affected by the relative argument.
 * @param y A number of the 2D y position of the GUI window on a player's screen. This is affected by the relative argument.
 * @param width A number of the width of the GUI window. This is affected by the relative argument.
 * @param height A number of the height of the GUI window. This is affected by the relative argument.
 * @param titleBarText A string of the text that will be displayed in the title bar of the window.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height numbers must be between 0 and 1, representing sizes/positions as a fraction of the screen size. If false, then the size and co-ordinates are based on client's resolution, accessible using guiGetScreenSize.
 * @returns Returns a gui window element if it was created successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateWindow
 **/
declare function guiCreateWindow(x: number, y: number, width: number, height: number, titleBarText: string, relative: boolean): GuiWindow | false;

/**
 * This function checks if a GUI window is movable.
 * @param guiWindow the window to check the movable flag of.
 * @returns Returns true if the window is movable, false if not, undefined if an invalid window was provided.
 * @see https://wiki.mtasa.com/wiki/GuiWindowIsMovable
 **/
declare function guiWindowIsMovable(guiWindow: GuiWindow): boolean | undefined;

/**
 * This function checks if a GUI window is sizable.
 * @param guiWindow the window to check the sizable flag of.
 * @returns Returns true if the window is sizable, false if not, undefined if an invalid window was provided.
 * @see https://wiki.mtasa.com/wiki/GuiWindowIsSizable
 **/
declare function guiWindowIsSizable(guiWindow: GuiWindow): boolean | undefined;

/**
 * This function allows you to specify whether or not a user can move a GUI window.
 * @param guiWindow The window to be changed.
 * @param status A boolean value indicating whether the window is movable or not.
 * @returns Returns true if the function is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiWindowSetMovable
 **/
declare function guiWindowSetMovable(guiWindow: GuiWindow, status: boolean): boolean;

/**
 * This function enables or disables user resizing of a GUI window.
 * @param guiWindow The window to be changed.
 * @param status A boolean value indicating whether user resizing is to be enabled or disabled.
 * @returns Returns true if the function is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiWindowSetSizable
 **/
declare function guiWindowSetSizable(guiWindow: GuiWindow, status: boolean): boolean;
