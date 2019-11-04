/** @customConstructor Sound */
declare class Sound extends BaseElement {
  playbackPosition: number | false;
  speed: number | false;
  volume: number | false;
  paused: boolean;
  pan: number | false;
  panningEnabled: boolean;
  readonly length: number | false;
  readonly bufferLength: number | false;

  /**
   * This function plays a frontend sound for the specified player.
   * - Note: These sounds can be disabled with setWorldSoundEnabled so if these sounds stop working you should check if you're disabling the sounds.
   * @param sound a whole number specifying the sound id to play.
   * @returns Returns true if the sound was successfully played, false otherwise.
   * @see https://wiki.mtasa.com/wiki/PlaySoundFrontEnd
   **/
  static playFrontEnd(sound: number): boolean;

  /**
   * Creates a sound element and plays it immediately after creation for the local player.
   * - Note: The only supported audio formats are MP3, WAV, OGG, RIFF, MOD, XM, IT, S3M and PLS (e.g. Webstream). For performance reasons, when using playSound for effects that will be played lots (i.e. weapon fire), it is recommend that you convert your audio file to a one channel (mono) WAV with sample rate of 22050 Hz or less. Also consider adding a limit on how often the effect can be played e.g. once every 50ms.
   * @param soundPath the filepath or URL of the sound file you want to play.(Note: Playing sound files from other resources requires the target resource to be in the running state).
   * @param [looped=false] a boolean representing whether the sound will be looped.To loop the sound, use true.Loop is not available for streaming sounds, only for sound files.
   * @param [throttled=true] a boolean representing whether the sound will be throttled (i.e. given reduced download bandwidth).To throttle the sound, use true.Sounds will be throttled per default and only for URLs.
   * @see https://wiki.mtasa.com/wiki/PlaySound
   **/
  constructor(soundPath: string, looped?: boolean, throttled?: boolean);

  /**
   * Stops the sound playback for specified sound element. The sound element is also destroyed.
   * @returns Returns true if the sound was successfully stopped, false otherwise.
   * @see https://wiki.mtasa.com/wiki/StopSound
   **/
  stop(): boolean;

  /**
   * This function is used to return the current pause state of the specified sound element.
   * If the element is a player, this function will use the players voice.
   * @returns Returns true if the sound element is paused, false if unpaused.
   * @see https://wiki.mtasa.com/wiki/IsSoundPaused
   **/
  isPaused(): boolean;

  /**
   * Used to enable or disable specific sound effects.
   * Use a player element to control a players voice with this function.
   * @param effectName the effect you want to enable or disable.
   * @param bEnable true if you want to enable the effect, false if you want to disable it.
   * @returns Returns true if the effect was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetSoundEffectEnabled
   **/
  setEffectEnabled(effectName: string, bEnable: boolean): boolean;

  /**
   * This function is used to change the seek position of the specified sound element.
   * Use a player element to control a players voice with this function.
   * @param pos a number value representing the new seek position of the sound element in seconds.
   * @returns Returns true if the sound element's seek position was successfully changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetSoundPosition
   **/
  setPlaybackPosition(pos: number): boolean;

  /**
   * This function can be used to change the playback speed of the specified sound element.
   * @param speed a number representing the desired sound playback speed.
   * @returns Returns true if the sound element playback speed was successfully changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetSoundSpeed
   **/
  setSpeed(speed: number): boolean;

  /**
   * This function is used to change the volume level of the specified sound element.
   * Use a player element to control a players voice with this function.
   * @param volume A number representing the desired volume level. Range is from 0.0 to 1.0. This can go above 1.0 for amplification.
   * @returns Returns true if the sound element volume was successfully changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetSoundVolume
   **/
  setVolume(volume: number): boolean;

  /**
   * This function is used to either pause or unpause the playback of the specified sound element. Use a player element to control a players voice with this function.
   * @param paused a boolean value representing whether the sound should be paused or not. To pause the sound, use true.
   * @returns Returns true if the sound element was successfully paused, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetSoundPaused
   **/
  setPaused(paused: boolean): boolean;

  /**
   * This function is used to change the pan level of the specified sound element.
   * @param pan A number representing the desired pan level. Range is from -1.0 (left) to 1.0 (right).
   * @returns Returns true if the sound element pan was successfully changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetSoundPan
   **/
  setPan(pan: number): boolean;

  /**
   * This function toggles the panning of a sound (hearing it closer to the left or right side of the speakers due to the camera position). By default a sound has its panning enabled.
   * @param enable true to enable the panning, false otherwise.
   * @returns Returns true if the sound is valid and good arguments were passed, false if not. If the sound is not 3D, this function will return true as well, but isSoundPanningEnabled will always return true after this (so it has no effect).
   * @see https://wiki.mtasa.com/wiki/SetSoundPanningEnabled
   **/
  setPannningEnabled(enable: boolean): boolean;

  /**
   * This function edits the properties of a specific sound.
   * - Note: Streams are not supported.
   * @param fSampleRate a number that defines the new sound's sample rate.
   * @param fTempo a number that defines the new sound tempo.
   * @param fPitch a number that defines the new sound pitch.
   * @param [bReverse=false] a boolean representing whether the sound will be reversed or not.
   * @returns Returns true if the properties sucessfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetSoundProperties
   **/
  setProperties(fSampleRate: number, fTempo: number, fPitch: number, bReverse?: boolean): boolean;

