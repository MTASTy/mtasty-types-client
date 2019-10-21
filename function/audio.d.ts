/**
 * This function retrieves the ID of the currently active radio channel.
 * @returns Returns the ID of the radio channel.
 * @see https://wiki.mtasa.com/wiki/GetRadioChannel
 **/
declare function getRadioChannel(): number;

/**
 * This function gets the given radio channel name.
 * @param id The ID of the radio station you want to get the name of. It is a number from 0 to 12.
 * @returns Returns a string containing the station name if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetRadioChannelName
 **/
declare function getRadioChannelName(id: number): string | false;

/**
 * This function checks if a big sound container is available to use or not.
 * - Warning: Many players use versions of GTA:SA (especially pirated versions) that have audio files full of zeros so that they can compress better in their AUDIO\SFX\ folder. (They lack any data). In case of these invalid audio files, this function returns false.
 * @param audioContainer The container name. Possible values are: "feet", "genrl", "pain_a", "script", "spc_ea", "spc_fa", "spc_ga", spc_na", "spc_pa".
 * @returns Returns true if the sound container is available, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetSFXStatus
 **/
declare function getSFXStatus(audioContainer: string): boolean;

/**
 * This function gets the beats per minute of a specific sound element.
 * @param sound a sound element that is created using playSound or playSound3D.
 * @returns Returns the beats per minute of the given sound.
 * @see https://wiki.mtasa.com/wiki/GetSoundBPM
 **/
declare function getSoundBPM(sound: Sound | Sound3D): number | false;

/**
 * This function gets the buffer playback length of the specified sound. Works only with streams.
 * @param sound the sound element which buffer length you want to get.
 * @returns A number value indicating the buffer playback length of the sound in seconds, false if the sound is not a stream or undefined if the sound is invalid.
 * @see https://wiki.mtasa.com/wiki/GetSoundBufferLength
 **/
declare function getSoundBufferLength(sound: Sound | Sound3D): number | false | undefined;

// TODO: Fix types
/**
 * Returns the states of all effects of a sound.
 * @param sound a sound element.
 * @returns Returns a object with the effect names as the keys, and their states as the values if successful. Otherwise, it returns false.
 * @see https://wiki.mtasa.com/wiki/GetSoundEffects
 **/
declare function getSoundEffects(sound: Sound | Sound3D): object | false;

// TODO: Fix types
/**
 * This function gets the fast fourier transform data for an audio stream which is a table of numbers representing the current audio frame. This allows things like visualisations.
 * A fast fourier transform generates a table of all the frequencies of the current audio frame which starts at the bass end of the spectrum to mids to highs in that order.
 * Just type "startmusic mystreamurl" in your console and it will play on the cinema billboard near A51 If the element is a player, this function will use the players voice.
 * @param sound a sound element that is created using playSound or playSound3D. Streams are also supported.
 * @param iSamples allowed samples are 256, 512, 1024, 2048, 4096, 8192 and 16384.
 * @param [iBands=0] post processing option allows you to split the samples into the desired amount of bands or bars so if you only need 5 bars this saves a lot of cpu power.
 * @returns Returns a object of iSamples/2 (or iBands if iBands is used) numbers representing the current audio frame. Returns false if the sound is not playing yet or hasn't buffered in the case of streams.
 * @see https://wiki.mtasa.com/wiki/GetSoundFFTData
 **/
declare function getSoundFFTData(sound: Sound | Sound3D, iSamples: number, iBands?: number): object | false;

/**
 * This function is used to return the playback length of the specified sound element.
 * If the element is a player, this function will use the players voice.
 * @param sound the sound element which length you want to return.
 * @returns Returns a number value indicating the playback length of the sound element in seconds.
 * @see https://wiki.mtasa.com/wiki/GetSoundLength
 **/
declare function getSoundLength(sound: Sound | Sound3D): number | false;

/**
 * This function gets the left/right level from a sound element.
 * If the element is a player, this function will use the players voice.
 * @param sound the sound element which level data you want to return.
 * @returns Returns a two numbers in range from 0 to 32767.
 * @see https://wiki.mtasa.com/wiki/GetSoundLevelData
 * @tupleReturn
 **/
