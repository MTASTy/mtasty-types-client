declare class Player extends Ped {
  nametagShowing: boolean;
  nametagText: string;
  readonly team: Team | false;
  readonly name: string;
  readonly ping: number;

  /**
   * This function adds money to a player's current money amount.
   * To set absolute values, setPlayerMoney can be used.
   * @param amount a positive integer number specifying the amount of money to give to the player.
   * @returns Returns true if the money was added, or false if invalid parameters were passed.
   * @see https://wiki.mtasa.com/wiki/GivePlayerMoney
   **/
  static giveMoney(amount: number): boolean;

  /**
   * This function subtracts money from a player's current money amount.
   * @param amount an integer number specifying the amount of money to take from the player.
   * @returns Returns true if the money was taken, or false if invalid parameters were passed.
   * @see https://wiki.mtasa.com/wiki/TakePlayerMoney
   **/
  static takeMoney(amount: number): boolean;

  /**
   * Sets a player's money to a certain value, regardless of current player money.
   * It should be noted that setting negative values does not work and in fact gives the player large amounts of money.
   * @param amount A whole integer specifying the new amount of money the player will have.
   * @param [instant=false] If set to true money will be set instantly without counting up/down like in singleplayer.
   * @returns Returns true if the money was added, or false if invalid parameters were passed.
   * @see https://wiki.mtasa.com/wiki/SetPlayerMoney
   **/
  static setMoney(amount: number, instant?: boolean): boolean;

  /**
   * Returns the amount of money a player currently has.
   * @returns Returns an integer with the amount of money the local player has.
   * @see https://wiki.mtasa.com/wiki/GetPlayerMoney
   **/
  static getMoney(): number;

  /**
   * This function gets a player's current wanted level.
   * The wanted level is indicated by the amount of stars a player has on the GTA HUD.
   * @returns Returns an int from 0 to 6 representing the player's wanted level.
   * @see https://wiki.mtasa.com/wiki/GetPlayerWantedLevel
   **/
  static getWantedLevel(): number;

  /**
   * This function gets the GUI bounding box of the radar map texture.
   * @returns If the player's map is showing, it returns four integers: minX, minY, maxX, maxY. These are absolute position coordinates of where the player's map is drawn on the screen. If the map is not showing, a false boolean value is returned.
   * @see https://wiki.mtasa.com/wiki/GetPlayerMapBoundingBox
   * @tupleReturn
   **/
  static getMapBoundingBox(): [number, number, number, number] | [false];

  /**
   * This function is used to forcefully show a player's radar map.
   * @param forceOn A boolean value representing whether or not the players radar map will be forced on.
   * @returns Returns true if the player's radar map was forced on, false otherwise.
   * @see https://wiki.mtasa.com/wiki/ForcePlayerMap
   **/
  static forceMap(forceOn: boolean): boolean;

  /**
   * This function checks if the specified player's radar map has been forced on or not.
   * @returns Returns true if the local player's radar map is forced on, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPlayerMapForced
   **/
  static isMapForced(): boolean;

  /**
   * This function checks if the local player has their map showing.
   * @returns Returns true if the player has the map visible, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPlayerMapVisible
   **/
  static isMapVisible(): boolean;

  /**
   * This function can be used to check whether an hud component is visable or not.
   * @param component The component you wish to check.
   * @returns Returns true if the component is visable, false if not.
   * @see https://wiki.mtasa.com/wiki/IsPlayerHudComponentVisible
   **/
  static isHudComponentVisible(component: string): boolean;

  /**
   * Enables or disables the use of a GTA control for a specific player.
   * @param control The control that you want to toggle the ability of.
   * @param enabled A boolean value representing whether or not the key will be usable or not.
   * @returns This function true if the control was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/ToggleControl
   **/
  static toggleControl(control: string, enabled: boolean): boolean;

  /**
   * This function returns a player element for the player with the name passed to the function.
   * @param playerName A string containing the name of the player you want to reference
   * @returns Returns a player element for the player with the nickname provided. If there is no player with that name, false is returned.
   * @see https://wiki.mtasa.com/wiki/GetPlayerFromName
   **/
  create(playerName: string): Player | false;

  /**
   * This will change the text of a player's nickname in the world to something besides the nickname he chose.
   * This will not change the player's actual nickname, it only changes the visible aspect inside the world (you will see his original nickname in the scoreboard and will refer to his original name in scripts).
   * @param text The new nickname text that will be displayed.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPlayerNametagText
   **/
  setNametagText(text: string): boolean;

  /**
   * Use this to define whether the player's name tag is visible or invisible.
   * This function allows you to set whether a player's nametag visibility both clientside and serverside.
   * @param showing Use true or false to show/hide the tag.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPlayerNametagShowing
   **/
  setNametagShowing(showing: boolean): boolean;

  /**
   * This allows you to change the RGB color mixture in the name tags of players.
   * - Note: If the player is using a hexcode in front of their name, it will override this function. You must first strip the name of the hexcode using removeHex.
   * @param r The amount of red you want in the mixture of RGB (0-255 is valid).
   * @param g The amount of green you want in the mixture of RGB (0-255 is valid).
   * @param b The amount of blue you want in the mixture of RGB (0-255 is valid).
   * @returns Returns true if the function was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPlayerNametagColor
   **/
  setNametagColor(r: number, g: number, b: number): boolean;

  /**
   * This allows you to change the RGB color mixture in the name tags of players.
   * - Note: If the player is using a hexcode in front of their name, it will override this function. You must first strip the name of the hexcode using removeHex.
   * @param state Use false for reset name tag color.
   * @returns Returns true if the function was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPlayerNametagColor
   **/
  setNametagColor(state: false): boolean;

  /**
   * This function returns the ping of a specified player.
   * The ping is the number of milliseconds that data takes to travel from the player's client to the server or vice versa.
   * @returns Returns the ping as a number.
   * @see https://wiki.mtasa.com/wiki/GetPlayerPing
   **/
  getPing(): number;

  /**
   * This function returns a string containing the name of the specified player.
   * @returns Returns a string containing the requested player's name.
   * @see https://wiki.mtasa.com/wiki/GetPlayerName
   **/
  getName(): string;

  /**
   * This function gets the current team a player is on.
   * @returns Returns a team element representing the team the player is on, false if the player is not part of a team.
   * @see https://wiki.mtasa.com/wiki/GetPlayerTeam
   **/
  getTeam(): Team | false;

  /**
   * This function gets the current color of a player's name tag as RGB values.
   * These are in the range 0-255.
   * @returns Returns red, green and blue values if an existent player was specified, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetPlayerNametagColor
   * @tupleReturn
   **/
  getNametagColor(): [number, number, number] | false;

  /**
   * This will allow you to retrieve the name tag a player is currently using.
   * @returns Returns a string with the nametag text.
   * @see https://wiki.mtasa.com/wiki/GetPlayerNametagText
   **/
  getNametagText(): string;

  /**
   * This function will allow you to determine if a player's name tag is currently showing.
   * @returns Returns true if the player's name tag is being shown, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPlayerNametagShowing
   **/
  isNametagShowing(): boolean;
}
