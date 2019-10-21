/**
 * This function is for returning the number of players in the specified team.
 * @param theTeam The team you wish to retrieve the player count of.
 * @returns Returns an integer containing the number of players in the team, false if it could not be retrieved.
 * @see https://wiki.mtasa.com/wiki/CountPlayersInTeam
 **/
declare function countPlayersInTeam(theTeam: Team): number | false;

/**
 * This function gets the current team a player is on.
 * @param thePlayer The player whose team you want to find out.
 * @returns Returns a team element representing the team the player is on, false if the player is not part of a team.
 * @see https://wiki.mtasa.com/wiki/GetPlayerTeam
 **/
declare function getPlayerTeam(thePlayer: Player): Team | false;

/**
 * This function retrieves all the players of the specified team.
 * @param theTeam The team you wish to retrieve all the players from.
 * @returns Returns a object of all the players in the team, or an empty one if there are none else false if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/GetPlayersInTeam
 **/
declare function getPlayersInTeam(theTeam: Team): Player[] | false;

/**
 * This function retrieves the color of a team.
 * @param theTeam The team you want to get the color of.
 * @returns Returns 3 numbers representing the red, green, and blue color components of the team if it's valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetTeamColor
 * @tupleReturn
 **/
declare function getTeamColor(theTeam: Team): [number, number, number] | [false];

/**
 * This function tells you if friendly fire is turned on for the specified team.
 * @param theTeam The team object that will be checked.
 * @returns Returns true if friendly fire is on for the specified team, false if it is turned off or if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/GetTeamFriendlyFire
 **/
declare function getTeamFriendlyFire(theTeam: Team): boolean;

/**
 * This function finds a team element using the provided team name.
 * @param teamName A string determining the name of the team you wish to find.
 * @returns Returns the team element if it was found, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetTeamFromName
 **/
declare function getTeamFromName(teamName: string): Team | false;

/**
 * This function gets the team name of a team object.
 * @param theTeam The team you want to retrieve the name of.
 * @returns Returns a string representing the team's name if the team element was valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetTeamName
 **/
declare function getTeamName(theTeam: Team): string | false;
  