declare function getSoundLevelData(sound: Sound | Sound3D): [number, number] | [false];

/**
 * Gets a custom sound max distance at which the sound stops.
 * @param sound a sound element.
 * @returns Returns a number of the max distance, false if invalid arguments where passed.
 * @see https://wiki.mtasa.com/wiki/GetSoundMaxDistance
 **/
declare function getSoundMaxDistance(sound: Sound | Sound3D): number | false;

// TODO: Fix types
/**
 * Used to get the meta tags attached to a sound.
 * These provide information about the sound, for instance the title or the artist.
 * @param sound a sound element.
 * @param [format=""] a filter string to get a specific meta tag.
 * @returns Returns a object, but only a string if format is given, with all data available (keys are listed below) for the sound if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetSoundMetaTags
 **/
declare function getSoundMetaTags(sound: Sound | Sound3D, format?: string): object | false;

/**
 * Gets a custom sound Minimum distance at which the sound stops getting louder.
 * @param sound a sound element.
 * @returns Returns a number of the minimum distance, false if invalid arguements where passed.
 * @see https://wiki.mtasa.com/wiki/GetSoundMinDistance
 **/
declare function getSoundMinDistance(sound: Sound | Sound3D): number | false;

/**
 * This function is used to get the pan level of the specified sound element.
 * @param sound the sound element which pan you want to get.
 * @returns Returns number value with range from -1.0 (left) to 1.0 (right), false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetSoundPan
 **/
declare function getSoundPan(sound: Sound | Sound3D): number | false;

/**
 * This function is used to return the current seek position of the specified sound element.
 * If the element is a player, this function will use the players voice.
 * @param sound The sound element which seek position you want to return.
 * @returns Returns a number value indicating the seek position of the sound element in seconds.
 * @see https://wiki.mtasa.com/wiki/GetSoundPosition
 **/
declare function getSoundPosition(sound: Sound | Sound3D): number | false;

/**
 * This function gets the properties of a specific sound.
 * @param sound a sound element that is created using playSound or playSound3D.
 * @returns This function returns 3 numbers and a boolean value: The first number is the sound's sample rate, the second one the sound's tempo, and the third one the pitch of the sound. The boolean representing whether the sound is reversed or not.
 * @see https://wiki.mtasa.com/wiki/GetSoundProperties
 * @tupleReturn
 **/
declare function getSoundProperties(sound: Sound | Sound3D): [number, number, number, boolean] | [false];

/**
 * This function is used to return the playback speed of the specified sound element.
 * @param sound the sound element which playback speed you want to return.
 * @returns Returns a number value indicating the playback speed of the sound element. Default sound playback speed is 1.0.
 * @see https://wiki.mtasa.com/wiki/GetSoundSpeed
 **/
declare function getSoundSpeed(sound: Sound | Sound3D): number | false;

/**
 * This function is used to return the volume level of the specified sound element.
 * If the element is a player, this function will use the players voice.
 * @param sound the sound element which volume you want to return.
 * @returns Returns a number representing the volume level of the sound element, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetSoundVolume
 **/
declare function getSoundVolume(sound: Sound | Sound3D): number | false;

/**
 * This function gets the wave form data for an audio stream which is a table of numbers representing the current audio frame as a wave.
 * This allows things like visualisations.
 * If the element is a player, this function will use the players voice.
 * @param sound a sound element that is created using playSound or playSound3D. Streams are also supported.
 * @param iSamples allowed samples are 256, 512, 1024, 2048, 4096, 8192 and 16384.
 * @returns Returns a object of iSamples numbers representing the current audio frame waveform. Returns false if the sound is not playing yet or hasn't buffered in the case of streams.
 * @see https://wiki.mtasa.com/wiki/GetSoundWaveData
 **/
declare function getSoundWaveData(sound: Sound | Sound3D, iSamples: number): object | false;