  /**
   * This function is used to return the playback length of the specified sound element.
   * If the element is a player, this function will use the players voice.
   * @returns Returns a number value indicating the playback length of the sound element in seconds.
   * @see https://wiki.mtasa.com/wiki/GetSoundLength
   **/
  getLength(): number | false;

  /**
   * This function gets the buffer playback length of the specified sound. Works only with streams.
   * @returns A number value indicating the buffer playback length of the sound in seconds, false if the sound is not a stream.
   * @see https://wiki.mtasa.com/wiki/GetSoundBufferLength
   **/
  getBufferLength(): number | false;

  /**
   * Used to get the meta tags attached to a sound.
   * These provide information about the sound, for instance the title or the artist.
   * @param [format=""] a filter string to get a specific meta tag.
   * @returns Returns an object, but only a string if format is given, with all data available (keys are listed below) for the sound if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetSoundMetaTags
   **/
  getMetaTags(format?: string): SoundMetaTags | false;

  /**
   * This function gets the beats per minute of a specific sound element.
   * @returns Returns the beats per minute of the given sound.
   * @see https://wiki.mtasa.com/wiki/GetSoundBPM
   **/
  getBPM(): number | false;

  /**
   * This function gets the fast fourier transform data for an audio stream which is an array of numbers representing the current audio frame. This allows things like visualisations.
   * A fast fourier transform generates an array of all the frequencies of the current audio frame which starts at the bass end of the spectrum to mids to highs in that order.
   * Just type "startmusic mystreamurl" in your console and it will play on the cinema billboard near A51 If the element is a player, this function will use the players voice.
   * @param iSamples allowed samples are 256, 512, 1024, 2048, 4096, 8192 and 16384.
   * @param [iBands=0] post processing option allows you to split the samples into the desired amount of bands or bars so if you only need 5 bars this saves a lot of cpu power.
   * @returns Returns an array of iSamples/2 (or iBands if iBands is used) numbers representing the current audio frame. Returns false if the sound is not playing yet or hasn't buffered in the case of streams.
   * @see https://wiki.mtasa.com/wiki/GetSoundFFTData
   **/
  getFFTData(iSamples: number, iBands?: number): number[] | false;

  /**
   * This function gets the wave form data for an audio stream which is an array of numbers representing the current audio frame as a wave.
   * This allows things like visualisations.
   * If the element is a player, this function will use the players voice.
   * @param iSamples allowed samples are 256, 512, 1024, 2048, 4096, 8192 and 16384.
   * @returns Returns an array of iSamples numbers representing the current audio frame waveform. Returns false if the sound is not playing yet or hasn't buffered in the case of streams.
   * @see https://wiki.mtasa.com/wiki/GetSoundWaveData
   **/
  getWaveData(iSamples: number): number[] | false;

  /**
   * This function gets the left/right level from a sound element.
   * If the element is a player, this function will use the players voice.
   * @returns Returns a two numbers in range from 0 to 32767.
   * @see https://wiki.mtasa.com/wiki/GetSoundLevelData
   * @tupleReturn
   **/
  getLevelData(): [number, number] | [false];

  /**
   * Returns the states of all effects of a sound.
   * @returns Returns an object with the effect names as the keys, and their states as the values if successful. Otherwise, it returns false.
   * @see https://wiki.mtasa.com/wiki/GetSoundEffects
   **/
  getEffects(): SoundEffectName | false;

  /**
   * This function is used to return the current seek position of the specified sound element.
   * If the element is a player, this function will use the players voice.
   * @returns Returns a number value indicating the seek position of the sound element in seconds.
   * @see https://wiki.mtasa.com/wiki/GetSoundPosition
   **/
  getPlaybackPosition(): number | false;

  /**
   * This function is used to return the playback speed of the specified sound element.
   * @returns Returns a number value indicating the playback speed of the sound element. Default sound playback speed is 1.0.
   * @see https://wiki.mtasa.com/wiki/GetSoundSpeed
   **/
  getSpeed(): number | false;

  /**
   * This function is used to return the volume level of the specified sound element.
   * If the element is a player, this function will use the players voice.
   * @returns Returns a number representing the volume level of the sound element, false if invalid arguments were passed.
   * @see https://wiki.mtasa.com/wiki/GetSoundVolume
   **/
  getVolume(): number | false;

  /**
   * This function is used to get the pan level of the specified sound element.
   * @returns Returns number value with range from -1.0 (left) to 1.0 (right), false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetSoundPan
   **/
  getPan(): number | false;

  /**
   * This function checks whether panning is enabled in a sound element or not.
   * - Tip: Although this function works in no-3D sounds (those created by playSound), it only makes sense to use it with 3D sounds (created by playSound3D). Please refer to setSoundPanningEnabled for a explanation of what this property does.
   * @returns Returns true if the sound is valid and it has panning enabled, false if it does not or is not valid.
   * @see https://wiki.mtasa.com/wiki/IsSoundPanningEnabled
   **/
  isPanningEnabled(): boolean;

  /**
   * This function gets the properties of a specific sound.
   * @returns This function returns 3 numbers and a boolean value: The first number is the sound's sample rate, the second one the sound's tempo, and the third one the pitch of the sound. The boolean representing whether the sound is reversed or not.
   * @see https://wiki.mtasa.com/wiki/GetSoundProperties
   * @tupleReturn
   **/
  getProperties(): [number, number, number, boolean] | [false];
}
