declare class Team extends BaseElement {
  readonly name: string;
  readonly players: Player[];
  readonly friendlyFire: boolean;
  readonly playerCount: number;

  /**
   * This function finds a team element using the provided team name.
   * @param teamName A string determining the name of the team you wish to find.
   * @returns Returns the team element if it was found, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetTeamFromName
   **/
  static getFromName(teamName: string): Team | false;

  /**
   * This function finds a team element using the provided team name.
   * @param teamName A string determining the name of the team you wish to find.
   * @returns Returns the team element if it was found, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetTeamFromName
   **/
  static create(teamName: string): Team | false;

  /**
   * This function finds a team element using the provided team name.
   * @param teamName A string determining the name of the team you wish to find.
   * @see https://wiki.mtasa.com/wiki/GetTeamFromName
   **/
  constructor(teamName: string);

  /**
   * This function is for returning the number of players in the specified team.
   * @returns Returns an integer containing the number of players in the team.
   * @see https://wiki.mtasa.com/wiki/CountPlayersInTeam
   **/
  countPlayers(): number;

  /**
   * This function tells you if friendly fire is turned on for the specified team.
   * @returns Returns true if friendly fire is on for the specified team, false if it is turned off.
   * @see https://wiki.mtasa.com/wiki/GetTeamFriendlyFire
   **/
  getFriendlyFire(): boolean;

  /**
   * This function gets the team name of a team element.
   * @returns Returns a string representing the team's name if the team element was valid, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetTeamName
   **/
  getName(): string;

  /**
   * This function retrieves the color of a team.
   * @returns Returns 3 numbers representing the red, green, and blue color components of the team.
   * @see https://wiki.mtasa.com/wiki/GetTeamColor
   * @tupleReturn
   **/
  getColor(): [number, number, number];

  /**
   * This function retrieves all the players of the specified team.
   * @returns Returns an array of all the players in the team, or an empty one if there are none.
   * @see https://wiki.mtasa.com/wiki/GetPlayersInTeam
   **/
  getPlayers(): Player[];
}