/**
 * This function checks whether panning is enabled in a sound element or not.
 * - Tip: Although this function works in no-3D sounds (those created by playSound), it only makes sense to use it with 3D sounds (created by playSound3D). Please refer to setSoundPanningEnabled for a explanation of what this property does.
 * @param sound A valid sound element.
 * @returns Returns true if the sound is valid and it has panning enabled, false if it does not or is not valid.
 * @see https://wiki.mtasa.com/wiki/IsSoundPanningEnabled
 **/
declare function isSoundPanningEnabled(sound: Sound | Sound3D): boolean;

/**
 * This function is used to return the current pause state of the specified sound element.
 * If the element is a player, this function will use the players voice.
 * @param sound the sound element which pause state you want to return.
 * @returns Returns true if the sound element is paused, false if unpaused or invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/IsSoundPaused
 **/
declare function isSoundPaused(sound: Sound | Sound3D): boolean;

/**
 * This function plays a sound from GTA's big sound containers.
 * - Note: There is a tool available which allows you to find bank and sound IDs easily.
 * - Warning: Many players use versions of GTA:SA (especially pirated versions) that have audio files full of zeros so that they can compresses better in their AUDIO\SFX\ folder (They lack any data).
 * - In case of these invalid audio files, this function returns false.
 * - It also returns false when trying to play a track deleted in the recent GTA: SA Steam patches (and if the client is using a Steam GTA: SA copy).
 * @param containerName The name of the audio container.
 * @param bankId The audio bank id
 * @param soundId The sound id within the audio bank
 * @param [looped=false] A boolean representing whether the sound will be looped.
 * @returns Returns a sound element if the sound was successfully created, false otherwise. Returns a sound element if the sound was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/PlaySFX
 **/
declare function playSFX(containerName: string, bankId: number, soundId: number, looped?: boolean): Sound | false;

/**
 * This function plays a sound from GTA's big sound containers.
 * - Note: There is a tool available which allows you to find bank and sound IDs easily.
 * - Warning: Many players use versions of GTA:SA (especially pirated versions) that have audio files full of zeros so that they can compresses better in their AUDIO\SFX\ folder (They lack any data).
 * - In case of these invalid audio files, this function returns false.
 * - It also returns false when trying to play a track deleted in the recent GTA: SA Steam patches (and if the client is using a Steam GTA: SA copy).
 * @param containerName The name of the audio container.
 * @param bankId The audio bank id.
 * @param soundId The sound id within the audio bank.
 * @param x A number representing the X coordinate on the map.
 * @param y A number representing the Y coordinate on the map.
 * @param z A number representing the Z coordinate on the map.
 * @param [looped=false] A boolean representing whether the sound will be looped.
 * @returns Returns a sound element if the sound was successfully created, false otherwise. Returns a sound element if the sound was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/PlaySFX3D
 **/
declare function playSFX3D(containerName: string, bankId: number, soundId: number, x: number, y: number, z: number, looped?: boolean): Sound3D | false;

/**
 * Creates a sound element and plays it immediately after creation for the local player.
 * - Note: The only supported audio formats are MP3, WAV, OGG, RIFF, MOD, XM, IT, S3M and PLS (e.g. Webstream). For performance reasons, when using playSound for effects that will be played lots (i.e. weapon fire), it is recommend that you convert your audio file to a one channel (mono) WAV with sample rate of 22050 Hz or less. Also consider adding a limit on how often the effect can be played e.g. once every 50ms.
 * @param soundPath the filepath or URL of the sound file you want to play.(Note: Playing sound files from other resources requires the target resource to be in the running state).
 * @param [looped=false] a boolean representing whether the sound will be looped.To loop the sound, use true.Loop is not available for streaming sounds, only for sound files.
 * @param [throttled=true] a boolean representing whether the sound will be throttled (i.e. given reduced download bandwidth).To throttle the sound, use true.Sounds will be throttled per default and only for URLs.
 * @returns Returns a sound element if the sound was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/PlaySound
 **/
declare function playSound(soundPath: string, looped?: boolean, throttled?: boolean): Sound | false;

/**
 * Creates a sound element in the GTA world and plays it immediately after creation for the local player.
 * setElementPosition can be used to move the sound element around after it has been created.
 * Remember to use setElementDimension after creating the sound to play it outside of dimension 0.
 * - Note: The only supported audio formats are MP3, WAV, OGG, RIFF, MOD, XM, IT and S3M. For performance reasons, when using playSound3D for effects that will be played lots (i.e. weapon fire), it is recommend that you convert your audio file to a one channel (mono) WAV with sample rate of 22050 Hz or less. Also consider adding a limit on how often the effect can be played e.g. once every 50ms.
 * @param soundURL the URL.
 * @param x a number representing the X coordinate on the map.
 * @param y a number representing the Y coordinate on the map.
 * @param z a number representing the Z coordinate on the map.
 * @param [looped=false] a boolean representing whether the sound will be looped.To loop the sound, use true.
 * @param [throttled=true] a boolean representing whether the sound will be throttled (i.e. given reduced download bandwidth). To throttle the sound, use true.
 * @returns Returns a sound element if the sound was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/PlaySound3D
 **/
declare function playSound3D(soundURL: string, x: number, y: number, z: number, looped?: boolean, throttled?: boolean): Sound3D | false;

/**
 * Creates a sound element in the GTA world and plays it immediately after creation for the local player.
 * setElementPosition can be used to move the sound element around after it has been created.
 * Remember to use setElementDimension after creating the sound to play it outside of dimension 0.
 * - Note: The only supported audio formats are MP3, WAV, OGG, RIFF, MOD, XM, IT and S3M. For performance reasons, when using playSound3D for effects that will be played lots (i.e. weapon fire), it is recommend that you convert your audio file to a one channel (mono) WAV with sample rate of 22050 Hz or less. Also consider adding a limit on how often the effect can be played e.g. once every 50ms.
 * @param soundPath the filepath to the sound file you want to play.
 * @param x a number representing the X coordinate on the map.
 * @param y a number representing the Y coordinate on the map.
 * @param z a number representing the Z coordinate on the map.
 * @param [looped=false] a boolean representing whether the sound will be looped.To loop the sound, use true.
 * @returns Returns a sound element if the sound was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/PlaySound3D
 **/
declare function playSound3D(soundPath: string, x: number, y: number, z: number, looped?: boolean): Sound3D | false;

/**
 * This function plays a frontend sound for the specified player.
 * - Note: These sounds can be disabled with setWorldSoundEnabled so if these sounds stop working you should check if you're disabling the sounds.
 * @param sound a whole number specifying the sound id to play.
 * @returns Returns true if the sound was successfully played, false otherwise.
 * @see https://wiki.mtasa.com/wiki/PlaySoundFrontEnd
 **/
declare function playSoundFrontEnd(sound: number): boolean;

/**
 * This function sets the heard radio channel, even while not in a vehicle.
 * - Note: This function sometimes doesn't work when setting the radio channel to another different from the current one due to unknown reasons. If you experience this issue, simply add setRadioChannel(0) at the beginning of the script, outside any function.
 * @param id The ID of the radio station you want to play.
 * @returns Returns true if channel was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetRadioChannel
 **/
declare function setRadioChannel(id: number): boolean;
/**
 * Used to enable or disable specific sound effects.
 * Use a player element to control a players voice with this function.
 * @param sound a sound element.
 * @param effectName the effect you want to enable or disable.
 * @param bEnable true if you want to enable the effect, false if you want to disable it.
 * @returns Returns true if the effect was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetSoundEffectEnabled
 **/
declare function setSoundEffectEnabled(sound: Sound | Sound3D, effectName: string, bEnable: boolean): boolean;

/**
 * Sets a custom sound max distance at which the sound stops.
 * @param sound a sound element.
 * @param distance the default value for this is 20.
 * @returns Returns a true if the max distance was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetSoundMaxDistance
 **/
declare function setSoundMaxDistance(sound: Sound3D, distance: number): boolean;

/**
 * Sets a custom sound Minimum distance at which the sound stops getting louder.
 * @param sound a sound element.
 * @param distance an integer representing the distance the sound stops getting louder. the default value for this is 5.
 * @returns Returns a true if the minimum distance was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetSoundMinDistance
 **/
declare function setSoundMinDistance(sound: Sound3D, distance: number): boolean;

/**
 * This function is used to change the pan level of the specified sound element.
 * @param sound The sound element which pan you want to modify.
 * @param pan A number representing the desired pan level. Range is from -1.0 (left) to 1.0 (right).
 * @returns Returns true if the sound element pan was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetSoundPan
 **/
declare function setSoundPan(sound: Sound | Sound3D, pan: number): boolean;

/**
 * This function toggles the panning of a sound (hearing it closer to the left or right side of the speakers due to the camera position). By default a sound has its panning enabled.
 * @param sound a sound element to change the panning of.
 * @param enable true to enable the panning, false otherwise.
 * @returns Returns true if the sound is valid and good arguments were passed, false if not. If the sound is not 3D, this function will return true as well, but isSoundPanningEnabled will always return true after this (so it has no effect).
 * @see https://wiki.mtasa.com/wiki/SetSoundPanningEnabled
 **/
declare function setSoundPanningEnabled(sound: Sound | Sound3D, enable: boolean): boolean;

/**
 * This function is used to either pause or unpause the playback of the specified sound element. Use a player element to control a players voice with this function.
 * @param sound the sound element which you want to pause/unpause.
 * @param paused a boolean value representing whether the sound should be paused or not. To pause the sound, use true.
 * @returns Returns true if the sound element was successfully paused, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetSoundPaused
 **/
declare function setSoundPaused(sound: Sound | Sound3D, paused: boolean): boolean;

/**
 * This function is used to change the seek position of the specified sound element.
 * Use a player element to control a players voice with this function.
 * @param sound the sound element which seek position you want to modify.
 * @param pos a number value representing the new seek position of the sound element in seconds.
 * @returns Returns true if the sound element's seek position was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetSoundPosition
 **/
declare function setSoundPosition(sound: Sound | Sound3D, pos: number): boolean;

/**
 * This function edits the properties of a specific sound.
 * - Note: Streams are not supported.
 * @param sound a sound element that is created using playSound or playSound3D.
 * @param fSampleRate a number that defines the new sound's sample rate.
 * @param fTempo a number that defines the new sound tempo.
 * @param fPitch a number that defines the new sound pitch.
 * @param [bReverse=false] a boolean representing whether the sound will be reversed or not.
 * @returns Returns true if the properties sucessfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetSoundProperties
 **/
declare function setSoundProperties(sound: Sound | Sound3D, fSampleRate: number, fTempo: number, fPitch: number, bReverse?: boolean): boolean;

/**
 * This function can be used to change the playback speed of the specified sound element.
 * @param sound the sound element which volume you want to modify.
 * @param speed a number representing the desired sound playback speed.
 * @returns Returns true if the sound element playback speed was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetSoundSpeed
 **/
declare function setSoundSpeed(sound: Sound | Sound3D, speed: number): boolean;

/**
 * This function is used to change the volume level of the specified sound element.
 * Use a player element to control a players voice with this function.
 * @param sound The sound element which volume you want to modify
 * @param volume A number representing the desired volume level. Range is from 0.0 to 1.0. This can go above 1.0 for amplification.
 * @returns Returns true if the sound element volume was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetSoundVolume
 **/
declare function setSoundVolume(sound: Sound | Sound3D, volume: number): boolean;

/**
 * This function is used to change the volume level of the specified sound element.
 * Use a player element to control a players voice with this function.
 * @param thePlayer The player element which voice volume you want to modify.
 * @param volume A number representing the desired volume level. Range is from 0.0 to 1.0. This can go above 1.0 for amplification.
 * @returns Returns true if the sound element volume was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetSoundVolume
 **/
declare function setSoundVolume(thePlayer: Player, volume: number): boolean;

/**
 * Stops the sound playback for specified sound element. The sound element is also destroyed.
 * @param sound the sound element you want to stop playing.
 * @returns Returns true if the sound was successfully stopped, false otherwise.
 * @see https://wiki.mtasa.com/wiki/StopSound
 **/
declare function stopSound(sound: Sound | Sound3D): boolean;
